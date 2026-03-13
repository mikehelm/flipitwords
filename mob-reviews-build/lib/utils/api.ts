import { NextResponse } from "next/server";

export function ok<T>(data: T, init?: ResponseInit) {
  return NextResponse.json({ data }, init);
}

export function paginated<T>(data: T[], total: number, limit: number, offset: number, init?: ResponseInit) {
  return NextResponse.json(
    {
      data,
      pagination: {
        total,
        limit,
        offset,
        hasMore: offset + limit < total
      }
    },
    init
  );
}

export function apiError(code: string, message: string, statusCode: number) {
  return NextResponse.json(
    {
      error: {
        code,
        message,
        statusCode
      }
    },
    { status: statusCode }
  );
}
