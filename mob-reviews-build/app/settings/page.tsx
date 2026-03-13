import { DashboardShell } from "@/components/layout/dashboard-shell";

export default function SettingsPage() {
  return (
    <DashboardShell>
      <div className="rounded-lg border bg-white p-4 text-sm">
        <h3 className="mb-2 text-lg font-semibold">Settings</h3>
        <p>Environment and integration settings are managed via `.env.local` and Vercel environment variables.</p>
      </div>
    </DashboardShell>
  );
}
