import type { ProcessStep } from "../../types";

type Props = {
  processSteps: ProcessStep[];
};

export function PricingProcess({ processSteps }: Props) {
  return (
    <section className="mt-16 md:mt-20" id="how-it-works">
      <h2 className="text-xl font-semibold text-slate-100 md:text-2xl">
        How it works
      </h2>
      <p className="mt-2 text-sm text-slate-400">
        Simple, transparent process from start to finish.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {processSteps.map(({ step, title, description }, idx) => (
          <div key={step} className="relative">
            {idx < processSteps.length - 1 && (
              <span
                className="absolute left-8 top-14 hidden h-[2px] w-[calc(100%-4rem)] bg-linear-to-r from-emerald-500/40 to-transparent md:block"
                aria-hidden
              />
            )}
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all hover:border-emerald-500/30 hover:shadow-[0_0_40px_-12px_rgba(16,185,129,0.2)]">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-sm font-bold text-emerald-400">
                {step}
              </span>
              <h3 className="mt-4 font-semibold text-slate-100">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
