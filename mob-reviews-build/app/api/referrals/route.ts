import { prisma } from "@/lib/db/prisma";
import { ok } from "@/lib/utils/api";

export const runtime = "nodejs";

export async function GET() {
  const data = await prisma.referralChain.findMany({
    include: {
      referrer: true,
      referee: true,
      commissions: true
    }
  });

  return ok(data);
}
