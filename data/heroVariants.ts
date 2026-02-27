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
}

export const heroVariants: HeroVariant[] = [
  {
    id: 0,
    name: "Is this site legit?",
    kicker: "Before you trust it",
    headline: "Is this site legit?",
    subheadline: "Flip it for warnings and real experiences.",
    supportLine: "Stop playing detective.",
    bullets: [
      "Scam flags in context",
      "Notes from real people",
      "Share a Flip Card"
    ],
    primaryCtaText: "Add to Chrome",
    secondaryCtaText: "See demo",
    microcopy: "Businesses can respond. They can't remove what people say."
  },
  {
    id: 1,
    name: "Control (current)",
    headline: "Flip any page. See what's real.",
    subheadline: "Independent reviews and warnings, on the page you're viewing.",
    supportLine: "No separate website. No search required.",
    bullets: [
      "Flag scams and suspicious behavior",
      "See what people experienced on this exact page",
      "Ask questions and share receipts"
    ],
    primaryCtaText: "Add to Chrome",
    secondaryCtaText: "See demo",
    microcopy: "No separate website. No search required."
  },
  {
    id: 2,
    name: "Controversy (spicy back layer)",
    kicker: "The Back of the Internet",
    headline: "The back of the internet is spicy.",
    subheadline: "Receipts, drama, and warnings on this page.",
    supportLine: "Flip it. See what people really say.",
    bullets: [
      "Receipts show up fast",
      "Warnings travel with the page",
      "Share the back layer"
    ],
    primaryCtaText: "Add to Chrome",
    secondaryCtaText: "See demo",
    microcopy: "Businesses can respond. They can't remove what people say."
  },
  {
    id: 3,
    name: "Deleted truth",
    kicker: "Deleted elsewhere?",
    headline: "If it got deleted, flip it.",
    subheadline: "Truth sticks on the back layer.",
    supportLine: "Post what platforms remove.",
    bullets: [
      "Recovered deleted reviews",
      "Receipts welcome",
      "Public replies allowed"
    ],
    primaryCtaText: "Add to Chrome",
    secondaryCtaText: "See demo",
    microcopy: "Businesses can respond. They can't remove what people say."
  },
  {
    id: 4,
    name: "Fake reviews",
    kicker: "Shopping?",
    headline: "Fake reviews are everywhere.",
    subheadline: "Flip any page. Read the real ones.",
    supportLine: "What's real, not what's sold.",
    bullets: [
      "Spot review manipulation",
      "Read the bad first",
      "Decide faster"
    ],
    primaryCtaText: "Add to Chrome",
    secondaryCtaText: "See demo",
    microcopy: "Businesses can respond. They can't remove what people say."
  },
  {
    id: 5,
    name: "Participate early",
    kicker: "Early matters",
    headline: "Trust is built in public.",
    subheadline: "Users post receipts. Brands can respond.",
    supportLine: "Participate early. Earn credibility.",
    bullets: [
      "User-aligned back layer",
      "Brand replies stay visible",
      "Trust forms early"
    ],
    primaryCtaText: "Add to Chrome",
    secondaryCtaText: "See demo",
    microcopy: "Businesses can respond. They can't remove what people say."
  }
];
