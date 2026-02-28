type Props = {
  whoItsFor: string;
};

export function PricingWhoItsFor({ whoItsFor }: Props) {
  return (
    <section className="mt-14 md:mt-16">
      <h2 className="text-xl md:text-2xl font-semibold">Who is this for?</h2>
      <p className="mt-4 rounded-xl border border-slate-800 bg-slate-900/50 p-5 text-slate-300 leading-relaxed">
        {whoItsFor}
      </p>
    </section>
  );
}
