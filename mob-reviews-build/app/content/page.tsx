import { ContentPublisher } from "@/components/content/content-publisher";
import { DashboardShell } from "@/components/layout/dashboard-shell";

export default function ContentPage() {
  return (
    <DashboardShell>
      <ContentPublisher />
    </DashboardShell>
  );
}
