import { requireMcpAuth } from "@/lib/mcp/auth";
import { prisma } from "@/lib/db/prisma";
import { cleanupStaleResearchJobs } from "@/lib/research/engine";
import { ok } from "@/lib/utils/api";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const guard = requireMcpAuth(request as any);
  if (guard) return guard;

  await cleanupStaleResearchJobs();

  const [contactsTotal, contactsByType, contactsByStatus, campaigns, research, landingPages, commissions] = await Promise.all([
    prisma.contact.count(),
    prisma.contact.groupBy({ by: ["type"], _count: true }),
    prisma.contact.groupBy({ by: ["status"], _count: true }),
    prisma.campaign.findMany({ include: { outreach: true } }),
    prisma.researchJob.groupBy({ by: ["status"], _count: true }),
    prisma.landingPage.findMany(),
    prisma.commission.aggregate({ _sum: { amount: true } })
  ]);

  const totalSent = campaigns.flatMap((campaign) => campaign.outreach).filter((o) => o.status !== "QUEUED").length;
  const opened = campaigns.flatMap((campaign) => campaign.outreach).filter((o) => o.status === "OPENED" || o.status === "REPLIED").length;
  const replied = campaigns.flatMap((campaign) => campaign.outreach).filter((o) => o.status === "REPLIED").length;

  return ok({
    contacts: {
      total: contactsTotal,
      byType: Object.fromEntries(contactsByType.map((entry) => [entry.type, entry._count])),
      byStatus: Object.fromEntries(contactsByStatus.map((entry) => [entry.status, entry._count]))
    },
    campaigns: {
      active: campaigns.filter((campaign) => campaign.status === "ACTIVE").length,
      totalSent,
      openRate: totalSent ? opened / totalSent : 0,
      replyRate: totalSent ? replied / totalSent : 0
    },
    research: {
      completed: research.find((item) => item.status === "COMPLETE")?._count ?? 0,
      pending: research.find((item) => item.status === "QUEUED" || item.status === "PROCESSING")?._count ?? 0,
      failed: research.find((item) => item.status === "FAILED")?._count ?? 0
    },
    landingPages: {
      total: landingPages.length,
      totalViews: landingPages.reduce((sum, page) => sum + page.viewCount, 0)
    },
    referrals: {
      totalChains: await prisma.referralChain.count(),
      pendingCommission: commissions._sum.amount ?? 0
    }
  });
}
