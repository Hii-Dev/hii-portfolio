import type { MetadataRoute } from "next";

const BASE_URL = "https://hiidev.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/background", "/blog", "/portfolio", "/updates"];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));
}
