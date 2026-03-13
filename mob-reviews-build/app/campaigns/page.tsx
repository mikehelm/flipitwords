import { CampaignList } from "@/components/campaigns/campaign-list";
import { DashboardShell } from "@/components/layout/dashboard-shell";

export default function CampaignsPage() {
  return (
    <DashboardShell>
      <CampaignList />
    </DashboardShell>
  );
}
