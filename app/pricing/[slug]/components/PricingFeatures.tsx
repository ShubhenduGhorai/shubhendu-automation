type Props = {
  features: string[];
};

export function PricingFeatures({ features }: Props) {
  return (
    <section className="mt-16 md:mt-20" id="features">
      <h2 className="text-xl font-semibold text-slate-100 md:text-2xl">
        What&apos;s included
      </h2>
      <p className="mt-2 text-sm text-slate-400">
        Everything you need, no hidden add-ons.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {features.map((feature, i) => (
          <div
            key={i}
            className="group flex items-start gap-4 rounded-xl border border-slate-800 bg-slate-900/50 p-5 transition-all hover:border-emerald-500/30 hover:bg-slate-900/70"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-sm font-bold text-emerald-400">
              &#10003;
            </span>
            <p className="text-sm leading-relaxed text-slate-200">{feature}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
