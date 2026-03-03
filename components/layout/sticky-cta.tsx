import Link from "next/link";

export function StickyCTA() {
  return (
    <Link
      href="/contact"
      className="fixed bottom-6 right-6 z-50 rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-indigo-600/40 hover:bg-indigo-500"
    >
      Book Strategy Call
    </Link>
  );
}
