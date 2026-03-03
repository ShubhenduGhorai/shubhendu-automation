import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/components/layout/theme-provider";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { StickyCTA } from "@/components/layout/sticky-cta";

export const metadata: Metadata = {
  metadataBase: new URL("https://scaleharbor.com"),
  title: "ScaleHarbor | Automation. AI. Growth Infrastructure.",
  description: "Premium automation, AI systems, and growth infrastructure for founders and SMBs.",
  openGraph: {
    title: "ScaleHarbor",
    description: "Automation. AI. Growth Infrastructure.",
    url: "https://scaleharbor.com",
    siteName: "ScaleHarbor",
    type: "website",
  },
  robots: { index: true, follow: true },

};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ScaleHarbor",
    url: "https://scaleharbor.com",
    slogan: "Automation. AI. Growth Infrastructure.",
  };

  
return (
  <html lang="en" suppressHydrationWarning>
    <body className="min-h-screen bg-[#05060b] text-white antialiased">
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.2),transparent_35%)]" />
        <SiteHeader />
        {children}
        <SiteFooter />
        <StickyCTA />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </ThemeProvider>
    </body>
  </html>
);
}
