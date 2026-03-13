import { NextRequest } from "next/server";

import { deleteContact, updateContact } from "@/lib/crm/contacts";
import { prisma } from "@/lib/db/prisma";
import { contactUpdateSchema } from "@/lib/validators/contact";
import { apiError, ok } from "@/lib/utils/api";

export const runtime = "nodejs";

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  const contact = await prisma.contact.findUnique({
    where: { id: params.id },
    include: {
      researchResults: { orderBy: { createdAt: "desc" } },
      landingPages: { orderBy: { createdAt: "desc" } },
      outbounds: { orderBy: { createdAt: "desc" } },
      activities: { orderBy: { createdAt: "desc" }, take: 25 },
      contactCampaigns: { include: { campaign: true } },
      referralChains: { include: { referee: true } },
      referredByChains: { include: { referrer: true } }
    }
  });

  if (!contact) return apiError("CONTACT_NOT_FOUND", `No contact with id ${params.id}`, 404);
  return ok(contact);
}

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  const json = await request.json();
  const parsed = contactUpdateSchema.safeParse(json);
  if (!parsed.success) {
    return apiError("VALIDATION_ERROR", parsed.error.issues[0]?.message ?? "Invalid body", 400);
  }

  const contact = await updateContact(params.id, parsed.data as any);
  return ok(contact);
}

export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
  const contact = await deleteContact(params.id);
  return ok(contact);
}
