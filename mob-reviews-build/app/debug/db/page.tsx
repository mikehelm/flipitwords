import { DashboardShell } from "@/components/layout/dashboard-shell";
import { prisma } from "@/lib/db/prisma";

export const runtime = "nodejs";

export default async function DebugDbPage({ searchParams }: { searchParams: { table?: string } }) {
  const table = searchParams.table ?? "Contact";

  const counts = {
    Contact: await prisma.contact.count(),
    Campaign: await prisma.campaign.count(),
    Outreach: await prisma.outreach.count(),
    ResearchJob: await prisma.researchJob.count(),
    LandingPage: await prisma.landingPage.count(),
    ReferralChain: await prisma.referralChain.count(),
    Content: await prisma.content.count()
  };

  let sample: unknown[] = [];
  switch (table) {
    case "Campaign":
      sample = await prisma.campaign.findMany({ take: 20 });
      break;
    case "Outreach":
      sample = await prisma.outreach.findMany({ take: 20 });
      break;
    case "ResearchJob":
      sample = await prisma.researchJob.findMany({ take: 20 });
      break;
    case "LandingPage":
      sample = await prisma.landingPage.findMany({ take: 20 });
      break;
    case "ReferralChain":
      sample = await prisma.referralChain.findMany({ take: 20 });
      break;
    case "Content":
      sample = await prisma.content.findMany({ take: 20 });
      break;
    default:
      sample = await prisma.contact.findMany({ take: 20 });
  }

  return (
    <DashboardShell>
      <div className="space-y-4 rounded-lg border bg-white p-4">
        <h3 className="text-lg font-semibold">Database Inspector</h3>
        <div className="grid gap-2 md:grid-cols-3">
          {Object.entries(counts).map(([name, value]) => (
            <a key={name} href={`/debug/db?table=${name}`} className="rounded border p-2 text-sm">
              {name}: {value}
            </a>
          ))}
        </div>
        <pre className="overflow-auto rounded border bg-slate-50 p-3 text-xs">{JSON.stringify(sample, null, 2)}</pre>
      </div>
    </DashboardShell>
  );
}
