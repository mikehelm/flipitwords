import { prisma } from "@/lib/db/prisma";

export async function logActivity(input: { contactId?: string; type: string; message: string; metadata?: unknown }) {
  return prisma.activity.create({
    data: {
      contactId: input.contactId,
      type: input.type,
      message: input.message,
      metadata: input.metadata as any
    }
  });
}
