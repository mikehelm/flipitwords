import { NextRequest } from "next/server";

import { generateLandingPage } from "@/lib/landing/generator";
import { prisma } from "@/lib/db/prisma";
import { apiError, ok } from "@/lib/utils/api";

export const runtime = "nodejs";

export async function GET() {
  const pages = await prisma.landingPage.findMany({ include: { contact: true }, orderBy: { createdAt: "desc" } });
  return ok(pages);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  if (!body.contactId) return apiError("VALIDATION_ERROR", "contactId is required", 400);

  const page = await generateLandingPage(body.contactId);
  return ok(page, { status: 201 });
}
