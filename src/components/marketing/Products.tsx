import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import WorkCardImage from "@/components/marketing/WorkCardImage";
import { products } from "@/lib/products";

export default function Products() {
  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="scroll-mt-24 border-t border-line-strong bg-paper-raised"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <Reveal className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel index="03">Our products</SectionLabel>
            <h2
              id="products-heading"
              className="mt-4 max-w-2xl text-3xl leading-tight sm:text-4xl md:text-5xl"
            >
              We don't just build software. We run it.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-graphite">
            Three SaaS products we designed, built and operate ourselves — proof
            we ship things that survive contact with real customers.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {products.map((product, i) => (
            <Reveal key={product.slug} delay={i * 0.08} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-panel border border-line bg-paper-raised shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset,0_18px_40px_-30px_rgba(0,0,0,0.8)] transition-all duration-300 ease-survey hover:-translate-y-1.5 hover:border-line-strong hover:bg-panel hover:shadow-panel">
                {product.image && (
                  <WorkCardImage src={product.image} alt={`${product.name} — product screenshot`} />
                )}
                <div className="flex flex-grow flex-col p-7 md:p-9">
                <div className="flex items-center justify-between">
                  <span className="data-label flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-mint-bright" />
                    {product.status}
                  </span>
                  <span className="data-label">{product.category}</span>
                </div>

                <h3 className="mt-7 font-display text-4xl text-ink md:text-5xl">
                  {product.name}
                </h3>
                <p className="mt-2 font-display text-lg text-mint-soft">
                  {product.tagline}
                </p>
                <p className="mt-4 max-w-md flex-grow leading-relaxed text-graphite">
                  {product.summary}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-6">
                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink transition-transform active:translate-x-0.5"
                  >
                    <span className="underline-draw pb-0.5">View product</span>
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                  {product.liveUrl && (
                    <a
                      href={product.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs lowercase tracking-wide text-graphite transition-colors hover:text-mint"
                    >
                      {product.liveLabel}
                      <ArrowUpRight size={13} />
                    </a>
                  )}
                </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
