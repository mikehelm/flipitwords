"use client";

import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function SignInCard() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>MOBreviews Growth Engine</CardTitle>
        <CardDescription>Sign in with your allowed Google account.</CardDescription>
      </CardHeader>
      <CardContent>
        <Button className="w-full" onClick={() => signIn("google", { callbackUrl: "/dashboard" })}>
          Sign in with Google
        </Button>
      </CardContent>
    </Card>
  );
}
