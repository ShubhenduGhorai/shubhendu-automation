const DEFAULT_SUPABASE_URL = "https://hrspgmghsnidesstvrbg.supabase.co";
const DEFAULT_SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_uEupFNH1uNKCC8W_Mas8rA_o-kX1J-l";

export function getSupabaseEnv() {
  const url =
    process.env.NEXT_PUBLIC_SUPABASE_URL ??
    process.env.SUPABASE_URL ??
    DEFAULT_SUPABASE_URL;

  const key =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
    process.env.SUPABASE_ANON_KEY ??
    process.env.SUPABASE_PUBLISHABLE_KEY ??
    DEFAULT_SUPABASE_PUBLISHABLE_KEY;

  return { url, key };
}

export function hasSupabaseEnv() {
  const { url, key } = getSupabaseEnv();
  return Boolean(url && key);
}

export function requireSupabaseEnv() {
  return getSupabaseEnv();
}
