"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { LogoMark } from "@/components/brand/Logo";
import LinkLoader from "@/components/ui/LinkLoader";

const ease = [0.22, 1, 0.36, 1] as const;
const rise = {
  hidden: { opacity: 0, y: 26 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease, delay: 0.1 + i * 0.1 },
  }),
};

const services = ["Website creation", "Digital products", "Motion design"];

export default function Hero() {
  const reduce = useReducedMotion();

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
          <motion.p
            custom={0}
            initial="hidden"
            animate="show"
            variants={rise}
            className="data-label flex flex-col gap-y-1.5 text-graphite sm:flex-row sm:items-center sm:gap-x-3"
          >
            <span className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-mint-bright dot-glow" />
              Digital engineering studio
            </span>
            <span className="flex items-center gap-x-3 pl-5 sm:pl-0">
              <span className="hidden text-line-strong sm:inline">·</span>
              Lagos → Worldwide
            </span>
          </motion.p>

          <motion.h1
            id="hero-heading"
            custom={1}
            initial="hidden"
            animate="show"
            variants={rise}
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
                <motion.path
                  d="M2 13 C 52 4, 150 4, 198 11"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={5}
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.9, ease, delay: 0.9 }}
                />
              </svg>
            </span>
            <span className="text-mint">.</span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="show"
            variants={rise}
            className="mt-8 max-w-xl text-lg leading-relaxed text-slate"
          >
            We build fast, search-ready websites, ship our own software
            products, and produce the motion design that makes them sell — all
            under one roof, built like infrastructure.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="show"
            variants={rise}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link
              href="/#contact"
              className="btn btn-primary group px-7 py-4"
            >
              Start a project
              <ArrowDownRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </Link>
            <Link href="/work" className="btn btn-ghost group px-7 py-4">
              See the work
              <LinkLoader />
            </Link>
          </motion.div>

          <motion.ul
            custom={4}
            initial="hidden"
            animate="show"
            variants={rise}
            className="mt-12 flex flex-wrap gap-x-6 gap-y-2"
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
          </motion.ul>
        </div>

        {/* Right — the live signal instrument */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease, delay: 0.35 }}
          className="plate relative hidden aspect-square w-full max-w-md justify-self-end overflow-hidden p-7 lg:flex"
        >
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
          <motion.div
            aria-hidden
            className="absolute inset-0 grid place-items-center"
            animate={reduce ? undefined : { rotate: 360 }}
            transition={
              reduce
                ? undefined
                : { duration: 7, ease: "linear", repeat: Infinity }
            }
          >
            <div
              className="h-[88%] w-[88%] rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0deg, transparent 300deg, rgba(56,240,178,0.04) 330deg, rgba(56,240,178,0.32) 360deg)",
                maskImage:
                  "radial-gradient(circle at center, #000 0 50%, transparent 50%)",
                WebkitMaskImage:
                  "radial-gradient(circle at center, #000 0 50%, transparent 50%)",
              }}
            />
          </motion.div>

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
        </motion.div>
      </div>
    </section>
  );
}
