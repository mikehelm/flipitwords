import { NextRequest } from "next/server";

import { generateCampaignCopy } from "@/lib/campaigns/copy";
import { apiError, ok } from "@/lib/utils/api";

export const runtime = "nodejs";

export async function POST(_: NextRequest, { params }: { params: { id: string } }) {
  try {
    const generated = await generateCampaignCopy(params.id);
    return ok({ generated: generated.length });
  } catch (error) {
    return apiError("COPY_GENERATION_FAILED", String(error), 500);
  }
}
