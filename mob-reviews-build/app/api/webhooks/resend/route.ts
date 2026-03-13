import { NextRequest } from "next/server";

import { prisma } from "@/lib/db/prisma";
import { apiError, ok } from "@/lib/utils/api";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const signature = request.headers.get("x-resend-signature");
  if (process.env.RESEND_WEBHOOK_SECRET && signature !== process.env.RESEND_WEBHOOK_SECRET) {
    return apiError("UNAUTHORIZED", "Invalid webhook signature", 401);
  }

  const body = await request.json();
  const messageId = body.data?.email_id ?? body.data?.id;
  const type = body.type as string;

  if (!messageId) return ok({ skipped: true });

  const outreach = await prisma.outreach.findFirst({ where: { providerMessageId: messageId } });
  if (!outreach) return ok({ skipped: true });

  if (type.includes("opened")) {
    await prisma.outreach.update({ where: { id: outreach.id }, data: { status: "OPENED", openedAt: new Date() } });
  } else if (type.includes("replied")) {
    await prisma.outreach.update({ where: { id: outreach.id }, data: { status: "REPLIED", repliedAt: new Date() } });
  } else if (type.includes("bounced")) {
    await prisma.outreach.update({ where: { id: outreach.id }, data: { status: "BOUNCED", failureReason: "Email bounced" } });
    await prisma.contact.update({ where: { id: outreach.contactId }, data: { isEmailInvalid: true } });
  } else if (type.includes("sent")) {
    await prisma.outreach.update({ where: { id: outreach.id }, data: { status: "SENT", sentAt: new Date() } });
  }

  return ok({ success: true });
}
