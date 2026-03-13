import { NextRequest } from "next/server";

import { prisma } from "@/lib/db/prisma";
import { contactBulkSchema } from "@/lib/validators/contact";
import { apiError, ok } from "@/lib/utils/api";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const parsed = contactBulkSchema.safeParse(await request.json());
  if (!parsed.success) {
    return apiError("VALIDATION_ERROR", parsed.error.issues[0]?.message ?? "Invalid body", 400);
  }

  const { ids, action, status } = parsed.data;

  if (action === "update_status") {
    if (!status) {
      return apiError("VALIDATION_ERROR", "status is required for update_status", 400);
    }
    const result = await prisma.contact.updateMany({ where: { id: { in: ids } }, data: { status } });
    return ok({ succeeded: result.count, failed: 0 });
  }

  if (action === "delete") {
    const result = await prisma.contact.deleteMany({ where: { id: { in: ids } } });
    return ok({ succeeded: result.count, failed: 0 });
  }

  const rows = await prisma.contact.findMany({ where: { id: { in: ids } } });
  const csv = [
    "id,name,businessName,type,status,city,country,email",
    ...rows.map((row) => [row.id, row.name, row.businessName ?? "", row.type, row.status, row.city, row.country, row.email ?? ""].join(","))
  ].join("\n");

  return ok({ csv });
}
