const items = [
  { label: "Secure payment", sub: "Razorpay" },
  { label: "No lock-in", sub: "Cancel anytime" },
  { label: "Clear scope", sub: "No surprise charges" },
];

export function PricingTrust() {
  return (
    <section className="mt-16 md:mt-20">
      <div className="flex flex-wrap items-center justify-center gap-8 rounded-2xl border border-slate-800 bg-slate-900/30 py-6 px-6 md:gap-12">
        {items.map(({ label, sub }, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
              &#10003;
            </span>
            <div>
              <p className="text-sm font-medium text-slate-200">{label}</p>
              <p className="text-xs text-slate-500">{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
