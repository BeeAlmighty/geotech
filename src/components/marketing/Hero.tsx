import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { LogoMark } from "@/components/brand/Logo";

const services = [
  "Software",
  "Automation",
  "White-label SaaS",
  "Motion & video",
  "Consulting",
];

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-line-strong"
    >
      {/* corner registration marks */}
      <span className="tick absolute left-5 top-28 hidden md:block md:left-8" />
      <span className="tick absolute right-5 top-28 hidden md:block md:right-8" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 pb-20 pt-32 md:px-8 md:pb-28 md:pt-40 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        {/* Left — the statement */}
        <div>
          <p
            className="hero-rise data-label flex flex-col gap-y-1.5 text-graphite sm:flex-row sm:items-center sm:gap-x-3"
            style={{ "--rise-delay": "0.05s" } as React.CSSProperties}
          >
            <span className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-mint-bright dot-glow" />
              Digital engineering studio
            </span>
            <span className="flex items-center gap-x-3 pl-5 sm:pl-0">
              <span className="hidden text-line-strong sm:inline">·</span>
              Lagos → Worldwide
            </span>
          </p>

          {/* LCP element — rendered solid from first paint (no opacity gate). */}
          <h1
            id="hero-heading"
            className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.03em] text-ink sm:text-6xl lg:text-[4.7rem] lg:leading-[0.98]"
          >
            Powering growth
            <br />
            through smart{" "}
            <span className="relative whitespace-nowrap text-mint text-glow">
              technology
              <svg
                aria-hidden
                viewBox="0 0 200 18"
                preserveAspectRatio="none"
                className="absolute -bottom-2 left-0 h-3 w-full text-mint-bright"
              >
                <path
                  d="M2 13 C 52 4, 150 4, 198 11"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={5}
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: 200,
                    strokeDashoffset: 200,
                    animation: "draw 0.9s var(--ease-survey) 0.6s forwards",
                  }}
                />
              </svg>
            </span>
            <span className="text-mint">.</span>
          </h1>

          <p
            className="hero-rise mt-8 max-w-xl text-lg leading-relaxed text-slate"
            style={{ "--rise-delay": "0.15s" } as React.CSSProperties}
          >
            We build software and automation that pays for itself — fast
            websites and apps, n8n + AI workflows, custom and white-label SaaS,
            and the motion design that sells it. B2B and retention-first.
          </p>

          <div
            className="hero-rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ "--rise-delay": "0.25s" } as React.CSSProperties}
          >
            <Link href="/#contact" className="btn btn-primary group px-7 py-4">
              Start a project
              <ArrowDownRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </Link>
            <Link href="/work" className="btn btn-ghost group px-7 py-4">
              See the work
            </Link>
          </div>

          <ul
            className="hero-rise mt-12 flex flex-wrap gap-x-6 gap-y-2"
            style={{ "--rise-delay": "0.35s" } as React.CSSProperties}
          >
            {services.map((s, i) => (
              <li
                key={s}
                className="data-label flex items-center gap-2 text-graphite"
              >
                <span className="text-mint">{`0${i + 1}`}</span>
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Right — the live signal instrument (desktop only) */}
        <div className="plate-in plate relative hidden aspect-square w-full max-w-md justify-self-end overflow-hidden p-7 lg:flex">
          <span className="tick absolute left-0 top-0" />
          <span className="data-label absolute left-6 top-5 z-20">
            SIGNAL · LIVE
          </span>
          <span className="data-label absolute right-6 top-5 z-20">
            REV. 2026
          </span>

          {/* concentric range rings + crosshair */}
          <div className="absolute inset-0 grid place-items-center">
            <svg
              viewBox="0 0 400 400"
              className="h-[88%] w-[88%] text-line-strong"
              aria-hidden
            >
              <g fill="none" stroke="currentColor" strokeWidth={1}>
                <circle cx="200" cy="200" r="70" />
                <circle cx="200" cy="200" r="120" />
                <circle cx="200" cy="200" r="170" />
              </g>
              <g stroke="var(--color-line)" strokeWidth={1}>
                <line x1="200" y1="20" x2="200" y2="380" />
                <line x1="20" y1="200" x2="380" y2="200" />
              </g>
            </svg>
          </div>

          {/* rotating radar sweep */}
          <div
            aria-hidden
            className="radar-spin absolute inset-0 grid place-items-center"
          >
            <div
              className="h-[88%] w-[88%] rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0deg, transparent 300deg, rgba(var(--glow-rgb),0.04) 330deg, rgba(var(--glow-rgb),0.32) 360deg)",
                maskImage:
                  "radial-gradient(circle at center, #000 0 50%, transparent 50%)",
                WebkitMaskImage:
                  "radial-gradient(circle at center, #000 0 50%, transparent 50%)",
              }}
            />
          </div>

          {/* the mark at the core, glowing */}
          <div className="relative z-10 m-auto flex flex-col items-center justify-center text-mint">
            <div className="absolute h-28 w-28 rounded-full bg-mint-bright/15 blur-2xl" />
            <LogoMark size={132} animated />
            <p className="data-label mt-7 text-graphite">GEOTECH · MARK 001</p>
          </div>

          {/* telemetry baseline */}
          <div className="absolute bottom-5 left-6 right-6 z-20 flex justify-between font-mono text-[0.62rem] uppercase tracking-wider text-muted">
            <span>LAT 6.45° N</span>
            <span className="text-mint">STATUS · NOMINAL</span>
            <span>LON 3.39° E</span>
          </div>
        </div>
      </div>
    </section>
  );
}
