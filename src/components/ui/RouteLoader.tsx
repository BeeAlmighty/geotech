import { LogoMark } from "@/components/brand/Logo";

/**
 * Route-level loading fallback (used by loading.tsx). Shown instantly on
 * navigation while the next page streams in — the user always sees that
 * something is happening.
 */
export default function RouteLoader({ label = "Plotting route" }: { label?: string }) {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-slate">
      <LogoMark size={72} animated />
      <p className="data-label mt-8 flex items-center gap-2">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mint-bright" />
        {label}…
      </p>
      {/* indeterminate survey track */}
      <div className="mt-6 h-px w-48 overflow-hidden bg-line-strong">
        <div
          className="h-full w-1/3 bg-mint-bright"
          style={{ animation: "shimmer 1.2s var(--ease-survey) infinite" }}
        />
      </div>
    </div>
  );
}
