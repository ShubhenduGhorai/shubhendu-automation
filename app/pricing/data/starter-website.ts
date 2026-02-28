import type { PricingPlan } from "../types";

export const starterWebsite: PricingPlan = {
  title: "Starter Website",
  shortDescription:
    "A clean, fast website to get your business online quickly. Mobile-friendly, modern design, and contact form included.",
  price: "₹4,999",
  priceNote: "One-time · 50% off from ₹9,999",
  comingSoon: false,
  badge: "50% off",
  deliveryTime: "5–7 working days",
  guarantee: "2 weeks of free revisions after launch. Not happy? We fix it.",
  testimonial: {
    quote: "Got my site live in under a week. Clean, fast, and I get leads on the form every week.",
    author: "Small business owner",
    role: "Local services",
  },
  idealFor: [
    "Freelancers & solo consultants",
    "Local shops & services",
    "Startups validating an idea",
  ],
  features: [
    "One-page or basic multi-page site tailored to your business",
    "Fully responsive, mobile-first design",
    "Contact or enquiry form with email notifications",
    "Fast loading and SEO-friendly structure",
    "Basic analytics (e.g. Google Analytics) setup",
    "Free minor content updates for 2 weeks after launch",
  ],
  whoItsFor:
    "Small businesses, freelancers, and local services who need a professional online presence without a large budget. Ideal if you want to capture leads and show what you offer without complex features.",
  processSteps: [
    {
      step: 1,
      title: "Brief & content",
      description:
        "You share your logo, text, and any reference links. I set up the structure and design.",
    },
    {
      step: 2,
      title: "Review & revise",
      description:
        "You get a preview link and feedback rounds. We polish until you're happy.",
    },
    {
      step: 3,
      title: "Go live",
      description:
        "I connect your domain (or suggest one), launch the site, and hand over access.",
    },
  ],
  faqs: [
    {
      q: "How long does it take to get my site live?",
      a: "Usually 5–7 working days from the day you share content and confirm the design. Rush delivery can be discussed for an extra fee.",
    },
    {
      q: "Do I need to buy hosting separately?",
      a: "Hosting is not included in the one-time price. I can set up and manage affordable hosting for you, or you can use your own; I'll guide you either way.",
    },
    {
      q: "Can I update the content myself later?",
      a: "Yes. I build the site so you can edit text and images via a simple dashboard, or I can do updates as part of a maintenance plan.",
    },
  ],
};
