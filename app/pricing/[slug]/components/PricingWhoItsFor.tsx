type Props = {
  whoItsFor: string;
  idealFor?: string[];
};

export function PricingWhoItsFor({ whoItsFor, idealFor }: Props) {
  return (
    <section className="mt-16 md:mt-20" id="who-its-for">
      <h2 className="text-xl font-semibold text-slate-100 md:text-2xl">
        Who is this for?
      </h2>
      <p className="mt-4 rounded-xl border border-slate-800 bg-slate-900/50 p-6 text-slate-300 leading-relaxed">
        {whoItsFor}
      </p>
      {idealFor && idealFor.length > 0 && (
        <div className="mt-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Ideal for
          </p>
          <ul className="flex flex-wrap gap-2">
            {idealFor.map((item, i) => (
              <li
                key={i}
                className="rounded-lg border border-slate-700 bg-slate-800/50 px-3 py-1.5 text-sm text-slate-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
