"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ContactDetailData = {
  id: string;
  name: string;
  businessName?: string | null;
  type: string;
  status: string;
  city: string;
  country: string;
  notes?: string | null;
  researchResults: Array<{ id: string; summary: string; createdAt: string }>;
  landingPages: Array<{ id: string; slug: string; status: string; viewCount: number }>;
};

export function ContactDetail({ contactId }: { contactId: string }) {
  const [contact, setContact] = useState<ContactDetailData | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`/api/contacts/${contactId}`)
      .then((res) => res.json())
      .then((json) => setContact(json.data));
  }, [contactId]);

  async function triggerResearch() {
    setLoading(true);
    await fetch(`/api/research/${contactId}`, { method: "POST" });
    setLoading(false);
  }

  async function generateLp() {
    setLoading(true);
    await fetch("/api/landing-pages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contactId })
    });
    const latest = await fetch(`/api/contacts/${contactId}`).then((res) => res.json());
    setContact(latest.data);
    setLoading(false);
  }

  if (!contact) return <div>Loading contact...</div>;

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>{contact.businessName ?? contact.name}</CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">{contact.name}</p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline">{contact.type}</Badge>
            <Badge>{contact.status}</Badge>
          </div>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          <Button onClick={triggerResearch} disabled={loading}>
            Research Now
          </Button>
          <Button variant="secondary" onClick={generateLp} disabled={loading}>
            Generate LP
          </Button>
          <Button asChild variant="outline">
            <Link href="/campaigns">Add to Campaign</Link>
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Research</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          {contact.researchResults.length === 0 ? "No research yet." : contact.researchResults.map((item) => <p key={item.id}>{item.summary}</p>)}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Landing Pages</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          {contact.landingPages.length === 0
            ? "No landing pages yet."
            : contact.landingPages.map((page) => (
                <div key={page.id} className="flex items-center justify-between rounded border p-2">
                  <Link className="text-primary underline" href={`/lp/${page.slug}`}>
                    /lp/{page.slug}
                  </Link>
                  <span>{page.viewCount} views</span>
                </div>
              ))}
        </CardContent>
      </Card>
    </div>
  );
}
