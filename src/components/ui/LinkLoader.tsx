"use client";

import { useLinkStatus } from "next/link";
import { cn } from "@/lib/utils";

/**
 * Inline pending hint for a <Link>. Must be rendered as a descendant of the
 * Link. Shows a small pulsing mint dot while the destination route is loading
 * — so a tap registers visibly, especially on mobile where there's no hover.
 *
 * Pair with `prefetch={false}` on the Link when you want the hint to be
 * reliable; prefetched static routes navigate instantly and skip it.
 */
export default function LinkLoader({ className }: { className?: string }) {
  const { pending } = useLinkStatus();
  return (
    <span
      aria-hidden
      className={cn("link-hint", pending && "is-pending", className)}
    />
  );
}
