import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Server-only Supabase client using the SERVICE ROLE key.
 *
 * SECURITY: This must only ever be imported from server code (API routes,
 * Server Actions, route handlers). The service role key bypasses Row Level
 * Security and must NEVER reach the browser. It is read from a non-public
 * env var (no NEXT_PUBLIC_ prefix), so Next.js will not bundle it client-side.
 *
 * Returns null when env vars are missing so the app can degrade gracefully
 * (e.g. during local development before Supabase is configured).
 */
export function getSupabaseAdmin(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    return null;
  }

  return createClient(url, serviceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
