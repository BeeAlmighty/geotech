"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Logo from "@/components/brand/Logo";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { primaryNav } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        <Link href="/" aria-label="Geotech Digital Horizon Limited — home" className="group">
          <Logo size={34} />
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {primaryNav.map((item) =>
            item.external ? (
              <a
                key={item.href}
                href={item.href}
                className="data-label inline-flex items-center gap-1.5 !text-[0.7rem] text-graphite transition-colors hover:text-ink"
              >
                <span className="underline-draw pb-1">{item.label}</span>
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="data-label inline-flex items-center gap-1.5 !text-[0.7rem] text-graphite transition-colors hover:text-ink"
              >
                <span className="underline-draw pb-1">{item.label}</span>
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
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
      </div>

      {/* Mobile menu — height animated via grid-rows (no JS measurement) */}
      <div
        data-open={open}
        className="menu-collapse border-line-strong bg-paper-raised md:hidden"
        style={{ borderTopWidth: open ? 1 : 0 }}
        aria-hidden={!open}
      >
        <div>
          <nav className="flex flex-col px-5 py-3" aria-label="Primary">
            {primaryNav.map((item, i) => {
              const className =
                "flex items-center justify-between border-b border-line py-4 font-display text-xl text-ink transition-colors last:border-b-0 active:text-mint";
              const inner = (
                <>
                  {item.label}
                  <span className="flex items-center gap-2">
                    <span className="data-label">{`0${i + 1}`}</span>
                  </span>
                </>
              );
              return item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? undefined : -1}
                  className={className}
                >
                  {inner}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? undefined : -1}
                  className={className}
                >
                  {inner}
                </Link>
              );
            })}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              tabIndex={open ? undefined : -1}
              className="btn btn-primary mt-4 px-5 py-3.5"
            >
              Start a project <ArrowUpRight size={14} />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
