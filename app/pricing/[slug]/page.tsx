import { notFound } from "next/navigation";
import Link from "next/link";
import {
  pricingData,
  PAYMENT_LINKS,
  isValidSlug,
} from "../data";
import {
  PricingBreadcrumb,
  PricingHero,
  PricingFeatures,
  PricingWhoItsFor,
  PricingProcess,
  PricingBox,
  PricingTestimonial,
  PricingTrust,
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
    <main className="min-h-screen bg-[#0b1220] text-slate-50 pb-20">
      <div className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        <PricingBreadcrumb title={data.title} />

        <PricingHero
          title={data.title}
          shortDescription={data.shortDescription}
          badge={data.badge}
          deliveryTime={data.deliveryTime}
        />
        <PricingFeatures features={data.features} />
        <PricingWhoItsFor
          whoItsFor={data.whoItsFor}
          idealFor={data.idealFor}
        />
        <PricingProcess processSteps={data.processSteps} />
        <PricingBox
          title={data.title}
          price={data.price}
          priceNote={data.priceNote}
          comingSoon={data.comingSoon}
          paymentLink={paymentLink}
          isExternalPayment={isExternalPayment}
          guarantee={data.guarantee}
        />
        {data.testimonial && (
          <PricingTestimonial
            quote={data.testimonial.quote}
            author={data.testimonial.author}
            role={data.testimonial.role}
          />
        )}
        <PricingTrust />
        <PricingFaq faqs={data.faqs} />

        <div className="mt-16 flex flex-col items-center gap-4 border-t border-slate-800 pt-10">
          <p className="text-sm text-slate-400">
            Compare all plans or get in touch with questions.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#pricing"
              className="rounded-xl border border-slate-700 bg-slate-800/50 px-5 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-slate-600 hover:bg-slate-800 hover:text-white"
            >
              View all plans
            </Link>
            <Link
              href="/#contact"
              className="rounded-xl bg-emerald-500/20 px-5 py-2.5 text-sm font-medium text-emerald-300 transition-colors hover:bg-emerald-500/30"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>

      {/* Sticky CTA bar */}
      <div className="sticky bottom-0 left-0 right-0 z-10 border-t border-slate-800 bg-[#0b1220]/95 py-4 backdrop-blur md:py-3">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-3 px-6 sm:flex-row sm:justify-between">
          <p className="text-sm font-medium text-slate-200">
            Ready to get started?
          </p>
          {isExternalPayment ? (
            <a
              href={paymentLink}
              target="_blank"
              rel="noreferrer"
              className="w-full rounded-xl bg-linear-to-r from-emerald-400 to-emerald-600 px-6 py-2.5 text-center text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.02] sm:w-auto"
            >
              {data.comingSoon ? "Contact for early access" : `Get ${data.title}`}
            </a>
          ) : (
            <Link
              href={paymentLink}
              className="w-full rounded-xl border border-emerald-500/50 bg-slate-800/80 px-6 py-2.5 text-center text-sm font-semibold text-emerald-300 transition-colors hover:bg-slate-800 sm:w-auto"
            >
              Contact for early access
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
