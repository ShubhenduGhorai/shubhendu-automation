"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return <main className="mx-auto min-h-[60vh] max-w-xl px-4 py-20 text-center"><h2 className="text-3xl">Something went wrong</h2><button className="mt-5 rounded-lg bg-indigo-600 px-4 py-2" onClick={reset}>Try again</button></main>;
}
