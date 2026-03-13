"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function NewContactForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function onSubmit(formData: FormData) {
    setLoading(true);
    const payload = {
      name: String(formData.get("name") || ""),
      businessName: String(formData.get("businessName") || "") || null,
      type: String(formData.get("type") || "RESTAURANT"),
      city: String(formData.get("city") || ""),
      country: String(formData.get("country") || "Thailand"),
      website: String(formData.get("website") || "") || null,
      email: String(formData.get("email") || "") || null,
      notes: String(formData.get("notes") || "") || null
    };

    const res = await fetch("/api/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      const data = await res.json();
      router.push(`/contacts/${data.data.id}`);
      return;
    }

    setLoading(false);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Contact</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={onSubmit} className="grid gap-4 md:grid-cols-2">
          <Input name="name" placeholder="Full name" required />
          <Input name="businessName" placeholder="Business name" />
          <select name="type" className="h-10 rounded-md border px-3">
            <option value="RESTAURANT">Restaurant</option>
            <option value="INFLUENCER">Influencer</option>
            <option value="FRANCHISE">Franchise</option>
            <option value="MEMBER">Member</option>
          </select>
          <Input name="city" placeholder="City" required />
          <Input name="country" placeholder="Country" defaultValue="Thailand" />
          <Input name="website" placeholder="Website" />
          <Input name="email" placeholder="Email" type="email" />
          <Textarea name="notes" placeholder="Notes" className="md:col-span-2" />
          <div className="md:col-span-2">
            <Button type="submit" disabled={loading}>
              {loading ? "Creating..." : "Create contact"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
