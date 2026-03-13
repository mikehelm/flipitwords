import { BarChart3, Bot, ClipboardList, Mail, Users } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const cards = [
  { icon: Users, title: "Contacts", body: "Manage restaurants, influencers, franchise prospects, and members." },
  { icon: Bot, title: "AI Research", body: "Run queued research jobs and keep lead intelligence current." },
  { icon: Mail, title: "Outreach", body: "Create campaigns, generate copy, and track delivery events." },
  { icon: ClipboardList, title: "CRM Pipeline", body: "Track warm leads and move contacts through lifecycle stages." },
  { icon: BarChart3, title: "Operations Stats", body: "Monitor open rates, referral commissions, and AI queue health." }
];

export function DashboardOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {cards.map((card) => (
        <Card key={card.title}>
          <CardHeader className="flex flex-row items-center gap-2 pb-2">
            <card.icon className="h-5 w-5 text-mob-red" />
            <CardTitle className="text-base">{card.title}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">{card.body}</CardContent>
        </Card>
      ))}
    </div>
  );
}
