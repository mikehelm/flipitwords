import { prisma } from "@/lib/db/prisma";
import { generateLandingPage } from "@/lib/landing/generator";
import { queueResearch } from "@/lib/research/engine";

export const chatToolHandlers = {
  async search_contacts(args: { query?: string; city?: string; status?: string }) {
    return prisma.contact.findMany({
      where: {
        name: args.query ? { contains: args.query, mode: "insensitive" } : undefined,
        city: args.city,
        status: args.status as any
      },
      take: 20,
      orderBy: { updatedAt: "desc" }
    });
  },
  async get_contact(args: { id: string }) {
    return prisma.contact.findUnique({ where: { id: args.id }, include: { researchResults: true, landingPages: true } });
  },
  async create_contact(args: Record<string, unknown>) {
    return prisma.contact.create({ data: args as any });
  },
  async update_contact(args: { id: string; data: Record<string, unknown> }) {
    return prisma.contact.update({ where: { id: args.id }, data: args.data as any });
  },
  async get_campaign_stats(args?: { id?: string }) {
    return prisma.campaign.findMany({ where: args?.id ? { id: args.id } : undefined, include: { outreach: true } });
  },
  async get_referral_summary() {
    const total = await prisma.commission.aggregate({ _sum: { amount: true } });
    return { totalCommission: total._sum.amount ?? 0 };
  },
  async generate_research(args: { contactId: string }) {
    return queueResearch(args.contactId);
  },
  async generate_landing_page(args: { contactId: string }) {
    return generateLandingPage(args.contactId);
  },
  async generate_copy(args: { contactId: string; template: string }) {
    const contact = await prisma.contact.findUnique({ where: { id: args.contactId } });
    if (!contact) return null;
    return args.template.replace(/\{\{name\}\}/g, contact.name).replace(/\{\{business_name\}\}/g, contact.businessName ?? contact.name);
  },
  async enroll_in_campaign(args: { contactId: string; campaignId: string }) {
    return prisma.contactCampaign.upsert({
      where: { contactId_campaignId: { contactId: args.contactId, campaignId: args.campaignId } },
      update: {},
      create: { contactId: args.contactId, campaignId: args.campaignId }
    });
  },
  async get_dashboard_stats() {
    const contacts = await prisma.contact.count();
    const activeCampaigns = await prisma.campaign.count({ where: { status: "ACTIVE" } });
    return { contacts, activeCampaigns };
  },
  async suggest_follow_ups() {
    return prisma.contact.findMany({
      where: { status: { in: ["INTERESTED", "NEGOTIATING"] } },
      orderBy: { lastActivityAt: "asc" },
      take: 10
    });
  }
};
