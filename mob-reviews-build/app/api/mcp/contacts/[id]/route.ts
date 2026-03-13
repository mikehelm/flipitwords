import { NextRequest } from "next/server";

import { updateContact } from "@/lib/crm/contacts";
import { requireMcpAuth } from "@/lib/mcp/auth";
import { prisma } from "@/lib/db/prisma";
import { mcpUpdateContactSchema } from "@/lib/validators/mcp";
import { apiError, ok } from "@/lib/utils/api";

export const runtime = "nodejs";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const guard = requireMcpAuth(request);
  if (guard) return guard;

  const contact = await prisma.contact.findUnique({ where: { id: params.id }, include: { researchResults: true, landingPages: true } });
  if (!contact) return apiError("CONTACT_NOT_FOUND", `No contact with id ${params.id}`, 404);
  return ok(contact);
}

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  const guard = requireMcpAuth(request);
  if (guard) return guard;

  const parsed = mcpUpdateContactSchema.safeParse(await request.json());
  if (!parsed.success) {
    return apiError("VALIDATION_ERROR", parsed.error.issues[0]?.message ?? "Invalid body", 400);
  }

  const updated = await updateContact(params.id, parsed.data as any);
  return ok(updated);
}
