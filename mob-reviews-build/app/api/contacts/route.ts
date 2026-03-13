import { Prisma } from "@prisma/client";
import { NextRequest } from "next/server";

import { createContact, buildContactWhere } from "@/lib/crm/contacts";
import { prisma } from "@/lib/db/prisma";
import { contactCreateSchema, contactListQuerySchema } from "@/lib/validators/contact";
import { apiError, ok, paginated } from "@/lib/utils/api";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const parsed = contactListQuerySchema.safeParse(Object.fromEntries(request.nextUrl.searchParams.entries()));
  if (!parsed.success) {
    return apiError("VALIDATION_ERROR", parsed.error.issues[0]?.message ?? "Invalid query", 400);
  }

  const { sortBy, sortOrder, limit, offset, ...filters } = parsed.data;
  const where = buildContactWhere(filters);

  const [data, total] = await Promise.all([
    prisma.contact.findMany({
      where,
      take: limit,
      skip: offset,
      include: {
        researchResults: { take: 1, orderBy: { createdAt: "desc" } },
        landingPages: { take: 1, orderBy: { createdAt: "desc" } }
      },
      orderBy: { [sortBy]: sortOrder } as Prisma.ContactOrderByWithRelationInput
    }),
    prisma.contact.count({ where })
  ]);

  return paginated(data, total, limit, offset);
}

export async function POST(request: NextRequest) {
  const json = await request.json();
  const parsed = contactCreateSchema.safeParse(json);
  if (!parsed.success) {
    return apiError("VALIDATION_ERROR", parsed.error.issues[0]?.message ?? "Invalid body", 400);
  }

  const contact = await createContact(parsed.data as any);
  return ok(contact, { status: 201 });
}
