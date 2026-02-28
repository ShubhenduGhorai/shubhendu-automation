-- Run this in Supabase SQL Editor (Dashboard -> SQL Editor) to create tables.

-- Enable UUID extension if not already
create extension if not exists "uuid-ossp";

-- Hero (single row; use first row as active)
create table if not exists public.hero (
  id uuid primary key default uuid_generate_v4(),
  title text,
  subtitle text,
  button_text text,
  button_link text,
  image_url text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Services
create table if not exists public.services (
  id uuid primary key default uuid_generate_v4(),
  title text,
  description text,
  icon text,
  image_url text,
  sort_order int default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Testimonials
create table if not exists public.testimonials (
  id uuid primary key default uuid_generate_v4(),
  name text,
  role text,
  content text,
  image_url text,
  sort_order int default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- FAQ
create table if not exists public.faq (
  id uuid primary key default uuid_generate_v4(),
  question text,
  answer text,
  sort_order int default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- About (single row)
create table if not exists public.about (
  id uuid primary key default uuid_generate_v4(),
  content text,
  image_url text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Nav links (editable navbar)
create table if not exists public.nav_links (
  id uuid primary key default uuid_generate_v4(),
  label text,
  href text,
  sort_order int default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Contact form submissions (insert only from public)
create table if not exists public.contact_submissions (
  id uuid primary key default uuid_generate_v4(),
  name text,
  email text,
  message text,
  created_at timestamptz default now()
);

-- RLS: allow public read for hero, services, testimonials, faq, about, nav_links
alter table public.hero enable row level security;
alter table public.services enable row level security;
alter table public.testimonials enable row level security;
alter table public.faq enable row level security;
alter table public.about enable row level security;
alter table public.nav_links enable row level security;
alter table public.contact_submissions enable row level security;

-- Public read policies
create policy "Public read hero" on public.hero for select using (true);
create policy "Public read services" on public.services for select using (true);
create policy "Public read testimonials" on public.testimonials for select using (true);
create policy "Public read faq" on public.faq for select using (true);
create policy "Public read about" on public.about for select using (true);
create policy "Public read nav_links" on public.nav_links for select using (true);

-- Contact: anyone can insert
create policy "Public insert contact_submissions" on public.contact_submissions
  for insert with check (true);

-- Admin: allow authenticated users full access (use your Supabase auth)
-- Replace with your auth.uid() if you restrict to specific users
create policy "Auth all hero" on public.hero for all using (auth.role() = 'authenticated');
create policy "Auth all services" on public.services for all using (auth.role() = 'authenticated');
create policy "Auth all testimonials" on public.testimonials for all using (auth.role() = 'authenticated');
create policy "Auth all faq" on public.faq for all using (auth.role() = 'authenticated');
create policy "Auth all about" on public.about for all using (auth.role() = 'authenticated');
create policy "Auth all nav_links" on public.nav_links for all using (auth.role() = 'authenticated');
create policy "Auth select contact_submissions" on public.contact_submissions for select using (auth.role() = 'authenticated');

-- Storage bucket for uploads (create in Dashboard -> Storage: bucket "public", public)
-- Then: Storage -> New bucket -> name "public", Public bucket ON
-- RLS for storage: allow authenticated upload, public read (or set in Dashboard)
