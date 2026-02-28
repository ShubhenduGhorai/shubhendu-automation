import type { PricingPlan } from "../types";

export const automationSetup: PricingPlan = {
  title: "Automation Setup",
  shortDescription:
    "End-to-end automations that capture leads and follow up for you. Website to WhatsApp, AI chatbot, and basic dashboards.",
  price: "Coming soon",
  priceNote: "Price not decided yet. Get in touch for early access.",
  comingSoon: true,
  features: [
    "Website → WhatsApp or email lead flows so no lead is missed",
    "AI chatbot for FAQs, booking, and contact capture",
    "Basic dashboards and notification flows",
    "Lead qualification and CRM-friendly data",
    "Follow-up sequences and reminders",
    "Integration with your existing tools where possible",
  ],
  whoItsFor:
    "Businesses that get a steady flow of enquiries and want to respond faster, qualify leads automatically, and reduce manual follow-up. Best when you already have (or are getting) a website and want to connect it to WhatsApp or email automation.",
  processSteps: [
    {
      step: 1,
      title: "Discovery & scope",
      description:
        "We map your current flow, where leads drop off, and what can be automated (forms, WhatsApp, chatbot).",
    },
    {
      step: 2,
      title: "Build & test",
      description:
        "I build the flows and bot, then we test with real scenarios and your team.",
    },
    {
      step: 3,
      title: "Launch & handover",
      description:
        "We go live, monitor for a short period, and I hand over access and simple docs.",
    },
  ],
  faqs: [
    {
      q: "When will pricing be available?",
      a: "Pricing is still being finalised. Contact me for early access and I'll share options and a custom quote based on your needs.",
    },
    {
      q: "Do I need a website first?",
      a: "It helps to have a site or landing page where leads come in, but we can also start from WhatsApp or a simple form. We'll decide in the discovery call.",
    },
    {
      q: "What platforms do you integrate with?",
      a: "Common setups include WhatsApp, email, Google Sheets, and simple CRMs. I'll confirm what's possible for your stack during discovery.",
    },
  ],
};
