import { ContactDetail } from "@/components/contacts/contact-detail";
import { DashboardShell } from "@/components/layout/dashboard-shell";

export default function ContactDetailPage({ params }: { params: { id: string } }) {
  return (
    <DashboardShell>
      <ContactDetail contactId={params.id} />
    </DashboardShell>
  );
}
