"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  ["Services", "/services"],
  ["Pricing", "/pricing"],
  ["Case Studies", "/case-studies"],
  ["Blog", "/blog"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 px-4 py-3 transition-all",
          scrolled ? "bg-black/70 backdrop-blur-xl shadow-xl" : "bg-black/30 backdrop-blur-md"
        )}
      >
        <Link href="/" className="text-lg font-semibold tracking-tight text-white">
          ScaleHarbor
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="text-sm text-white/80 hover:text-white">
              {label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/contact">
            <Button size="default">Book Call</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
