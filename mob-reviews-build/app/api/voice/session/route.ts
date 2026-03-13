import { NextRequest } from "next/server";

import { flags } from "@/lib/utils/env";
import { apiError, ok } from "@/lib/utils/api";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => ({}));

  if (flags.voiceTestMode) {
    return ok({
      sdpAnswer: "voice-test-mode",
      sessionId: `voice_${Date.now()}`,
      expiresAt: new Date(Date.now() + 15 * 60 * 1000).toISOString()
    });
  }

  if (!process.env.OPENAI_API_KEY) {
    return apiError("VOICE_CONFIG_ERROR", "OPENAI_API_KEY is required", 500);
  }

  return ok({
    sdpAnswer: "client_must_exchange_with_openai_webrtc",
    sessionId: `voice_${Date.now()}`,
    model: body.model ?? "gpt-4o-realtime-preview",
    expiresAt: new Date(Date.now() + 15 * 60 * 1000).toISOString()
  });
}
