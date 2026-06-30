import type { NextConfig } from "next";

// Origin of the separately-deployed Geotech Blog zone (the geotech-blog project).
// Set per-environment in Vercel once the blog is deployed, e.g.
//   BLOG_ORIGIN=https://geotech-blog.vercel.app
// In local dev you can point it at the blog's dev server (http://localhost:3001).
const BLOG_ORIGIN = process.env.BLOG_ORIGIN ?? "https://geotech-blog.vercel.app";

const nextConfig: NextConfig = {
  // Inline the small atomic-Tailwind CSS into <head> so first paint isn't gated
  // on a separate render-blocking stylesheet request. Measured materially better
  // (and more stable) mobile FCP/TBT/CLS vs. an external stylesheet — styles
  // arrive with the HTML, so the first paint is already correctly laid out.
  experimental: {
    inlineCss: true,
  },

  // Multi-zones: serve the blog at geotech.agency/blog by proxying to its own
  // deployment. Keeping it on THIS host (not a subdomain) consolidates all SEO
  // authority onto geotech.agency. The blog app sets basePath:"/blog", so its
  // pages AND _next assets already live under /blog — these rewrites forward the
  // whole sub-tree through (no separate assetPrefix rule needed on Next 15+).
  async rewrites() {
    return [
      { source: "/blog", destination: `${BLOG_ORIGIN}/blog` },
      { source: "/blog/:path*", destination: `${BLOG_ORIGIN}/blog/:path*` },
    ];
  },

  // CRITICAL: do NOT let THIS (apex) CDN cache the proxied blog responses.
  // The blog project already does correct ISR caching, so a second cache layer
  // here only ever caused stale 404s served before the blog had revalidated —
  // the "404 on first load, 200 on refresh" bug. `Vercel-CDN-Cache-Control` (and
  // the standard `CDN-Cache-Control`) are read only by the CDN and stripped
  // before the browser, so the blog's own edge cache still provides the speed;
  // the apex just proxies through fresh each time. One short hop, zero staleness.
  async headers() {
    return [
      {
        source: "/blog",
        headers: [
          { key: "Vercel-CDN-Cache-Control", value: "no-store" },
          { key: "CDN-Cache-Control", value: "no-store" },
        ],
      },
      {
        source: "/blog/:path*",
        headers: [
          { key: "Vercel-CDN-Cache-Control", value: "no-store" },
          { key: "CDN-Cache-Control", value: "no-store" },
        ],
      },
    ];
  },
};

export default nextConfig;
