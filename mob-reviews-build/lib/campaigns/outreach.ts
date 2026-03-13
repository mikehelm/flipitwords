import { OutreachStatus } from "@prisma/client";

import { prisma } from "@/lib/db/prisma";
import { sendEmail } from "@/lib/resend/client";

export async function queueOutreach(input: { contactId: string; campaignId?: string; subject: string; body: string }) {
  return prisma.outreach.create({
    data: {
      contactId: input.contactId,
      campaignId: input.campaignId,
      subject: input.subject,
      body: input.body,
      status: OutreachStatus.QUEUED
    }
  });
}

export async function sendOutreach(outreachId: string) {
  const record = await prisma.outreach.findUnique({
    where: { id: outreachId },
    include: { contact: true }
  });

  if (!record) throw new Error("Outreach not found");
  if (!record.contact.email) throw new Error("Contact has no email");

  try {
    const response = await sendEmail({
      to: record.contact.email,
      subject: record.subject,
      html: `<p>${record.body.replace(/\n/g, "<br />")}</p>`
    });

    return prisma.outreach.update({
      where: { id: outreachId },
      data: {
        status: OutreachStatus.SENT,
        sentAt: new Date(),
        providerMessageId: "id" in response ? String(response.id) : undefined
      }
    });
  } catch (error) {
    return prisma.outreach.update({
      where: { id: outreachId },
      data: {
        status: OutreachStatus.FAILED,
        failureReason: String(error)
      }
    });
  }
}
