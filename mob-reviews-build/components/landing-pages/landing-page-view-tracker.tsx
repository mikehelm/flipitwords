"use client";

import { useEffect } from "react";

export function LandingPageViewTracker({ landingPageId }: { landingPageId: string }) {
  useEffect(() => {
    const start = Date.now();

    fetch(`/api/landing-pages/${landingPageId}/track`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ view: true })
    });

    const onBeforeUnload = () => {
      const seconds = Math.max(1, Math.round((Date.now() - start) / 1000));
      navigator.sendBeacon(
        `/api/landing-pages/${landingPageId}/track`,
        JSON.stringify({ timeOnPage: seconds })
      );
    };

    window.addEventListener("beforeunload", onBeforeUnload);
    return () => window.removeEventListener("beforeunload", onBeforeUnload);
  }, [landingPageId]);

  return null;
}
