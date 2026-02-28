import type { ProcessStep } from "../../types";

type Props = {
  processSteps: ProcessStep[];
};

export function PricingProcess({ processSteps }: Props) {
  return (
    <section className="mt-14 md:mt-16">
      <h2 className="text-xl md:text-2xl font-semibold">How it works</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {processSteps.map(({ step, title, description }) => (
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
  );
}
