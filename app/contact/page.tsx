import { ContactForm } from "@/components/contact/contact-form";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-4xl font-semibold">Contact ScaleHarbor</h1>
      <p className="mt-3 text-white/70">Tell us where growth is blocked. We&apos;ll map your system architecture.</p>
      <div className="mt-8"><ContactForm /></div>
    </main>
  );
}
