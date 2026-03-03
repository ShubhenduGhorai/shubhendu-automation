import Link from "next/link";
import type { NavLink } from "@/types/database";

type Props = {
  links: NavLink[];
  logoText?: string;
};

export function PublicNavbar({ links, logoText = "SA" }: Props) {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold text-neutral-900">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-900 text-sm text-white">
            {logoText.slice(0, 2).toUpperCase()}
          </span>
          <span className="hidden sm:inline">{logoText}</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href || "#"}
              className="text-neutral-600 transition hover:text-neutral-900"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
