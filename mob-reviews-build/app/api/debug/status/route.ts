import { prisma } from "@/lib/db/prisma";
import { getRecentQueries } from "@/lib/db/query-debug";
import { env } from "@/lib/utils/env";
import { ok } from "@/lib/utils/api";

export const runtime = "nodejs";

export async function GET() {
  const contactCount = await prisma.contact.count().catch(() => -1);

  return ok({
    nodeEnv: process.env.NODE_ENV,
    dbConnected: contactCount >= 0,
    counts: {
      contacts: contactCount
    },
    env: {
      DATABASE_URL: Boolean(env.DATABASE_URL),
      NEXTAUTH_SECRET: Boolean(env.NEXTAUTH_SECRET),
      GOOGLE_CLIENT_ID: Boolean(env.GOOGLE_CLIENT_ID),
      OPENAI_API_KEY: Boolean(env.OPENAI_API_KEY),
      RESEND_API_KEY: Boolean(env.RESEND_API_KEY),
      MCP_SECRET_TOKEN: Boolean(env.MCP_SECRET_TOKEN)
    },
    recentQueries: getRecentQueries()
  });
}
