import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth/auth-options";

export async function getRequiredSession() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    throw new Error("UNAUTHENTICATED");
  }

  return session;
}
