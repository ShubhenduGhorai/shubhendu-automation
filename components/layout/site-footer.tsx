import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 text-sm text-white/70 md:flex-row md:justify-between">
        <div>
          <p className="text-white">ScaleHarbor</p>
          <p>Automation. AI. Growth Infrastructure.</p>
        </div>
        <div className="flex gap-4">
          <Link href="/privacy-policy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
