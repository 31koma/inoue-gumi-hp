import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { newsPosts } from "@/lib/news";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date();

  const staticPages = [
    "",
    "/about",
    "/message",
    "/services",
    "/works",
    "/recruit",
    "/news",
    "/contact",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const newsPages = newsPosts.map((p) => ({
    url: `${base}/news/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticPages, ...newsPages];
}
