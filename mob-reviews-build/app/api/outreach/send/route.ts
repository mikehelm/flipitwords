import { NextRequest } from "next/server";

import { queueOutreach, sendOutreach } from "@/lib/campaigns/outreach";
import { apiError, ok } from "@/lib/utils/api";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.contactId || !body.subject || !body.body) {
    return apiError("VALIDATION_ERROR", "contactId, subject and body are required", 400);
  }

  const queued = await queueOutreach(body);
  const sent = await sendOutreach(queued.id);

  return ok(sent);
}
