type Props = {
  title: string;
  shortDescription: string;
  badge?: string;
  deliveryTime?: string;
};

export function PricingHero({
  title,
  shortDescription,
  badge,
  deliveryTime,
}: Props) {
  return (
    <section className="mt-8 md:mt-12">
      <div className="flex flex-wrap items-center gap-3">
        {badge && (
          <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
            {badge}
          </span>
        )}
        {deliveryTime && (
          <span className="flex items-center gap-1.5 text-sm text-slate-400">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {deliveryTime}
          </span>
        )}
      </div>
      <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl lg:text-5xl">
        <span className="bg-linear-to-r from-slate-50 via-slate-200 to-slate-400 bg-clip-text text-transparent">
          {title}
        </span>
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">
        {shortDescription}
      </p>
    </section>
  );
}
