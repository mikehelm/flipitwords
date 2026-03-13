import { NextRequest } from "next/server";

import { requireMcpAuth } from "@/lib/mcp/auth";
import { prisma } from "@/lib/db/prisma";
import { ok } from "@/lib/utils/api";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const guard = requireMcpAuth(request);
  if (guard) return guard;

  const referrals = await prisma.referralChain.findMany({ include: { referrer: true, referee: true, commissions: true } });
  return ok(referrals);
}
