// Single route manifest shared by the prerenderer and the sitemap generator so
// the two can never drift apart. `file` is written into dist/ by prerender.mjs.
//
// lastmod is the date the page content meaningfully changed — update it when
// you edit that page (not on every deploy; a permanent "today" is noise to
// crawlers).
export const SITE_ORIGIN = "https://www.samratparajuli0.com.np";

export const routes = [
  { url: "/", file: "index.html", lastmod: "2026-11-16", priority: "1.0" },
  { url: "/about", file: "about.html", lastmod: "2026-11-16", priority: "0.8" },
  { url: "/projects", file: "projects.html", lastmod: "2026-11-16", priority: "0.8" },
  { url: "/projects/avalokan", file: "projects/avalokan.html", lastmod: "2026-11-16", priority: "0.9" },
  { url: "/projects/todo", file: "projects/todo.html", lastmod: "2026-11-16", priority: "0.8" },
  { url: "/projects/themovie", file: "projects/themovie.html", lastmod: "2026-11-16", priority: "0.8" },
  { url: "/projects/juicetracker", file: "projects/juicetracker.html", lastmod: "2026-11-16", priority: "0.8" },
  { url: "/projects/kathmandu", file: "projects/kathmandu.html", lastmod: "2026-11-16", priority: "0.8" },
  { url: "/projects/sms", file: "projects/sms.html", lastmod: "2026-11-16", priority: "0.7" },
  { url: "/projects/bmsk", file: "projects/bmsk.html", lastmod: "2026-11-16", priority: "0.7" },
  { url: "/projects/blogvsn", file: "projects/blogvsn.html", lastmod: "2026-11-16", priority: "0.7" },
  { url: "/projects/this", file: "projects/this.html", lastmod: "2026-11-16", priority: "0.6" },
  { url: "/contact", file: "contact.html", lastmod: "2026-11-16", priority: "0.6" },
  { url: "/privacy", file: "privacy.html", lastmod: "2026-11-16", priority: "0.5" },
  // Catch-all render used as Vercel's 404 page. Never in the sitemap.
  { url: "/404", file: "404.html", sitemap: false },
];

export function sitemapRoutes() {
  return routes.filter((route) => route.sitemap !== false);
}

export function buildSitemap() {
  const urls = sitemapRoutes().map(({ url, lastmod, priority }) => {
    const loc = url === "/" ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${url}`;
    return [
      "  <url>",
      `    <loc>${loc}</loc>`,
      lastmod ? `    <lastmod>${lastmod}</lastmod>` : null,
      priority ? `    <priority>${priority}</priority>` : null,
      "  </url>",
    ]
      .filter(Boolean)
      .join("\n");
  });
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;
}
