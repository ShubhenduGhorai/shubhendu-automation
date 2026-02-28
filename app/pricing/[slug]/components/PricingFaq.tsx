import type { FaqItem } from "../../types";

type Props = {
  faqs: FaqItem[];
};

export function PricingFaq({ faqs }: Props) {
  return (
    <section className="mt-16 md:mt-20" id="faq">
      <h2 className="text-xl font-semibold text-slate-100 md:text-2xl">
        Frequently asked questions
      </h2>
      <div className="mt-6 space-y-3">
        {faqs.map((faq, i) => (
          <details
            key={i}
            className="group rounded-xl border border-slate-800 bg-slate-900/50 overflow-hidden transition-colors hover:border-slate-700"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left font-medium text-slate-200 transition-colors hover:bg-slate-800/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1220]">
              <span>{faq.q}</span>
              <span className="shrink-0 text-slate-500 transition-transform group-open:rotate-180">
                ▼
              </span>
            </summary>
            <div className="border-t border-slate-800 bg-slate-900/30 px-5 py-4">
              <p className="text-sm leading-relaxed text-slate-400">{faq.a}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
