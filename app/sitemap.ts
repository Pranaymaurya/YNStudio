import type { MetadataRoute } from "next";

const siteUrl = "https://lumenforge.studio";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-04-07T00:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}