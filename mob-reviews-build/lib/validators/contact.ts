import { ContactStatus, ContactType, Priority } from "@prisma/client";
import { z } from "zod";

export const contactCreateSchema = z.object({
  name: z.string().min(1),
  businessName: z.string().optional().nullable(),
  type: z.nativeEnum(ContactType),
  status: z.nativeEnum(ContactStatus).optional(),
  city: z.string().min(1),
  country: z.string().optional().default("Thailand"),
  email: z.string().email().optional().nullable(),
  phone: z.string().optional().nullable(),
  website: z.string().url().optional().nullable(),
  instagram: z.string().optional().nullable(),
  tiktok: z.string().optional().nullable(),
  facebook: z.string().optional().nullable(),
  youtube: z.string().optional().nullable(),
  line: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
  tags: z.string().optional().nullable(),
  source: z.string().optional().nullable(),
  priority: z.nativeEnum(Priority).optional().default(Priority.MEDIUM),
  cuisineType: z.string().optional().nullable(),
  priceRange: z.string().optional().nullable(),
  neighborhood: z.string().optional().nullable(),
  seatingCapacity: z.number().int().optional().nullable(),
  platform: z.string().optional().nullable(),
  followerCount: z.number().int().optional().nullable(),
  engagementRate: z.number().optional().nullable(),
  niche: z.string().optional().nullable(),
  targetCity: z.string().optional().nullable(),
  targetTerritory: z.string().optional().nullable(),
  investmentCapacity: z.number().optional().nullable(),
  membershipTier: z.string().optional().nullable(),
  reviewCount: z.number().int().optional().nullable(),
  activeStatus: z.boolean().optional().nullable()
});

export const contactUpdateSchema = contactCreateSchema.partial();

export const contactListQuerySchema = z.object({
  q: z.string().optional(),
  type: z.nativeEnum(ContactType).optional(),
  status: z.nativeEnum(ContactStatus).optional(),
  city: z.string().optional(),
  hasResearch: z.coerce.boolean().optional(),
  hasLandingPage: z.coerce.boolean().optional(),
  sortBy: z.enum(["name", "status", "type", "city", "lastActivityAt", "createdAt"]).default("createdAt"),
  sortOrder: z.enum(["asc", "desc"]).default("desc"),
  limit: z.coerce.number().int().positive().max(100).default(50),
  offset: z.coerce.number().int().min(0).default(0)
});

export const contactBulkSchema = z.object({
  ids: z.array(z.string().min(1)).min(1),
  action: z.enum(["update_status", "delete", "export_csv"]),
  status: z.nativeEnum(ContactStatus).optional()
});
