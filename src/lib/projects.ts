/**
 * Client work — the "projects I've done" the brief asks to link out to.
 *
 * ⚠️ LIVE URLS: fill `url` with each project's real address. Empty string
 * renders the card as "link coming soon" (no dead links, good for SEO).
 * These were seeded from the workspace; correct names/URLs as needed.
 */
export type Project = {
  slug: string;
  title: string;
  blurb: string;
  /** Live site. Leave "" until you have the real URL. */
  url: string;
  /**
   * Optional screenshot/photo shown at the top of the work card. Drop the file
   * in /public/work/ and reference it here, e.g. "/work/henna-girl.jpg".
   * Recommended ~1200×900 (4:3) or 1280×720 (16:9), JPG/WebP, < 300KB.
   */
  image?: string;
  category: string;
  tags: string[];
  year: string;
  /** Optional: feature on the homepage Work preview. */
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "recur-pro",
    title: "Recur Pro",
    blurb:
      "A scan-to-order retention platform for restaurants — captures every guest and turns their spend into automated birthdays, win-backs and loyalty that run over WhatsApp.",
    url: "https://recur-pro.geotech.agency",
    image: "/work/recur-pro.jpg",
    category: "Product · SaaS",
    tags: ["Next.js", "Supabase", "Retention"],
    year: "2026",
    featured: true,
  },
  {
    slug: "slotly",
    title: "Slotly",
    blurb:
      "A white-label booking engine for appointment businesses — live availability, zero double-bookings and instant confirmations, dressed in each client's brand.",
    url: "https://slotly.geotech.agency",
    image: "/work/slotly.jpg",
    category: "Product · SaaS",
    tags: ["Next.js", "Booking", "White-label"],
    year: "2026",
    featured: true,
  },
  {
    slug: "decor-adorne",
    title: "Decor Adorne",
    blurb:
      "A live editorial storefront for a luxury event-decor brand — photography-led, fast and built to turn browsers into bookings.",
    url: "https://decoradorne.com",
    image: "/work/decor-adorne.jpg",
    category: "Website",
    tags: ["Next.js", "E-commerce", "Brand"],
    year: "2025",
    featured: true,
  },
  {
    slug: "henna-girl",
    title: "Henna Girl",
    blurb:
      "A live storefront and booking-ready portfolio for a henna artist — warm, tactile and mobile-first, built to turn admirers into bookings.",
    url: "https://hennagirl.shop",
    image: "/work/henna-girl.jpg",
    category: "Website",
    tags: ["Next.js", "Portfolio", "E-commerce"],
    year: "2025",
    featured: true,
  },
  {
    slug: "ere-ayo",
    title: "Ere Ayo Mothercare Toys",
    blurb:
      "A lead-generation site for a playground-equipment supplier — fast, SEO-first and built around a one-tap WhatsApp quote for schools, estates and daycares.",
    url: "https://ereayo.shop",
    image: "/work/ere-ayo.jpg",
    category: "Website",
    tags: ["Next.js", "SEO", "Lead-gen"],
    year: "2026",
    featured: true,
  },
  {
    slug: "pharma-guard-ai",
    title: "Pharma Guard AI",
    blurb:
      "A blockchain solution that verifies pharmaceutical supply chains, logging drug authenticity immutably on Starknet. Built by a developer who is also a pharmacist.",
    url: "",
    category: "Web3 · Hackathon",
    tags: ["Cairo", "Starknet", "React"],
    year: "2026",
    featured: true,
  },
  {
    slug: "vantage-finance",
    title: "Vantage Finance",
    blurb:
      "A high-trust marketing site for a finance brand — clean conversion paths and fast, accessible pages.",
    url: "",
    category: "Website",
    tags: ["Next.js", "SEO", "Finance"],
    year: "2025",
  },
  {
    slug: "my-restaurant-landing",
    title: "Restaurant Landing",
    blurb:
      "A conversion-focused landing page for a restaurant, with menu highlights and a clear path to order.",
    url: "",
    category: "Website",
    tags: ["Landing page", "Hospitality"],
    year: "2025",
  },
  {
    slug: "medmate-onboarding",
    title: "MedMate",
    blurb:
      "An onboarding flow for a healthcare product — guided, low-friction sign-up designed for non-technical users.",
    url: "",
    category: "Product · Onboarding",
    tags: ["Next.js", "Healthcare", "UX"],
    year: "2025",
  },
];

/**
 * The three works previewed on the homepage. Kept deliberately short so the
 * grid fills one clean row and pushes visitors to "View all work" for the rest.
 */
const PREVIEW_SLUGS = ["ere-ayo", "decor-adorne", "henna-girl"] as const;
export const previewProjects = PREVIEW_SLUGS.map((slug) =>
  projects.find((p) => p.slug === slug),
).filter((p): p is Project => p !== undefined);
