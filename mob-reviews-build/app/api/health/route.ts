import { ok } from "@/lib/utils/api";

export const runtime = "nodejs";

export async function GET() {
  return ok({ status: "ok" });
}
