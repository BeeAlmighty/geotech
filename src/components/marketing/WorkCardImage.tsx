import Image from "next/image";

/**
 * Top-of-card screenshot for a work item. Full-bleeds to the card edges. The
 * fixed 4:3 box reserves space so the image never causes layout shift (CLS).
 *
 * Server component — no client JS. (The previous onError fallback was dropped
 * to remove a per-card hydration island; all work screenshots ship with the
 * site, so a missing file isn't a runtime concern.)
 */
export default function WorkCardImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-line bg-panel">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
    </div>
  );
}
