import { ChatPanel } from "@/components/chat/chat-panel";
import { DashboardShell } from "@/components/layout/dashboard-shell";

export default function ChatPage() {
  return (
    <DashboardShell>
      <ChatPanel />
    </DashboardShell>
  );
}
