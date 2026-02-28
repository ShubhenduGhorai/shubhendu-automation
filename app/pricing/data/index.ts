import type { PricingPlan } from "../types";
import { starterWebsite } from "./starter-website";
import { automationSetup } from "./automation-setup";
import { maintenancePlan } from "./maintenance-plan";

export const PAYMENT_LINKS = {
  "starter-website": "https://rzp.io/l/YOUR_LINK_1",
  "automation-setup": "https://rzp.io/l/YOUR_LINK_2",
  "maintenance-plan": "https://rzp.io/l/YOUR_LINK_3",
} as const;

export const VALID_SLUGS = [
  "starter-website",
  "automation-setup",
  "maintenance-plan",
] as const;

export type Slug = (typeof VALID_SLUGS)[number];

export const pricingData: Record<Slug, PricingPlan> = {
  "starter-website": starterWebsite,
  "automation-setup": automationSetup,
  "maintenance-plan": maintenancePlan,
};

export function getPricingBySlug(slug: string): PricingPlan | null {
  if (!VALID_SLUGS.includes(slug as Slug)) return null;
  return pricingData[slug as Slug];
}

export function isValidSlug(slug: string): slug is Slug {
  return VALID_SLUGS.includes(slug as Slug);
}
