// Route-level code splitting without breaking prerender or hydration.
//
// React.lazy cannot be used directly here: the prerenderer renders with
// renderToString, which never resolves a lazy() promise, and hydration would
// briefly replace the prerendered markup with a fallback. This registry keeps
// the same split points but lets the prerenderer and main.jsx resolve the
// current route before they render.
//
// Every loader is a static dynamic import, so Vite emits one chunk per route.

const loaders = {
  about: () => import("../Pages/About"),
  contact: () => import("../Pages/Contact"),
  privacy: () => import("../Pages/Privacy"),
  projects: () => import("../Pages/Projects"),
  "not-found": () => import("../Pages/NotFound"),
  avalokan: () => import("../Components/Avalokan"),
  todo: () => import("../Components/Tasks"),
  themovie: () => import("../Components/TheMovie"),
  juicetracker: () => import("../Components/JuiceTracker"),
  kathmandu: () => import("../Components/Kathmandu"),
  sms: () => import("../Components/SMS"),
  bmsk: () => import("../Components/BMSK"),
  blogvsn: () => import("../Components/BlogVsn"),
  this: () => import("../Components/This"),
};

// key -> Promise<Component> with the resolved component attached once ready.
const cache = new Map();

function load(key) {
  const existing = cache.get(key);
  if (existing) return existing;

  const promise = loaders[key]().then((module) => {
    promise.component = module.default;
    return module.default;
  });
  cache.set(key, promise);
  return promise;
}

// "not-found" is a valid loader key but not a public URL.
const PROJECT_SLUGS = new Set(
  Object.keys(loaders).filter(
    (key) => !["about", "contact", "privacy", "projects", "not-found"].includes(key)
  )
);

const SIMPLE_ROUTES = {
  "/about": "about",
  "/contact": "contact",
  "/privacy": "privacy",
  "/projects": "projects",
  "/404": "not-found",
};

// Returns every chunk a URL needs, parents first. An empty list means the route
// is already in the initial bundle (the homepage).
export function routeKeys(pathname) {
  const clean = pathname.replace(/\/+$/, "") || "/";
  if (clean === "/") return [];

  const simple = SIMPLE_ROUTES[clean];
  if (simple) return [simple];

  const project = clean.match(/^\/projects\/([^/]+)$/);
  if (project && PROJECT_SLUGS.has(project[1])) {
    return ["projects", project[1]];
  }

  return ["not-found"];
}

export async function preloadRoute(pathname) {
  await Promise.all(routeKeys(pathname).map((key) => load(key)));
}

// Suspends until the loader resolves, then renders the real component. The same
// registry is shared by the browser and the prerenderer, so a preloaded route
// renders synchronously in both.
export function lazyPage(key) {
  function LazyPage() {
    const entry = cache.get(key);
    if (entry?.component) {
      const Component = entry.component;
      return <Component />;
    }
    throw load(key);
  }
  LazyPage.displayName = `LazyPage(${key})`;
  return LazyPage;
}
