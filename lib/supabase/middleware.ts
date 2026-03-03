import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import type { User } from "@supabase/supabase-js";

export async function updateSession(request: NextRequest): Promise<{
  response: NextResponse;
  user: User | null;
}> {
  const response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "https://hrspgmghsnidesstvrbg.supabase.co",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "sb_publishable_uEupFNH1uNKCC8W_Mas8rA_o-kX1J-l",
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet: { name: string; value: string; options?: object }[]) {
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const { data: { user } } = await supabase.auth.getUser();
  return { response, user };
}
