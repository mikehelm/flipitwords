import { NextRequest } from "next/server";

import { trackLandingEvent } from "@/lib/landing/generator";
import { apiError, ok } from "@/lib/utils/api";

export const runtime = "nodejs";

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
  const body = await request.json();
  const updated = await trackLandingEvent(params.id, body);
  if (!updated) return apiError("NOT_FOUND", "Landing page not found", 404);
  return ok(updated);
}
