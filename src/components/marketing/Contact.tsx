import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import ContactForm from "@/components/marketing/ContactForm";
import { siteConfig } from "@/lib/site";

const steps = [
  { n: "01", t: "Send the brief", d: "Tell us what you're building and your timeline." },
  { n: "02", t: "Scope call", d: "A short call to pin down scope, price and dates." },
  { n: "03", t: "We build", d: "You get weekly progress and a thing that ships." },
];

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 border-t border-line-strong bg-paper-raised"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionLabel index="05">Start a project</SectionLabel>
          <h2
            id="contact-heading"
            className="mt-4 max-w-md text-3xl leading-tight sm:text-4xl md:text-5xl"
          >
            Tell us what you want to ship.
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-graphite">
            No bots, no call-centre. Your brief lands with the people who'll
            actually build it.
          </p>

          <ol className="mt-10 space-y-6 border-t border-line-strong pt-8">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-5">
                <span className="data-label !text-base text-mint">{s.n}</span>
                <div>
                  <p className="font-display text-lg text-ink">{s.t}</p>
                  <p className="mt-1 text-sm leading-relaxed text-graphite">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>

          <a
            href={`mailto:${siteConfig.email}`}
            className="group mt-10 inline-flex max-w-full items-center gap-2 font-mono text-sm text-ink transition-transform active:translate-x-0.5"
          >
            <span className="underline-draw min-w-0 break-all pb-0.5">{siteConfig.email}</span>
            <ArrowUpRight
              size={14}
              className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
