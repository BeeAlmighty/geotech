import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { LogoMarkImage } from "@/components/brand/Logo";
import { siteConfig } from "@/lib/site";

const columns = [
  {
    heading: "Studio",
    links: [
      { label: "Services", href: "/#services" },
      { label: "Work", href: "/work" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    heading: "Products",
    links: [
      { label: "Recur Pro", href: "/products/recur-pro" },
      { label: "Slotly", href: "/products/slotly" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto border-t border-line-strong bg-paper-raised">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          {/* Brand + pitch */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" aria-label="Geotech Solutions — home" className="text-slate">
              <LogoMarkImage size={44} />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-graphite">
              A digital engineering studio. We build websites, ship our own
              software, and animate the work that sells it.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="group mt-5 inline-flex max-w-full items-center gap-1.5 font-mono text-xs text-ink"
            >
              <span className="underline-draw min-w-0 break-all pb-0.5">{siteConfig.email}</span>
              <ArrowUpRight
                size={13}
                className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          {columns.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <p className="data-label mb-4">{col.heading}</p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-1.5 text-sm text-graphite transition-colors hover:text-mint active:text-mint"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 font-mono text-[0.7rem] uppercase tracking-wider text-muted md:flex-row md:items-center md:justify-between">
          <span>
            © {year} {siteConfig.name}
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-mint-bright dot-glow" />
            {siteConfig.location.city}, {siteConfig.location.country} · Available worldwide
          </span>
        </div>
      </div>
    </footer>
  );
}
