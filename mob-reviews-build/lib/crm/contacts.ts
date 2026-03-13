import type { Prisma } from "@prisma/client";

import { prisma } from "@/lib/db/prisma";
import { logActivity } from "@/lib/crm/activity";

export async function createContact(data: Prisma.ContactCreateInput) {
  const contact = await prisma.contact.create({ data });
  await logActivity({
    contactId: contact.id,
    type: "CONTACT_CREATED",
    message: `Created contact ${contact.name}`
  });
  return contact;
}

export async function updateContact(id: string, data: Prisma.ContactUpdateInput) {
  const contact = await prisma.contact.update({ where: { id }, data });
  await logActivity({
    contactId: contact.id,
    type: "CONTACT_UPDATED",
    message: `Updated contact ${contact.name}`,
    metadata: data
  });
  return contact;
}

export async function deleteContact(id: string) {
  const contact = await prisma.contact.delete({ where: { id } });
  await logActivity({
    type: "CONTACT_DELETED",
    message: `Deleted contact ${contact.name}`,
    metadata: { id }
  });
  return contact;
}

export function buildContactWhere(params: {
  q?: string;
  type?: string;
  status?: string;
  city?: string;
  hasResearch?: boolean;
  hasLandingPage?: boolean;
}): Prisma.ContactWhereInput {
  const where: Prisma.ContactWhereInput = {};

  if (params.q) {
    where.OR = [
      { name: { contains: params.q, mode: "insensitive" } },
      { businessName: { contains: params.q, mode: "insensitive" } },
      { email: { contains: params.q, mode: "insensitive" } },
      { city: { contains: params.q, mode: "insensitive" } }
    ];
  }

  if (params.type) where.type = params.type as any;
  if (params.status) where.status = params.status as any;
  if (params.city) where.city = params.city;
  if (typeof params.hasResearch === "boolean") where.hasSummary = params.hasResearch;
  if (typeof params.hasLandingPage === "boolean") {
    where.landingPages = params.hasLandingPage ? { some: {} } : { none: {} };
  }

  return where;
}
