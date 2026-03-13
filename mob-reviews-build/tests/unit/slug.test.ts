import { describe, expect, it } from "vitest";

function normalize(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

describe("slug normalize", () => {
  it("normalizes mixed chars", () => {
    expect(normalize("Som Tam House Bangkok")).toBe("som-tam-house-bangkok");
  });

  it("trims dashes", () => {
    expect(normalize("***Hello***")).toBe("hello");
  });

  it("falls back empty", () => {
    expect(normalize("!!!")).toBe("");
  });
});
