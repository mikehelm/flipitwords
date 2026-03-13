import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().min(1).default("file:./prisma/dev.db"),
  TURSO_DATABASE_URL: z.string().optional(),
  TURSO_AUTH_TOKEN: z.string().optional(),
  NEXTAUTH_SECRET: z.string().optional(),
  NEXTAUTH_URL: z.string().optional(),
  GOOGLE_CLIENT_ID: z.string().optional(),
  GOOGLE_CLIENT_SECRET: z.string().optional(),
  OPENAI_API_KEY: z.string().optional(),
  RESEND_API_KEY: z.string().optional(),
  RESEND_FROM_EMAIL: z.string().optional(),
  RESEND_WEBHOOK_SECRET: z.string().optional(),
  ALLOWED_EMAILS: z.string().default(""),
  MCP_SECRET_TOKEN: z.string().optional(),
  NEXT_PUBLIC_DEBUG_PANEL: z.string().default("false"),
  RESEARCH_TEST_MODE: z.string().default("false"),
  EMAIL_TEST_MODE: z.string().default("false"),
  VOICE_TEST_MODE: z.string().default("false")
});

export const env = envSchema.parse(process.env);

export const flags = {
  debugPanel: env.NEXT_PUBLIC_DEBUG_PANEL === "true",
  researchTestMode: env.RESEARCH_TEST_MODE === "true",
  emailTestMode: env.EMAIL_TEST_MODE === "true",
  voiceTestMode: env.VOICE_TEST_MODE === "true"
};
