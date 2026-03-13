import { Resend } from "resend";

import { flags } from "@/lib/utils/env";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function sendEmail(input: { to: string; subject: string; html: string }) {
  if (flags.emailTestMode || !resend) {
    console.log("[EMAIL_TEST_MODE]", input);
    return { id: `test_${Date.now()}` };
  }

  return resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
    to: input.to,
    subject: input.subject,
    html: input.html
  });
}
