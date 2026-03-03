import { Card } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-4xl font-semibold">About ScaleHarbor</h1>
      <p className="mt-4 text-white/70">We help founders build execution systems that reduce bottlenecks and compound growth. We combine strategic advisory, engineering, automation, and AI workflow design.</p>
      <Card className="mt-8 p-6"><p className="text-white/80">Audience: founders, startups, SMB operators. Tone: strategic, confident, ROI-focused.</p></Card>
    </main>
  );
}
