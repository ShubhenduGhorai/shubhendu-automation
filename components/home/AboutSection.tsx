import Image from "next/image";
import type { About } from "@/types/database";

type Props = { data: About | null };

export function AboutSection({ data }: Props) {
  const content = data?.content ?? "We help small businesses save time with modern websites and automation.";
  const imageUrl = data?.image_url;
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">About</h2>
        <div className="mt-8 grid gap-10 md:grid-cols-2 md:items-start">
          <p className="text-neutral-600 leading-relaxed whitespace-pre-line">{content}</p>
          {imageUrl ? (
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100">
              <Image src={imageUrl} alt="About" fill className="object-cover" sizes="50vw" unoptimized />
            </div>
          ) : (
            <div className="aspect-[4/3] rounded-2xl bg-neutral-100 flex items-center justify-center text-neutral-400 text-sm">About image</div>
          )}
        </div>
      </div>
    </section>
  );
}
