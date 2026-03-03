import { Card } from "@/components/ui/card";

const studies = [
  { title: "B2B SaaS Pipeline", result: "+67% qualified demos in 90 days" },
  { title: "D2C Retention Flow", result: "+34% repeat revenue" },
  { title: "Service Business Ops", result: "-58% manual admin workload" },
];

export default function CaseStudiesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-semibold">Case Studies</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-3">{studies.map((s) => <Card key={s.title} className="p-6"><h2 className="text-xl">{s.title}</h2><p className="mt-2 text-indigo-300">{s.result}</p></Card>)}</div>
    </main>
  );
}
