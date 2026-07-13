import type { MetadataRoute } from "next";
import { seoConfig } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = seoConfig.canonicalUrl ?? "https://arthurvega.dev";

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
