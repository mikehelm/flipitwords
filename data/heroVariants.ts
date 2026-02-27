export interface HeroVariant {
  id: number;
  name: string;
  kicker?: string;
  headline: string;
  subheadline: string;
  supportLine?: string;
  bullets: [string, string, string];
  primaryCtaText: string;
  secondaryCtaText: string;
  microcopy: string;
  trustCue?: string;
}

export const heroVariants: HeroVariant[] = [
  {
    id: 0,
    name: "Is this site legit?",
    kicker: "Before you trust it",
    headline: "Is this site legit?",
    subheadline: "Flip it for warnings and real experiences, right here.",
    supportLine: "Stop playing detective.",
    bullets: [
      "Scam flags in context",
      "Notes from real people",
      "Share a warning card"
    ],
    primaryCtaText: "Add to Chrome",
    secondaryCtaText: "See it in action",
    microcopy: "Businesses can reply. Feedback stays visible.",
    trustCue: "Minimal permissions"
  },
  {
    id: 1,
    name: "Control (improved)",
    headline: "Flip any page. See what's real.",
    subheadline: "Independent reviews and warnings, on the page you're viewing.",
    supportLine: "No separate website. No search required.",
    bullets: [
      "Warning flags",
      "Real experiences",
      "Share receipts"
    ],
    primaryCtaText: "Add to Chrome",
    secondaryCtaText: "See it in action",
    microcopy: "Businesses can reply. Feedback stays visible.",
    trustCue: "Minimal permissions"
  },
  {
    id: 2,
    name: "Receipts (rebranded)",
    kicker: "The Back of the Internet",
    headline: "The back of the internet has receipts.",
    subheadline: "Evidence and warnings on this page.",
    supportLine: "Flip it. See what people really say.",
    bullets: [
      "Receipts show up fast",
      "Warnings travel with the page",
      "Share the back layer"
    ],
    primaryCtaText: "Add to Chrome",
    secondaryCtaText: "See it in action",
    microcopy: "Receipts welcome. No doxxing. Community rules apply.",
    trustCue: "Minimal permissions"
  },
  {
    id: 3,
    name: "Deleted truth",
    kicker: "Deleted elsewhere?",
    headline: "If it got deleted, flip it.",
    subheadline: "See what got removed. Truth sticks on the back layer.",
    supportLine: "Replies stay visible.",
    bullets: [
      "Recovered deleted reviews",
      "Receipts welcome",
      "Public replies allowed"
    ],
    primaryCtaText: "Add to Chrome",
    secondaryCtaText: "See it in action",
    microcopy: "Businesses can reply. Feedback stays visible.",
    trustCue: "Minimal permissions"
  },
  {
    id: 4,
    name: "Fake reviews",
    kicker: "Shopping?",
    headline: "Fake reviews are easy to buy.",
    subheadline: "Flip this page. Read the real ones.",
    supportLine: "What's real, not what's sold.",
    bullets: [
      "Spot manipulation",
      "Read the bad first",
      "Decide faster"
    ],
    primaryCtaText: "Add to Chrome",
    secondaryCtaText: "See it in action",
    microcopy: "Businesses can reply. Feedback stays visible.",
    trustCue: "Minimal permissions"
  },
  {
    id: 5,
    name: "Participate early",
    kicker: "Early matters",
    headline: "Trust is built in public.",
    subheadline: "Flip any page. Users post receipts. Brands can respond.",
    supportLine: "Participate early. Earn credibility.",
    bullets: [
      "User-aligned layer",
      "Brand replies visible",
      "Trust forms early"
    ],
    primaryCtaText: "Add to Chrome",
    secondaryCtaText: "See it in action",
    microcopy: "Businesses can reply. Feedback stays visible.",
    trustCue: "Minimal permissions"
  }
];
