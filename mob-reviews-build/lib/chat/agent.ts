import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";

import { chatToolHandlers } from "@/lib/chat/tools";

export async function runChatTurn(message: string) {
  const warmLeads = await chatToolHandlers.search_contacts({ status: "INTERESTED" });

  const { text } = await generateText({
    model: openai("gpt-4o-mini"),
    system: "You are Kato, AI operator for MOBreviews. Keep responses concise and action-focused.",
    prompt: `User message: ${message}\nWarm leads in db right now: ${JSON.stringify(warmLeads).slice(0, 2500)}`
  });

  return { response: text, toolCalls: [{ tool: "search_contacts", args: { status: "INTERESTED" }, resultCount: warmLeads.length }] };
}
