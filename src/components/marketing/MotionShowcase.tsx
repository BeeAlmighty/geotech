import { Play } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

const reels = [
  { code: "REEL A", title: "The 14-message booking", len: "00:15" },
  { code: "REEL B", title: "Two phones, one slot", len: "00:10" },
  { code: "REEL C", title: "While you sleep", len: "00:12" },
];

const bars = [0, 1, 2, 3, 4, 5, 6];

export default function MotionShowcase() {
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

        {/* Reel frame — an animated 9:16 instrument placeholder */}
        <Reveal delay={0.1} className="w-full">
          <div className="plate relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden">
            <span className="tick absolute left-0 top-0 z-30" />

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
                <span
                  key={b}
                  className="wave-bar w-3 rounded-brand bg-mint shadow-[0_0_12px_-2px_rgba(var(--glow-rgb),0.7)]"
                  style={{ "--bar-delay": `${b * 0.12}s` } as React.CSSProperties}
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
                <span className="playhead absolute -top-[3px] h-1.5 w-1.5 rounded-full bg-mint-bright" />
              </div>
              <div className="mt-2 flex justify-between font-mono text-[0.62rem] uppercase tracking-wider text-muted">
                <span>00:00</span>
                <span>FRAME 048</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
