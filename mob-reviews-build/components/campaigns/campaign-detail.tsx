"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type CampaignDetailData = {
  id: string;
  name: string;
  contactCampaigns: Array<{ id: string; contact: { id: string; name: string; email?: string | null } }>;
  outreach: Array<{ id: string; status: string }>;
};

export function CampaignDetail({ id }: { id: string }) {
  const [campaign, setCampaign] = useState<CampaignDetailData | null>(null);
  const [contactId, setContactId] = useState("");

  async function refresh() {
    const json = await fetch(`/api/campaigns/${id}`).then((res) => res.json());
    setCampaign(json.data);
  }

  useEffect(() => {
    refresh();
  }, [id]);

  async function enroll() {
    if (!contactId) return;
    await fetch(`/api/campaigns/${id}/enroll`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contactIds: [contactId] })
    });
    setContactId("");
    await refresh();
  }

  async function generateCopy() {
    await fetch(`/api/campaigns/${id}/generate-copy`, { method: "POST" });
    await refresh();
  }

  async function sendFirst() {
    const first = campaign?.contactCampaigns[0];
    if (!first) return;

    await fetch("/api/outreach/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contactId: first.contact.id,
        campaignId: id,
        subject: "MOBreviews partnership",
        body: `Hi ${first.contact.name}, we built a personalized plan for you.`
      })
    });

    await refresh();
  }

  if (!campaign) return <div>Loading campaign...</div>;

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>{campaign.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex gap-2">
            <Input value={contactId} onChange={(e) => setContactId(e.target.value)} placeholder="Contact ID" />
            <Button onClick={enroll}>Enroll</Button>
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" onClick={generateCopy}>
              Generate Copy
            </Button>
            <Button onClick={sendFirst}>Send First Email</Button>
          </div>
          <p className="text-sm">Enrolled contacts: {campaign.contactCampaigns.length}</p>
          <p className="text-sm">Outreach records: {campaign.outreach.length}</p>
        </CardContent>
      </Card>
    </div>
  );
}
