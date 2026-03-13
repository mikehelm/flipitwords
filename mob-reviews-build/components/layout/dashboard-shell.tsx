import Link from "next/link";
import { Home, MessageSquare, Megaphone, Settings, Users, Workflow, FileText, Bug } from "lucide-react";

import { DebugPanel } from "@/components/debug/debug-panel";

const links = [
  { href: "/dashboard", label: "Dashboard", icon: Home },
  { href: "/contacts", label: "Contacts", icon: Users },
  { href: "/campaigns", label: "Campaigns", icon: Megaphone },
  { href: "/chat", label: "Chat", icon: MessageSquare },
  { href: "/content", label: "Content", icon: FileText },
  { href: "/referrals", label: "Referrals", icon: Workflow },
  { href: "/debug/api", label: "Debug API", icon: Bug },
  { href: "/settings", label: "Settings", icon: Settings }
];

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <aside className="hidden w-64 flex-col bg-slate-900 p-4 text-white md:flex">
        <h1 className="mb-6 text-lg font-semibold">MOBreviews Engine</h1>
        <nav className="flex flex-col gap-1">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-slate-800">
              <link.icon className="h-4 w-4" />
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-4 md:p-8">
        <div className="mb-6 rounded-lg bg-white p-4 shadow-sm">
          <h2 className="text-xl font-semibold">MOBreviews Growth Engine</h2>
        </div>
        {children}
      </main>
      <DebugPanel />
    </div>
  );
}
