"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Campaign = {
  id: string;
  name: string;
  status: string;
  targetType: string;
  contactCampaigns: Array<unknown>;
  outreach: Array<{ status: string }>;
};

export function CampaignList() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);

  useEffect(() => {
    fetch("/api/campaigns")
      .then((res) => res.json())
      .then((json) => setCampaigns(json.data ?? []));
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Campaigns</h3>
        <Button asChild>
          <Link href="/campaigns/new">New Campaign</Link>
        </Button>
      </div>
      <div className="grid gap-3">
        {campaigns.map((campaign) => (
          <Card key={campaign.id}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-base">{campaign.name}</CardTitle>
              <span className="text-xs text-muted-foreground">{campaign.status}</span>
            </CardHeader>
            <CardContent className="text-sm">
              <p>Target: {campaign.targetType}</p>
              <p>Enrolled: {campaign.contactCampaigns.length}</p>
              <p>Messages sent: {campaign.outreach.filter((o) => o.status === "SENT" || o.status === "OPENED").length}</p>
              <Button asChild variant="link" className="h-auto px-0">
                <Link href={`/campaigns/${campaign.id}`}>Open campaign</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
