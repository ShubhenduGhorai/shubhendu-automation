"use client";

import Image from "next/image";
import type { Service } from "@/types/database";

type Props = { services: Service[] };

export function ServicesSection({ services }: Props) {
  const list = services.length > 0 ? services : [
    { id: "p1", title: "Websites", description: "Fast, mobile-friendly sites.", icon: null, image_url: null, sort_order: 0 },
    { id: "p2", title: "AI & automation", description: "Chatbots and workflows.", icon: null, image_url: null, sort_order: 1 },
    { id: "p3", title: "Maintenance", description: "Updates and monitoring.", icon: null, image_url: null, sort_order: 2 },
  ] as Service[];
  return (
    <section id="services" className="bg-neutral-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">Services</h2>
        <p className="mt-2 text-neutral-600">What we build for small businesses.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((s) => (
            <div key={s.id} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              {s.image_url ? (
                <div className="relative aspect-video overflow-hidden rounded-xl bg-neutral-100">
                  <Image src={s.image_url} alt={s.title || ""} fill className="object-cover" sizes="33vw" unoptimized />
                </div>
              ) : (
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 text-neutral-500">{s.icon || "◆"}</div>
              )}
              <h3 className="mt-4 font-semibold text-neutral-900">{s.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
