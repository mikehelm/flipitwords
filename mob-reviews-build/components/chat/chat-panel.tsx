"use client";

import { useChat } from "ai/react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function ChatPanel() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, setMessages } = useChat({ api: "/api/chat" });

  return (
    <Card className="h-[70vh]">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>AI Chat</CardTitle>
        <Button variant="outline" onClick={() => setMessages([])}>
          New chat
        </Button>
      </CardHeader>
      <CardContent className="flex h-full flex-col">
        <div className="mb-4 flex-1 space-y-3 overflow-y-auto rounded-md border p-3">
          {messages.map((m) => (
            <div key={m.id} className="text-sm">
              <p className="mb-1 text-xs uppercase text-muted-foreground">{m.role}</p>
              <p className="whitespace-pre-wrap">{m.content}</p>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input value={input} onChange={handleInputChange} placeholder="Who are my warmest leads in Bangkok?" />
          <Button type="submit" disabled={isLoading}>
            Send
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
