import { z } from "zod";

import { campaignCreateSchema, enrollContactsSchema } from "@/lib/validators/campaign";
import { contactCreateSchema, contactUpdateSchema } from "@/lib/validators/contact";

export const mcpCreateContactSchema = contactCreateSchema;
export const mcpUpdateContactSchema = contactUpdateSchema;
export const mcpCreateCampaignSchema = campaignCreateSchema;
export const mcpOutreachSchema = z.object({
  contactId: z.string().min(1),
  campaignId: z.string().optional(),
  subject: z.string().min(1),
  body: z.string().min(1)
});
export const mcpChatSchema = z.object({
  message: z.string().min(1),
  sessionId: z.string().optional()
});
export const mcpEnrollSchema = enrollContactsSchema;
