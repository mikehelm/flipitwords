import { PrismaClient } from "@prisma/client";
import { PrismaLibSQL } from "@prisma/adapter-libsql";

import { env } from "@/lib/utils/env";

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

function createClient() {
  if (env.TURSO_DATABASE_URL && env.TURSO_AUTH_TOKEN) {
    const adapter = new PrismaLibSQL({
      url: env.TURSO_DATABASE_URL,
      authToken: env.TURSO_AUTH_TOKEN
    });
    return new PrismaClient({ adapter });
  }

  return new PrismaClient();
}

export const prisma = globalForPrisma.prisma ?? createClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
