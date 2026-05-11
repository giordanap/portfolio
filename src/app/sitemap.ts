import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://giordanap.github.io/portfolio/";

  return [
    {
      url: siteUrl,
      lastModified: "2026-05-11",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
