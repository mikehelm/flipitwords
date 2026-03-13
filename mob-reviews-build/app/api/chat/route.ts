import { openai } from "@ai-sdk/openai";
import { streamText, tool } from "ai";
import { z } from "zod";

import { prisma } from "@/lib/db/prisma";
import { chatToolHandlers } from "@/lib/chat/tools";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const { messages } = await req.json();
  const sessionId = `chat_${Date.now()}`;

  const result = streamText({
    model: openai("gpt-4o-mini"),
    system: "You are Kato, AI operator for MOBreviews. Use tools when useful and keep responses concise.",
    messages,
    tools: {
      search_contacts: tool({
        description: "Search contacts",
        parameters: z.object({ query: z.string().optional(), city: z.string().optional(), status: z.string().optional() }),
        execute: chatToolHandlers.search_contacts
      }),
      get_dashboard_stats: tool({
        description: "Get dashboard stats",
        parameters: z.object({}),
        execute: chatToolHandlers.get_dashboard_stats
      }),
      generate_research: tool({
        description: "Queue research for contact",
        parameters: z.object({ contactId: z.string() }),
        execute: chatToolHandlers.generate_research
      }),
      generate_landing_page: tool({
        description: "Generate landing page",
        parameters: z.object({ contactId: z.string() }),
        execute: chatToolHandlers.generate_landing_page
      })
    },
    onFinish: async ({ text }) => {
      await prisma.chatMessage.create({
        data: {
          sessionId,
          role: "assistant",
          content: text
        }
      });
    }
  });

  return result.toDataStreamResponse();
}
