import { NextRequest } from "next/server";

import { prisma } from "@/lib/db/prisma";
import { apiError, ok } from "@/lib/utils/api";

export const runtime = "nodejs";

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  const campaign = await prisma.campaign.findUnique({
    where: { id: params.id },
    include: {
      messages: true,
      contactCampaigns: { include: { contact: true, generatedCopy: true } },
      outreach: true
    }
  });

  if (!campaign) return apiError("NOT_FOUND", "Campaign not found", 404);
  return ok(campaign);
}
