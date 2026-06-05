import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  /** Accepted for API compatibility; the CSS reveal is scroll-driven. */
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "header";
};

/**
 * Scroll-triggered reveal — slides up + fades once as it enters the viewport.
 *
 * Implemented as a pure CSS scroll-driven animation (`animation-timeline: view()`),
 * so it ships ZERO JavaScript and adds no hydration/main-thread cost. Elements
 * already in the initial viewport render fully visible; browsers without
 * scroll-timeline support (or users with reduced-motion) also see content
 * immediately — the animation is purely additive. See `.reveal` in globals.css.
 */
export default function Reveal({ children, className, as: Tag = "div" }: RevealProps) {
  return <Tag className={cn("reveal", className)}>{children}</Tag>;
}
