import { createServer } from "vite";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");

const routes = [
  { url: "/", file: "index.html" },
  { url: "/about", file: "about.html" },
  { url: "/contact", file: "contact.html" },
  { url: "/projects", file: "projects.html" },
  { url: "/projects/todo", file: "projects/todo.html" },
  { url: "/projects/themovie", file: "projects/themovie.html" },
  { url: "/projects/juicetracker", file: "projects/juicetracker.html" },
  { url: "/projects/kathmandu", file: "projects/kathmandu.html" },
  { url: "/projects/sms", file: "projects/sms.html" },
  { url: "/projects/bmsk", file: "projects/bmsk.html" },
  { url: "/projects/blogvsn", file: "projects/blogvsn.html" },
  { url: "/projects/this", file: "projects/this.html" },
  { url: "/notes", file: "notes.html" },
  { url: "/this-page-does-not-exist", file: "404.html" },
];

const server = await createServer({
  root,
  server: { middlewareMode: true },
  appType: "custom",
  logLevel: "error",
});

const entry = await server.ssrLoadModule("/scripts/prerender-entry.jsx");
const { render } = entry;

const template = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");

const manifest = JSON.parse(
  fs.readFileSync(path.join(distDir, ".vite", "manifest.json"), "utf-8")
);
const assetMap = new Map();
for (const [key, value] of Object.entries(manifest)) {
  if (value && typeof value.file === "string") {
    assetMap.set(`/${key}`, `/${value.file}`);
  }
}

// react-helmet-async v3 renders its head tags into the tree during SSR
// (React19Dispatcher emits <title>/<meta>/<link>/... in place). Strip those
// from the body content — the head block is injected separately above.
function stripHelmetLeak(html) {
  return html
    .replace(/<title[^>]*>[\s\S]*?<\/title>/gi, "")
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<(base|meta|link|noscript)[^>]*\/?>/gi, "");
}

function rewriteAssetUrls(html) {
  return html.replace(/src="(\/src\/assets\/[^"]+)"/g, (match, src) => {
    const mapped = assetMap.get(src);
    return mapped ? `src="${mapped}"` : match;
  });
}

const START = "<!-- ROUTE_SEO_START -->";
const END = "<!-- ROUTE_SEO_END -->";

for (const route of routes) {
  const { content, head } = render(route.url);

  const startIdx = template.indexOf(START);
  const endIdx = template.indexOf(END);
  if (startIdx === -1 || endIdx === -1 || endIdx <= startIdx) {
    throw new Error("ROUTE_SEO markers not found in dist/index.html");
  }

  const prefix = template.slice(0, startIdx + START.length + 1);
  const suffix = "    " + template.slice(endIdx);
  let html = prefix + head + "\n" + suffix;

  html = html.replace(
    '<div id="root"></div>',
    `<div id="root">${stripHelmetLeak(content)}</div>`
  );
  html = rewriteAssetUrls(html);

  const outFile = path.join(distDir, route.file);
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, html, "utf-8");
  console.log(`Prerendered ${route.url} -> ${route.file}`);
}

await server.close();
console.log("Prerendering complete.");
