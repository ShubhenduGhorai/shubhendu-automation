import type { PricingPlan } from "../types";

export const maintenancePlan: PricingPlan = {
  title: "Maintenance Plan",
  shortDescription:
    "Ongoing care so your website and automations stay fast, secure, and up to date. Monthly checks, updates, and small tweaks.",
  price: "₹799",
  priceNote: "per month · 20% off from ₹999/month",
  comingSoon: false,
  badge: "20% off",
  deliveryTime: "Ongoing · first report within 7 days",
  guarantee: "Cancel anytime. No lock-in, no questions asked.",
  testimonial: {
    quote: "I don't think about updates or backups anymore. One less thing to worry about.",
    author: "Agency owner",
    role: "Multiple client sites",
  },
  idealFor: [
    "Anyone with a site or automation already",
    "Busy owners who want set-and-forget",
    "Teams without a dedicated dev",
  ],
  features: [
    "Monthly updates for core software and security patches",
    "Monitoring of key automations and uptime",
    "Small content or copy changes (e.g. 2–3 edits per month)",
    "Backup checks and quick restore if needed",
    "Performance and speed checks",
    "Priority support for urgent issues",
  ],
  whoItsFor:
    "Anyone who already has a website or automation built by me (or a similar stack) and wants peace of mind without managing updates and monitoring themselves. Ideal for busy owners who prefer a fixed monthly cost.",
  processSteps: [
    {
      step: 1,
      title: "Onboarding",
      description:
        "I review your current site and automations, note logins and contacts, and set up monitoring.",
    },
    {
      step: 2,
      title: "Monthly cycle",
      description:
        "Each month: updates, backup check, and a short report. You can request small changes via email or a simple form.",
    },
    {
      step: 3,
      title: "Ongoing support",
      description:
        "You get priority for bugs and urgent fixes. We can add one-off projects (e.g. new pages) separately.",
    },
  ],
  faqs: [
    {
      q: "What counts as a 'small change'?",
      a: "Typical examples: updating text or images, adding a new section to a page, or tweaking form fields. Larger redesigns or new automations are quoted separately.",
    },
    {
      q: "Can I pause or cancel anytime?",
      a: "Yes. You can cancel at the end of any billing month. No long-term lock-in.",
    },
    {
      q: "Do you support sites or automations built by someone else?",
      a: "Sometimes. If the stack is something I work with (e.g. Next.js, common no-code tools), I can take it on. We'll do a quick review first to confirm.",
    },
  ],
};
