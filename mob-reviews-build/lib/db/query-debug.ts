import { prisma } from "@/lib/db/prisma";

export type QueryLog = {
  timestamp: string;
  query: string;
  durationMs: number;
};

const queryLogs: QueryLog[] = [];

prisma.$on("query" as never, (e: any) => {
  queryLogs.unshift({
    timestamp: new Date().toISOString(),
    query: e.query,
    durationMs: e.duration
  });
  if (queryLogs.length > 5) {
    queryLogs.pop();
  }
});

export function getRecentQueries() {
  return queryLogs;
}
