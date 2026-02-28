export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Top bar */}
      <header className="border-b border-slate-800/80 bg-slate-950/70 backdrop-blur sticky top-0 z-20">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500 text-slate-950 font-semibold text-lg">
              SA
            </span>
            <div>
              <p className="text-sm font-semibold tracking-wide">
                Shubhendu Automation
              </p>
              <p className="text-xs text-slate-400">
                Websites • AI • Workflows
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#services" className="hover:text-white">
              Services
            </a>
            <a href="#process" className="hover:text-white">
              Process
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
            <a
              href="#contact"
              className="rounded-full bg-emerald-500 px-4 py-1.5 text-sm font-semibold text-slate-950 hover:bg-emerald-400"
            >
              Book Free Call
            </a>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 pb-20 pt-14 md:pt-20 space-y-24">
        {/* Hero Section */}
        <section className="grid gap-12 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
              Done-for-you automation for small businesses
            </p>
            <h1 className="mt-6 text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
              I build automation systems that{" "}
              <span className="bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                save you hours every week
              </span>
              .
            </h1>
            <p className="mt-5 text-slate-300 text-base md:text-lg max-w-xl">
              Websites, AI chatbots, WhatsApp flows and custom automations that
              capture leads, follow up for you and keep your business running
              24/7—without extra staff.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 hover:bg-emerald-400"
              >
                Get Free Consultation
              </a>
              <a
                href="#services"
                className="text-sm font-medium text-slate-200 hover:text-white"
              >
                View services
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-xs text-slate-400">
              <div>
                <p className="text-sm font-semibold text-slate-100">
                  3–5x faster response times
                </p>
                <p>With automated chat, follow-up and reminders.</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-100">
                  Fixed project pricing
                </p>
                <p>So you know exactly what you pay for.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-linear-to-tr from-emerald-500/20 via-cyan-500/20 to-transparent blur-2xl" />
            <div className="relative rounded-3xl border border-slate-800 bg-slate-900/60 p-5 shadow-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Example Automation Stack
              </p>
              <div className="mt-4 space-y-4 text-sm">
                <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3">
                  <div>
                    <p className="font-semibold">Website → WhatsApp</p>
                    <p className="text-xs text-slate-400">
                      New leads from your site go straight to WhatsApp.
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-300">
                    Live in 7 days
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3">
                  <div>
                    <p className="font-semibold">AI Support Bot</p>
                    <p className="text-xs text-slate-400">
                      Answers FAQs, books calls and captures contact details.
                    </p>
                  </div>
                  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold text-cyan-300">
                    24/7
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3">
                  <div>
                    <p className="font-semibold">Follow-up Sequences</p>
                    <p className="text-xs text-slate-400">
                      Automatic reminders so you never lose warm leads.
                    </p>
                  </div>
                  <span className="rounded-full bg-purple-500/10 px-3 py-1 text-[11px] font-semibold text-purple-200">
                    No-code dashboards
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold">
                Services built for small businesses
              </h2>
              <p className="mt-2 text-sm md:text-base text-slate-300 max-w-2xl">
                Everything you need to turn more visitors into customers and
                keep them engaged—without hiring a full-time team.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-6 hover:border-emerald-500/70 hover:bg-slate-900 transition">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Website Development
              </p>
              <h3 className="mt-3 text-lg font-semibold">
                High-converting business websites
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Fast, mobile-friendly websites designed to capture leads and
                clearly explain what you offer.
              </p>
              <ul className="mt-4 space-y-1 text-xs text-slate-300">
                <li>• Landing pages and multi-page sites</li>
                <li>• Contact / booking integration</li>
                <li>• SEO-friendly structure</li>
              </ul>
            </div>

            <div className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-6 hover:border-emerald-500/70 hover:bg-slate-900 transition">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                AI Automation
              </p>
              <h3 className="mt-3 text-lg font-semibold">
                AI chat and workflow systems
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Custom automations that answer questions, qualify leads and push
                data to your tools.
              </p>
              <ul className="mt-4 space-y-1 text-xs text-slate-300">
                <li>• AI support bots for site & WhatsApp</li>
                <li>• Lead capture & CRM updates</li>
                <li>• Notification & reminder flows</li>
              </ul>
            </div>

            <div className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-6 hover:border-emerald-500/70 hover:bg-slate-900 transition">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Care & Monitoring
              </p>
              <h3 className="mt-3 text-lg font-semibold">
                Maintenance & optimisation plan
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                I keep your systems healthy, secure and improving over time.
              </p>
              <ul className="mt-4 space-y-1 text-xs text-slate-300">
                <li>• Monthly updates & backups</li>
                <li>• Monitoring of key automations</li>
                <li>• Small tweaks and optimisations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Process / How it works */}
        <section id="process" className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold">
                Simple process, no technical stress
              </h2>
              <p className="mt-2 text-sm md:text-base text-slate-300 max-w-2xl">
                I handle the tech. You focus on your business. Here&apos;s how
                we typically work together.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <p className="text-xs font-semibold text-slate-400">Step 1</p>
              <h3 className="mt-2 text-lg font-semibold">Discovery call</h3>
              <p className="mt-2 text-sm text-slate-300">
                We map your current process, where you lose time and which
                tasks can be automated.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <p className="text-xs font-semibold text-slate-400">Step 2</p>
              <h3 className="mt-2 text-lg font-semibold">Prototype & build</h3>
              <p className="mt-2 text-sm text-slate-300">
                I design the flows, build your site/automations and show you a
                preview before launch.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <p className="text-xs font-semibold text-slate-400">Step 3</p>
              <h3 className="mt-2 text-lg font-semibold">Launch & optimise</h3>
              <p className="mt-2 text-sm text-slate-300">
                We go live, measure results and make small improvements so your
                system keeps getting better.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing & Plans */}
        <section
          id="pricing"
          className="space-y-8 rounded-3xl border border-slate-800 bg-slate-950/70 px-6 py-10 md:px-10 md:py-12"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold">
                Pricing &amp; Plans
              </h2>
              <p className="mt-2 text-sm md:text-base text-slate-300 max-w-2xl">
                Choose a plan that matches where your business is today. You can
                always upgrade later as your automation needs grow.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Starter Website */}
            <div className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-slate-50">
                    Starter Website
                  </h3>
                  <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs font-semibold text-emerald-300">
                    50% off
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate-300">
                  A clean, fast website to get your business online quickly.
                </p>
                <p className="mt-4 flex items-baseline gap-2">
                  <span className="text-lg text-slate-500 line-through">
                    ₹9,999
                  </span>
                  <span className="text-2xl font-semibold text-slate-50">
                    ₹4,999
                  </span>
                </p>
                <ul className="mt-4 space-y-1.5 text-sm text-slate-300">
                  <li>• One-page or basic multi-page site</li>
                  <li>• Mobile-friendly, modern design</li>
                  <li>• Contact / enquiry form integration</li>
                </ul>
              </div>
              <a
                href="/pricing/starter-website"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-linear-to-r from-emerald-400 to-emerald-600 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-transform transition-shadow hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(16,185,129,0.55)]"
              >
                Get Starter Website
              </a>
            </div>

            {/* Automation Setup (Most Popular) */}
            <div className="relative flex flex-col justify-between rounded-2xl border border-emerald-400/80 bg-slate-900/80 p-6 shadow-lg shadow-emerald-500/40 md:scale-[1.03]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-slate-950 shadow-md shadow-emerald-500/60">
                Most Popular
              </div>
              <div>
                <h3 className="mt-2 text-lg font-semibold text-slate-50">
                  Automation Setup
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  End-to-end automations that capture leads and follow up for
                  you.
                </p>
                <p className="mt-4 text-lg font-semibold text-slate-400">
                  Coming soon
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Price not decided yet. Get in touch for early access.
                </p>
                <ul className="mt-4 space-y-1.5 text-sm text-slate-300">
                  <li>• Website → WhatsApp / email lead flows</li>
                  <li>• AI chatbot for FAQs &amp; booking</li>
                  <li>• Basic dashboards &amp; notifications</li>
                </ul>
              </div>
              <a
                href="/pricing/automation-setup"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl border border-emerald-500/50 bg-slate-800/80 px-4 py-2.5 text-sm font-semibold text-emerald-300 hover:border-emerald-400/70 hover:bg-slate-800 hover:text-emerald-200 transition-colors"
              >
                Get notified · Contact for early access
              </a>
            </div>

            {/* Maintenance Plan */}
            <div className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-slate-50">
                    Maintenance Plan
                  </h3>
                  <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs font-semibold text-emerald-300">
                    20% off
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate-300">
                  Ongoing care so your website and automations stay fast and
                  reliable.
                </p>
                <p className="mt-4 flex items-baseline gap-2">
                  <span className="text-lg text-slate-500 line-through">
                    ₹999/month
                  </span>
                  <span className="text-2xl font-semibold text-slate-50">
                    ₹799<span className="text-sm text-slate-400">/month</span>
                  </span>
                </p>
                <ul className="mt-4 space-y-1.5 text-sm text-slate-300">
                  <li>• Monthly updates &amp; security checks</li>
                  <li>• Monitoring of key automations</li>
                  <li>• Small tweaks and content changes</li>
                </ul>
              </div>
              <a
                href="/pricing/maintenance-plan"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-linear-to-r from-emerald-400 to-emerald-600 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-transform transition-shadow hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(16,185,129,0.55)]"
              >
                Join Maintenance Plan
              </a>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section
          id="newsletter"
          className="rounded-3xl border border-slate-800 bg-slate-900/70 px-6 py-8 md:px-10 md:py-10"
        >
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold">
                Get simple automation tips in your inbox
              </h2>
              <p className="mt-3 text-sm md:text-base text-slate-300 max-w-xl">
                Short, practical ideas on how small businesses can save time
                with websites, AI and workflows. No spam—just useful examples.
              </p>
              <ul className="mt-4 space-y-1.5 text-sm text-slate-300">
                <li>• 1–2 emails per month</li>
                <li>• Real automations you can copy</li>
                <li>• Built specifically for small businesses</li>
              </ul>
            </div>

            <form className="space-y-3 md:space-y-4">
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your best email"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2.5 text-sm text-slate-50 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
                <input
                  type="text"
                  placeholder="Your business / industry (optional)"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2.5 text-sm text-slate-50 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 hover:bg-emerald-400"
              >
                Join the newsletter
              </button>
              <p className="text-[11px] text-slate-500">
                You can unsubscribe anytime. I&apos;ll only email when I have
                something genuinely helpful to share.
              </p>
            </form>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="rounded-3xl border border-slate-800 bg-linear-to-br from-slate-900 via-slate-900/80 to-slate-950 px-6 py-10 md:px-10 md:py-12"
        >
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold">
                Let&apos;s map out your automation plan
              </h2>
              <p className="mt-3 text-sm md:text-base text-slate-300 max-w-lg">
                Share a bit about your business and I&apos;ll reply with one or
                two practical ideas to save you time—no obligation, no spam.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-slate-300">
                <li>• 30–45 minute call on Zoom or WhatsApp</li>
                <li>• Clear next steps if we&apos;re a good fit</li>
                <li>• You keep the ideas even if we don&apos;t work together</li>
              </ul>
            </div>

            <form className="space-y-4">
              <div className="grid gap-3 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2.5 text-sm text-slate-50 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2.5 text-sm text-slate-50 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>
              <input
                type="text"
                placeholder="Your Business / Industry"
                className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2.5 text-sm text-slate-50 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
              <textarea
                placeholder="What would you like to automate or improve?"
                rows={4}
                className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2.5 text-sm text-slate-50 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 hover:bg-emerald-400"
              >
                Send Message
              </button>
              <p className="text-[11px] text-slate-500">
                By submitting, you agree to be contacted about this enquiry. No
                newsletters or spam.
              </p>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}