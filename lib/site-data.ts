import type { LucideIcon } from "lucide-react";
import { Bot, ChartNoAxesCombined, Cog, Globe, ShieldCheck, Timer } from "lucide-react";

export type PainPoint = { title: string; copy: string; icon: LucideIcon };
export type ServiceItem = { title: string; copy: string; icon: LucideIcon };

export const painPoints: PainPoint[] = [
  { title: "Manual Ops Bottlenecks", copy: "Teams lose time in repetitive workflows.", icon: Timer },
  { title: "Disconnected Tool Stack", copy: "Data silos kill conversion speed.", icon: Cog },
  { title: "Stagnant Growth Engine", copy: "No predictable demand system.", icon: ChartNoAxesCombined },
];

export const serviceItems: ServiceItem[] = [
  { title: "Websites", copy: "Conversion-first experiences built for revenue.", icon: Globe },
  { title: "AI & Automation", copy: "Lead routing, follow-ups, qualification, and support.", icon: Bot },
  { title: "Growth Systems", copy: "Attribution, analytics, and campaign automation.", icon: ChartNoAxesCombined },
  { title: "Maintenance", copy: "Security, uptime, and continuous optimization.", icon: ShieldCheck },
];

export const workflowSteps = ["Audit", "Strategy", "Build", "Optimize"];

export const pricingPlans = {
  monthly: [
    { name: "Starter Launch", price: "₹24,999", features: ["5 Page Website", "Basic Automation", "SEO Setup", "1 Month Support"] },
    { name: "Growth Engine", price: "₹59,999", popular: true, features: ["Custom Website", "AI Chatbot", "Workflow Automation", "Lead Capture", "3 Months Support"] },
    { name: "Scale Infrastructure", price: "₹1,49,999+", features: ["Full Automation Suite", "AI Systems", "Custom Integrations", "CRM Setup", "6 Months Optimization", "Priority Support"] },
  ],
  oneTime: [
    { name: "Starter Launch", price: "₹1,49,999", features: ["Full setup + handoff", "SEO foundation", "30-day support"] },
    { name: "Growth Engine", price: "₹3,49,999", popular: true, features: ["Custom build", "AI chatbot", "Workflow automation", "90-day support"] },
    { name: "Scale Infrastructure", price: "₹7,99,999+", features: ["Enterprise system architecture", "Custom integrations", "Dedicated squad"] },
  ],
};

export const faqs = [
  { q: "How fast can we launch?", a: "Most projects launch in 3-8 weeks based on scope." },
  { q: "Do you work with existing teams?", a: "Yes, we plug into your team and stack." },
  { q: "Do you provide post-launch support?", a: "Yes, all plans include support windows." },
];
