export default function Loading() {
  return <main className="mx-auto max-w-6xl px-4 py-20"><div className="h-10 w-64 animate-pulse rounded bg-white/10" /><div className="mt-4 grid gap-4 md:grid-cols-3">{Array.from({length:6}).map((_,i)=><div key={i} className="h-40 animate-pulse rounded-2xl bg-white/5"/>)}</div></main>;
}
