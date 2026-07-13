import type { MetadataRoute } from "next";
import { seoConfig } from "@/lib/data";

export default function robots(): MetadataRoute.Robots {
  const base = seoConfig.canonicalUrl ?? "https://arthurvega.dev";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
