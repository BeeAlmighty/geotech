"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Logo from "@/components/brand/Logo";
import LinkLoader from "@/components/ui/LinkLoader";
import { primaryNav } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 16);
  });

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-line-strong bg-paper/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 md:px-8">
        <Link href="/" aria-label="Geotech Solutions — home" className="group">
          <Logo size={34} />
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="data-label inline-flex items-center gap-1.5 !text-[0.7rem] text-graphite transition-colors hover:text-ink"
            >
              <span className="underline-draw pb-1">{item.label}</span>
              <LinkLoader />
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/#contact" className="btn btn-primary group px-5 py-2.5">
            Start a project
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 p-2 text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line-strong bg-paper-raised md:hidden"
            aria-label="Primary"
          >
            <div className="flex flex-col px-5 py-3">
              {primaryNav.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-line py-4 font-display text-xl text-ink transition-colors last:border-b-0 active:text-mint"
                >
                  {item.label}
                  <span className="flex items-center gap-2">
                    <LinkLoader />
                    <span className="data-label">{`0${i + 1}`}</span>
                  </span>
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="btn btn-primary mt-4 px-5 py-3.5"
              >
                Start a project <ArrowUpRight size={14} />
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
