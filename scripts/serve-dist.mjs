// Minimal static server that mirrors the Vercel rewrites/redirects in
// vercel.json. Used by the axe runner and Lighthouse CI so clean URLs resolve
// exactly as they do in production.
//
// Usage: node scripts/serve-dist.mjs [port]

import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import zlib from "node:zlib";
import { fileURLToPath } from "node:url";
import { routes } from "./routes.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");
const port = Number(process.argv[2] || process.env.PORT || 4173);

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".mp4": "video/mp4",
  ".woff2": "font/woff2",
};

const routeFiles = new Map(routes.filter((route) => route.slug || route.file !== "404.html").map((route) => [route.url, route.file]));
routeFiles.set("/404", "404.html");

const redirects = new Map(
  routes
    .filter((route) => route.url !== "/" && route.file !== "404.html")
    .map((route) => [`${route.url}.html`, route.url])
);
redirects.set("/index.html", "/");
redirects.set("/home", "/");

function send(request, response, status, file, { compress = true } = {}) {
  const extension = path.extname(file).toLowerCase();
  const type = MIME[extension] || "application/octet-stream";
  const headers = {
    "Content-Type": type,
    "X-Content-Type-Options": "nosniff",
    "Cache-Control": extension === ".html" ? "no-cache" : "public, max-age=3600",
  };

  let body;
  if (!compress || !/^(text|application\/(json|xml|javascript))/.test(type)) {
    body = fs.readFileSync(file);
  } else {
    body = zlib.gzipSync(fs.readFileSync(file), { level: 6 });
    headers["Content-Encoding"] = "gzip";
    headers.Vary = "Accept-Encoding";
  }

  headers["Content-Length"] = body.length;
  response.writeHead(status, headers);
  response.end(request.method === "HEAD" ? undefined : body);
}

const server = http.createServer((request, response) => {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(request.url, `http://localhost:${port}`).pathname);
  } catch {
    response.writeHead(400).end("Bad request");
    return;
  }

  const normalized = pathname.replace(/\/+$/, "") || "/";

  if (redirects.has(normalized) || redirects.has(pathname)) {
    const destination = redirects.get(normalized) || redirects.get(pathname);
    response.writeHead(301, { Location: destination }).end();
    return;
  }

  const routeFile = routeFiles.get(normalized);
  if (routeFile) {
    send(request, response, 200, path.join(distDir, routeFile));
    return;
  }

  const asset = path.join(distDir, pathname);
  const safe = asset.startsWith(distDir) && fs.existsSync(asset) && fs.statSync(asset).isFile();
  if (safe) {
    send(request, response, 200, asset);
    return;
  }

  send(request, response, 404, path.join(distDir, "404.html"));
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Static dist server: http://127.0.0.1:${port}`);
});

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => server.close(() => process.exit(0)));
}
