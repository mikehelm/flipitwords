import { ContactsList } from "@/components/contacts/contacts-list";
import { DashboardShell } from "@/components/layout/dashboard-shell";

export default function ContactsPage() {
  return (
    <DashboardShell>
      <ContactsList />
    </DashboardShell>
  );
}
