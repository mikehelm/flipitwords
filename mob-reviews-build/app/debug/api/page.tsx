"use client";

import { DashboardShell } from "@/components/layout/dashboard-shell";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function DebugApiPage() {
  const [token, setToken] = useState("");
  const [path, setPath] = useState("/api/mcp/stats");
  const [method, setMethod] = useState("GET");
  const [body, setBody] = useState("{}");
  const [response, setResponse] = useState("");

  async function run() {
    const res = await fetch(path, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: method === "GET" ? undefined : body
    });

    const text = await res.text();
    setResponse(`${res.status}\n${text}`);
  }

  return (
    <DashboardShell>
      <div className="space-y-4 rounded-lg border bg-white p-4">
        <h3 className="text-lg font-semibold">MCP API Tester</h3>
        <Input value={token} onChange={(e) => setToken(e.target.value)} placeholder="MCP token" />
        <div className="grid gap-2 md:grid-cols-[120px_1fr]">
          <select className="h-10 rounded border px-3" value={method} onChange={(e) => setMethod(e.target.value)}>
            <option>GET</option>
            <option>POST</option>
            <option>PATCH</option>
          </select>
          <Input value={path} onChange={(e) => setPath(e.target.value)} />
        </div>
        <Textarea value={body} onChange={(e) => setBody(e.target.value)} className="min-h-[120px]" />
        <Button onClick={run}>Run</Button>
        <pre className="overflow-auto rounded border bg-slate-50 p-3 text-xs">{response}</pre>
      </div>
    </DashboardShell>
  );
}
