import Link from "next/link";
import { Box, Film, Globe, type LucideIcon } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

type Service = {
  index: string;
  title: string;
  icon: LucideIcon;
  body: string;
  deliverables: string[];
  href: string;
};

const services: Service[] = [
  {
    index: "01",
    title: "Website creation",
    icon: Globe,
    body: "Fast, search-first websites and web apps. Built mobile-first on Next.js, engineered for Core Web Vitals and ranking — not just a pretty template.",
    deliverables: ["Marketing sites", "Web apps", "E-commerce", "Technical SEO"],
    href: "/#contact",
  },
  {
    index: "02",
    title: "Digital products",
    icon: Box,
    body: "We ship software, not slides. We design, build and run our own SaaS — Recur Pro and Slotly are ours, both live — and we'll build and operate yours the same way.",
    deliverables: ["MVPs", "SaaS platforms", "Automations", "Dashboards"],
    href: "/#products",
  },
  {
    index: "03",
    title: "Motion design",
    icon: Film,
    body: "Motion that makes the product sell. Scroll-stopping product reels, brand motion and UI animation — the kind that turns a feature into a feeling.",
    deliverables: ["Product reels", "Brand motion", "UI animation", "Social ads"],
    href: "/#contact",
  },
];

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <Reveal className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel index="01">Services</SectionLabel>
            <h2
              id="services-heading"
              className="mt-4 max-w-2xl text-3xl leading-tight sm:text-4xl md:text-5xl"
            >
              Three disciplines, one engineering bench.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-graphite">
            Strategy, build and motion handled in-house — so the thing you launch
            is fast, found and unforgettable.
          </p>
        </Reveal>

        <div className="mt-14 border-t border-line-strong">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.index} delay={i * 0.06}>
                <Link
                  href={service.href}
                  className="group grid grid-cols-1 gap-6 border-b border-line-strong py-9 transition-colors hover:bg-paper-raised active:bg-panel md:grid-cols-[auto_1fr_auto] md:items-start md:gap-10 md:px-4"
                >
                  <div className="flex items-center gap-5 md:flex-col md:items-start md:gap-6">
                    <span className="data-label !text-base text-mint">{service.index}</span>
                    <span className="flex h-12 w-12 items-center justify-center rounded-brand border border-line-strong bg-panel text-graphite transition-colors group-hover:border-mint group-hover:text-mint">
                      <Icon size={22} strokeWidth={1.6} />
                    </span>
                  </div>

                  <div className="max-w-2xl">
                    <h3 className="font-display text-2xl text-ink md:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-graphite">{service.body}</p>
                  </div>

                  <ul className="flex flex-wrap gap-2 md:max-w-[14rem] md:justify-end">
                    {service.deliverables.map((d) => (
                      <li
                        key={d}
                        className="rounded-brand border border-line-strong bg-panel px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-wide text-graphite"
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
