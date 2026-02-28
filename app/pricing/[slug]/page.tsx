import { notFound } from "next/navigation";
import Link from "next/link";

const PAYMENT_LINKS = {
  "starter-website": "https://rzp.io/l/YOUR_LINK_1",
  "automation-setup": "https://rzp.io/l/YOUR_LINK_2",
  "maintenance-plan": "https://rzp.io/l/YOUR_LINK_3",
} as const;

const pricingData = {
  "starter-website": {
    title: "Starter Website",
    shortDescription:
      "A clean, fast website to get your business online quickly. Mobile-friendly, modern design, and contact form included.",
    price: "₹4,999",
    priceNote: "One-time · 50% off from ₹9,999",
    comingSoon: false,
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
        description: "You share your logo, text, and any reference links. I set up the structure and design.",
      },
      {
        step: 2,
        title: "Review & revise",
        description: "You get a preview link and feedback rounds. We polish until you’re happy.",
      },
      {
        step: 3,
        title: "Go live",
        description: "I connect your domain (or suggest one), launch the site, and hand over access.",
      },
    ],
    faqs: [
      {
        q: "How long does it take to get my site live?",
        a: "Usually 5–7 working days from the day you share content and confirm the design. Rush delivery can be discussed for an extra fee.",
      },
      {
        q: "Do I need to buy hosting separately?",
        a: "Hosting is not included in the one-time price. I can set up and manage affordable hosting for you, or you can use your own; I’ll guide you either way.",
      },
      {
        q: "Can I update the content myself later?",
        a: "Yes. I build the site so you can edit text and images via a simple dashboard, or I can do updates as part of a maintenance plan.",
      },
    ],
  },
  "automation-setup": {
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
        description: "We map your current flow, where leads drop off, and what can be automated (forms, WhatsApp, chatbot).",
      },
      {
        step: 2,
        title: "Build & test",
        description: "I build the flows and bot, then we test with real scenarios and your team.",
      },
      {
        step: 3,
        title: "Launch & handover",
        description: "We go live, monitor for a short period, and I hand over access and simple docs.",
      },
    ],
    faqs: [
      {
        q: "When will pricing be available?",
        a: "Pricing is still being finalised. Contact me for early access and I’ll share options and a custom quote based on your needs.",
      },
      {
        q: "Do I need a website first?",
        a: "It helps to have a site or landing page where leads come in, but we can also start from WhatsApp or a simple form. We’ll decide in the discovery call.",
      },
      {
        q: "What platforms do you integrate with?",
        a: "Common setups include WhatsApp, email, Google Sheets, and simple CRMs. I’ll confirm what’s possible for your stack during discovery.",
      },
    ],
  },
  "maintenance-plan": {
    title: "Maintenance Plan",
    shortDescription:
      "Ongoing care so your website and automations stay fast, secure, and up to date. Monthly checks, updates, and small tweaks.",
    price: "₹799",
    priceNote: "per month · 20% off from ₹999/month",
    comingSoon: false,
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
        description: "I review your current site and automations, note logins and contacts, and set up monitoring.",
      },
      {
        step: 2,
        title: "Monthly cycle",
        description: "Each month: updates, backup check, and a short report. You can request small changes via email or a simple form.",
      },
      {
        step: 3,
        title: "Ongoing support",
        description: "You get priority for bugs and urgent fixes. We can add one-off projects (e.g. new pages) separately.",
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
        a: "Sometimes. If the stack is something I work with (e.g. Next.js, common no-code tools), I can take it on. We’ll do a quick review first to confirm.",
      },
    ],
  },
} as const;

const VALID_SLUGS = ["starter-website", "automation-setup", "maintenance-plan"] as const;
type Slug = (typeof VALID_SLUGS)[number];

function isValidSlug(slug: string): slug is Slug {
  return VALID_SLUGS.includes(slug as Slug);
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  if (!isValidSlug(slug)) return { title: "Pricing | Shubhendu Automation" };
  const data = pricingData[slug];
  const title = `${data.title} | Pricing – Shubhendu Automation`;
  const description =
    data.shortDescription +
    " Professional automation and website services for small businesses. Get a quote or book a free consultation.";
  return {
    title,
    description,
    openGraph: { title, description },
  };
}

