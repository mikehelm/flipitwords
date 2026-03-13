"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

type DebugData = {
  dbConnected: boolean;
  env: Record<string, boolean>;
  recentQueries: Array<{ timestamp: string; query: string; durationMs: number }>;
};

const enabled = process.env.NEXT_PUBLIC_DEBUG_PANEL === "true";

export function DebugPanel() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<DebugData | null>(null);

  useEffect(() => {
    if (!enabled) return;
    fetch("/api/debug/status")
      .then((res) => res.json())
      .then((json) => setData(json.data));
  }, []);

  if (!enabled) return null;

  return (
    <div className="fixed bottom-0 right-0 z-50 w-[360px] rounded-tl-lg border bg-white p-3 shadow-lg">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-sm font-semibold">Debug Panel</p>
        <Button size="sm" variant="outline" onClick={() => setOpen((v) => !v)}>
          {open ? "Hide" : "Show"}
        </Button>
      </div>
      {open && (
        <div className="space-y-2 text-xs">
          <p>DB: {data?.dbConnected ? "Connected" : "Disconnected"}</p>
          <div>
            <p className="font-semibold">Env checks</p>
            {Object.entries(data?.env ?? {}).map(([key, value]) => (
              <p key={key}>
                {value ? "✅" : "❌"} {key}
              </p>
            ))}
          </div>
          <div className="flex gap-2">
            <Button size="sm" onClick={() => fetch("/api/debug/seed", { method: "POST" })}>
              Seed test data
            </Button>
            <Button size="sm" variant="destructive" onClick={() => fetch("/api/debug/wipe", { method: "POST" })}>
              Clear all data
            </Button>
          </div>
          <div>
            <p className="font-semibold">Last queries</p>
            {(data?.recentQueries ?? []).map((q) => (
              <p key={q.timestamp} className="line-clamp-1">
                {q.durationMs}ms {q.query}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
