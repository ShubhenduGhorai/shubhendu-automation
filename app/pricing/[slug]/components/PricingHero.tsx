type Props = {
  title: string;
  shortDescription: string;
};

export function PricingHero({ title, shortDescription }: Props) {
  return (
    <section className="mt-8 md:mt-12">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
        {title}
      </h1>
      <p className="mt-4 text-slate-300 text-lg max-w-2xl">
        {shortDescription}
      </p>
    </section>
  );
}
