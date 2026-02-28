import Image from "next/image";
import type { Testimonial } from "@/types/database";

type Props = { testimonials: Testimonial[] };

export function TestimonialsSection({ testimonials }: Props) {
  if (testimonials.length === 0) return null;
  return (
    <section id="testimonials" className="bg-neutral-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">Testimonials</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote key={t.id} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <p className="text-neutral-600">&ldquo;{t.content}&rdquo;</p>
              <footer className="mt-4 flex items-center gap-3">
                {t.image_url ? (
                  <div className="relative h-10 w-10 overflow-hidden rounded-full bg-neutral-100">
                    <Image src={t.image_url} alt="" fill className="object-cover" unoptimized={t.image_url.includes("supabase")} />
                  </div>
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">{(t.name || "?")[0]}</div>
                )}
                <div>
                  <cite className="not-italic font-medium text-neutral-900">{t.name}</cite>
                  {t.role && <p className="text-xs text-neutral-500">{t.role}</p>}
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
