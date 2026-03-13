import { NextRequest } from "next/server";

import { requireMcpAuth } from "@/lib/mcp/auth";
import { prisma } from "@/lib/db/prisma";
import { mcpCreateCampaignSchema } from "@/lib/validators/mcp";
import { apiError, ok } from "@/lib/utils/api";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const guard = requireMcpAuth(request);
  if (guard) return guard;

  const campaigns = await prisma.campaign.findMany({ include: { messages: true, contactCampaigns: true }, orderBy: { createdAt: "desc" } });
  return ok(campaigns);
}

export async function POST(request: NextRequest) {
  const guard = requireMcpAuth(request);
  if (guard) return guard;

  const parsed = mcpCreateCampaignSchema.safeParse(await request.json());
  if (!parsed.success) {
    return apiError("VALIDATION_ERROR", parsed.error.issues[0]?.message ?? "Invalid body", 400);
  }

  const { messages, ...campaignData } = parsed.data;
  const campaign = await prisma.campaign.create({ data: { ...campaignData, messages: { create: messages } }, include: { messages: true } });
  return ok(campaign, { status: 201 });
}
