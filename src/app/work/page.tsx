import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import WorkGrid from "@/components/marketing/WorkGrid";
import { projects } from "@/lib/projects";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work — websites, products & motion we've shipped",
  description:
    "Selected projects from Geotech Solutions: websites, digital products and motion design built for real clients across finance, healthcare, hospitality and Web3.",
  alternates: { canonical: "/work" },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/work`,
    title: `Work · ${siteConfig.name}`,
    description:
      "Selected websites, products and motion design built by Geotech Solutions.",
  },
};

export default function WorkPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Work — Geotech Solutions",
    url: `${siteConfig.url}/work`,
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
    hasPart: projects.map((p) => ({
      "@type": "CreativeWork",
      name: p.title,
      abstract: p.blurb,
      ...(p.url ? { url: p.url } : {}),
    })),
  };

  return (
    <div className="border-b border-line-strong">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="border-b border-line-strong">
        <div className="mx-auto max-w-7xl px-5 pb-14 pt-32 md:px-8 md:pb-16 md:pt-40">
          <Reveal>
            <SectionLabel>Index · Work</SectionLabel>
            <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.02] text-ink md:text-6xl">
              Every project is a system someone now relies on.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-graphite">
              Websites, digital products and motion — built for real clients and
              shipped to production. Each card opens the live work in a new tab.
            </p>
          </Reveal>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <WorkGrid items={projects} />

        <Reveal className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-line-strong pt-10 md:flex-row md:items-center">
          <p className="max-w-md font-display text-2xl text-ink md:text-3xl">
            Want your project on this page?
          </p>
          <Link
            href="/#contact"
            className="btn btn-primary group px-7 py-4"
          >
            Start a project
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
