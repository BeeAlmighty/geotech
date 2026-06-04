/**
 * Geotech's own digital products. Each renders a dedicated page at
 * /products/[slug] and a structured-data SoftwareApplication entry.
 */
export type ProductFeature = { title: string; body: string };

export type Product = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  /** One-paragraph elevator pitch used on the home grid + meta description. */
  summary: string;
  status: "Live" | "In demo" | "Beta";
  /** External link to the running product (or null to point at the page only). */
  liveUrl: string | null;
  liveLabel: string;
  /** ~3 sentence narrative for the product page intro. */
  intro: string;
  audience: string;
  features: ProductFeature[];
  stack: string[];
  // mono "spec sheet" rows shown on the product page.
  spec: { label: string; value: string }[];
};

export const products: Product[] = [
  {
    slug: "recur-pro",
    name: "Recur Pro",
    category: "Retention SaaS",
    tagline: "Turn one-time diners into regulars.",
    summary:
      "Recur Pro is an automated retention engine for restaurants. It scores diners by how often they order and fires personalised WhatsApp win-backs the moment they go quiet — so the revenue you already earned comes back on its own.",
    status: "Live",
    liveUrl: "https://recur-pro.geotech.agency",
    liveLabel: "recur-pro.geotech.agency",
    intro:
      "Most restaurants pour everything into winning a customer, then lose them in silence. Recur Pro watches how people actually order, spots the regulars going cold, and reaches out with a timed WhatsApp offer before they forget you exist. The chasing runs itself; you just watch them come back.",
    audience: "Restaurants, QSRs and food brands with repeat customers.",
    features: [
      {
        title: "Velocity cohorts",
        body: "Diners are bucketed by how recently and how often they order, so a weekly regular and a one-time walk-in never get the same message.",
      },
      {
        title: "WhatsApp win-backs",
        body: "On-brand sequences trigger the moment a customer goes quiet — delivered through the WhatsApp API, where people actually read.",
      },
      {
        title: "Zero manual entry",
        body: "The pipeline captures, segments and reaches out on its own. Owners read retention on a live dashboard instead of wrangling CSVs.",
      },
      {
        title: "Your data, your engine",
        body: "Workflows run on a hardened, containerised automation stack — your customer list never leaves your control.",
      },
    ],
    stack: ["Next.js", "n8n", "Docker", "WhatsApp API", "PostgreSQL"],
    spec: [
      { label: "Type", value: "B2B SaaS" },
      { label: "Channel", value: "WhatsApp" },
      { label: "Built by", value: "Geotech Solutions" },
      { label: "Status", value: "Live · production" },
    ],
  },
  {
    slug: "slotly",
    name: "Slotly",
    category: "Booking SaaS · White-label",
    tagline: "Bookings on autopilot.",
    summary:
      "Slotly is a white-label booking system for appointment businesses. Customers book themselves in three taps; the calendar can't double-book, deposits are taken up front, and confirmations fire instantly. It's live — try any of the demo storefronts yourself.",
    status: "Live",
    liveUrl: "https://slotly.geotech.agency",
    liveLabel: "slotly.geotech.agency",
    intro:
      "Salons, spas, tattoo studios and clinics still run bookings out of DMs and a paper diary — and lose money to no-shows and double-bookings. Slotly is one engine dressed in each client's own brand: customers book in three taps, the slot locks in the database, and the owner wakes up to a full calendar. It's running now, with several live demo storefronts you can book through.",
    audience: "Spas, salons, tattoo studios, clinics, hotels and barbers.",
    features: [
      {
        title: "Three taps to booked",
        body: "Service → time → confirm. No DM ping-pong, no phone tag — a booking link that does the talking.",
      },
      {
        title: "It can't double-book",
        body: "No-overlap is enforced in the database itself, not by a busy owner. Two people race the same slot; only one wins.",
      },
      {
        title: "Deposits & instant confirmation",
        body: "Take a deposit at booking, then fire an email + calendar invite the moment the slot is locked. No-shows stop being free.",
      },
      {
        title: "Same engine, your brand",
        body: "Theming is data: colours, fonts and corners are per-tenant. The calm spa skin and the bold tattoo skin run on one codebase.",
      },
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "Paystack", "Resend"],
    spec: [
      { label: "Type", value: "White-label SaaS" },
      { label: "Tenancy", value: "Multi-tenant" },
      { label: "Built by", value: "Geotech Solutions" },
      { label: "Status", value: "Live · multi-tenant demo" },
    ],
  },
];

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);
