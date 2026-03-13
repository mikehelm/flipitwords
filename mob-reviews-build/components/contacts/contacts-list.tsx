"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type Contact = {
  id: string;
  name: string;
  businessName?: string | null;
  type: string;
  status: string;
  city: string;
  hasSummary: boolean;
};

export function ContactsList() {
  const [query, setQuery] = useState("");
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (query) params.set("q", query);

    fetch(`/api/contacts?${params.toString()}`)
      .then((res) => res.json())
      .then((data) => setContacts(data.data ?? []));
  }, [query]);

  const rows = useMemo(() => contacts, [contacts]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search contacts..." className="max-w-xs" />
        <Button asChild>
          <Link href="/contacts/new">Add Contact</Link>
        </Button>
      </div>
      <div className="rounded-lg border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>City</TableHead>
              <TableHead>Research</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((contact) => (
              <TableRow key={contact.id}>
                <TableCell>
                  <div className="font-medium">{contact.businessName ?? contact.name}</div>
                  <div className="text-xs text-muted-foreground">{contact.name}</div>
                </TableCell>
                <TableCell>{contact.type}</TableCell>
                <TableCell>
                  <Badge variant="outline">{contact.status}</Badge>
                </TableCell>
                <TableCell>{contact.city}</TableCell>
                <TableCell>{contact.hasSummary ? "Yes" : "No"}</TableCell>
                <TableCell>
                  <Button asChild variant="link" className="h-auto px-0">
                    <Link href={`/contacts/${contact.id}`}>Open</Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
