This is a [Next.js](https://nextjs.org) project.

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Supabase configuration

Set these environment variables in local `.env.local` and in Vercel Project Settings (recommended):

- `NEXT_PUBLIC_SUPABASE_URL`
- One of:
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`

Notes:

- The app accepts either key variable name.
- The app also accepts non-public names (`SUPABASE_URL`, `SUPABASE_ANON_KEY`, `SUPABASE_PUBLISHABLE_KEY`).
- If none are set, the app uses the project default URL/key so it does not crash at runtime.

## Deploy on Vercel

Deploy the app on Vercel and ensure the Supabase environment variables above are configured for the selected environment (Production/Preview/Development).
