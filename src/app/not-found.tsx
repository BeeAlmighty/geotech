import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { LogoMark } from "@/components/brand/Logo";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-5 py-32 text-center">
      <span className="text-slate">
        <LogoMark size={64} />
      </span>
      <p className="data-label mt-8">Error · 404</p>
      <h1 className="mt-4 font-display text-4xl text-ink md:text-6xl">
        Off the grid.
      </h1>
      <p className="mt-4 max-w-md leading-relaxed text-graphite">
        This route isn&rsquo;t on the map. The page may have moved, or never
        existed — let&rsquo;s get you back to solid ground.
      </p>
      <Link
        href="/"
        className="btn btn-primary group mt-9 px-7 py-4"
      >
        <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-0.5" />
        Back home
      </Link>
    </div>
  );
}
