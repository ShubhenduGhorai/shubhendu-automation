import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

const nav = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/hero", label: "Hero" },
  { href: "/admin/services", label: "Services" },
  { href: "/admin/testimonials", label: "Testimonials" },
  { href: "/admin/faq", label: "FAQ" },
  { href: "/admin/about", label: "About" },
  { href: "/admin/nav-links", label: "Nav links" },
  { href: "/admin/contact", label: "Contact submissions" },
];

export default async function AdminLayout({
  children,
}: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");

  return (
    <div className="flex min-h-screen bg-neutral-100">
      <aside className="w-56 shrink-0 border-r border-neutral-200 bg-white">
        <div className="sticky top-0 flex flex-col gap-1 p-4">
          <Link href="/admin" className="mb-4 font-semibold text-neutral-900">Admin</Link>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
            >
              {item.label}
            </Link>
          ))}
          <form action="/admin/logout" method="post" className="mt-4">
            <button type="submit" className="w-full rounded-lg px-3 py-2 text-left text-sm text-neutral-500 hover:bg-neutral-100">
              Sign out
            </button>
          </form>
        </div>
      </aside>
      <main className="flex-1 overflow-auto p-8">{children}</main>
    </div>
  );
}
