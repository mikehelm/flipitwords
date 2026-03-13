import { prisma } from "@/lib/db/prisma";

function normalize(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export async function uniqueSlug(base: string) {
  const root = normalize(base) || "landing-page";
  let slug = root;
  let index = 2;

  while (await prisma.landingPage.findUnique({ where: { slug } })) {
    slug = `${root}-${index}`;
    index += 1;
  }

  return slug;
}
