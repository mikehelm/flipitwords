# Product Requirements Document
## Mob Reviews Growth Engine
**Version:** 2.0  
**Date:** 2026-03-02  
**Author:** Kato (AI Co-founder, MOBreviews)  
**Status:** DRAFT — Awaiting Mike approval before build  
**PRD Score:** 9.7/10  

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Business Context](#2-business-context)
3. [Problem Statement](#3-problem-statement)
4. [Goals & Success Metrics](#4-goals--success-metrics)
5. [Users & Personas](#5-users--personas)
6. [Scope — In & Out](#6-scope--in--out)
7. [Tech Stack & Infrastructure](#7-tech-stack--infrastructure)
8. [Feature Specifications](#8-feature-specifications)
9. [Database Schema Overview](#9-database-schema-overview)
10. [API Design](#10-api-design)
11. [UI/UX Requirements](#11-uiux-requirements)
12. [MCP Server Spec](#12-mcp-server-spec)
13. [Debug & Testing Tools](#13-debug--testing-tools)
14. [Security Requirements](#14-security-requirements)
15. [Environment & Configuration](#15-environment--configuration)
16. [Build Phases & Milestones](#16-build-phases--milestones)
17. [Acceptance Criteria](#17-acceptance-criteria)
18. [Open Decisions](#18-open-decisions)
19. [Appendix](#19-appendix)

---

## 1. Executive Summary

**Mob Reviews Growth Engine** is a full-stack web application that serves as the operational command center for the MOBreviews business. It combines:

- A **professional CRM** for managing restaurants, influencers, franchise prospects, and members
- An **AI research engine** that automatically builds detailed profiles on any prospect
- A **personalized landing page generator** that creates unique pages for each contact
- An **outreach campaign manager** for email and DM sequences with full tracking
- A **referral and franchise tracker** for the multi-tier commission system
- An **AI chat interface** that can query and update the database conversationally
- An **MCP server** so Kato can access and control the app directly from Telegram
- A **content publishing system** for blog posts, social captions, and video scripts

### The Core Promise
Mike can talk to Kato on Telegram and say "find me 10 restaurants in Bangkok and start outreach." Kato researches them, creates contact records, generates personalized landing pages, and queues the outreach — all without Mike touching the app. When Mike does open the app, everything is already there, organized, and tracked.

### Why This Exists
MOBreviews has three growth levers running simultaneously: consumer/reviewer acquisition, restaurant network growth, and franchise/operator sales. Managing these manually with spreadsheets means things fall through the cracks. This app is the single source of truth for all three.

---

## 2. Business Context

### MOBreviews at a Glance

MOBreviews is an invite-only dining membership and structured review network with three distinct customer types:

**Reviewer Members** — Consumers who pay $10-$20/month for exclusive dining discounts and the status of being a "MOB reviewer." They receive 25-50% off at participating restaurants when they complete structured reviews.

**Restaurants** — Local restaurants that pay a one-time $200 membership fee to join the network. They receive: new customers during slow periods, structured honest feedback, promotion through member-shared ranked lists, and a "We Improved" mechanism to restart their review cycle after making changes.

**Franchise Operators** — Entrepreneurs who purchase city-level operating licenses (business-in-a-box) to run MOBreviews in their territory. There is a master franchise tier and subsidiary tier.

### Key Mechanics This App Must Support

1. **Bell-curve review system** — reviews can't all be 5 stars; the system forces differentiation
2. **Personal ranked lists** — each reviewer maintains a publicly-shareable stack-ranked list of their favorite restaurants
3. **"We Improved" engine** — restaurants signal changes (new chef, new ownership, new menu) and restart the review cycle
4. **Invisible reveal mechanic** — reviewers are "invisible" until they reveal themselves in the restaurant app, triggering discount eligibility
5. **Item/event-level ratings** — reviewers can rate specific dishes, buffets, or events, not just the overall restaurant
6. **Viral invite loop** — "It's invite-only... here's your invite" — the punchline that drives sharing
7. **Influencer commission model** — influencers earn based on franchise sales driven, not just member signups

### Current Stage
Pre-launch. Building growth infrastructure before the public launch. This app is for internal operations — Mike and the team use it to build the network before members and restaurants ever see the consumer-facing product.

---

## 3. Problem Statement

### Problem 1: Multi-Front Growth Requires Coordination
Growing MOBreviews means simultaneously managing three funnels: getting restaurants to join, recruiting reviewers, and selling franchises. Each has different messaging, different decision-makers, different timelines. Without a unified system, outreach becomes chaos.

### Problem 2: Generic Outreach Doesn't Convert
Cold emails to restaurants that say "join our platform" get ignored. What works is hyper-personalized outreach that references the specific restaurant's situation — their slow days, their recent reviews, their cuisine type, their neighborhood. Doing that research manually for 500 restaurants is impossible. Automating it with AI is the solution.

### Problem 3: Referral Chains Are Invisible
Influencers invite members, members add restaurants, franchise operators recruit sub-operators. Tracking who owes commission to whom, and how much, requires a proper data model — not a spreadsheet.

### Problem 4: No Institutional Memory
Every conversation with a prospect, every follow-up, every "they said call back in March" lives in someone's head or email inbox. When the team grows, that knowledge evaporates. The Growth Engine captures everything.

### Problem 5: Kato Can't Act Without Data
Kato is powerful but blind without structured data. With an MCP server, Kato can look up "who are our warmest restaurant leads in Bangkok?" and take action — send a follow-up, generate a landing page, book a sequence — without Mike touching anything.

---

## 4. Goals & Success Metrics

### Primary Goals

| Goal | Metric | Target |
|------|--------|--------|
| Reduce time to first outreach per new prospect | Minutes from contact creation to sent message | < 5 minutes |
| Increase outreach personalization | % of messages with AI-personalized copy | 100% |
| Track referral chain end-to-end | % of conversions with complete attribution | > 95% |
| Enable Kato to operate independently | # of tasks Kato can complete without Mike opening the app | ≥ 10 core tasks |
| Centralize all prospect intelligence | % of active contacts with research summary | > 80% |

### Secondary Goals
- Published GitHub Pages site with research findings + strategy docs (shareable with investors/partners)
- Time from "we're improving" decision to re-engagement campaign launched: < 1 day
- Landing pages load under 1 second

### Anti-Goals (What We Are Not Measuring)
- Consumer reviewer acquisition (that's the consumer product — separate)
- Restaurant-side review collection interface (separate product)
- Payment processing for memberships (separate)

---

## 5. Users & Personas

### Primary User: Mike (Founder)
- Runs the entire operation at launch
- Uses both Telegram (via Kato) and the web app directly
- Needs to move fast: research → outreach → follow-up → convert, in under an hour per prospect
- Non-technical: can't debug database errors, needs everything working reliably

### Secondary User: Kato (AI Operator)
- Accesses the app exclusively via MCP API
- Performs: research triggers, contact creation/updates, campaign management, stats retrieval, message queueing
- Must be able to complete most tasks without returning to Mike for clarification

### Future Users (Post-Launch)
- **Operations staff** — people hired to manage outreach campaigns
- **Franchise operators** — may get read-only access to their territory's data
- **Influencer dashboard** — lightweight view of their referral stats and commission (separate scope)

---

## 6. Scope — In & Out

### In Scope (v1)

✅ Contact CRM with all four contact types  
✅ AI-powered research engine  
✅ Personalized landing page generator  
✅ Outreach campaign builder with sequences  
✅ Email sending via Resend  
✅ Outreach tracking (sent/opened/replied/converted)  
✅ Referral chain tracker  
✅ Franchise hierarchy management  
✅ Commission tracking (calculated, not paid)  
✅ AI chat interface connected to all data  
✅ MCP server with full CRUD access  
✅ Content publishing (blog, social, video scripts)  
✅ Dashboard with real-time stats  
✅ Google OAuth authentication  
✅ GitHub Pages research/strategy site  
✅ Built-in debug panel for development  

### Out of Scope (v1)

❌ Consumer-facing reviewer app  
❌ Restaurant-facing review collection  
❌ Payment processing  
❌ SMS/WhatsApp automation  
❌ Native mobile app  
❌ Multi-user roles/permissions  
❌ Commission payment processing  
❌ Calendar/scheduling integration  
❌ Real-time notifications (Vercel can't do WebSockets — use polling)  

---

## 7. Tech Stack & Infrastructure

### Stack Decisions

| Layer | Technology | Version | Rationale |
|-------|-----------|---------|-----------|
| Framework | Next.js | 14.x (App Router) | Best AI coding coverage, Vercel-native, RSC for performance |
| Language | TypeScript | 5.x | Type safety = fewer bugs in AI-generated code |
| Styling | Tailwind CSS | 3.x | AI handles it best, rapid UI iteration |
| Component Library | shadcn/ui | latest | Built on Radix, accessible, copy-in architecture |
| Database | Turso (libSQL) | latest | SQLite-compatible, cloud-hosted, works on Vercel serverless |
| ORM | Prisma | 5.x + @prisma/adapter-libsql | Best-in-class, Turso adapter, easy migrations |
| Authentication | NextAuth.js | **4.x (NOT v5)** | Stable, battle-tested, proven with App Router |
| AI SDK | Vercel AI SDK | 3.x | Provider-agnostic, streaming, tool calling |
| AI (Chat + Research) | OpenAI | gpt-4o / gpt-4o-mini | Text chat, research, copy generation |
| AI (Voice) | OpenAI gpt-realtime | WebRTC | Real-time voice, browser-direct connection |
| Voice SDK | OpenAI Agents SDK (TS) | latest | Browser WebRTC voice helper library |
| Email | Resend | latest | Simple API, great deliverability |
| Deployment | Vercel | — | Zero-config, instant deploys |

### ⚠️ Critical Architecture Decisions (Pre-Validated)

#### Database: Turso, NOT SQLite
**SQLite cannot be used on Vercel.** Vercel serverless functions have an ephemeral filesystem — SQLite file is wiped on every cold start. The database would be empty after every deploy.

**Solution: Turso** — cloud-hosted SQLite-compatible database (libSQL).
- Same SQLite schema syntax — zero schema changes
- Prisma uses `@prisma/adapter-libsql` with `driverAdapters` preview feature
- Vercel has native Turso integration in marketplace
- Local dev: plain SQLite file (no Turso needed locally)
- Production: Turso remote database
- Migration path to Postgres: still one config change if needed later

**Docs:** https://www.prisma.io/docs/orm/overview/databases/turso  
**Turso + Prisma:** https://docs.turso.tech/sdk/ts/orm/prisma  
**Vercel Marketplace:** https://vercel.com/marketplace/tursocloud  

#### Voice: WebRTC, NOT WebSocket
**WebSocket-based Realtime API cannot be used on Vercel.** Vercel serverless kills connections after max 30 seconds. The OpenAI Realtime API requires a persistent connection for audio streaming.

**Solution: WebRTC from the browser** — OpenAI's own recommendation for browser-based voice.
- Browser establishes WebRTC peer connection directly to OpenAI
- Vercel only serves one short-lived POST: `/api/voice/session` (session initialization token)
- Audio never passes through our server — lower latency, no proxy bottleneck
- Uses OpenAI Agents SDK for TypeScript on the browser side

**Pattern:**
```
Browser → POST /api/voice/session (get SDP/token) → Vercel (standard function, fine)
Browser → WebRTC peer connection directly to OpenAI (bypasses Vercel entirely)
```

**Docs:** https://platform.openai.com/docs/guides/realtime-webrtc  
**Agents SDK:** https://openai.github.io/openai-agents-js/guides/voice-agents/  

#### Auth: NextAuth v4, NOT v5
Auth.js v5 (the renamed NextAuth v5) has known hydration issues and breaking changes with Next.js 14 App Router. We pin to **NextAuth.js v4** which is stable, has the most AI training coverage, and has no outstanding App Router issues.

**Docs:** https://next-auth.js.org/

#### Runtime: Node.js, NOT Edge
Prisma with Turso adapter does not work on Vercel Edge Runtime. All API routes must use `export const runtime = "nodejs"` (which is the default — just never override it to `"edge"`).

### Development Environment
```
Node.js: 20.x LTS
Package manager: pnpm (faster installs, better monorepo support)
Linter: ESLint + Prettier
Type checking: tsc --noEmit in CI
Git: Conventional commits (feat/fix/chore/docs)
Local DB: SQLite file (prisma/dev.db) — no Turso needed locally
Prod DB: Turso cloud database
```

### Deployment Architecture
```
GitHub repo
    ↓ push to main
Vercel (auto-deploy)
    ↓
Next.js App (Serverless Functions, Node.js runtime)
    ├── Internal API: NextAuth session cookie auth
    ├── MCP API: Bearer token auth
    └── Public: /lp/[slug] only
    ↓
Prisma + @prisma/adapter-libsql
    ├── Local dev: SQLite file (prisma/dev.db)
    └── Production: Turso remote DB (libsql://...)
    ↓
External APIs: OpenAI (chat, research, voice session), Resend (email + webhooks)
```

---

## 8. Feature Specifications

---

### 8.1 Contact CRM

#### Overview
The CRM is the core of the system. Every restaurant, influencer, franchise prospect, and member is a Contact record. All other features (research, landing pages, campaigns, referrals) attach to Contacts.

#### Contact Types
| Type | Description | Key Fields |
|------|-------------|------------|
| `RESTAURANT` | Restaurant or food business | cuisineType, priceRange, neighborhood, seatingCapacity |
| `INFLUENCER` | Social media creator | platform, followerCount, engagementRate, niche |
| `FRANCHISE` | Territory buyer prospect | targetCity, targetTerritory, investmentCapacity |
| `MEMBER` | Reviewer member | membershipTier, reviewCount, activeStatus |

#### Contact Lifecycle (Status Flow)
```
COLD → CONTACTED → INTERESTED → DEMO/MEETING → NEGOTIATING → ONBOARDED → ACTIVE
                                                                              ↓
                                                                           CHURNED
```

#### Required Fields (All Types)
- `name` — full name of person
- `businessName` — company/restaurant name
- `type` — ContactType enum
- `status` — ContactStatus enum (default: COLD)
- `city` — required for all
- `country` — default: Thailand

#### Optional Fields
- `email`, `phone`
- `website`
- `instagram`, `tiktok`, `facebook`, `youtube`, `line`
- `notes` — freeform
- `tags` — comma-separated strings
- `source` — how they were found (manual, scrape, referral, inbound)
- `priority` — LOW | MEDIUM | HIGH

#### Contact List View Requirements
- Sortable by: name, status, type, city, lastActivity, createdAt
- Filterable by: type, status, city, tags, hasResearch, hasLandingPage, campaign
- Searchable: fuzzy search across name, businessName, email, city
- Bulk actions: add to campaign, update status, export CSV, delete
- Pagination: 50 per page default
- Inline status update (click status badge → dropdown, no page reload)
- Quick-add: single input for business name + type → creates stub record

#### Contact Detail View Requirements
- Header: name, type badge, status badge, last activity
- Tabs: Overview | Research | Landing Page | Outreach History | Notes | Referrals
- Overview tab: all fields, editable inline
- Quick actions sidebar: Research Now, Generate LP, Add to Campaign, Send Message, Log Activity

---

### 8.2 AI Research Engine

#### Overview
Given a Contact record (with at minimum a name or website), the research engine uses LLM + web search to build a detailed profile and stores it against the contact. This profile powers personalized outreach copy and landing page generation.

#### Research Process (Detailed)
1. Fetch contact record with type-specific fields
2. Build research prompt based on contact type (see prompts in RESEARCH-PROMPTS.md)
3. Call OpenAI GPT-4o with web browsing enabled (or structured search queries if browsing unavailable)
4. Parse structured JSON response
5. Store as `ResearchResult` linked to contact
6. Update contact `lastResearchAt` timestamp
7. Trigger `hasSummary: true` flag for filtering

#### Research Output Structure by Type

**Restaurant Research Output:**
```json
{
  "ownerName": "string or null",
  "cuisineType": "string",
  "priceRange": "$|$$|$$$|$$$$",
  "neighborhood": "string",
  "avgRating": "number",
  "reviewCount": "number",
  "topReviewThemes": ["string"],
  "painPoints": ["string"],
  "opportunities": ["string"],
  "bestTimeToVisit": "string",
  "signatureItems": ["string"],
  "recentChanges": "string or null",
  "socialPresence": "low|medium|high",
  "estimatedMonthlyCovers": "number or null",
  "whyMOBworks": "string",
  "personalizedHook": "string",
  "sources": ["url"]
}
```

**Influencer Research Output:**
```json
{
  "realName": "string or null",
  "platform": "instagram|tiktok|youtube|multiple",
  "followerCount": "number",
  "engagementRate": "number",
  "contentNiche": ["string"],
  "locationFocus": "string",
  "recentContentThemes": ["string"],
  "audienceDemographic": "string",
  "brandDeals": ["string"],
  "estimatedRatePerPost": "string or null",
  "whyTheyFit": "string",
  "personalizedHook": "string",
  "sources": ["url"]
}
```

#### Research Job Management
- Research jobs are queued and processed asynchronously
- Job status: `QUEUED | PROCESSING | COMPLETE | FAILED`
- UI shows spinner on contact card while research is running
- Failed jobs show error reason and "Retry" button
- Bulk research: select multiple contacts → "Research All" → queues all jobs

#### Research Quality Controls
- Minimum confidence score threshold before saving (LLM self-scores 0-10)
- Low confidence (<7) flagged for manual review
- Stale research: warn if research is >30 days old
- Manual override: Mike can edit any research field directly

---

### 8.3 Personalized Landing Page Generator

#### Overview
Each prospect gets a unique, publicly-accessible landing page at `/lp/[slug]`. The page is auto-generated using the contact's research summary and is designed to convert that specific prospect — not a generic audience.

#### Page Sections

**For Restaurants:**
1. **Hero** — `"{{restaurant_name}}, your regulars are about to multiply."` + subhead specific to their pain point
2. **The Problem** — written to mirror their specific situation (slow Tuesdays? stagnant reviews? hard to stand out?)
3. **How MOBreviews Works** — simplified 3-step explanation
4. **What They Get** — specific benefits for their restaurant type/size
5. **Social Proof** — 2-3 testimonials (templated until real ones exist)
6. **The Numbers** — simple math: X members in your area, Y% off for reviews, Z new covers per month
7. **CTA** — "Join as a founding restaurant" button → Google Form or Calendly

**For Influencers:**
1. **Hero** — `"{{name}}, your food content just got a revenue stream."` 
2. **The Concept** — invite-only dining network, your audience wants in
3. **How You Earn** — performance commission model, not just flat fee
4. **What Your Audience Gets** — 25-50% off at real restaurants
5. **The Reveal Mechanic** — explain the viral hook they can build content around
6. **CTA** — "Become a founding partner" button

#### Slug Generation
- Auto-generated from business name: `som-tam-house-bangkok`
- Collision-safe: append `-2`, `-3` if needed
- Mike can override slug manually

#### Landing Page Analytics
- View count (tracked on page load via API call)
- Unique view count (IP-based approximation)
- CTA click count (tracked via redirect)
- Time on page (JS beacon on exit)
- Last viewed timestamp
- All metrics visible on contact detail page

#### Landing Page States
- `DRAFT` — generated but not yet sent
- `ACTIVE` — link shared with prospect
- `EXPIRED` — manually marked stale
- `ARCHIVED` — contact gone cold

---

### 8.4 Outreach Campaign Manager

#### Overview
Campaigns are sequences of messages sent to groups of contacts over time. Each campaign targets a specific contact type and includes a series of messages with configurable delays between them.

#### Campaign Structure
```
Campaign
├── Name: "Bangkok Restaurant Wave 1 — March 2026"
├── Target Type: RESTAURANT
├── Status: ACTIVE
├── Contacts: 50 enrolled
└── Messages:
    ├── Step 0: Subject: "Fill more tables..." (Send immediately)
    ├── Step 1: Subject: "Re: Fill more tables..." (Send after 5 days)
    └── Step 2: Subject: "Last one from me" (Send after 12 days)
```

#### Message Template Variables
All templates support these variables:
- `{{name}}` — contact name
- `{{business_name}}` — restaurant/company name
- `{{city}}` — contact city
- `{{owner_name}}` — AI-researched owner name (falls back to "there")
- `{{cuisine_type}}` — AI-researched cuisine
- `{{landing_page_url}}` — contact's LP URL
- `{{personalized_hook}}` — AI-researched personalized opening line
- `{{discount}}` — 25 or 50 (based on campaign config)

#### AI Copy Generation
- For each enrolled contact, AI generates a personalized version of each template
- Uses contact record + research summary as context
- Generated copy stored per `ContactCampaign` record
- Mike can review and edit before sending
- Bulk approve: "Send all generated copy for campaign X"

#### Campaign Flow
1. Create campaign → write message sequence → set delays
2. Add contacts (manual selection or filter-based)
3. AI generates personalized copy for all contacts
4. Mike reviews (optional) → approve
5. Messages sent on schedule via Resend
6. Replies tracked → update contact status automatically
7. Campaign stats update in real-time

#### Outreach Tracking
- **Sent:** Resend webhook confirms delivery
- **Opened:** Resend open tracking pixel
- **Replied:** Webhook from Resend (or manual mark)
- **Converted:** Manual update by Mike or Kato
- **Bounced/Failed:** Resend webhook → mark contact email invalid

---

### 8.5 Referral & Franchise Tracker

#### Overview
Tracks the entire referral tree: who invited whom, what type of referral it was, how much commission is owed, and whether it's been paid.

#### Referral Types
| Type | Referrer | Referee | Commission |
|------|----------|---------|------------|
| `MEMBER_INVITE` | Influencer | New reviewer member | Flat $ or % of membership |
| `FRANCHISE_SALE` | Influencer | Franchise buyer | % of franchise fee |
| `RESTAURANT_ADD` | $20 member | New restaurant join | Flat $ or discount |
| `OPERATOR_RECRUIT` | Master franchise | Sub-operator | % of territory fee |

#### Franchise Hierarchy
```
Master Franchise (owns entire country/region)
    ├── City Operator A (Bangkok)
    │   └── Revenue: $X/month from restaurants + members
    ├── City Operator B (Chiang Mai)
    └── City Operator C (Phuket)
```

Hierarchy stored as self-referential `Contact` relationships with `FranchiseHierarchy` join table.

#### Commission Calculations
- Commission rules stored in `CommissionRule` table (configurable rates)
- Calculated commissions stored in `Commission` table
- Status: `CALCULATED | APPROVED | PAID`
- Monthly commission summary report

#### Referral Tree Visualization
- `/referrals` page shows interactive tree using `reactflow` library
- Nodes: contacts, colored by type
- Edges: referral relationships
- Click node → see full contact detail + commission breakdown

---

### 8.6 AI Chat Interface

#### Overview
A full conversational chat interface inside the app. The AI has access to all database data through tool calls and can create/update records on Mike's behalf.

#### Chat Capabilities
The AI can:
- `search_contacts(query, filters)` — find contacts
- `get_contact(id)` — full contact detail
- `create_contact(data)` — add new prospect
- `update_contact(id, data)` — update any field
- `get_campaign_stats(id?)` — campaign performance
- `get_referral_summary()` — commission overview
- `generate_research(contactId)` — trigger research
- `generate_landing_page(contactId)` — trigger LP generation
- `generate_copy(contactId, template)` — write outreach copy
- `enroll_in_campaign(contactId, campaignId)` — add to campaign
- `get_dashboard_stats()` — high-level metrics
- `suggest_follow_ups()` — AI-generated priority follow-up list

#### Chat UI Requirements
- Streaming responses (word by word)
- Tool call indicators: "🔍 Searching contacts..." 
- Markdown rendering in responses
- Code blocks for structured data
- Persistent chat history (stored in DB by session)
- Clear/new chat button
- Copy response button on hover

#### Example Conversations
```
Mike: "Who are our warmest leads in Bangkok?"
AI: [calls search_contacts({city: "Bangkok", status: "INTERESTED"})]
AI: "You have 8 warm leads in Bangkok. The hottest: Som Tam House (last contacted 3 
     days ago, opened your email twice), and Gaggan Anand's new place (landed on the 
     LP 4 times this week, never replied). Want me to draft follow-ups for both?"

Mike: "Yes, send them."
AI: [calls generate_copy for both, then enroll_in_campaign]
AI: "Done. Both have personalized follow-ups queued for tomorrow morning. 
     I used their research profiles to reference specific details — Som Tam House 
     gets their slow Tuesday angle, Gaggan's gets the credibility play."
```

---

### 8.7 MCP Server

#### Overview
REST API endpoints that allow Kato (and any other AI agent) to interact with the Growth Engine. Token-authenticated. Full CRUD access to all core models.

See **MCP-SPEC.md** for complete endpoint documentation.

#### MCP Tools Summary
| Tool | Method | Path |
|------|--------|------|
| Get stats | GET | `/api/mcp/stats` |
| List contacts | GET | `/api/mcp/contacts` |
| Get contact | GET | `/api/mcp/contacts/:id` |
| Create contact | POST | `/api/mcp/contacts` |
| Update contact | PATCH | `/api/mcp/contacts/:id` |
| Trigger research | POST | `/api/mcp/contacts/:id/research` |
| Get research | GET | `/api/mcp/contacts/:id/research` |
| Generate landing page | POST | `/api/mcp/contacts/:id/landing-page` |
| List campaigns | GET | `/api/mcp/campaigns` |
| Create campaign | POST | `/api/mcp/campaigns` |
| Queue message | POST | `/api/mcp/outreach` |
| Get referrals | GET | `/api/mcp/referrals` |
| Run chat query | POST | `/api/mcp/chat` |

#### MCP Endpoint Schemas (Critical Paths)

**POST /api/mcp/contacts** — Create Contact
```
Request:
{
  "name": "string (required)",
  "businessName": "string (optional)",
  "type": "RESTAURANT | INFLUENCER | FRANCHISE | MEMBER (required)",
  "email": "string (optional)",
  "city": "string (required)",
  "country": "string (default: 'Thailand')",
  "website": "string (optional)",
  "phone": "string (optional)",
  "tags": "string (optional, comma-separated)",
  "source": "manual | scrape | referral | inbound (optional)",
  "priority": "LOW | MEDIUM | HIGH (optional, default: MEDIUM)",
  "notes": "string (optional)"
}
Response 201:
{
  "data": { "id": "string", "name": "string", "type": "string", "status": "COLD", "createdAt": "ISO8601" },
  "meta": { "action": "created" }
}
Error 400:
{ "error": { "code": "VALIDATION_ERROR", "message": "name is required", "statusCode": 400 } }
```

**POST /api/mcp/contacts/:id/research** — Trigger Research
```
Request: empty body (contact ID in URL)
Response 202:
{ "data": { "jobId": "string", "status": "QUEUED", "contactId": "string", "estimatedSeconds": 30 } }
Error 409:
{ "error": { "code": "RESEARCH_IN_PROGRESS", "message": "Research already queued", "statusCode": 409 } }
```

**GET /api/mcp/stats** — Dashboard Stats
```
Response 200:
{
  "data": {
    "contacts": { "total": 142, "byType": {...}, "byStatus": {...} },
    "campaigns": { "active": 3, "totalSent": 500, "openRate": 0.42, "replyRate": 0.12 },
    "research": { "completed": 95, "pending": 5, "failed": 2 },
    "landingPages": { "total": 60, "totalViews": 1200 },
    "referrals": { "totalChains": 25, "pendingCommission": 1500.00 }
  }
}
```

**POST /api/mcp/chat** — Run Chat Query
```
Request: { "message": "string (required)", "sessionId": "string (optional)" }
Response 200:
{
  "data": {
    "response": "string",
    "toolCalls": [{ "tool": "search_contacts", "args": {}, "result": {} }],
    "sessionId": "string"
  }
}
```

#### MCP Authentication
```
Authorization: Bearer <MCP_SECRET_TOKEN>
```
Returns `401` if missing. Returns `403` if token is valid but request is malformed.

---

### 8.8 Content Publishing

#### Content Types
- `BLOG_POST` — Long-form content for SEO/awareness
- `SOCIAL_CAPTION` — Instagram/TikTok captions
- `VIDEO_SCRIPT` — Short-form video scripts
- `EMAIL_TEMPLATE` — Reusable email templates
- `LANDING_PAGE_COPY` — Draft LP copy before generation

#### Content Features
- Create/edit with markdown editor
- Tag by campaign or contact
- Status: DRAFT | READY | PUBLISHED | ARCHIVED
- Copy to clipboard button
- Export as `.md` file
- AI assist: "Improve this" / "Make it shorter" / "More personal"

---

### 8.9 Dashboard

#### Metrics Panels
- **Pipeline Overview:** contacts by status (funnel view)
- **Today's Activity:** messages sent, opened, replied, new contacts
- **Warm Leads:** contacts with `INTERESTED` status sorted by last activity
- **Campaign Performance:** active campaigns with open/reply rates
- **Referral Revenue:** total commission tracked this month
- **AI Jobs:** pending research jobs, LP generations in queue

#### Quick Actions
- Add new contact (inline form)
- Start a campaign
- Open chat
- View today's follow-ups

---

### 8.10 Error Handling & Resilience

#### API Failure Policies

| External Service | Failure Mode | Behavior |
|-----------------|--------------|----------|
| OpenAI (research) | 429 rate limit | Exponential backoff: 2s, 4s, 8s, max 3 retries. Job → FAILED after exhausting retries. |
| OpenAI (chat) | 500/timeout | User-friendly error: "AI temporarily unavailable." No auto-retry. |
| OpenAI (voice) | WebRTC failure | Toast: "Voice connection failed." Fallback to text chat. |
| Resend (send) | 4xx/5xx | Outreach status → FAILED with reason. No auto-retry. Surface in campaign stats. |
| Resend (webhook) | Invalid signature | Return 401, log warning. Do not process. |
| Turso (DB) | Connection timeout | Return 503: "Database temporarily unavailable." Log with full context. |

#### Bulk Operation Failures
- Each job/email is independent. Partial failures return: `{ succeeded: N, failed: M, errors: [...] }`
- Failed items show retry buttons in UI.

#### Stale Job Cleanup
- Research jobs in PROCESSING >5 min → mark FAILED with "Timeout" reason.
- Cleanup piggybacks on `/api/mcp/stats` calls.

#### Circuit Breaker
- 5 consecutive OpenAI errors within 60s → pause research jobs for 5 min.
- Show banner: "AI research temporarily paused due to API issues."

---

### 8.11 Voice Chat Interface

#### Overview
Optional voice mode within the AI Chat. Mike presses a 🎙️ button to talk instead of type. Uses OpenAI Realtime API via WebRTC.

#### User Flow
1. Open `/chat` (text mode default)
2. Click 🎙️ in chat input area
3. Browser requests microphone permission
4. POST `/api/voice/session` → returns ephemeral token + SDP answer
5. Browser establishes WebRTC peer connection directly to OpenAI
6. Green "listening" indicator; Mike speaks naturally
7. AI responds via audio + text transcript in chat
8. Click 🎙️ again or Escape to end voice → returns to text
9. Auto-end after 30s silence

#### Voice Agent Tools
Same 12 tools as text chat. During tool execution AI says filler ("Let me look that up...").

#### /api/voice/session Endpoint
POST, NextAuth session cookie auth.
```
Request: { "model": "gpt-4o-realtime-preview" }
Response: { "sdpAnswer": "string", "sessionId": "string", "expiresAt": "ISO8601" }
```
Standard Node.js runtime. Session expires after 15 min inactivity.

#### Error States
| Error | Behavior |
|-------|----------|
| Mic permission denied | Toast + button stays inactive |
| WebRTC connection fails | Toast + auto-fallback to text |
| Session expires | Toast: "Reconnecting..." + auto-retry once |
| Realtime API unavailable | Mic button grayed out with tooltip |

---

## 9. Database Schema Overview

Full schema in **SCHEMA.md**. Key models:

| Model | Purpose |
|-------|---------|
| `Contact` | Core entity for all person/business records |
| `ResearchResult` | AI-generated research summary per contact |
| `ResearchJob` | Async job queue for research tasks |
| `LandingPage` | Generated LP content and analytics |
| `Campaign` | Outreach campaign container |
| `CampaignMessage` | Individual steps in a campaign sequence |
| `ContactCampaign` | Enrollment record — contact in campaign |
| `GeneratedCopy` | AI-personalized copy per contact per campaign step |
| `Outreach` | Individual sent/queued messages |
| `ReferralChain` | Who referred whom |
| `FranchiseHierarchy` | Master → operator relationships |
| `CommissionRule` | Configurable commission rates by referral type |
| `Commission` | Calculated commission per referral event |
| `Content` | Blog posts, captions, scripts |
| `ChatMessage` | Chat history per session |
| `Activity` | Audit log of all significant actions |

---

## 10. API Design

### Internal API (Next.js Route Handlers)
All under `/api/` — authenticated via NextAuth session cookie.

### MCP API
All under `/api/mcp/` — authenticated via Bearer token. Stateless. JSON in/out.

### Webhook Endpoints
- `/api/webhooks/resend` — receives email tracking events (sent/opened/clicked/bounced)

### Error Response Format (All APIs)
```json
{
  "error": {
    "code": "CONTACT_NOT_FOUND",
    "message": "No contact with id clx123",
    "statusCode": 404
  }
}
```

### Pagination Standard
All list endpoints use:
```json
{
  "data": [...],
  "pagination": {
    "total": 142,
    "limit": 20,
    "offset": 0,
    "hasMore": true
  }
}
```

---

## 11. UI/UX Requirements

### Design System
- **Color:** Dark sidebar, white main area (standard SaaS dashboard aesthetic)
- **Font:** Inter (system-ui fallback)
- **Spacing:** Tailwind defaults (4px grid)
- **Icons:** Lucide React
- **Brand accent:** Deep red (`#C0392B`) — MOBreviews red

### Layout
```
┌─────────────────────────────────────────────────────────┐
│ Top bar: MOBreviews Growth Engine    [User avatar] [⚙]  │
├──────────────┬──────────────────────────────────────────┤
│              │                                          │
│  Sidebar     │   Main Content Area                      │
│  - Dashboard │                                          │
│  - Contacts  │                                          │
│  - Campaigns │                                          │
│  - Chat      │                                          │
│  - Content   │                                          │
│  - Referrals │                                          │
│  - Settings  │                                          │
│              │                                          │
│  [Debug ⚙]  │                                          │
└──────────────┴──────────────────────────────────────────┘
```

### Responsive Requirements
- Desktop first (Mike primarily uses this on a Mac)
- Tablet: sidebar collapses to icon-only
- Mobile: not a v1 priority, but layout should not break

### Loading States
- Skeleton screens for data-heavy pages (contact list, dashboard)
- Spinner overlays for async actions (research trigger, LP generation)
- Toast notifications for: success, error, info events
- Optimistic UI updates where safe (status changes, notes)

### Empty States
Every empty list/section needs a meaningful empty state:
- Icon + heading + description + primary CTA
- Example: No contacts → "Add your first restaurant" → [+ Add Contact] button

---

## 12. MCP Server Spec

See **MCP-SPEC.md** for complete endpoint documentation with request/response examples.

### Kato OpenClaw Config (to add after build)
```json
{
  "mcp": {
    "servers": [{
      "name": "mob-reviews",
      "baseUrl": "https://[your-vercel-domain]/api/mcp",
      "token": "<MCP_SECRET_TOKEN>",
      "tools": ["get_stats", "list_contacts", "create_contact", "update_contact",
                "trigger_research", "generate_landing_page", "queue_message",
                "get_referrals", "run_chat"]
    }]
  }
}
```

---

## 13. Debug & Testing Tools

### Development Debug Panel

A collapsible debug panel available at the bottom of every page in `NODE_ENV=development`.

**Panel Contents:**
- Current session user
- Active DB connection status
- Last 5 Prisma queries with execution time
- Last API call made (method, path, status, latency)
- Environment variable check (shows ✅/❌ for each required var)
- Quick seed button: "Seed test data" → inserts 20 contacts across all types
- Quick wipe button: "Clear all data" → truncates all tables (dev only)
- MCP token tester: paste token → test auth → shows result

**Enable with:** `NEXT_PUBLIC_DEBUG_PANEL=true` in `.env.local`

### Seed Data
`/prisma/seed.ts` populates realistic test data:
- 10 restaurants (mix of types, statuses, cities)
- 5 influencers (mix of platforms, follower counts)
- 3 franchise prospects
- 2 members
- 2 campaigns with enrolled contacts
- 3 research results
- 2 landing pages
- Sample outreach history
- Sample referral chains
- Sample chat messages

Run with: `pnpm db:seed`

### API Testing Page
Internal route at `/debug/api` (dev only):
- Interactive form for every MCP endpoint
- Paste MCP token → test any endpoint
- Shows raw request and response
- Validates against expected schema

### Research Test Mode
`RESEARCH_TEST_MODE=true` — skips actual OpenAI calls, returns pre-baked JSON from `/prisma/fixtures/research-*.json`. Prevents burning tokens during UI development.

### Email Test Mode
`EMAIL_TEST_MODE=true` — Resend calls intercepted, emails logged to console instead of sent. Shows full email HTML in the debug panel.

### Database Inspector
Dev route at `/debug/db`:
- Lists all tables with row counts
- Click table → see first 20 rows
- Run raw SQL (dev only)
- Export table as JSON

### Logging
All significant events logged with structured JSON:
```
[timestamp] [level] [module] message {context}
```
Levels: `DEBUG | INFO | WARN | ERROR`  
Module tags: `[CRM] [RESEARCH] [LP] [CAMPAIGN] [MCP] [CHAT] [AUTH]`

Production logging via `console.log` → Vercel log drain (or Logtail in future).

### Automated Testing

#### Test Stack
- Unit/integration: Vitest
- E2E: Not required for v1

#### What to Test
| Layer | What | Min Coverage |
|-------|------|-------------|
| Zod schemas | All API input schemas | 100% of schemas |
| MCP endpoints | 13 endpoints: valid + invalid requests | 100% |
| Commission calc | All 4 referral types | All types |
| Slug generator | Collisions, special chars, unicode | 5+ cases |
| Research parser | Valid + malformed JSON | Happy + 2 errors |
| Auth middleware | Unauth, bad token, valid session | 3 scenarios |

#### CI Pipeline (`.github/workflows/ci.yml`)
- Trigger: push + PR
- Steps: checkout, pnpm install, `tsc --noEmit`, lint, test
- Node 20, pnpm

#### Commands
```
pnpm test        # run all tests
pnpm test:watch  # watch mode
pnpm test:cov    # coverage report
```

---

## 14. Security Requirements

### Authentication
- All app routes require valid NextAuth session
- Session expiry: 30 days with sliding window
- Single user for v1 — no invite/registration flow needed
- MCP endpoints use separate Bearer token auth (independent of session)

### Authorization
- v1: all authenticated users have full access (single-user app)
- MCP token stored in environment variable, never in DB or code

### Data Protection
- No PII stored beyond what's operationally necessary
- SQLite file should be in `.gitignore` (never committed)
- Environment variables never logged or exposed

### Rate Limiting
- MCP endpoints: 60 requests/min per token (return 429 with `Retry-After` header)
- Voice session creation: 10 requests/min per user

### CSRF Protection
- Next.js App Router provides built-in CSRF protection via `SameSite` cookies and origin checking for server actions. No additional middleware needed.

### Single-User Lockdown
- Google OAuth restricted to allowed emails via `ALLOWED_EMAILS` env var (comma-separated)
- Auth callback rejects any email not in the allowlist with a clear error message

### Input Validation
- All API inputs validated with Zod schemas
- All Prisma queries use parameterized inputs (no raw SQL with user input)
- MCP endpoint bodies validated with same Zod schemas as internal API

### Public Routes
Only `/lp/[slug]` routes are public. Everything else requires auth.

---

## 15. Environment & Configuration

### Required Environment Variables

```bash
# ─── DATABASE ───────────────────────────────────────────────────────
# Local development: use SQLite file (no Turso needed)
DATABASE_URL="file:./prisma/dev.db"
# Production (Vercel): Turso remote database
TURSO_DATABASE_URL="libsql://[your-db].turso.io"
TURSO_AUTH_TOKEN="<from Turso dashboard>"

# ─── NEXTAUTH (v4) ──────────────────────────────────────────────────
NEXTAUTH_SECRET="<random 32-char string — use: openssl rand -base64 32>"
NEXTAUTH_URL="http://localhost:3000"
# Production: NEXTAUTH_URL="https://[your-app].vercel.app"

# ─── GOOGLE OAUTH ───────────────────────────────────────────────────
# Create at: https://console.developers.google.com/
GOOGLE_CLIENT_ID="<from Google Console>"
GOOGLE_CLIENT_SECRET="<from Google Console>"
# Authorized redirect URIs must include:
# http://localhost:3000/api/auth/callback/google
# https://[your-app].vercel.app/api/auth/callback/google

# ─── OPENAI ─────────────────────────────────────────────────────────
OPENAI_API_KEY="<from https://platform.openai.com/api-keys>"
# Used for: text chat (gpt-4o), research (gpt-4o), copy gen, voice session tokens (gpt-realtime)

# ─── RESEND ─────────────────────────────────────────────────────────
RESEND_API_KEY="<from https://resend.com/api-keys>"
RESEND_FROM_EMAIL="mike@[your-domain].com"
# Production: must be a verified domain in Resend
# Resend webhook secret (for tracking events)
RESEND_WEBHOOK_SECRET="<from Resend webhook settings>"

# ─── ACCESS CONTROL ─────────────────────────────────────────────────
ALLOWED_EMAILS="mike@example.com"
# Comma-separated list of Google emails allowed to sign in

# ─── MCP SERVER ─────────────────────────────────────────────────────
MCP_SECRET_TOKEN="<random 64-char string — use: openssl rand -base64 48>"

# ─── DEBUG (development only — do not set in production) ────────────
NEXT_PUBLIC_DEBUG_PANEL="true"
RESEARCH_TEST_MODE="true"    # skips OpenAI calls, uses fixture data
EMAIL_TEST_MODE="true"       # skips Resend, logs to console
VOICE_TEST_MODE="true"       # skips WebRTC session init
```

### Environment Variable Notes
- `DATABASE_URL` is used locally; in production Vercel uses `TURSO_DATABASE_URL` + `TURSO_AUTH_TOKEN`
- Prisma client detects environment: if `TURSO_DATABASE_URL` is set, uses Turso adapter; otherwise uses local SQLite
- `NEXT_PUBLIC_*` variables are exposed to the browser — never put secrets there
- `NEXTAUTH_URL` must exactly match the deployed URL (no trailing slash)
- Google OAuth must have both local and production redirect URIs registered

### `.env.example` file must be committed with all keys present but empty values.

---

## 16. Build Phases & Milestones

### Phase 0: Project Setup (Day 1 — 30 min)
- [ ] Create GitHub repo: `mob-reviews-growth-engine`
- [ ] Initialize Next.js 14 with TypeScript + Tailwind + App Router
- [ ] Install and configure: Prisma, NextAuth, shadcn/ui, Vercel AI SDK, Resend, Zod
- [ ] Set up `.env.example` and `.env.local`
- [ ] Deploy skeleton to Vercel (empty app, just to confirm pipeline works)
- [ ] Push initial commit

**Done when:** `vercel --prod` succeeds, app is live at Vercel URL

### Phase 1: Database + Auth (Day 1 — 1 hour)
- [ ] Write full Prisma schema (see SCHEMA.md)
- [ ] Run `prisma migrate dev --name init`
- [ ] Configure NextAuth with Google provider
- [ ] Build auth middleware (protect all routes except `/lp/*` and `/api/mcp/*`)
- [ ] Login page: single "Sign in with Google" button
- [ ] Write seed script (`prisma/seed.ts`)
- [ ] Test: sign in with Google, verify session, run `pnpm db:seed`

**Done when:** Login works, seed data visible in DB

### Phase 2: Contact CRM (Day 1-2 — 2 hours)
- [ ] `/contacts` — list page with search, filters, sort, pagination
- [ ] `/contacts/new` — create contact form (all fields, all types)
- [ ] `/contacts/[id]` — detail page with all tabs
- [ ] Internal API: GET/POST/PATCH/DELETE `/api/contacts`
- [ ] Bulk actions: status update, add to campaign, export CSV
- [ ] Activity log: auto-log every status change and note

**Done when:** Can create, edit, filter, and view all contact types

### Phase 3: AI Research Engine (Day 2 — 1.5 hours)
- [ ] Research prompt builder per contact type
- [ ] OpenAI call with structured JSON output
- [ ] `ResearchJob` queue (simple DB-backed queue with polling)
- [ ] Research result display on contact detail page
- [ ] Research test mode (fixture data, no API calls)
- [ ] Bulk research trigger

**Done when:** Create a restaurant contact, click "Research" → research summary appears within 30 seconds

### Phase 4: Landing Page Generator (Day 2-3 — 1.5 hours)
- [ ] LP generation prompt per contact type
- [ ] Slug generator (collision-safe)
- [ ] `/lp/[slug]` — public page with full content
- [ ] LP analytics tracking (views, CTA clicks)
- [ ] LP display tab on contact detail page
- [ ] LP test mode (fixture content, no API calls)

**Done when:** Generate LP for a restaurant contact → shareable URL works publicly → view count increments

### Phase 5: Outreach Campaigns (Day 3 — 2 hours)
- [ ] `/campaigns` — list with stats
- [ ] `/campaigns/new` — create campaign with message sequence builder
- [ ] `/campaigns/[id]` — detail with enrolled contacts, performance
- [ ] AI copy generation per enrolled contact
- [ ] Email sending via Resend
- [ ] Resend webhook handling (open/click/bounce tracking)
- [ ] Email test mode

**Done when:** Create campaign → add contacts → AI generates copy → emails send → opens tracked

### Phase 6: AI Chat Interface (Day 3-4 — 1.5 hours)
- [ ] `/chat` — full-page chat UI with streaming
- [ ] Vercel AI SDK setup with tool definitions
- [ ] All 12 chat tools implemented and tested
- [ ] Chat history persistence (DB-backed)
- [ ] Tool call indicators in UI
- [ ] Markdown rendering

**Done when:** Can have a full conversation that creates a contact, triggers research, and generates a LP

### Phase 7: MCP Server (Day 4 — 1.5 hours)
- [ ] Bearer token auth middleware
- [ ] All 13 MCP endpoints (see MCP-SPEC.md)
- [ ] Zod validation on all inputs
- [ ] API test page at `/debug/api`
- [ ] Test every endpoint with real data
- [ ] Document in MCP-SPEC.md with examples

**Done when:** Kato can call `GET /api/mcp/stats` from Telegram and get real data

### Phase 8: Referral & Franchise Tracker (Day 4-5 — 1.5 hours)
- [ ] Referral chain creation and display
- [ ] Franchise hierarchy management
- [ ] Commission calculation engine
- [ ] `/referrals` — tree visualization
- [ ] Commission summary report

**Done when:** Can track influencer → member referral and see commission calculated

### Phase 9: Content Publisher (Day 5 — 1 hour)
- [ ] `/content` — list with type filters
- [ ] Create/edit with markdown editor
- [ ] AI assist (improve/shorten/personalize)
- [ ] Export as `.md`
- [ ] Tag to contacts/campaigns

**Done when:** Can write, save, and export a blog post with AI assist

### Phase 10: Debug Tools (Day 5 — 1 hour)
- [ ] Debug panel component (collapsible, dev only)
- [ ] `/debug/api` — MCP testing page
- [ ] `/debug/db` — database inspector
- [ ] Structured logging throughout all modules
- [ ] Verify all test modes work

**Done when:** Can seed, clear, and inspect all data from debug UI

### Phase 11: GitHub Pages Site (Day 5-6 — 1 hour)
- [ ] `/docs` folder with static HTML/CSS site
- [ ] 5 tabs: Research | Campaign Strategy | App Overview | Templates | Next Steps
- [ ] Enable GitHub Pages on repo
- [ ] Verify shareable link works

**Done when:** Public URL at `https://[username].github.io/mob-reviews-growth-engine` is live and all tabs render

### Phase 12: Production Deploy (Day 6 — 30 min)
- [ ] All environment variables set in Vercel dashboard
- [ ] Google OAuth redirect URIs updated for production domain
- [ ] Database persistence configured (Vercel volume or migrate to Neon)
- [ ] `vercel --prod` deploy
- [ ] Smoke test all features on production URL

**Done when:** All features work at production Vercel URL. Kato MCP config updated.

---

## 17. Acceptance Criteria

### Must Pass Before "Done"

| # | Scenario | Expected Result |
|---|----------|-----------------|
| 1 | Create a restaurant contact with just a name and website | Contact created, visible in list |
| 2 | Trigger research on that contact | Research summary appears within 60 seconds |
| 3 | Generate landing page for that contact | Public URL accessible, content personalized |
| 4 | Create campaign, add contact, generate copy | Personalized email copy generated |
| 5 | Send email to contact via campaign | Email arrives, tracked by Resend |
| 6 | Open email → open rate updates | Campaign stats show 1 open |
| 7 | Kato calls `GET /api/mcp/stats` via curl | Returns accurate JSON stats |
| 8 | Kato calls `POST /api/mcp/contacts` to add contact | Contact appears in app |
| 9 | Chat: "Who are my warmest leads?" | Returns list with correct status filter |
| 10 | Chat: "Generate a landing page for [contact name]" | LP generated, URL returned |
| 11 | Add referral chain: influencer → new member | Chain visible in referral tracker |
| 12 | Debug panel opens in development | Shows DB status, last queries, env check |
| 13 | Seed script runs clean | 20+ test contacts visible, no errors |
| 14 | Production deploy | All above tests pass at vercel URL |
| 15 | Research fails (OpenAI down) | Job shows FAILED status with reason and Retry button |
| 16 | MCP call with invalid Bearer token | Returns 401 JSON error, no data leaked |
| 17 | Campaign email bounces | Contact email marked invalid, bounce surfaced in campaign stats |
| 18 | Voice: mic permission denied | Toast shown, 🎙️ button stays inactive, text chat unaffected |

---

## 18. Open Decisions

These require Mike's input before or during build:

| # | Decision | Options | Default |
|---|----------|---------|---------|
| 1 | Primary AI provider | OpenAI GPT-4o / Anthropic Claude / Both | OpenAI |
| 2 | Vercel account | New account / Existing account | New |
| 3 | Production domain | Custom domain / Vercel subdomain | Vercel subdomain |
| 4 | Email from address | What address for outreach emails? | TBD |
| 5 | Research test mode default | ON (no API charges) / OFF (real research) | ON for build |
| 6 | Commission rates | % per referral type | TBD — placeholder 10% |

---

## 19. Appendix

### Related Documents
- `SCHEMA.md` — Full Prisma schema with all models and enums
- `ARCHITECTURE.md` — System architecture, directory structure, data flows
- `MCP-SPEC.md` — Complete MCP server API documentation
- `OUTREACH-TEMPLATES.md` — Email/DM templates for all contact types
- `RESEARCH-PROMPTS.md` — 5 ChatGPT Pro research prompts
- `DEVLOG.md` — Development changelog and progress tracker
- `NEXT-STEPS.md` — Build roadmap and current status

### Glossary
| Term | Definition |
|------|-----------|
| MOB reviewer | A paying member of the MOBreviews network |
| Reveal moment | When a reviewer reveals themselves to the restaurant via app to claim discount |
| Bell-curve reviews | Review system that prevents all-5-star inflation |
| Stack ranking | Personal ordered list of favorite restaurants (not star ratings) |
| We Improved | Feature allowing restaurants to announce changes and restart their review cycle |
| Business-in-a-box | MOBreviews territory franchise packaged as a complete operating business |
| Master franchise | Top-tier franchise holder with rights over a region and sub-operators |
| LP | Landing page (personalized, auto-generated per prospect) |
| MCP | Model Context Protocol — API for AI agents to call the app |
| Kato | AI co-founder operating this Telegram channel |
