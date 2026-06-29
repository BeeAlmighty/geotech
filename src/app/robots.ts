import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    // Both zones' sitemaps are advertised from the host-root robots.txt — the
    // only place crawlers read it. The second is served by the blog zone.
    sitemap: [`${siteConfig.url}/sitemap.xml`, `${siteConfig.url}/blog/sitemap.xml`],
    host: siteConfig.url,
  };
}
