import Link from "next/link";
import Image from "next/image";
import type { Hero } from "@/types/database";

type Props = { data: Hero | null };

const defaults = {
  title: "Build automation that saves you hours",
  subtitle: "Websites, AI support, and workflows for small businesses.",
  buttonText: "Get started",
  buttonLink: "#contact",
};

export function HeroSection({ data }: Props) {
  const title = data?.title ?? defaults.title;
  const subtitle = data?.subtitle ?? defaults.subtitle;
  const buttonText = data?.button_text ?? defaults.buttonText;
  const buttonLink = data?.button_link ?? defaults.buttonLink;
  const imageUrl = data?.image_url;

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-lg text-neutral-600">{subtitle}</p>
          <div className="mt-8">
            <Link
              href={buttonLink}
              className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800"
            >
              {buttonText}
            </Link>
          </div>
        </div>
        {imageUrl ? (
          <div className="relative aspect-video overflow-hidden rounded-2xl bg-neutral-100">
            <Image
              src={imageUrl}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              unoptimized={imageUrl.includes("supabase")}
            />
          </div>
        ) : (
          <div className="aspect-video rounded-2xl bg-neutral-100 flex items-center justify-center text-neutral-400 text-sm">
            Hero image
          </div>
        )}
      </div>
    </section>
  );
}
