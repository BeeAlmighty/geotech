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
  /** Matching blog category slug (geotech.agency/blog/[slug]) for cross-linking. */
  blogCategory?: string;
  /** Screenshot in /public/work/<slug>.jpg shown on the home product card. */
  image?: string;
};

export const products: Product[] = [
  {
    slug: "egora",
    name: "Egora",
    category: "AI Agent SaaS",
    tagline: "The AI employee that lives in your WhatsApp.",
    summary:
      "Every slow reply hands a customer to a faster competitor. Egora is an AI agent that answers every WhatsApp in seconds, qualifies the lead and books the job around the clock, all in your brand voice. Geotech Digital Horizon Limited builds it, trains it and runs it for you.",
    status: "Live",
    liveUrl: "https://egora.geotech.agency",
    liveLabel: "egora.geotech.agency",
    intro:
      "Most small businesses lose customers in the gap between a message and a reply. By the time you get back to them, they have already bought elsewhere. Egora closes that gap. It answers instantly on WhatsApp, holds a real conversation in your brand voice, and turns enquiries into booked jobs and orders around the clock. You connect your number. We configure it, train it on your business and run it for you.",
    audience: "Service businesses, clinics, retailers and any brand that sells over WhatsApp.",
    features: [
      {
        title: "Answers in seconds, 24/7",
        body: "Every message gets an instant, on-brand reply, day or night, however many land at once. After-hours enquiries stop going cold while you sleep.",
      },
      {
        title: "Qualifies & books",
        body: "Egora asks the right questions, captures what matters, and books the job or takes the order straight into your flow. Never a dead-end auto-reply.",
      },
      {
        title: "Recovers lost sales",
        body: "It follows up with people who went quiet and revives conversations left on read, so the demand you already earned does not leak away.",
      },
      {
        title: "Your voice, your rules",
        body: "Trained on your services, prices and tone, with a clean handoff to a human the moment a conversation needs one.",
      },
    ],
    stack: ["Next.js", "WhatsApp API", "n8n", "LLM agents", "PostgreSQL"],
    spec: [
      { label: "Type", value: "AI agent SaaS" },
      { label: "Channel", value: "WhatsApp" },
      { label: "Built by", value: "Geotech Digital Horizon Limited" },
      { label: "Status", value: "Live · production" },
    ],
    blogCategory: "egora",
    image: "/work/egora.jpg",
  },
  {
    slug: "recur-pro",
    name: "Recur Pro",
    category: "Retention SaaS",
    tagline: "Turn one-time diners into regulars.",
    summary:
      "Win a diner once and most restaurants never see them again. Recur Pro is an automated retention engine that scores diners by how often they order and fires personalised WhatsApp win-backs the moment they go quiet, so the revenue you already earned comes back on its own.",
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
        body: "On-brand sequences trigger the moment a customer goes quiet, delivered through the WhatsApp API, where people actually read.",
      },
      {
        title: "Zero manual entry",
        body: "The pipeline captures, segments and reaches out on its own. Owners read retention on a live dashboard instead of wrangling CSVs.",
      },
      {
        title: "Your data, your engine",
        body: "Workflows run on a hardened, containerised automation stack, so your customer list never leaves your control.",
      },
    ],
    stack: ["Next.js", "n8n", "Docker", "WhatsApp API", "PostgreSQL"],
    spec: [
      { label: "Type", value: "B2B SaaS" },
      { label: "Channel", value: "WhatsApp" },
      { label: "Built by", value: "Geotech Digital Horizon Limited" },
      { label: "Status", value: "Live · production" },
    ],
    blogCategory: "recur-pro",
    image: "/work/recur-pro.jpg",
  },
  {
    slug: "slotly",
    name: "Slotly",
    category: "Booking & Retention · White-label",
    tagline: "Fill the calendar, then keep it full.",
    summary:
      "No-shows and customers who drift away quietly bleed appointment businesses dry. Slotly is a white-label booking and retention platform: customers book in three taps, deposits are taken up front (card or transfer with a WhatsApp receipt), then loyalty, referrals and automatic win-backs keep them coming back. Live with real clients.",
    status: "Live",
    liveUrl: "https://slotly.geotech.agency",
    liveLabel: "slotly.geotech.agency",
    intro:
      "Salons, spas, tattoo studios and clinics still run bookings out of DMs and a paper diary, and they lose money three ways: to no-shows, to double-bookings, and to customers who simply drift away. Slotly fixes all three. It is one engine dressed in each client's own brand. Customers book in three taps, the slot locks in the database, and the deposit is taken up front. Then the retention layer takes over with loyalty rewards, referrals, win-back campaigns and automated messages that quietly refill the calendar. It is live with paying clients alongside demo storefronts you can book through.",
    audience: "Spas, salons, massage therapists, tattoo studios, clinics, hotels and barbers.",
    features: [
      {
        title: "Three taps to booked",
        body: "Service, time, confirm. No DM ping-pong, no phone tag, just a booking link that does the talking.",
      },
      {
        title: "It can't double-book",
        body: "No-overlap is enforced in the database itself, not by a busy owner. Two people race the same slot; only one wins.",
      },
      {
        title: "Deposits, your way",
        body: "Take a deposit at booking by card (Paystack) or by bank and PalmPay transfer confirmed with a WhatsApp receipt, whatever your customers actually use. No-shows stop being free.",
      },
      {
        title: "Loyalty that compounds",
        body: "Reward repeat visits with points and perks, so a one-time booking turns into a habit. The regulars you keep are the cheapest revenue you have.",
      },
      {
        title: "Referrals & win-backs",
        body: "Happy customers refer friends with a tap, and anyone who goes quiet gets an automatic win-back nudge, so the calendar refills itself instead of waiting on you.",
      },
      {
        title: "Messages that run themselves",
        body: "Confirmations, reminders, thank-yous and follow-ups fire automatically over WhatsApp and email, so no-shows drop and customers feel looked after, completely hands-off.",
      },
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "Paystack", "WhatsApp"],
    spec: [
      { label: "Type", value: "Booking + retention SaaS" },
      { label: "Tenancy", value: "Multi-tenant white-label" },
      { label: "Built by", value: "Geotech Digital Horizon Limited" },
      { label: "Status", value: "Live · real clients + demos" },
    ],
    blogCategory: "slotly",
    image: "/work/slotly.jpg",
  },
];

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);
