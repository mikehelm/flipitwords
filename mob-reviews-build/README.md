# MOBreviews Growth Engine

Next.js 14 App Router full-stack app for CRM, AI research, personalized landing pages, outreach, chat, MCP APIs, and referral tracking.

## Quickstart

```bash
pnpm install
pnpm db:generate
pnpm db:migrate --name init
pnpm db:seed
pnpm dev
```

## Stack

- Next.js 14 (Node.js runtime)
- Prisma + Turso adapter (`@prisma/adapter-libsql`)
- NextAuth v4 Google OAuth
- OpenAI + Vercel AI SDK
- Resend email
- shadcn/ui style component primitives

## Notes

- `/lp/[slug]` and `/api/mcp/*` are public.
- Voice uses WebRTC bootstrap route at `/api/voice/session`.
