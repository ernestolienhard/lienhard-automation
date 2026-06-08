-- ============================================================================
-- Lienhard Automation – Supabase schema
-- Run this in the Supabase SQL Editor (Dashboard → SQL Editor → New query).
-- ============================================================================

-- Table for contact-form submissions.
create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

-- Helpful index for the admin view (newest first).
create index if not exists contact_submissions_created_at_idx
  on public.contact_submissions (created_at desc);

-- ----------------------------------------------------------------------------
-- Row Level Security
-- ----------------------------------------------------------------------------
-- Enable RLS so the public anon key CANNOT read or write this table.
-- Inserts happen exclusively from the server via the SERVICE ROLE key, which
-- bypasses RLS. This means form data is never readable from the browser.
alter table public.contact_submissions enable row level security;

-- No anon/authenticated policies are created on purpose:
-- with RLS enabled and no policy, the anon role has zero access.
-- (The service role used by the API route bypasses RLS entirely.)

-- ----------------------------------------------------------------------------
-- OPTIONAL: allow signed-in admins to read submissions in the Supabase UI.
-- Uncomment if you later add Supabase Auth for an admin panel.
-- ----------------------------------------------------------------------------
-- create policy "Admins can read submissions"
--   on public.contact_submissions
--   for select
--   to authenticated
--   using (true);
