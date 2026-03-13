import { NextRequest } from "next/server";

import { createContact } from "@/lib/crm/contacts";
import { requireMcpAuth } from "@/lib/mcp/auth";
import { prisma } from "@/lib/db/prisma";
import { mcpCreateContactSchema } from "@/lib/validators/mcp";
import { apiError, ok } from "@/lib/utils/api";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const guard = requireMcpAuth(request);
  if (guard) return guard;

  const data = await prisma.contact.findMany({ take: 100, orderBy: { createdAt: "desc" } });
  return ok(data);
}

export async function POST(request: NextRequest) {
  const guard = requireMcpAuth(request);
  if (guard) return guard;

  const parsed = mcpCreateContactSchema.safeParse(await request.json());
  if (!parsed.success) {
    return apiError("VALIDATION_ERROR", parsed.error.issues[0]?.message ?? "Invalid body", 400);
  }

  const created = await createContact(parsed.data as any);

  return ok(
    {
      id: created.id,
      name: created.name,
      type: created.type,
      status: created.status,
      createdAt: created.createdAt
    },
    { status: 201 }
  );
}
