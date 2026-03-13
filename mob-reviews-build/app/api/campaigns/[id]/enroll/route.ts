import { NextRequest } from "next/server";

import { prisma } from "@/lib/db/prisma";
import { enrollContactsSchema } from "@/lib/validators/campaign";
import { apiError, ok } from "@/lib/utils/api";

export const runtime = "nodejs";

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
  const parsed = enrollContactsSchema.safeParse(await request.json());
  if (!parsed.success) {
    return apiError("VALIDATION_ERROR", parsed.error.issues[0]?.message ?? "Invalid body", 400);
  }

  const items = await Promise.all(
    parsed.data.contactIds.map((contactId) =>
      prisma.contactCampaign.upsert({
        where: { contactId_campaignId: { contactId, campaignId: params.id } },
        update: {},
        create: { contactId, campaignId: params.id }
      })
    )
  );

  return ok({ enrolled: items.length });
}
