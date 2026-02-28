import Link from "next/link";

type Props = {
  title: string;
  price: string;
  priceNote: string;
  comingSoon: boolean;
  paymentLink: string;
  isExternalPayment: boolean;
  guarantee?: string;
};

export function PricingBox({
  title,
  price,
  priceNote,
  comingSoon,
  paymentLink,
  isExternalPayment,
  guarantee,
}: Props) {
  return (
    <section className="mt-16 md:mt-20" id="pricing-cta">
      <div className="rounded-2xl border border-slate-800 bg-linear-to-br from-slate-900 via-slate-900/95 to-slate-950 p-8 shadow-xl md:p-10">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-3xl font-semibold text-slate-50 md:text-4xl">
              {price}
              {!comingSoon && priceNote && (
                <span className="ml-2 text-base font-normal text-slate-400">
                  {priceNote}
                </span>
              )}
            </p>
            {comingSoon && (
              <p className="mt-1 text-sm text-slate-400">{priceNote}</p>
            )}
            {guarantee && (
              <p className="mt-3 flex items-center gap-2 text-sm text-slate-400">
                <span className="text-emerald-400">◇</span>
                {guarantee}
              </p>
            )}
          </div>
          <div className="flex w-full flex-col gap-3 md:w-auto md:min-w-[220px]">
            {isExternalPayment ? (
              <a
                href={paymentLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-linear-to-r from-emerald-400 to-emerald-600 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(16,185,129,0.35)] transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)]"
              >
                {comingSoon ? "Contact for early access" : `Get ${title}`}
              </a>
            ) : (
              <Link
                href={paymentLink}
                className="inline-flex items-center justify-center rounded-xl border border-emerald-500/50 bg-slate-800/80 px-6 py-3.5 text-sm font-semibold text-emerald-300 transition-colors hover:border-emerald-400/70 hover:bg-slate-800 hover:text-emerald-200"
              >
                Contact for early access
              </Link>
            )}
            <p className="text-center text-[11px] text-slate-500">
              Secure payment via Razorpay
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
