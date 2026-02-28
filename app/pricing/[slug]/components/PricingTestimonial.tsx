type Props = {
  quote: string;
  author: string;
  role?: string;
};

export function PricingTestimonial({ quote, author, role }: Props) {
  return (
    <section className="mt-16 md:mt-20" id="testimonial">
      <blockquote className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:p-8">
        <p className="text-lg leading-relaxed text-slate-200 md:text-xl">
          &ldquo;{quote}&rdquo;
        </p>
        <footer className="mt-4 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-sm font-semibold text-emerald-400">
            {author.charAt(0)}
          </span>
          <div>
            <cite className="not-italic font-medium text-slate-100">
              {author}
            </cite>
            {role && (
              <p className="text-xs text-slate-500">{role}</p>
            )}
          </div>
        </footer>
      </blockquote>
    </section>
  );
}
