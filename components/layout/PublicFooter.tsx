import Link from "next/link";
import type { NavLink } from "@/types/database";

type Props = {
  links: NavLink[];
};

export function PublicFooter({ links }: Props) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-neutral-900">Shubhendu Automation</p>
          <p className="text-sm text-neutral-600">
            Websites, AI, and workflow systems for small businesses.
          </p>
        </div>

        <nav className="flex flex-wrap items-center gap-4 text-sm">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href || "#"}
              className="text-neutral-600 transition hover:text-neutral-900"
            >
              {link.label || "Link"}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-neutral-100 px-6 py-4 text-center text-xs text-neutral-500">
        © {year} Shubhendu Automation. All rights reserved.
      </div>
    </footer>
  );
}
