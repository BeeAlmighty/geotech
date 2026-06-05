import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { LogoMark } from "@/components/brand/Logo";
import { getProduct, products } from "@/lib/products";
import { siteConfig } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product not found" };

  const title = `${product.name} — ${product.tagline}`;
  return {
    title,
    description: product.summary,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      type: "website",
      url: `${siteConfig.url}/products/${product.slug}`,
      title,
      description: product.summary,
    },
    twitter: { card: "summary_large_image", title, description: product.summary },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: product.name,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: product.summary,
        url: product.liveUrl ?? `${siteConfig.url}/products/${product.slug}`,
        author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
        offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          {
            "@type": "ListItem",
            position: 2,
            name: product.name,
            item: `${siteConfig.url}/products/${product.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <article className="border-b border-line-strong">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <header className="border-b border-line-strong">
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-20 md:pt-40">
          <Reveal>
            <Link
              href="/#products"
              className="data-label inline-flex items-center gap-2 text-graphite transition-colors hover:text-ink"
            >
              <ArrowLeft size={13} /> All products
            </Link>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <Reveal>
              <div className="flex items-center gap-3">
                <SectionLabel>{product.category}</SectionLabel>
              </div>
              <h1 className="mt-5 font-display text-5xl leading-[0.95] text-ink md:text-7xl">
                {product.name}
              </h1>
              <p className="mt-4 font-display text-xl text-mint-soft md:text-2xl">
                {product.tagline}
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-graphite">
                {product.intro}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                {product.liveUrl && (
                  <a
                    href={product.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary group px-6 py-3.5"
                  >
                    Visit {product.liveLabel}
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                )}
                <Link
                  href="/#contact"
                  className="btn btn-ghost group px-6 py-3.5"
                >
                  Want one like it?
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </Reveal>

            {/* Spec sheet */}
            <Reveal delay={0.1}>
              <dl className="plate p-6">
                <span className="tick absolute left-0 top-0" />
                <p className="data-label mb-4">Spec sheet</p>
                <div className="divide-y divide-line">
                  {product.spec.map((row) => (
                    <div key={row.label} className="flex justify-between gap-4 py-2.5">
                      <dt className="font-mono text-xs uppercase tracking-wide text-muted">
                        {row.label}
                      </dt>
                      <dd className="text-right font-mono text-xs text-ink">{row.value}</dd>
                    </div>
                  ))}
                </div>
              </dl>
            </Reveal>
          </div>
        </div>
      </header>

      {/* Audience */}
      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">
        <Reveal className="flex flex-col gap-2 md:flex-row md:items-baseline md:gap-6">
          <span className="data-label whitespace-nowrap">Built for</span>
          <p className="font-display text-2xl text-ink md:text-3xl">{product.audience}</p>
        </Reveal>
      </div>

      {/* Features */}
      <section
        aria-label="Features"
        className="border-t border-line-strong bg-paper-raised"
      >
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <SectionLabel index="01">How it works</SectionLabel>
            <h2 className="mt-4 max-w-2xl text-3xl leading-tight md:text-4xl">
              The parts that make {product.name} earn its keep.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-panel border border-line-strong bg-line-strong sm:grid-cols-2">
            {product.features.map((feature, i) => (
              <Reveal key={feature.title} delay={(i % 2) * 0.06} className="bg-paper-raised">
                <div className="flex h-full flex-col p-7 md:p-8">
                  <span className="data-label text-mint">{`F.0${i + 1}`}</span>
                  <h3 className="mt-5 font-display text-2xl text-ink">{feature.title}</h3>
                  <p className="mt-3 leading-relaxed text-graphite">{feature.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-line-strong">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-5 py-16 md:flex-row md:items-center md:justify-between md:px-8 md:py-20">
          <div className="flex items-center gap-5">
            <span className="text-slate">
              <LogoMark size={48} />
            </span>
            <div>
              <p className="font-display text-2xl text-ink md:text-3xl">
                We build products like {product.name}.
              </p>
              <p className="mt-1 text-graphite">Yours could be next.</p>
            </div>
          </div>
          <Link
            href="/#contact"
            className="btn btn-primary group px-7 py-4"
          >
            Start a project
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </article>
  );
}
