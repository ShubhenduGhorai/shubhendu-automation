import type { FaqItem } from "../../types";

type Props = {
  faqs: FaqItem[];
};

export function PricingFaq({ faqs }: Props) {
  return (
    <section className="mt-14 md:mt-16">
      <h2 className="text-xl md:text-2xl font-semibold">
        Frequently asked questions
      </h2>
      <div className="mt-6 space-y-3">
        {faqs.map((faq, i) => (
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
              <p className="text-sm text-slate-400 leading-relaxed">{faq.a}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
