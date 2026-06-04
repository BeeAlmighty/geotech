import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import ContactForm from "@/components/marketing/ContactForm";
import { siteConfig, whatsappLink } from "@/lib/site";

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

          <div className="mt-10 flex flex-col gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="group inline-flex max-w-full items-center gap-2 font-mono text-sm text-ink transition-transform active:translate-x-0.5"
            >
              <span className="underline-draw min-w-0 break-all pb-0.5">{siteConfig.email}</span>
              <ArrowUpRight
                size={14}
                className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href={whatsappLink(`Hi ${siteConfig.name} — I'd like to discuss a project.`)}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2.5 font-mono text-sm text-ink transition-transform active:translate-x-0.5"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="#25D366" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              <span className="underline-draw pb-0.5">{siteConfig.whatsappDisplay}</span>
              <ArrowUpRight
                size={14}
                className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
