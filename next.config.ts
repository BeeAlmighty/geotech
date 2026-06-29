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
};

export default nextConfig;
