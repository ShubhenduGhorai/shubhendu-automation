"use server";

import { Resend } from "resend";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const leadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  budget: z.string().min(1),
  projectType: z.array(z.string()).min(1),
  message: z.string().min(10),
});

export type LeadInput = z.infer<typeof leadSchema>;

export async function submitLead(input: LeadInput) {
  const parsed = leadSchema.safeParse(input);
  if (!parsed.success) return { ok: false, error: "Invalid form fields" };

  if (process.env.DATABASE_URL) {
    await prisma.lead.create({
      data: { ...parsed.data, projectType: parsed.data.projectType.join(", ") },
    });
  }

  if (process.env.RESEND_API_KEY && process.env.RESEND_TO_EMAIL) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev",
      to: process.env.RESEND_TO_EMAIL,
      subject: `New ScaleHarbor lead from ${parsed.data.name}`,
      text: `${parsed.data.message}\n\n${parsed.data.email}`,
    });
  }

  return { ok: true };
}
