import { NextRequest } from "next/server";

import { runChatTurn } from "@/lib/chat/agent";
import { requireMcpAuth } from "@/lib/mcp/auth";
import { mcpChatSchema } from "@/lib/validators/mcp";
import { apiError, ok } from "@/lib/utils/api";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const guard = requireMcpAuth(request);
  if (guard) return guard;

  const parsed = mcpChatSchema.safeParse(await request.json());
  if (!parsed.success) {
    return apiError("VALIDATION_ERROR", parsed.error.issues[0]?.message ?? "Invalid body", 400);
  }

  const sessionId = parsed.data.sessionId ?? `mcp_chat_${Date.now()}`;
  const result = await runChatTurn(parsed.data.message);

  return ok({
    response: result.response,
    toolCalls: result.toolCalls,
    sessionId
  });
}
