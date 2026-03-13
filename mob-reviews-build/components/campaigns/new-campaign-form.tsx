"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function NewCampaignForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function onSubmit(formData: FormData) {
    setLoading(true);

    const payload = {
      name: String(formData.get("name") || ""),
      targetType: String(formData.get("targetType") || "RESTAURANT"),
      discount: Number(formData.get("discount") || 25),
      messages: [
        {
          stepIndex: 0,
          delayDays: 0,
          subject: String(formData.get("subject") || ""),
          body: String(formData.get("body") || "")
        }
      ]
    };

    const response = await fetch("/api/campaigns", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      const json = await response.json();
      router.push(`/campaigns/${json.data.id}`);
      return;
    }

    setLoading(false);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Campaign</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={onSubmit} className="grid gap-4">
          <Input name="name" placeholder="Bangkok Restaurant Wave 1" required />
          <select name="targetType" className="h-10 rounded-md border px-3">
            <option value="RESTAURANT">Restaurant</option>
            <option value="INFLUENCER">Influencer</option>
            <option value="FRANCHISE">Franchise</option>
            <option value="MEMBER">Member</option>
          </select>
          <Input name="discount" placeholder="25" defaultValue="25" type="number" />
          <Input name="subject" placeholder="Subject template" required />
          <Textarea name="body" placeholder="Hi {{name}}, {{personalized_hook}}" required />
          <Button type="submit" disabled={loading}>
            {loading ? "Creating..." : "Create"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
