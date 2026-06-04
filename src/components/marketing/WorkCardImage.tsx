"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Top-of-card screenshot for a work item. Full-bleeds to the card edges and
 * degrades to a branded "Photo coming soon" plate if the file isn't there yet,
 * so a missing/renamed image never shows as a broken picture.
 */
export default function WorkCardImage({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-line bg-panel">
      {failed ? (
        <div className="flex h-full w-full items-center justify-center">
          <span className="data-label">Photo coming soon</span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
