import type { Faq } from "@/types/database";

type Props = {
  faqs: Faq[];
};

export function FaqSection({ faqs }: Props) {
  if (faqs.length === 0) return null;
  return (
    <section id="faq" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">
          FAQ
        </h2>
        <div className="mt-8 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.id}
              className="group rounded-xl border border-neutral-200 bg-white overflow-hidden"
            >
              <summary className="cursor-pointer list-none px-5 py-4 font-medium text-neutral-900 hover:bg-neutral-50">
                {faq.question}
              </summary>
              <div className="border-t border-neutral-100 px-5 py-4 text-neutral-600">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
