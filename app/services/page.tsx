import { Card } from "@/components/ui/card";
import { serviceItems } from "@/lib/site-data";

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-semibold">Services</h1>
      <p className="mt-3 text-white/70">Detailed system design and execution across digital growth infrastructure.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {serviceItems.map((s) => <Card key={s.title} className="p-6"><s.icon className="text-indigo-300"/><h2 className="mt-3 text-xl">{s.title}</h2><p className="mt-2 text-white/70">{s.copy}</p></Card>)}
      </div>
    </main>
  );
}
