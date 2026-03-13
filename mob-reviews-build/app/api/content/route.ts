import { NextRequest } from "next/server";

import { prisma } from "@/lib/db/prisma";
import { apiError, ok } from "@/lib/utils/api";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const type = request.nextUrl.searchParams.get("type") ?? undefined;
  const data = await prisma.content.findMany({ where: { type: type as any }, orderBy: { updatedAt: "desc" } });
  return ok(data);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  if (!body.title || !body.body || !body.type) {
    return apiError("VALIDATION_ERROR", "title, body, type required", 400);
  }

  const content = await prisma.content.create({ data: body });
  return ok(content, { status: 201 });
}
