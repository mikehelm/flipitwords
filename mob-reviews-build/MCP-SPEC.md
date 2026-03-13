# MCP-SPEC.md

Base path: `/api/mcp`
Auth: `Authorization: Bearer <MCP_SECRET_TOKEN>`

## Endpoints
- `GET /stats`
- `GET /contacts`
- `POST /contacts`
- `GET /contacts/:id`
- `PATCH /contacts/:id`
- `GET /contacts/:id/research`
- `POST /contacts/:id/research`
- `POST /contacts/:id/landing-page`
- `GET /campaigns`
- `POST /campaigns`
- `POST /outreach`
- `GET /referrals`
- `POST /chat`

All endpoints return JSON using `{ data }` or `{ error: { code, message, statusCode } }`.
