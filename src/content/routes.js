// Single route manifest.
//
// Three consumers read this file: React Router (src/App.jsx and
// src/Pages/Projects.jsx), the prerenderer + sitemap (scripts/routes.mjs), and
// the build-time vercel.json parity check in scripts/prerender.mjs. Public URLs
// are intentionally unchanged; this file only removes the manual duplication.
//
// lastmod is the date the page content meaningfully changed. Update it when a
// page's content or structure changes, not on every deploy.

export const SITE_ORIGIN = "https://www.samratparajuli0.com.np";

export const STATIC_ROUTES = [
  {
    id: "home",
    url: "/",
    file: "index.html",
    label: "Home",
    lastmod: "2026-11-16",
    priority: "1.0",
  },
  {
    id: "about",
    url: "/about",
    file: "about.html",
    label: "About",
    lastmod: "2026-11-16",
    priority: "0.8",
  },
  {
    id: "projects",
    url: "/projects",
    file: "projects.html",
    label: "Projects",
    lastmod: "2026-11-19",
    priority: "0.8",
  },
  {
    id: "contact",
    url: "/contact",
    file: "contact.html",
    label: "Contact",
    lastmod: "2026-11-16",
    priority: "0.6",
  },
  {
    id: "privacy",
    url: "/privacy",
    file: "privacy.html",
    label: "Privacy",
    lastmod: "2026-11-16",
    priority: "0.5",
  },
];

// `slug` is the nested React Router segment under /projects; `url` is the
// public clean URL used by the prerender, sitemap and hosting config.
export const PROJECT_ROUTES = [
  {
    id: "avalokan",
    slug: "avalokan",
    url: "/projects/avalokan",
    file: "projects/avalokan.html",
    label: "Avalokan",
    lastmod: "2026-11-19",
    priority: "0.9",
  },
  {
    id: "todo",
    slug: "todo",
    url: "/projects/todo",
    file: "projects/todo.html",
    label: "Tasks",
    lastmod: "2026-11-19",
    priority: "0.8",
  },
  {
    id: "themovie",
    slug: "themovie",
    url: "/projects/themovie",
    file: "projects/themovie.html",
    label: "The Movie App",
    lastmod: "2026-11-19",
    priority: "0.8",
  },
  {
    id: "juicetracker",
    slug: "juicetracker",
    url: "/projects/juicetracker",
    file: "projects/juicetracker.html",
    label: "Juice Tracker",
    lastmod: "2026-11-19",
    priority: "0.8",
  },
  {
    id: "kathmandu",
    slug: "kathmandu",
    url: "/projects/kathmandu",
    file: "projects/kathmandu.html",
    label: "Kathmandu My-City",
    lastmod: "2026-11-19",
    priority: "0.8",
  },
  {
    id: "sms",
    slug: "sms",
    url: "/projects/sms",
    file: "projects/sms.html",
    label: "Student Management System",
    lastmod: "2026-11-19",
    priority: "0.7",
  },
  {
    id: "bmsk",
    slug: "bmsk",
    url: "/projects/bmsk",
    file: "projects/bmsk.html",
    label: "Bank Management System",
    lastmod: "2026-11-19",
    priority: "0.7",
  },
  {
    id: "blogvsn",
    slug: "blogvsn",
    url: "/projects/blogvsn",
    file: "projects/blogvsn.html",
    label: "BlogVsn",
    lastmod: "2026-11-19",
    priority: "0.7",
  },
  {
    id: "this",
    slug: "this",
    url: "/projects/this",
    file: "projects/this.html",
    label: "This Portfolio",
    lastmod: "2026-11-19",
    priority: "0.6",
  },
];

// Catch-all render used as Vercel's 404 page. Never in the sitemap.
export const NOT_FOUND_ROUTE = {
  id: "not-found",
  url: "/404",
  file: "404.html",
  label: "Not found",
  sitemap: false,
};

export const routes = [...STATIC_ROUTES, ...PROJECT_ROUTES, NOT_FOUND_ROUTE];

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
