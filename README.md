# ScaleHarbor

Premium agency website built with Next.js App Router, TypeScript, TailwindCSS, Framer Motion, and a production-ready lead pipeline.

## Features

- Multi-page SaaS-style agency website (Home, Services, Pricing, Case Studies, About, Blog, Contact, Privacy, Terms)
- Dark/light theme toggle
- Smooth animations + micro-interactions
- Sticky/floating CTA + glassmorphism navbar
- Contact form with React Hook Form + Zod
- Lead storage via Prisma + PostgreSQL
- Email notifications via Resend
- MDX-powered blog
- SEO metadata + Open Graph + JSON-LD
- `sitemap.xml` + `robots.txt`
- Loading skeleton, error boundary, custom 404

## Tech Stack

- Next.js (App Router)
- TypeScript
- TailwindCSS
- Framer Motion
- Lucide Icons
- React Hook Form + Zod
- Prisma + PostgreSQL
- Resend

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
cp .env.example .env.local
```

Required for lead persistence/email:

- `DATABASE_URL`
- `RESEND_API_KEY`
- `RESEND_TO_EMAIL`

Optional:

- `RESEND_FROM_EMAIL`
- Supabase public vars if using old Supabase-backed modules

## Prisma

Generate client and run migrations:

```bash
npx prisma generate
npx prisma migrate dev --name init
```

## Build

```bash
npm run lint
npm run build
npm run start
```

