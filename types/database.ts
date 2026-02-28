export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      hero: {
        Row: {
          id: string;
          title: string | null;
          subtitle: string | null;
          button_text: string | null;
          button_link: string | null;
          image_url: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Insert: {
          id?: string;
          title?: string | null;
          subtitle?: string | null;
          button_text?: string | null;
          button_link?: string | null;
          image_url?: string | null;
        };
        Update: {
          title?: string | null;
          subtitle?: string | null;
          button_text?: string | null;
          button_link?: string | null;
          image_url?: string | null;
        };
      };
      services: {
        Row: {
          id: string;
          title: string | null;
          description: string | null;
          icon: string | null;
          image_url: string | null;
          sort_order: number | null;
          created_at?: string;
          updated_at?: string;
        };
        Insert: {
          id?: string;
          title?: string | null;
          description?: string | null;
          icon?: string | null;
          image_url?: string | null;
          sort_order?: number | null;
        };
        Update: {
          title?: string | null;
          description?: string | null;
          icon?: string | null;
          image_url?: string | null;
          sort_order?: number | null;
        };
      };
      testimonials: {
        Row: {
          id: string;
          name: string | null;
          role: string | null;
          content: string | null;
          image_url: string | null;
          sort_order: number | null;
          created_at?: string;
          updated_at?: string;
        };
        Insert: {
          id?: string;
          name?: string | null;
          role?: string | null;
          content?: string | null;
          image_url?: string | null;
          sort_order?: number | null;
        };
        Update: {
          name?: string | null;
          role?: string | null;
          content?: string | null;
          image_url?: string | null;
          sort_order?: number | null;
        };
      };
      faq: {
        Row: {
          id: string;
          question: string | null;
          answer: string | null;
          sort_order: number | null;
          created_at?: string;
          updated_at?: string;
        };
        Insert: {
          id?: string;
          question?: string | null;
          answer?: string | null;
          sort_order?: number | null;
        };
        Update: {
          question?: string | null;
          answer?: string | null;
          sort_order?: number | null;
        };
      };
      about: {
        Row: {
          id: string;
          content: string | null;
          image_url: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Insert: {
          id?: string;
          content?: string | null;
          image_url?: string | null;
        };
        Update: {
          content?: string | null;
          image_url?: string | null;
        };
      };
      nav_links: {
        Row: {
          id: string;
          label: string | null;
          href: string | null;
          sort_order: number | null;
          created_at?: string;
          updated_at?: string;
        };
        Insert: {
          id?: string;
          label?: string | null;
          href?: string | null;
          sort_order?: number | null;
        };
        Update: {
          label?: string | null;
          href?: string | null;
          sort_order?: number | null;
        };
      };
      contact_submissions: {
        Row: {
          id: string;
          name: string | null;
          email: string | null;
          message: string | null;
          created_at: string | null;
        };
        Insert: {
          id?: string;
          name?: string | null;
          email?: string | null;
          message?: string | null;
          created_at?: string | null;
        };
        Update: never;
      };
    };
  };
}

export type Hero = Database["public"]["Tables"]["hero"]["Row"];
export type Service = Database["public"]["Tables"]["services"]["Row"];
export type Testimonial = Database["public"]["Tables"]["testimonials"]["Row"];
export type Faq = Database["public"]["Tables"]["faq"]["Row"];
export type About = Database["public"]["Tables"]["about"]["Row"];
export type NavLink = Database["public"]["Tables"]["nav_links"]["Row"];
export type ContactSubmission =
  Database["public"]["Tables"]["contact_submissions"]["Row"];
