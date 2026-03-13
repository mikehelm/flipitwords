export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/((?!api/mcp|api/auth|lp/|_next/static|_next/image|favicon.ico).*)"]
};
