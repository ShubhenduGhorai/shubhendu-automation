"use client";

import { useActionState } from "react";
import { submitContact } from "@/app/actions/contact";

export function ContactSection() {
  const [state, formAction] = useActionState(submitContact, { ok: false, message: "" });

  return (
    <section id="contact" className="bg-neutral-50 py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">Contact</h2>
        <p className="mt-2 text-neutral-600">Send a message and we&apos;ll get back to you.</p>
        <form action={formAction} className="mt-8 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-700">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 shadow-sm focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 shadow-sm focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-neutral-700">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 shadow-sm focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
            />
          </div>
          {state.message && (
            <p className={state.ok ? "text-green-600 text-sm" : "text-red-600 text-sm"}>{state.message}</p>
          )}
          <button
            type="submit"
            className="w-full rounded-xl bg-neutral-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
