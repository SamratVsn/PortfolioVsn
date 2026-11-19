// The route manifest lives in src/content/routes.js so React Router and the
// prerenderer consume exactly the same list. Re-exported here to keep the
// existing scripts/prerender.mjs imports stable.
export {
  SITE_ORIGIN,
  routes,
  sitemapRoutes,
  buildSitemap,
} from "../src/content/routes.js";
