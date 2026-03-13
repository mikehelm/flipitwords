"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type ContentItem = {
  id: string;
  title: string;
  type: string;
  status: string;
};

export function ContentPublisher() {
  const [items, setItems] = useState<ContentItem[]>([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [type, setType] = useState("BLOG_POST");

  async function refresh() {
    const json = await fetch(`/api/content?type=${type}`).then((res) => res.json());
    setItems(json.data ?? []);
  }

  useEffect(() => {
    refresh();
  }, [type]);

  async function save() {
    await fetch("/api/content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, body, type, status: "DRAFT" })
    });
    setTitle("");
    setBody("");
    await refresh();
  }

  function exportMarkdown() {
    const blob = new Blob([`# ${title}\n\n${body}`], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${title || "content"}.md`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
      <Card>
        <CardHeader>
          <CardTitle>Create Content</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <select className="h-10 w-full rounded border px-3" value={type} onChange={(e) => setType(e.target.value)}>
            <option value="BLOG_POST">Blog Post</option>
            <option value="SOCIAL_CAPTION">Social Caption</option>
            <option value="VIDEO_SCRIPT">Video Script</option>
            <option value="EMAIL_TEMPLATE">Email Template</option>
            <option value="LANDING_PAGE_COPY">Landing Page Copy</option>
          </select>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
          <Textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="Write markdown..." className="min-h-[300px]" />
          <div className="flex gap-2">
            <Button onClick={save}>Save Draft</Button>
            <Button variant="secondary" onClick={exportMarkdown}>
              Export .md
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Library</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          {items.map((item) => (
            <div key={item.id} className="rounded border p-2">
              <p className="font-medium">{item.title}</p>
              <p className="text-xs text-muted-foreground">{item.type} · {item.status}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
