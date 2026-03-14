import type { MetadataRoute } from "next";
import { topics } from "@/data/questions";

const BASE_URL = "https://jazzy-melomakarona-b21056.netlify.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const topicPages = topics.map((topic) => ({
    url: `${BASE_URL}/themen/${topic.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/pruefung`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...topicPages,
    {
      url: `${BASE_URL}/impressum`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/datenschutz`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
