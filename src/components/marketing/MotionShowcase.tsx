"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Play } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

const ease = [0.22, 1, 0.36, 1] as const;

const reels = [
  { code: "REEL A", title: "The 14-message booking", len: "00:15" },
  { code: "REEL B", title: "Two phones, one slot", len: "00:10" },
  { code: "REEL C", title: "While you sleep", len: "00:12" },
];

// The sample reel shown in the frame. Drop the file in /public/motion/ as
// reel.mp4 (and an optional still as reel-poster.jpg). If it's missing, the
// frame falls back to the animated placeholder below — no broken player.
const REEL = { src: "/motion/reel.mp4", poster: "/motion/reel-poster.jpg" };

export default function MotionShowcase() {
  const reduce = useReducedMotion();
  const bars = [0, 1, 2, 3, 4, 5, 6];
  // The video fades in over the animated placeholder only once it can actually
  // play. If the file is missing it never fires onCanPlay, so the placeholder
  // simply stays — no broken player, and no reliance on a pre-hydration error.
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section
      id="motion"
      aria-labelledby="motion-heading"
      className="scroll-mt-24 border-t border-line-strong"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        {/* Copy */}
        <Reveal>
          <SectionLabel index="04">Motion design</SectionLabel>
          <h2
            id="motion-heading"
            className="mt-4 max-w-xl text-3xl leading-tight sm:text-4xl md:text-5xl"
          >
            Motion that earns the scroll-stop.
          </h2>
          <p className="mt-5 max-w-lg leading-relaxed text-graphite">
            A product is only as good as the three seconds someone gives it. We
            sell the pain, then the relief — product reels, brand motion and UI
            animation tuned for the feed. The Slotly launch reels below are ours.
          </p>

          <ul className="mt-9 divide-y divide-line border-y border-line-strong">
            {reels.map((reel) => (
              <li key={reel.code} className="flex items-center gap-4 py-4">
                <span className="data-label w-16 text-mint">{reel.code}</span>
                <span className="flex-grow font-display text-lg text-ink">
                  {reel.title}
                </span>
                <span className="data-label">{reel.len}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Reel frame — plays the real sample over an animated placeholder */}
        <Reveal delay={0.1} className="w-full">
          <div className="plate relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden">
            <span className="tick absolute left-0 top-0 z-30" />

            {/* base layer: animated placeholder (shows until the video can play) */}
            <div className="flex items-center justify-between p-6">
              <span className="data-label">REEL · 9:16</span>
              <span className="data-label flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-mint-bright" />
                REC
              </span>
            </div>

            {/* waveform / motion bars */}
            <div className="absolute inset-x-6 top-1/2 flex h-28 -translate-y-1/2 items-end justify-center gap-2">
              {bars.map((b) => (
                <motion.span
                  key={b}
                  className="w-3 rounded-brand bg-mint shadow-[0_0_12px_-2px_rgba(56,240,178,0.7)]"
                  initial={{ height: "28%" }}
                  animate={
                    reduce
                      ? { height: "55%" }
                      : { height: ["28%", "92%", "44%", "70%", "30%"] }
                  }
                  transition={
                    reduce
                      ? undefined
                      : { duration: 2.4, ease, repeat: Infinity, delay: b * 0.12 }
                  }
                />
              ))}
            </div>

            {/* play affordance */}
            <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ink/15 bg-paper/70 backdrop-blur-sm">
              <Play size={18} className="ml-0.5 fill-ink text-ink" />
            </div>

            {/* sweeping playhead timeline */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="relative h-px bg-line-strong">
                <motion.span
                  className="absolute -top-[3px] h-1.5 w-1.5 rounded-full bg-mint-bright"
                  initial={{ left: "0%" }}
                  animate={reduce ? { left: "62%" } : { left: ["0%", "100%"] }}
                  transition={
                    reduce ? undefined : { duration: 4, ease: "linear", repeat: Infinity }
                  }
                />
              </div>
              <div className="mt-2 flex justify-between font-mono text-[0.62rem] uppercase tracking-wider text-muted">
                <span>00:00</span>
                <span>FRAME 048</span>
              </div>
            </div>

            {/* the real sample reel — fades in over the placeholder once playable */}
            <video
              className={`absolute inset-0 z-10 h-full w-full bg-paper object-cover transition-opacity duration-500 ${
                videoReady ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
              src={REEL.src}
              poster={REEL.poster}
              controls={videoReady}
              playsInline
              preload="metadata"
              aria-label="Geotech Solutions motion design sample reel"
              onCanPlay={() => setVideoReady(true)}
              onError={() => setVideoReady(false)}
            />
            {videoReady && (
              <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-between bg-gradient-to-b from-ink/55 to-transparent p-6">
                <span className="data-label text-paper/90">REEL · 9:16</span>
                <span className="data-label flex items-center gap-1.5 text-paper/90">
                  <span className="h-1.5 w-1.5 rounded-full bg-mint-bright" />
                  SAMPLE
                </span>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
