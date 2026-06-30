import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoMarkImageProps = {
  size?: number;
  className?: string;
};

/**
 * The real brand logo (public/logo.jpeg) shown as the mark. The source file is
 * the full lockup on a white background, so it rides on a small white plate and
 * is scaled from the top to crop out the baked-in wordmark — leaving just the
 * labyrinth "G" + mint dot, which reads cleanly on the dark canvas.
 */
export function LogoMarkImage({ size = 40, className }: LogoMarkImageProps) {
  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 overflow-hidden rounded-[10px] bg-white ring-1 ring-line-strong",
        className,
      )}
      style={{ width: size, height: size }}
    >
      <Image
        src="/logo.jpeg"
        alt="Geotech Digital Horizon Limited"
        width={size * 2}
        height={size * 2}
        priority
        sizes={`${size}px`}
        className="origin-top scale-[1.42] object-contain"
        style={{ width: size, height: size }}
      />
    </span>
  );
}

type LogoMarkProps = {
  size?: number;
  /** Animate the maze "drawing" itself on mount (CSS only, RM-safe). */
  animated?: boolean;
  className?: string;
  title?: string;
};

/**
 * The Geotech mark — a labyrinth "G" with the live mint signal dot,
 * rebuilt as vector so it stays razor-sharp and can animate. Strokes use
 * `currentColor` so the mark inherits ink/slate from its context.
 */
export function LogoMark({
  size = 40,
  animated = false,
  className,
  title = "Geotech Digital Horizon Limited",
}: LogoMarkProps) {
  const drawStyle = animated
    ? ({
        strokeDasharray: 520,
        strokeDashoffset: 520,
        animation: "draw 1.5s var(--ease-survey) forwards",
      } as const)
    : undefined;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      role="img"
      aria-label={title}
      className={className}
    >
      <g
        stroke="currentColor"
        strokeWidth={7.5}
        strokeLinecap="square"
        strokeLinejoin="miter"
      >
        {/* Outer labyrinth forming the G */}
        <path d="M78 26 H26 V74 H74 V50 H52" style={drawStyle} />
        {/* Inner nested line — the maze */}
        <path
          d="M64 38 H38 V62 H57"
          style={
            animated
              ? { ...drawStyle, animationDelay: "0.25s" }
              : undefined
          }
        />
      </g>
      {/* The signal dot: bright mint with a slate ring, gently pulsing */}
      <circle cx="49" cy="50" r="9" fill="var(--color-ink)" />
      <circle
        cx="49"
        cy="50"
        r="5.5"
        fill="var(--color-mint-bright)"
        style={{
          transformOrigin: "49px 50px",
          animation: "signal 2.6s var(--ease-survey) infinite",
        }}
      />
    </svg>
  );
}

type LogoProps = {
  size?: number;
  withWordmark?: boolean;
  className?: string;
};

export default function Logo({
  size = 36,
  withWordmark = true,
  className,
}: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 text-slate", className)}>
      <LogoMarkImage size={size} />
      {withWordmark && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-lg font-semibold tracking-tight text-ink">
            Geotech
          </span>
          <span className="data-label mt-0.5 !text-[0.5rem] !tracking-[0.18em] text-muted">
            Digital Horizon Limited
          </span>
        </span>
      )}
    </span>
  );
}
