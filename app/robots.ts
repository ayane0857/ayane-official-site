import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/_next"],
    },
    sitemap: "https://ayane0857.net/sitemap.xml",
  };
}
