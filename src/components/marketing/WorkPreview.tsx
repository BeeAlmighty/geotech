import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import WorkGrid from "@/components/marketing/WorkGrid";
import { previewProjects } from "@/lib/projects";

export default function WorkPreview() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="scroll-mt-24 border-t border-line-strong"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <Reveal className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel index="02">Selected work</SectionLabel>
            <h2
              id="work-heading"
              className="mt-4 max-w-2xl text-3xl leading-tight sm:text-4xl md:text-5xl"
            >
              Things we've shipped for real people.
            </h2>
          </div>
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 self-start font-mono text-xs uppercase tracking-wider text-ink transition-transform active:translate-x-0.5 md:self-end"
          >
            <span className="underline-draw pb-0.5">View all work</span>
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <div className="mt-14">
          <WorkGrid items={previewProjects} />
        </div>
      </div>
    </section>
  );
}
