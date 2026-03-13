import { NextRequest } from "next/server";

import { queueOutreach } from "@/lib/campaigns/outreach";
import { requireMcpAuth } from "@/lib/mcp/auth";
import { mcpOutreachSchema } from "@/lib/validators/mcp";
import { apiError, ok } from "@/lib/utils/api";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const guard = requireMcpAuth(request);
  if (guard) return guard;

  const parsed = mcpOutreachSchema.safeParse(await request.json());
  if (!parsed.success) {
    return apiError("VALIDATION_ERROR", parsed.error.issues[0]?.message ?? "Invalid body", 400);
  }

  const queued = await queueOutreach(parsed.data);
  return ok(queued, { status: 201 });
}