export default async function PricingSlugPage({ params }: Props) {
  const { slug } = await params;
  if (!isValidSlug(slug)) notFound();

  const data = pricingData[slug];
  const paymentLink = data.comingSoon ? "/#contact" : PAYMENT_LINKS[slug];
  const isExternalPayment = paymentLink.startsWith("http");

  return (
    <main className="min-h-screen bg-[#0b1220] text-slate-50">
      <div className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        <Link
          href="/#pricing"
          className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-emerald-400 transition-colors"
        >
          ← Back to pricing
        </Link>

        {/* Hero */}
        <section className="mt-8 md:mt-12">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            {data.title}
          </h1>
          <p className="mt-4 text-slate-300 text-lg max-w-2xl">
            {data.shortDescription}
          </p>
        </section>

        {/* Features grid */}
        <section className="mt-14 md:mt-18">
          <h2 className="text-xl md:text-2xl font-semibold">What’s included</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {data.features.map((feature, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-800 bg-slate-900/50 p-4 hover:border-slate-700 hover:bg-slate-900/70 transition-colors"
              >
                <p className="text-sm text-slate-200">{feature}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who is this for */}
        <section className="mt-14 md:mt-18">
          <h2 className="text-xl md:text-2xl font-semibold">
            Who is this for?
          </h2>
          <p className="mt-4 rounded-xl border border-slate-800 bg-slate-900/50 p-5 text-slate-300 leading-relaxed">
            {data.whoItsFor}
          </p>
        </section>

        {/* Process */}
        <section className="mt-14 md:mt-18">
          <h2 className="text-xl md:text-2xl font-semibold">How it works</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {data.processSteps.map(({ step, title, description }) => (
              <div
                key={step}
                className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 hover:border-emerald-500/30 transition-colors"
              >
                <span className="text-xs font-semibold text-emerald-400">
                  Step {step}
                </span>
                <h3 className="mt-2 font-semibold text-slate-100">{title}</h3>
                <p className="mt-2 text-sm text-slate-400">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing box + CTA */}
        <section className="mt-14 md:mt-18">
          <div className="rounded-2xl border border-slate-800 bg-linear-to-br from-slate-900 to-slate-950 p-8 md:p-10 shadow-xl">
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-3xl font-semibold text-slate-50">
                  {data.price}
                  {!data.comingSoon && data.priceNote && (
                    <span className="ml-2 text-base font-normal text-slate-400">
                      {data.priceNote}
                    </span>
                  )}
                </p>
                {data.comingSoon && (
                  <p className="mt-1 text-sm text-slate-400">
                    {data.priceNote}
                  </p>
                )}
              </div>
              {isExternalPayment ? (
                <a
                  href={paymentLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-linear-to-r from-emerald-400 to-emerald-600 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-transform hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] md:w-auto"
                >
                  {data.comingSoon
                    ? "Contact for early access"
                    : `Get ${data.title}`}
                </a>
              ) : (
                <Link
                  href={paymentLink}
                  className="inline-flex w-full items-center justify-center rounded-xl border border-emerald-500/50 bg-slate-800/80 px-6 py-3 text-sm font-semibold text-emerald-300 hover:border-emerald-400/70 hover:bg-slate-800 hover:text-emerald-200 transition-colors md:w-auto"
                >
                  Contact for early access
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* FAQ accordion */}
        <section className="mt-14 md:mt-18">
          <h2 className="text-xl md:text-2xl font-semibold">
            Frequently asked questions
          </h2>
          <div className="mt-6 space-y-3">
            {data.faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-xl border border-slate-800 bg-slate-900/50 overflow-hidden hover:border-slate-700"
              >
                <summary className="cursor-pointer list-none px-5 py-4 text-left font-medium text-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500">
                  <span className="flex items-center justify-between gap-4">
                    {faq.q}
                    <span className="text-slate-500 transition-transform group-open:rotate-180 shrink-0">
                      ▼
                    </span>
                  </span>
                </summary>
                <div className="border-t border-slate-800 px-5 py-4">
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </section>

        <div className="mt-14 pt-8 border-t border-slate-800">
          <Link
            href="/#pricing"
            className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
          >
            ← View all plans
          </Link>
        </div>
      </div>
    </main>
  );
}
