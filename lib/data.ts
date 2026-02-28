import { createClient } from "@/lib/supabase/server";
import type {
  Hero,
  Service,
  Testimonial,
  Faq,
  About,
  NavLink,
  ContactSubmission,
} from "@/types/database";

export async function getHero(): Promise<Hero | null> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
    .from("hero")
    .select("*")
    .order("updated_at", { ascending: false })
    .limit(1)
    .maybeSingle();
  if (error) return null;
  return data;
  } catch {
    return null;
  }
}

export async function getServices(): Promise<Service[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("services")
      .select("*")
      .order("sort_order", { ascending: true });
    if (error) return [];
    return data ?? [];
  } catch {
    return [];
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("testimonials")
      .select("*")
      .order("sort_order", { ascending: true });
    if (error) return [];
    return data ?? [];
  } catch {
    return [];
  }
}

export async function getFaq(): Promise<Faq[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("faq")
      .select("*")
      .order("sort_order", { ascending: true });
    if (error) return [];
    return data ?? [];
  } catch {
    return [];
  }
}

export async function getAbout(): Promise<About | null> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("about")
      .select("*")
      .order("updated_at", { ascending: false })
      .limit(1)
      .maybeSingle();
    if (error) return null;
    return data;
  } catch {
    return null;
  }
}

export async function getNavLinks(): Promise<NavLink[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("nav_links")
      .select("*")
      .order("sort_order", { ascending: true });
    if (error) return [];
    return data ?? [];
  } catch {
    return [];
  }
}

export async function getContactSubmissions(): Promise<ContactSubmission[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("contact_submissions")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) return [];
    return data ?? [];
  } catch {
    return [];
  }
}
