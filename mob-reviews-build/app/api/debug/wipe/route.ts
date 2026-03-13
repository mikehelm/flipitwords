import { prisma } from "@/lib/db/prisma";
import { ok } from "@/lib/utils/api";

export const runtime = "nodejs";

export async function POST() {
  if (process.env.NODE_ENV === "production") {
    throw new Error("Not allowed in production");
  }

  await prisma.$transaction([
    prisma.activity.deleteMany(),
    prisma.chatMessage.deleteMany(),
    prisma.commission.deleteMany(),
    prisma.referralChain.deleteMany(),
    prisma.franchiseHierarchy.deleteMany(),
    prisma.outreach.deleteMany(),
    prisma.generatedCopy.deleteMany(),
    prisma.contactCampaign.deleteMany(),
    prisma.campaignMessage.deleteMany(),
    prisma.campaign.deleteMany(),
    prisma.landingPage.deleteMany(),
    prisma.researchResult.deleteMany(),
    prisma.researchJob.deleteMany(),
    prisma.content.deleteMany(),
    prisma.contact.deleteMany()
  ]);

  return ok({ wiped: true });
}
