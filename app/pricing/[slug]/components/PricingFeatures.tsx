type Props = {
  features: string[];
};

export function PricingFeatures({ features }: Props) {
  return (
    <section className="mt-14 md:mt-16">
      <h2 className="text-xl md:text-2xl font-semibold">
        What&apos;s included
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {features.map((feature, i) => (
          <div
            key={i}
            className="rounded-xl border border-slate-800 bg-slate-900/50 p-4 hover:border-slate-700 hover:bg-slate-900/70 transition-colors"
          >
            <p className="text-sm text-slate-200">{feature}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
