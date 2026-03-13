import { cleanupStaleResearchJobs, processQueuedResearchJobs } from "@/lib/research/engine";
import { ok } from "@/lib/utils/api";

export const runtime = "nodejs";

export async function POST() {
  const cleaned = await cleanupStaleResearchJobs();
  const processed = await processQueuedResearchJobs(10);
  return ok({ cleaned, processed });
}
