import { NewContactForm } from "@/components/contacts/new-contact-form";
import { DashboardShell } from "@/components/layout/dashboard-shell";

export default function NewContactPage() {
  return (
    <DashboardShell>
      <NewContactForm />
    </DashboardShell>
  );
}
