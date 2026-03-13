import {
  CampaignStatus,
  ContactStatus,
  ContactType,
  ContentStatus,
  ContentType,
  Priority,
  ReferralType
} from "@prisma/client";

import { prisma } from "@/lib/db/prisma";
import { calculateCommission } from "@/lib/referrals/commission";

async function main() {
  await prisma.activity.deleteMany();
  await prisma.chatMessage.deleteMany();
  await prisma.commission.deleteMany();
  await prisma.referralChain.deleteMany();
  await prisma.franchiseHierarchy.deleteMany();
  await prisma.outreach.deleteMany();
  await prisma.generatedCopy.deleteMany();
  await prisma.contactCampaign.deleteMany();
  await prisma.campaignMessage.deleteMany();
  await prisma.campaign.deleteMany();
  await prisma.landingPage.deleteMany();
  await prisma.researchResult.deleteMany();
  await prisma.researchJob.deleteMany();
  await prisma.content.deleteMany();
  await prisma.contact.deleteMany();

  await prisma.commissionRule.createMany({
    data: [
      { referralType: ReferralType.MEMBER_INVITE, value: 10 },
      { referralType: ReferralType.FRANCHISE_SALE, value: 10 },
      { referralType: ReferralType.RESTAURANT_ADD, value: 10 },
      { referralType: ReferralType.OPERATOR_RECRUIT, value: 10 }
    ],
    skipDuplicates: true
  });

  const restaurants = await Promise.all(
    Array.from({ length: 10 }).map((_, i) =>
      prisma.contact.create({
        data: {
          name: `Restaurant Owner ${i + 1}`,
          businessName: `Bangkok Bistro ${i + 1}`,
          type: ContactType.RESTAURANT,
          status: i < 3 ? ContactStatus.INTERESTED : ContactStatus.COLD,
          city: i % 2 === 0 ? "Bangkok" : "Chiang Mai",
          country: "Thailand",
          email: `restaurant${i + 1}@example.com`,
          priority: i < 3 ? Priority.HIGH : Priority.MEDIUM,
          hasSummary: i % 2 === 0
        }
      })
    )
  );

  const influencers = await Promise.all(
    Array.from({ length: 5 }).map((_, i) =>
      prisma.contact.create({
        data: {
          name: `Influencer ${i + 1}`,
          businessName: `FoodCreator ${i + 1}`,
          type: ContactType.INFLUENCER,
          status: ContactStatus.CONTACTED,
          city: "Bangkok",
          country: "Thailand",
          email: `influencer${i + 1}@example.com`,
          followerCount: 50000 + i * 20000,
          platform: i % 2 === 0 ? "instagram" : "tiktok"
        }
      })
    )
  );

  const franchises = await Promise.all(
    Array.from({ length: 3 }).map((_, i) =>
      prisma.contact.create({
        data: {
          name: `Franchise Prospect ${i + 1}`,
          type: ContactType.FRANCHISE,
          status: ContactStatus.NEGOTIATING,
          city: ["Bangkok", "Phuket", "Pattaya"][i],
          country: "Thailand",
          targetCity: ["Bangkok", "Phuket", "Pattaya"][i],
          investmentCapacity: 200000 + i * 50000
        }
      })
    )
  );

  const members = await Promise.all(
    Array.from({ length: 2 }).map((_, i) =>
      prisma.contact.create({
        data: {
          name: `Member ${i + 1}`,
          type: ContactType.MEMBER,
          status: ContactStatus.ACTIVE,
          city: "Bangkok",
          country: "Thailand",
          membershipTier: "Gold",
          reviewCount: 5 + i
        }
      })
    )
  );

  const campaign = await prisma.campaign.create({
    data: {
      name: "Bangkok Restaurant Wave 1",
      targetType: ContactType.RESTAURANT,
      status: CampaignStatus.ACTIVE,
      discount: 25,
      messages: {
        create: [
          {
            stepIndex: 0,
            delayDays: 0,
            subject: "Fill more tables this week",
            body: "Hi {{name}}, {{personalized_hook}}"
          },
          {
            stepIndex: 1,
            delayDays: 5,
            subject: "Re: Fill more tables",
            body: "Following up for {{business_name}}."
          }
        ]
      }
    },
    include: { messages: true }
  });

  await Promise.all(
    restaurants.slice(0, 5).map((contact) =>
      prisma.contactCampaign.create({
        data: {
          contactId: contact.id,
          campaignId: campaign.id
        }
      })
    )
  );

  await prisma.researchResult.createMany({
    data: restaurants.slice(0, 3).map((contact, i) => ({
      contactId: contact.id,
      summary: `Research summary for ${contact.businessName}`,
      structured: { painPoints: ["slow weekdays"], personalizedHook: "MOBreviews can stabilize demand" },
      confidence: 8 + (i % 2),
      model: "fixture"
    }))
  });

  await prisma.landingPage.createMany({
    data: restaurants.slice(0, 2).map((contact, i) => ({
      contactId: contact.id,
      slug: `bangkok-bistro-${i + 1}`,
      title: `${contact.businessName}, your regulars are about to multiply.`,
      content: { hero: "Personalized page", benefits: ["More weekday traffic"] },
      status: "ACTIVE",
      viewCount: 10 + i,
      uniqueViews: 7 + i,
      ctaClicks: 2 + i
    }))
  });

  const referral = await prisma.referralChain.create({
    data: {
      referrerId: influencers[0].id,
      refereeId: members[0].id,
      referralType: ReferralType.MEMBER_INVITE,
      notes: "Instagram story referral"
    }
  });

  await calculateCommission(referral.id, 100);

  await prisma.chatMessage.createMany({
    data: [
      { sessionId: "seed-session", role: "user", content: "Who are warm leads in Bangkok?" },
      { sessionId: "seed-session", role: "assistant", content: "You have 3 interested restaurant leads in Bangkok." }
    ]
  });

  await prisma.content.createMany({
    data: [
      {
        title: "Why Invite-Only Dining Wins",
        body: "# Invite-only dining\n\nCore thesis...",
        type: ContentType.BLOG_POST,
        status: ContentStatus.DRAFT,
        contactId: restaurants[0].id
      },
      {
        title: "Founding restaurant outreach",
        body: "Hi {{name}},",
        type: ContentType.EMAIL_TEMPLATE,
        status: ContentStatus.READY
      }
    ]
  });

  console.log("Seed complete");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
