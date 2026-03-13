import { describe, expect, it } from "vitest";

import { requireMcpAuth } from "../../lib/mcp/auth";

describe("mcp auth", () => {
  it("rejects missing token", () => {
    const req = new Request("http://localhost/api/mcp/stats");
    const res = requireMcpAuth(req as any);
    expect(res?.status).toBe(401);
  });
});
