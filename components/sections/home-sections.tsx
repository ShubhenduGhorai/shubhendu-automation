"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { faqs, painPoints, serviceItems, workflowSteps } from "@/lib/site-data";

export function HomeSections() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          <p className="mb-3 text-sm text-indigo-300">Automation. AI. Growth Infrastructure.</p>
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">Build Systems That Scale Your Business.</h1>
          <p className="mt-5 text-white/70">We design automation, AI systems, and growth infrastructure for modern companies.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact"><Button size="lg">Book Strategy Call</Button></Link>
            <Link href="/case-studies"><Button size="lg" variant="outline">View Case Studies</Button></Link>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-6">
          {["Notion", "Stripe", "HubSpot", "Slack", "Vercel", "Supabase"].map((logo) => (
            <Card key={logo} className="p-4 text-center text-white/70">{logo}</Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-semibold text-white">Why teams call us when growth stalls</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {painPoints.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
              <Card className="p-6"><p.icon className="mb-4 text-indigo-300"/><h3 className="text-white">{p.title}</h3><p className="mt-2 text-sm text-white/70">{p.copy}</p></Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-semibold text-white">Solutions built for operators</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {serviceItems.map((s) => (
            <Card key={s.title} className="p-6"><s.icon className="mb-4 text-indigo-300"/><h3 className="text-white">{s.title}</h3><p className="mt-2 text-sm text-white/70">{s.copy}</p></Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-semibold text-white">Execution workflow</h2>
        <div className="mt-6 grid gap-3 md:grid-cols-4">
          {workflowSteps.map((step, idx) => <Card key={step} className="p-5 text-center text-white">{idx + 1}. {step}</Card>)}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-semibold text-white">Case studies</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {["SaaS Lead Engine", "B2B Pipeline Automation", "Ecom Retention AI"].map((name) => (
            <Card key={name} className="group p-6 transition hover:-translate-y-1 hover:border-indigo-300/50">
              <h3 className="text-white">{name}</h3><p className="mt-2 text-sm text-white/70">Measured systems, not vanity redesigns.</p>
              <p className="mt-4 inline-flex items-center text-indigo-300">Read story <ArrowRight className="ml-1 h-4 w-4"/></p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <Card className="p-8 text-center md:p-12">
          <h2 className="text-4xl font-semibold text-white">Ready to Scale?</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/70">Let&apos;s design your growth infrastructure and reduce operational drag.</p>
          <Link href="/contact" className="mt-6 inline-block"><Button size="lg">Book Strategy Call</Button></Link>
        </Card>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="text-3xl font-semibold text-white">FAQ</h2>
        <div className="mt-4 space-y-3">
          {faqs.map((f) => <Card key={f.q} className="p-5"><p className="font-medium text-white">{f.q}</p><p className="mt-2 text-sm text-white/70">{f.a}</p></Card>)}
        </div>
      </section>

    </>
  );
}
