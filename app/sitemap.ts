import type { MetadataRoute } from "next";
import { projects } from "@/lib/data/projects";
import { serviceCategories } from "@/lib/data/serviceCategories";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages = projects.map((p) => ({
    url: `${SITE_URL}/work/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Service category pages + each inner service page
  const servicePages = serviceCategories.flatMap((cat) => [
    {
      url: `${SITE_URL}/services/${cat.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    ...cat.items.map((item) => ({
      url: `${SITE_URL}/services/${cat.slug}/${item.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ]);

  return [
    { url: SITE_URL,                    lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${SITE_URL}/work`,          lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${SITE_URL}/contact`,       lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/about`,         lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/privacy`,       lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
    { url: `${SITE_URL}/terms`,         lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
    ...servicePages,
    ...projectPages,
  ];
}
