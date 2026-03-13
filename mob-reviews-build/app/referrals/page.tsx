import { DashboardShell } from "@/components/layout/dashboard-shell";
import { ReferralTree } from "@/components/referrals/referral-tree";

export default function ReferralsPage() {
  return (
    <DashboardShell>
      <ReferralTree />
    </DashboardShell>
  );
}
