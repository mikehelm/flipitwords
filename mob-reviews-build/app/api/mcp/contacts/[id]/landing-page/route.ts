import { NextRequest } from "next/server";

import { requireMcpAuth } from "@/lib/mcp/auth";
import { generateLandingPage } from "@/lib/landing/generator";
import { apiError, ok } from "@/lib/utils/api";

export const runtime = "nodejs";

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
  const guard = requireMcpAuth(request);
  if (guard) return guard;

  try {
    const page = await generateLandingPage(params.id);
    return ok(page, { status: 201 });
  } catch (error) {
    return apiError("LP_GENERATION_FAILED", String(error), 500);
  }
}
