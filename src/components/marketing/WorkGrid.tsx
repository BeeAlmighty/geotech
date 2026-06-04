import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import WorkCardImage from "@/components/marketing/WorkCardImage";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

function CardInner({ project }: { project: Project }) {
  const hasLink = project.url.length > 0;
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-panel border border-line bg-paper-raised shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset,0_18px_40px_-30px_rgba(0,0,0,0.8)] transition-all duration-300 ease-survey",
        hasLink &&
          "hover:-translate-y-1.5 hover:border-line-strong hover:bg-panel hover:shadow-panel",
      )}
    >
      {project.image && (
        <WorkCardImage src={project.image} alt={`${project.title} — website screenshot`} />
      )}
      <div className="flex flex-grow flex-col p-6 md:p-7">
        <div className="flex items-center justify-between">
          <span className="data-label">{project.category}</span>
          <span className="data-label">{project.year}</span>
        </div>

        <h3 className="mt-5 font-display text-2xl text-ink md:text-[1.7rem]">
          {project.title}
        </h3>
        <p className="mt-3 flex-grow leading-relaxed text-graphite">{project.blurb}</p>

        <div className="mt-7 border-t border-line pt-5">
          {hasLink ? (
            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink">
              <span className="underline-draw pb-0.5">Visit site</span>
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          ) : (
            <span className="font-mono text-[0.7rem] uppercase tracking-wider text-muted">
              ● Link coming soon
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default function WorkGrid({ items }: { items: Project[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
      {items.map((project, i) => (
        <Reveal key={project.slug} delay={(i % 3) * 0.06} className="h-full">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} — open live site in a new tab`}
              className="block h-full"
            >
              <CardInner project={project} />
            </a>
          ) : (
            <CardInner project={project} />
          )}
        </Reveal>
      ))}
    </div>
  );
}
