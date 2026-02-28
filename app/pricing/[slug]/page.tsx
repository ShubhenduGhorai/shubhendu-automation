import { notFound } from "next/navigation";
import Link from "next/link";
import {
  pricingData,
  PAYMENT_LINKS,
  isValidSlug,
} from "../data";
import {
  PricingHero,
  PricingFeatures,
  PricingWhoItsFor,
  PricingProcess,
  PricingBox,
  PricingFaq,
} from "./components";

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

        <PricingHero
          title={data.title}
          shortDescription={data.shortDescription}
        />
        <PricingFeatures features={data.features} />
        <PricingWhoItsFor whoItsFor={data.whoItsFor} />
        <PricingProcess processSteps={data.processSteps} />
        <PricingBox
          title={data.title}
          price={data.price}
          priceNote={data.priceNote}
          comingSoon={data.comingSoon}
          paymentLink={paymentLink}
          isExternalPayment={isExternalPayment}
        />
        <PricingFaq faqs={data.faqs} />

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
