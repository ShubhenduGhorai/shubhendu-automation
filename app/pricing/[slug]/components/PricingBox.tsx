import Link from "next/link";

type Props = {
  title: string;
  price: string;
  priceNote: string;
  comingSoon: boolean;
  paymentLink: string;
  isExternalPayment: boolean;
};

export function PricingBox({
  title,
  price,
  priceNote,
  comingSoon,
  paymentLink,
  isExternalPayment,
}: Props) {
  return (
    <section className="mt-14 md:mt-16">
      <div className="rounded-2xl border border-slate-800 bg-linear-to-br from-slate-900 to-slate-950 p-8 md:p-10 shadow-xl">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-3xl font-semibold text-slate-50">
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
          </div>
          {isExternalPayment ? (
            <a
              href={paymentLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-xl bg-linear-to-r from-emerald-400 to-emerald-600 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-transform hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] md:w-auto"
            >
              {comingSoon ? "Contact for early access" : `Get ${title}`}
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
  );
}
