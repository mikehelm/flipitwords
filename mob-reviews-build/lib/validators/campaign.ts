import { CampaignStatus, ContactType } from "@prisma/client";
import { z } from "zod";

export const campaignMessageInputSchema = z.object({
  stepIndex: z.number().int().min(0),
  delayDays: z.number().int().min(0).default(0),
  subject: z.string().min(1),
  body: z.string().min(1)
});

export const campaignCreateSchema = z.object({
  name: z.string().min(1),
  targetType: z.nativeEnum(ContactType),
  status: z.nativeEnum(CampaignStatus).optional(),
  discount: z.number().int().min(1).max(100).default(25),
  description: z.string().optional(),
  messages: z.array(campaignMessageInputSchema).min(1)
});

export const enrollContactsSchema = z.object({
  contactIds: z.array(z.string().min(1)).min(1)
});
