import { notFound } from "next/navigation";

import { prisma } from "@/lib/db/prisma";
import { LandingPageViewTracker } from "@/components/landing-pages/landing-page-view-tracker";

export const runtime = "nodejs";

export default async function PublicLandingPage({ params }: { params: { slug: string } }) {
  const page = await prisma.landingPage.findUnique({ where: { slug: params.slug }, include: { contact: true } });
  if (!page) notFound();

  const content = page.content as Record<string, any>;

  return (
    <main className="mx-auto min-h-screen max-w-3xl space-y-8 px-4 py-12">
      <LandingPageViewTracker landingPageId={page.id} />
      <h1 className="text-4xl font-bold">{content.hero ?? page.title}</h1>
      <p className="text-lg text-muted-foreground">{content.hook}</p>

      <section>
        <h2 className="mb-2 text-2xl font-semibold">The Problem</h2>
        <p>{content.problem}</p>
      </section>

      <section>
        <h2 className="mb-2 text-2xl font-semibold">What You Get</h2>
        <ul className="list-disc space-y-1 pl-6">
          {(content.benefits ?? []).map((benefit: string) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </section>

      <a
        className="inline-flex rounded-md bg-primary px-4 py-2 text-primary-foreground"
        href={content.ctaUrl ?? page.ctaUrl ?? "#"}
        target="_blank"
        rel="noreferrer"
      >
        {content.ctaLabel ?? "Join as a founding restaurant"}
      </a>
    </main>
  );
}
