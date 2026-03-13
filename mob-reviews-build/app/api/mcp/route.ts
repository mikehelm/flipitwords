import { ok } from "@/lib/utils/api";

export const runtime = "nodejs";

export async function GET() {
  return ok({ service: "mob-reviews-mcp", status: "ok" });
}
