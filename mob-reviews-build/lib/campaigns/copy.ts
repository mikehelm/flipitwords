import { prisma } from "@/lib/db/prisma";

function inject(template: string, variables: Record<string, string>) {
  return template.replace(/\{\{([a-z_]+)\}\}/g, (_, key) => variables[key] ?? "");
}

export async function generateCampaignCopy(campaignId: string) {
  const campaign = await prisma.campaign.findUnique({
    where: { id: campaignId },
    include: {
      messages: { orderBy: { stepIndex: "asc" } },
      contactCampaigns: {
        include: {
          contact: {
            include: {
              researchResults: { orderBy: { createdAt: "desc" }, take: 1 },
              landingPages: { orderBy: { createdAt: "desc" }, take: 1 }
            }
          }
        }
      }
    }
  });

  if (!campaign) throw new Error("Campaign not found");

  const generated = [] as { contactCampaignId: string; stepIndex: number }[];

  for (const enrollment of campaign.contactCampaigns) {
    const research = enrollment.contact.researchResults[0]?.structured as any;
    const vars = {
      name: enrollment.contact.name,
      business_name: enrollment.contact.businessName ?? enrollment.contact.name,
      city: enrollment.contact.city,
      owner_name: research?.ownerName ?? "there",
      cuisine_type: research?.cuisineType ?? enrollment.contact.cuisineType ?? "restaurant",
      landing_page_url: `${process.env.NEXTAUTH_URL ?? "http://localhost:3000"}/lp/${enrollment.contact.landingPages[0]?.slug ?? ""}`,
      personalized_hook: research?.personalizedHook ?? "I noticed your audience is a strong fit for MOBreviews.",
      discount: String(campaign.discount)
    };

    for (const message of campaign.messages) {
      await prisma.generatedCopy.upsert({
        where: {
          contactCampaignId_campaignMessageId: {
            contactCampaignId: enrollment.id,
            campaignMessageId: message.id
          }
        },
        update: {
          subject: inject(message.subject, vars),
          body: inject(message.body, vars)
        },
        create: {
          contactCampaignId: enrollment.id,
          campaignMessageId: message.id,
          subject: inject(message.subject, vars),
          body: inject(message.body, vars)
        }
      });

      generated.push({ contactCampaignId: enrollment.id, stepIndex: message.stepIndex });
    }
  }

  return generated;
}
