import {
  getHero,
  getServices,
  getAbout,
  getTestimonials,
  getFaq,
  getNavLinks,
} from "@/lib/data";
import { PublicNavbar } from "@/components/layout/PublicNavbar";
import { PublicFooter } from "@/components/layout/PublicFooter";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { AboutSection } from "@/components/home/AboutSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { ContactSection } from "@/components/home/ContactSection";
import type { NavLink } from "@/types/database";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [hero, services, about, testimonials, faqs, navLinks] = await Promise.all([
    getHero(),
    getServices(),
    getAbout(),
    getTestimonials(),
    getFaq(),
    getNavLinks(),
  ]);

  const defaultLinks: NavLink[] = [
    { id: "s", label: "Services", href: "#services", sort_order: 0 },
    { id: "a", label: "About", href: "#about", sort_order: 1 },
    { id: "t", label: "Testimonials", href: "#testimonials", sort_order: 2 },
    { id: "f", label: "FAQ", href: "#faq", sort_order: 3 },
  ];
  const links = navLinks.length > 0 ? navLinks : defaultLinks;

  return (
    <>
      <PublicNavbar links={links} logoText="Shubhendu Automation" />
      <main>
        <HeroSection data={hero} />
        <ServicesSection services={services} />
        <AboutSection data={about} />
        <TestimonialsSection testimonials={testimonials} />
        <FaqSection faqs={faqs} />
        <ContactSection />
      </main>
      <PublicFooter links={links} />
    </>
  );
}
