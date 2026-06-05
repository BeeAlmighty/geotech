import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Inline the small atomic-Tailwind CSS into <head> so first paint isn't gated
  // on a separate render-blocking stylesheet request. Measured materially better
  // (and more stable) mobile FCP/TBT/CLS vs. an external stylesheet — styles
  // arrive with the HTML, so the first paint is already correctly laid out.
  experimental: {
    inlineCss: true,
  },
};

export default nextConfig;
