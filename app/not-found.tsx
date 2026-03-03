import Link from "next/link";

export default function NotFound() {
  return <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 text-center"><h1 className="text-6xl font-bold">404</h1><p className="mt-3 text-white/70">Route not found.</p><Link className="mt-6 rounded-lg bg-indigo-600 px-4 py-2" href="/">Back home</Link></main>;
}
