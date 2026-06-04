import { cn } from "@/lib/utils";

type SectionLabelProps = {
  /** Two-digit survey index, e.g. "02". */
  index?: string;
  children: React.ReactNode;
  className?: string;
};

/**
 * Mono drafting label that opens each section, e.g.  ●  02 / SERVICES
 * The mint tick is the recurring "you are here" survey marker.
 */
export default function SectionLabel({
  index,
  children,
  className,
}: SectionLabelProps) {
  return (
    <span className={cn("data-label inline-flex items-center gap-2.5", className)}>
      <span className="h-1.5 w-1.5 rounded-full bg-mint-bright dot-glow" />
      {index && <span className="text-mint">{index}</span>}
      {index && <span aria-hidden className="text-line-strong">/</span>}
      <span className="text-graphite">{children}</span>
    </span>
  );
}
