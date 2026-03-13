import { prisma } from "@/lib/db/prisma";
import { uniqueSlug } from "@/lib/utils/slug";

export async function generateLandingPage(contactId: string) {
  const contact = await prisma.contact.findUnique({
    where: { id: contactId },
    include: { researchResults: { orderBy: { createdAt: "desc" }, take: 1 } }
  });

  if (!contact) throw new Error("Contact not found");

  const latestResearch = contact.researchResults[0];
  const structured = latestResearch?.structured as Record<string, any> | undefined;

  const slug = await uniqueSlug(contact.businessName ?? contact.name);
  const title =
    contact.type === "INFLUENCER"
      ? `${contact.name}, your food content just got a revenue stream.`
      : `${contact.businessName ?? contact.name}, your regulars are about to multiply.`;

  const content = {
    hero: title,
    problem: structured?.painPoints?.[0] ?? "You need a reliable way to drive high-intent traffic.",
    hook: structured?.personalizedHook ?? "MOBreviews can turn interest into repeat demand.",
    benefits: structured?.opportunities ?? ["Targeted member traffic", "Structured feedback", "Recurring promotion"],
    ctaLabel: "Join as a founding partner",
    ctaUrl: "https://forms.gle/example"
  };

  return prisma.landingPage.create({
    data: {
      contactId,
      slug,
      title,
      content,
      ctaUrl: content.ctaUrl,
      status: "DRAFT"
    }
  });
}

export async function trackLandingEvent(id: string, payload: { view?: boolean; cta?: boolean; timeOnPage?: number }) {
  const page = await prisma.landingPage.findUnique({ where: { id } });
  if (!page) return null;

  const updates: Record<string, any> = {};

  if (payload.view) {
    updates.viewCount = { increment: 1 };
    updates.uniqueViews = { increment: 1 };
    updates.lastViewedAt = new Date();
  }

  if (payload.cta) {
    updates.ctaClicks = { increment: 1 };
  }

  if (typeof payload.timeOnPage === "number") {
    updates.avgTimeOnPage = page.avgTimeOnPage === 0 ? payload.timeOnPage : (page.avgTimeOnPage + payload.timeOnPage) / 2;
  }

  return prisma.landingPage.update({ where: { id }, data: updates });
}
