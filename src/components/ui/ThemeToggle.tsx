"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

/**
 * Light/dark switch — identical mechanism to the Geotech Blog so the two zones
 * feel like one product (and, sharing the geotech.agency origin in production,
 * the chosen theme persists across both via the same `theme` localStorage key).
 *
 * Initial theme is applied pre-paint by the inline script in layout.tsx (no
 * flash); this only reads the live value via useSyncExternalStore (subscribed to
 * the data-theme attribute) and flips + persists it. No setState-in-effect, no
 * hydration mismatch.
 */
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore<Theme>(
    subscribe,
    () => (document.documentElement.getAttribute("data-theme") as Theme) ?? "light",
    () => "light",
  );

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title="Toggle theme"
      className="grid size-9 shrink-0 place-items-center rounded-full border border-line-strong bg-paper-raised text-graphite transition-colors hover:border-mint hover:text-mint"
    >
      <Sun size={15} className={theme === "dark" ? "hidden" : "block"} />
      <Moon size={15} className={theme === "dark" ? "block" : "hidden"} />
    </button>
  );
}
