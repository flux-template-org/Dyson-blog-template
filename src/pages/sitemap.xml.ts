import type { APIRoute } from "astro";
import journalData from "../data/journal.json";

const site = "https://dyson-template.com";

export const GET: APIRoute = async () => {
  const staticPages = [
    { url: "/", priority: 1.0, changefreq: "weekly" },
    { url: "/about/", priority: 0.8, changefreq: "monthly" },
    { url: "/contact/", priority: 0.8, changefreq: "monthly" },
    { url: "/journal/", priority: 0.9, changefreq: "weekly" },
    { url: "/products/", priority: 0.9, changefreq: "weekly" },
    { url: "/privacy/", priority: 0.5, changefreq: "yearly" },
  ];

  const journalPages = journalData.map((item: { slug: string }) => ({
    url: `/journal/${item.slug}/`,
    priority: 0.7,
    changefreq: "monthly",
  }));

  const productPages = journalData.map((item: { slug: string }) => ({
    url: `/products/${item.slug}/`,
    priority: 0.7,
    changefreq: "monthly",
  }));

  const allPages = [...staticPages, ...journalPages, ...productPages];
  const lastmod = new Date().toISOString().split("T")[0];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    ({ url, priority, changefreq }) => `  <url>
    <loc>${site}${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};
