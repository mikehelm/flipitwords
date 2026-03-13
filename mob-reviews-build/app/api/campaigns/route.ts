import { NextRequest } from "next/server";

import { prisma } from "@/lib/db/prisma";
import { campaignCreateSchema } from "@/lib/validators/campaign";
import { apiError, ok } from "@/lib/utils/api";

export const runtime = "nodejs";

export async function GET() {
  const data = await prisma.campaign.findMany({
    include: {
      messages: true,
      contactCampaigns: true,
      outreach: true
    },
    orderBy: { createdAt: "desc" }
  });
  return ok(data);
}

export async function POST(request: NextRequest) {
  const parsed = campaignCreateSchema.safeParse(await request.json());
  if (!parsed.success) {
    return apiError("VALIDATION_ERROR", parsed.error.issues[0]?.message ?? "Invalid body", 400);
  }

  const { messages, ...rest } = parsed.data;
  const campaign = await prisma.campaign.create({
    data: {
      ...rest,
      messages: {
        create: messages
      }
    },
    include: { messages: true }
  });

  return ok(campaign, { status: 201 });
}
