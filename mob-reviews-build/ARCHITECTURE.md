# ARCHITECTURE.md

## Runtime
- Next.js 14 App Router
- Node.js runtime only (`export const runtime = "nodejs"`)

## Data
- Prisma ORM
- Local: SQLite (`DATABASE_URL=file:./prisma/dev.db`)
- Production: Turso via `@prisma/adapter-libsql`

## Auth
- NextAuth v4 Google OAuth
- Allowed email enforcement via `ALLOWED_EMAILS`

## Major Modules
- CRM: `/contacts`, `/api/contacts`
- Research: `/api/research/*`
- Landing Pages: `/lp/[slug]`, `/api/landing-pages/*`
- Campaigns + Outreach: `/campaigns`, `/api/campaigns/*`, `/api/outreach/send`, `/api/webhooks/resend`
- AI Chat: `/chat`, `/api/chat`
- Voice Bootstrap: `/api/voice/session`
- MCP: `/api/mcp/*`
- Referrals: `/referrals`, `/api/referrals`
- Content: `/content`, `/api/content`
- Debug: `/debug/api`, `/debug/db`, debug panel
