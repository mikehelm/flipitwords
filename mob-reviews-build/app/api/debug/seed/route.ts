import { execSync } from "node:child_process";

import { ok } from "@/lib/utils/api";

export const runtime = "nodejs";

export async function POST() {
  execSync("pnpm db:seed", { stdio: "pipe" });
  return ok({ seeded: true });
}
