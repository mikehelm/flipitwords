import { NextRequest } from "next/server";

import { queueResearch } from "@/lib/research/engine";
import { apiError, ok } from "@/lib/utils/api";

export const runtime = "nodejs";

export async function POST(_: NextRequest, { params }: { params: { id: string } }) {
  try {
    const job = await queueResearch(params.id);
    return ok({ jobId: job.id, status: job.status, contactId: job.contactId, estimatedSeconds: 30 }, { status: 202 });
  } catch (error) {
    return apiError("RESEARCH_QUEUE_ERROR", String(error), 409);
  }
}
