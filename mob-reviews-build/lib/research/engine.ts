import { ResearchJobStatus } from "@prisma/client";

import { prisma } from "@/lib/db/prisma";
import { getFixtureByType } from "@/lib/research/fixtures";
import { flags } from "@/lib/utils/env";
import { logger } from "@/lib/utils/logger";

async function runOpenAIResearch(contact: { type: string; name: string; website: string | null; city: string }) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is required");
  }

  const prompt = `Return strict JSON only. Research this lead and match expected shape. Name: ${contact.name}, Type: ${contact.type}, Website: ${contact.website ?? "unknown"}, City: ${contact.city}.`;

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      input: prompt,
      temperature: 0.2,
      max_output_tokens: 800
    })
  });

  if (!response.ok) {
    throw new Error(`OpenAI error ${response.status}`);
  }

  const payload = await response.json();
  const text = payload.output_text as string;

  try {
    return JSON.parse(text);
  } catch {
    throw new Error("Failed to parse JSON research output");
  }
}

export async function queueResearch(contactId: string) {
  const existing = await prisma.researchJob.findFirst({
    where: {
      contactId,
      status: {
        in: [ResearchJobStatus.QUEUED, ResearchJobStatus.PROCESSING]
      }
    }
  });

  if (existing) {
    return existing;
  }

  return prisma.researchJob.create({
    data: {
      contactId,
      status: ResearchJobStatus.QUEUED
    }
  });
}

export async function processQueuedResearchJobs(limit = 10) {
  const jobs = await prisma.researchJob.findMany({
    where: { status: ResearchJobStatus.QUEUED, runAfter: { lte: new Date() } },
    include: { contact: true },
    take: limit,
    orderBy: { createdAt: "asc" }
  });

  for (const job of jobs) {
    await prisma.researchJob.update({ where: { id: job.id }, data: { status: ResearchJobStatus.PROCESSING, startedAt: new Date() } });

    try {
      const structured = flags.researchTestMode ? getFixtureByType(job.contact.type) : await runOpenAIResearch(job.contact);

      await prisma.researchResult.create({
        data: {
          contactId: job.contactId,
          summary: (structured.personalizedHook as string) || `Research summary for ${job.contact.name}`,
          structured,
          confidence: 8,
          sources: Array.isArray(structured.sources) ? structured.sources.join(",") : undefined,
          model: flags.researchTestMode ? "fixture" : "gpt-4o-mini"
        }
      });

      await prisma.contact.update({
        where: { id: job.contactId },
        data: { lastResearchAt: new Date(), hasSummary: true }
      });

      await prisma.researchJob.update({
        where: { id: job.id },
        data: { status: ResearchJobStatus.COMPLETE, finishedAt: new Date(), error: null }
      });
    } catch (error) {
      logger.error("RESEARCH", "Research job failed", { jobId: job.id, error: String(error) });
      await prisma.researchJob.update({
        where: { id: job.id },
        data: { status: ResearchJobStatus.FAILED, finishedAt: new Date(), error: String(error) }
      });
    }
  }

  return jobs.length;
}

export async function cleanupStaleResearchJobs() {
  const timeout = new Date(Date.now() - 5 * 60 * 1000);
  const result = await prisma.researchJob.updateMany({
    where: { status: ResearchJobStatus.PROCESSING, startedAt: { lt: timeout } },
    data: {
      status: ResearchJobStatus.FAILED,
      error: "Timeout",
      finishedAt: new Date()
    }
  });

  return result.count;
}
