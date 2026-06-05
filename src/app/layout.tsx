import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import WhatsAppFab from "@/components/ui/WhatsAppFab";

// Fonts: display "optional" never swaps after first paint, so it can't cause a
// layout shift. The two TEXT fonts (display heading + body) are preloaded so
// they're ready before the first paint — the heading then renders in its real
// font from the start (no reflow of the balance-wrapped headline, which was the
// source of the large intermittent CLS). Space Mono is only used for tiny
// telemetry labels, so it stays off the critical path (preload:false) to save
// bandwidth; its metric-matched fallback makes any late application shift-free.
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "optional",
  variable: "--font-bricolage",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  display: "optional",
  variable: "--font-hanken",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "optional",
  preload: false,
  variable: "--font-space-mono",
});

export const viewport: Viewport = {
  themeColor: "#080b0e",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Digital Engineering Studio`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: [
    "web design Lagos",
    "Next.js development agency",
    "website creation Nigeria",
    "SaaS product studio",
    "motion design agency",
    "Geotech Solutions",
    "booking system",
    "customer retention software",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Digital Engineering Studio`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Digital Engineering Studio`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.logo}`,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    email: siteConfig.email,
    telephone: siteConfig.whatsappDisplay,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: siteConfig.whatsappDisplay,
      email: siteConfig.email,
      availableLanguage: ["en"],
    },
    description: siteConfig.description,
    foundingDate: siteConfig.founded,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.region,
      addressCountry: siteConfig.location.country,
    },
    areaServed: "Worldwide",
    knowsAbout: [
      "Web development",
      "Next.js",
      "SaaS product engineering",
      "Motion design",
      "Search engine optimisation",
    ],
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website creation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital products" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Motion design" } },
    ],
    sameAs: Object.values(siteConfig.social),
  };

  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${hanken.variable} ${spaceMono.variable}`}
      suppressHydrationWarning
    >
      {/* suppressHydrationWarning: browser extensions (Grammarly, dark-mode, etc.)
          inject attributes onto <body> before React hydrates; this stops that
          benign, client-only mutation from surfacing as a hydration warning. */}
      <body className="min-h-screen flex flex-col antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Atmosphere: radial mint blooms + film grain behind all content */}
        <div className="atmosphere" aria-hidden />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-mint focus:px-4 focus:py-2 focus:text-mint-ink"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
