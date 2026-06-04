/**
 * Single source of truth for site-wide constants used across SEO metadata,
 * JSON-LD structured data, navigation and the footer.
 */
export const siteConfig = {
  name: "Geotech Solutions",
  shortName: "Geotech",
  url: "https://geotech.agency",
  // The maze-G + mint dot mark, used in JSON-LD / social cards.
  logo: "/logo.jpeg",
  tagline: "Powering growth through smart technology",
  description:
    "Geotech Solutions powers growth through smart technology — a digital engineering studio building high-performance websites, our own software products (Recur Pro, Slotly), and motion design that makes them sell.",
  email: "geotechsolutionsng@gmail.com",
  // WhatsApp in international wa.me format (no +, no leading 0). 0707… → 234707…
  whatsapp: "2347079797963",
  // Human-readable for display + JSON-LD telephone (E.164-ish).
  whatsappDisplay: "+234 707 979 7963",
  location: { city: "Lagos", region: "Lagos", country: "NG" },
  founded: "2024",
  social: {
    // TODO: drop in real handles when ready — these feed JSON-LD `sameAs`.
    x: "https://x.com/geotechsolutions",
    linkedin: "https://www.linkedin.com/company/geotech-solutions",
    github: "https://github.com/geotech-solutions",
  },
} as const;

/**
 * Single source of truth for the WhatsApp deep-link. Pass `text` to pre-fill a
 * message (it gets URL-encoded). Used by the floating FAB and the contact CTA.
 */
export const whatsappLink = (text?: string) =>
  `https://wa.me/${siteConfig.whatsapp}${
    text ? `?text=${encodeURIComponent(text)}` : ""
  }`;

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/work" },
  { label: "Products", href: "/#products" },
  { label: "Contact", href: "/#contact" },
];
