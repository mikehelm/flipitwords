import { NextRequest } from "next/server";

import { requireMcpAuth } from "@/lib/mcp/auth";
import { queueResearch } from "@/lib/research/engine";
import { prisma } from "@/lib/db/prisma";
import { apiError, ok } from "@/lib/utils/api";

export const runtime = "nodejs";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const guard = requireMcpAuth(request);
  if (guard) return guard;

  const research = await prisma.researchResult.findMany({ where: { contactId: params.id }, orderBy: { createdAt: "desc" } });
  return ok(research);
}

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
  const guard = requireMcpAuth(request);
  if (guard) return guard;

  try {
    const job = await queueResearch(params.id);
    return ok({ jobId: job.id, status: job.status, contactId: job.contactId, estimatedSeconds: 30 }, { status: 202 });
  } catch {
    return apiError("RESEARCH_IN_PROGRESS", "Research already queued", 409);
  }
}
