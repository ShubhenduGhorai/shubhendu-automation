"use client";

import { useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { faqs, pricingPlans } from "@/lib/site-data";

export function PricingClient() {
  const [mode, setMode] = useState<"monthly" | "oneTime">("monthly");
  const [teamSize, setTeamSize] = useState(5);
  const plans = pricingPlans[mode];
  const estimate = useMemo(() => teamSize * 12000, [teamSize]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-semibold text-white">Pricing that compounds growth</h1>
      <div className="mt-6 inline-flex rounded-xl border border-white/10 bg-white/5 p-1">
        <button onClick={() => setMode("monthly")} className={`rounded-lg px-4 py-2 text-sm ${mode === "monthly" ? "bg-indigo-600 text-white" : "text-white/70"}`}>Monthly</button>
        <button onClick={() => setMode("oneTime")} className={`rounded-lg px-4 py-2 text-sm ${mode === "oneTime" ? "bg-indigo-600 text-white" : "text-white/70"}`}>One-time</button>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {plans.map((plan) => (
          <Card key={plan.name} className={`p-6 ${plan.popular ? "border-indigo-400" : ""}`}>
            {plan.popular && <p className="mb-2 text-xs text-indigo-300">Most Popular</p>}
            <h3 className="text-xl text-white">{plan.name}</h3>
            <p className="mt-2 text-3xl font-semibold text-white">{plan.price}</p>
            <ul className="mt-4 space-y-2 text-sm text-white/75">{plan.features.map((f) => <li key={f}>• {f}</li>)}</ul>
            <Button className="mt-6 w-full">Choose Plan</Button>
          </Card>
        ))}
      </div>

      <Card className="mt-10 overflow-auto p-6">
        <h2 className="text-xl text-white">Comparison</h2>
        <table className="mt-4 w-full min-w-125 text-left text-sm text-white/80">
          <thead><tr><th>Feature</th><th>Starter</th><th>Growth</th><th>Scale</th></tr></thead>
          <tbody>
            <tr><td>Automation</td><td>Basic</td><td>Advanced</td><td>Enterprise</td></tr>
            <tr><td>Support</td><td>1 month</td><td>3 months</td><td>6 months</td></tr>
            <tr><td>Integrations</td><td>2</td><td>6</td><td>Unlimited</td></tr>
          </tbody>
        </table>
      </Card>

      <Card className="mt-10 p-6">
        <h2 className="text-xl text-white">Interactive pricing calculator</h2>
        <input type="range" min={1} max={25} value={teamSize} onChange={(e) => setTeamSize(Number(e.target.value))} className="mt-4 w-full" />
        <p className="mt-3 text-white/80">Team size: {teamSize} • Estimated infrastructure value: ₹{estimate.toLocaleString("en-IN")}</p>
      </Card>

      <div className="mt-10 space-y-3">
        {faqs.map((f) => (
          <Card key={f.q} className="p-5"><p className="text-white">{f.q}</p><p className="mt-2 text-sm text-white/70">{f.a}</p></Card>
        ))}
      </div>
    </div>
  );
}
