import Link from "next/link";

type Props = {
  title: string;
};

export function PricingBreadcrumb({ title }: Props) {
  return (
    <nav
      className="flex items-center gap-2 text-sm text-slate-400"
      aria-label="Breadcrumb"
    >
      <Link href="/" className="hover:text-emerald-400 transition-colors">
        Home
      </Link>
      <span aria-hidden>/</span>
      <Link href="/#pricing" className="hover:text-emerald-400 transition-colors">
        Pricing
      </Link>
      <span aria-hidden>/</span>
      <span className="text-slate-200">{title}</span>
    </nav>
  );
}
