import { CampaignDetail } from "@/components/campaigns/campaign-detail";
import { DashboardShell } from "@/components/layout/dashboard-shell";

export default function CampaignDetailPage({ params }: { params: { id: string } }) {
  return (
    <DashboardShell>
      <CampaignDetail id={params.id} />
    </DashboardShell>
  );
}
