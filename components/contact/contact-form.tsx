"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { submitLead } from "@/app/actions/lead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  budget: z.string().min(1),
  projectType: z.array(z.string()).min(1),
  message: z.string().min(10),
});

type FormValues = z.infer<typeof schema>;
const projectTypes = ["Website", "AI Automation", "Growth Infrastructure", "Maintenance"];

export function ContactForm() {
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, setValue, watch, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { projectType: [] },
  });

  const selected = watch("projectType");
  const toggleProject = (item: string) => {
    const set = new Set(selected);
    if (set.has(item)) set.delete(item); else set.add(item);
    setValue("projectType", [...set]);
  };

  const onSubmit = async (data: FormValues) => {
    const res = await submitLead(data);
    setSuccess(Boolean(res.ok));
  };

  if (success) {
    return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-2xl border border-emerald-400/40 bg-emerald-500/10 p-8 text-center text-emerald-200">Thanks! Your strategy request is in. We&apos;ll reply within 24 hours.</motion.div>;
  }

  return (
    <Card className="p-6 md:p-8">
      <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 md:grid-cols-2">
          <div><Input placeholder="Name" {...register("name")} />{errors.name && <p className="text-xs text-rose-300">{errors.name.message}</p>}</div>
          <div><Input placeholder="Email" {...register("email")} />{errors.email && <p className="text-xs text-rose-300">{errors.email.message}</p>}</div>
        </div>
        <Input placeholder="Company" {...register("company")} />
        <select className="h-11 rounded-xl border border-white/15 bg-white/5 px-3 text-sm text-white" {...register("budget")}>
          <option value="">Select budget range</option>
          <option>₹25k - ₹75k</option><option>₹75k - ₹2L</option><option>₹2L+</option>
        </select>
        <div className="flex flex-wrap gap-2">
          {projectTypes.map((item) => (
            <button key={item} type="button" onClick={() => toggleProject(item)} className={`rounded-full border px-3 py-1 text-xs ${selected.includes(item) ? "border-indigo-300 bg-indigo-500/30 text-white" : "border-white/20 text-white/70"}`}>{item}</button>
          ))}
        </div>
        {errors.projectType && <p className="text-xs text-rose-300">Pick at least one project type</p>}
        <Textarea rows={5} placeholder="Tell us your goals and blockers" {...register("message")} />
        {errors.message && <p className="text-xs text-rose-300">{errors.message.message}</p>}
        <Button size="lg" disabled={isSubmitting}>{isSubmitting ? "Sending..." : "Send request"}</Button>
      </form>
    </Card>
  );
}
