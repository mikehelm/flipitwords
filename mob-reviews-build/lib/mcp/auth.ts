import { NextRequest } from "next/server";

import { env } from "@/lib/utils/env";
import { apiError } from "@/lib/utils/api";

type Bucket = { count: number; resetAt: number };
const buckets = new Map<string, Bucket>();

export function requireMcpAuth(request: NextRequest) {
  const token = request.headers.get("authorization")?.replace("Bearer ", "") ?? "";
  if (!env.MCP_SECRET_TOKEN || token !== env.MCP_SECRET_TOKEN) {
    return apiError("UNAUTHORIZED", "Invalid or missing MCP Bearer token", 401);
  }

  const now = Date.now();
  const bucket = buckets.get(token);
  if (!bucket || bucket.resetAt < now) {
    buckets.set(token, { count: 1, resetAt: now + 60_000 });
    return null;
  }

  if (bucket.count >= 60) {
    return apiError("RATE_LIMITED", "Too many MCP requests", 429);
  }

  bucket.count += 1;
  buckets.set(token, bucket);
  return null;
}
