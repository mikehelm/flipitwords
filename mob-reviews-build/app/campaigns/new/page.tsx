import { NewCampaignForm } from "@/components/campaigns/new-campaign-form";
import { DashboardShell } from "@/components/layout/dashboard-shell";

export default function NewCampaignPage() {
  return (
    <DashboardShell>
      <NewCampaignForm />
    </DashboardShell>
  );
}
