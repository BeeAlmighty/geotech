import Link from "next/link";
import { Code2, Workflow, Boxes, Film, Compass, type LucideIcon } from "lucide-react";
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
    title: "Software development",
    icon: Code2,
    body: "Websites, web apps and mobile apps that do real work. Built mobile-first on Next.js, engineered for Core Web Vitals and ranking — like infrastructure, not a template.",
    deliverables: ["Websites", "Web apps", "Mobile apps", "Technical SEO"],
    href: "/#contact",
  },
  {
    index: "02",
    title: "Automation",
    icon: Workflow,
    body: "n8n and AI workflows that handle the repetitive tasks your team shouldn't — so hours stop leaking into manual work and nothing falls through the cracks.",
    deliverables: ["n8n workflows", "AI agents", "Integrations", "Ops automation"],
    href: "/#contact",
  },
  {
    index: "03",
    title: "Custom & white-label SaaS",
    icon: Boxes,
    body: "Branded software for your business or niche — to run yourself or resell. We design, build and operate it the way we run our own: Recur Pro and Slotly are ours, both live.",
    deliverables: ["MVPs", "SaaS platforms", "White-label", "Dashboards"],
    href: "/#products",
  },
  {
    index: "04",
    title: "Motion design & explainer videos",
    icon: Film,
    body: "Motion that makes complex products easy to sell. SaaS explainer videos, product reels and UI animation — the kind that turns a feature into a feeling.",
    deliverables: ["Explainer videos", "Product reels", "Brand motion", "UI animation"],
    href: "/#contact",
  },
  {
    index: "05",
    title: "Business consultations",
    icon: Compass,
    body: "We find where software and automation grow your business, then build it. Retention-first systems that bring customers back and free your team from busywork.",
    deliverables: ["Discovery", "Automation audit", "Roadmaps", "Retention strategy"],
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
              Five disciplines, one engineering bench.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-graphite">
            Software, automation and motion handled in-house — built to save you
            time, bring customers back and pay for itself.
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
