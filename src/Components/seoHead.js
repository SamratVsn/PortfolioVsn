// Single source of truth for per-route head tags.
//
// The prerender script (scripts/prerender.mjs) serialises these tags into the
// static HTML, and SEO.jsx applies the exact same set to the live document on
// client-side navigation. Keeping one builder avoids the duplicate head tags
// (title/meta/canonical/JSON-LD) that react-helmet-async produced under React
// 19, where it rendered metadata twice — once per route in the prerendered
// HTML and again on hydration.

export const SITE = {
  name: "Samrat Parajuli",
  title: "Samrat Parajuli (SamratVsn) | Android App Developer",
  description:
    "Portfolio of Samrat Parajuli (SamratVsn), an Android developer in Kathmandu, Nepal — Kotlin, Jetpack Compose, and offline-first architecture. Builder of Avalokan v1.0.0.",
  origin: "https://www.samratparajuli0.com.np",
  url: "https://www.samratparajuli0.com.np/",
  image: "https://www.samratparajuli0.com.np/og/og-default.jpg",
  imageAlt: "Samrat Parajuli (SamratVsn) — Android App Developer",
  twitter: "@SamratVsn",
};

// Every social image must be served at 1200x630 so the declared dimensions
// match the file (mismatched og:image:width/height crops previews).
const IMAGE_WIDTH = 1200;
const IMAGE_HEIGHT = 630;
const IMAGE_TYPE = "image/jpeg";

export function resolveSEO({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  ogType,
  imageAlt,
  noindex,
} = {}) {
  const t = title || SITE.title;
  const d = description || SITE.description;
  const ou = ogUrl || SITE.url;
  return {
    t,
    d,
    ot: ogTitle || t,
    od: ogDescription || d,
    oi: ogImage || SITE.image,
    ou,
    // A noindex page must not declare a canonical pointing at a different URL.
    canonical: noindex ? null : ou,
    noindex: !!noindex,
    ogType: ogType || "website",
    imageAlt: imageAlt || SITE.imageAlt,
    imageWidth: IMAGE_WIDTH,
    imageHeight: IMAGE_HEIGHT,
    imageType: IMAGE_TYPE,
  };
}

// Declarative head description shared by the prerenderer and the client.
export function seoHeadTags(props = {}) {
  const r = resolveSEO(props);
  const tags = [
    { tag: "title", text: r.t },
    { tag: "meta", attrs: { name: "description", content: r.d } },
    {
      tag: "meta",
      attrs: { name: "robots", content: r.noindex ? "noindex, follow" : "index, follow" },
    },
  ];

  if (r.canonical) tags.push({ tag: "link", attrs: { rel: "canonical", href: r.canonical } });

  tags.push(
    { tag: "meta", attrs: { property: "og:type", content: r.ogType } },
    { tag: "meta", attrs: { property: "og:title", content: r.ot } },
    { tag: "meta", attrs: { property: "og:description", content: r.od } },
    { tag: "meta", attrs: { property: "og:image", content: r.oi } },
    { tag: "meta", attrs: { property: "og:image:secure_url", content: r.oi } },
    { tag: "meta", attrs: { property: "og:image:type", content: r.imageType } },
    { tag: "meta", attrs: { property: "og:image:width", content: String(r.imageWidth) } },
    { tag: "meta", attrs: { property: "og:image:height", content: String(r.imageHeight) } },
    { tag: "meta", attrs: { property: "og:image:alt", content: r.imageAlt } },
    { tag: "meta", attrs: { property: "og:url", content: r.ou } },
    { tag: "meta", attrs: { name: "twitter:card", content: "summary_large_image" } },
    { tag: "meta", attrs: { name: "twitter:title", content: r.ot } },
    { tag: "meta", attrs: { name: "twitter:description", content: r.od } },
    { tag: "meta", attrs: { name: "twitter:image", content: r.oi } },
    { tag: "meta", attrs: { name: "twitter:image:width", content: String(r.imageWidth) } },
    { tag: "meta", attrs: { name: "twitter:image:height", content: String(r.imageHeight) } },
    { tag: "meta", attrs: { name: "twitter:image:alt", content: r.imageAlt } },
    { tag: "meta", attrs: { name: "twitter:url", content: r.ou } }
  );

  const schemas = Array.isArray(props.schema) ? props.schema.filter(Boolean) : [];
  for (const schema of schemas) {
    tags.push({
      tag: "script",
      attrs: { type: "application/ld+json", "data-seo-schema": "true" },
      text: JSON.stringify(schema),
    });
  }

  return tags;
}

function escapeAttribute(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeText(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// Serialise the same tags for the prerendered HTML <head>.
export function headTagsAsString(props = {}) {
  return seoHeadTags(props)
    .map(({ tag, attrs = {}, text }) => {
      const attributeString = Object.entries(attrs)
        .map(([key, value]) => `${key}="${escapeAttribute(value)}"`)
        .join(" ");
      const open = attributeString ? `<${tag} ${attributeString}>` : `<${tag}>`;
      if (tag === "meta" || tag === "link") return open;
      // Script content is raw text: HTML entities are NOT decoded there, so
      // escaping `&` would corrupt JSON-LD strings. Only guard against an early
      // `</script>` by escaping `<` as a JSON unicode escape.
      if (tag === "script") return `${open}${String(text ?? "").replace(/</g, "\\u003c")}</${tag}>`;
      return `${open}${escapeText(text ?? "")}</${tag}>`;
    })
    .join("\n    ");
}

// ── Client-side head management ─────────────────────────────────────────────
// Updates the prerendered tags in place (same selectors the prerenderer emits),
// so there is exactly one copy of each tag at all times.
const metaSelectors = {
  description: 'meta[name="description"]',
  robots: 'meta[name="robots"]',
  "og:type": 'meta[property="og:type"]',
  "og:title": 'meta[property="og:title"]',
  "og:description": 'meta[property="og:description"]',
  "og:image": 'meta[property="og:image"]',
  "og:image:secure_url": 'meta[property="og:image:secure_url"]',
  "og:image:type": 'meta[property="og:image:type"]',
  "og:image:width": 'meta[property="og:image:width"]',
  "og:image:height": 'meta[property="og:image:height"]',
  "og:image:alt": 'meta[property="og:image:alt"]',
  "og:url": 'meta[property="og:url"]',
  "twitter:card": 'meta[name="twitter:card"]',
  "twitter:title": 'meta[name="twitter:title"]',
  "twitter:description": 'meta[name="twitter:description"]',
  "twitter:image": 'meta[name="twitter:image"]',
  "twitter:image:width": 'meta[name="twitter:image:width"]',
  "twitter:image:height": 'meta[name="twitter:image:height"]',
  "twitter:image:alt": 'meta[name="twitter:image:alt"]',
  "twitter:url": 'meta[name="twitter:url"]',
};

function upsertMeta(head, selector, content, attrName, attrValue) {
  let el = head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attrName, attrValue);
    head.appendChild(el);
  }
  if (el.getAttribute("content") !== content) el.setAttribute("content", content);
}

export function applySeoToDocument(props = {}) {
  if (typeof document === "undefined") return;
  const r = resolveSEO(props);
  const head = document.head;

  document.title = r.t;

  upsertMeta(head, metaSelectors.description, r.d, "name", "description");
  upsertMeta(
    head,
    metaSelectors.robots,
    r.noindex ? "noindex, follow" : "index, follow",
    "name",
    "robots"
  );
  upsertMeta(head, metaSelectors["og:type"], r.ogType, "property", "og:type");
  upsertMeta(head, metaSelectors["og:title"], r.ot, "property", "og:title");
  upsertMeta(head, metaSelectors["og:description"], r.od, "property", "og:description");
  upsertMeta(head, metaSelectors["og:image"], r.oi, "property", "og:image");
  upsertMeta(head, metaSelectors["og:image:secure_url"], r.oi, "property", "og:image:secure_url");
  upsertMeta(head, metaSelectors["og:image:type"], r.imageType, "property", "og:image:type");
  upsertMeta(head, metaSelectors["og:image:width"], String(r.imageWidth), "property", "og:image:width");
  upsertMeta(head, metaSelectors["og:image:height"], String(r.imageHeight), "property", "og:image:height");
  upsertMeta(head, metaSelectors["og:image:alt"], r.imageAlt, "property", "og:image:alt");
  upsertMeta(head, metaSelectors["og:url"], r.ou, "property", "og:url");
  upsertMeta(head, metaSelectors["twitter:card"], "summary_large_image", "name", "twitter:card");
  upsertMeta(head, metaSelectors["twitter:title"], r.ot, "name", "twitter:title");
  upsertMeta(head, metaSelectors["twitter:description"], r.od, "name", "twitter:description");
  upsertMeta(head, metaSelectors["twitter:image"], r.oi, "name", "twitter:image");
  upsertMeta(head, metaSelectors["twitter:image:width"], String(r.imageWidth), "name", "twitter:image:width");
  upsertMeta(head, metaSelectors["twitter:image:height"], String(r.imageHeight), "name", "twitter:image:height");
  upsertMeta(head, metaSelectors["twitter:image:alt"], r.imageAlt, "name", "twitter:image:alt");
  upsertMeta(head, metaSelectors["twitter:url"], r.ou, "name", "twitter:url");

  let canonical = head.querySelector('link[rel="canonical"]');
  if (!r.canonical) {
    if (canonical) canonical.remove();
  } else {
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      head.appendChild(canonical);
    }
    if (canonical.getAttribute("href") !== r.canonical) canonical.setAttribute("href", r.canonical);
  }

  head.querySelectorAll('script[data-seo-schema="true"]').forEach((el) => el.remove());
  const schemas = Array.isArray(props.schema) ? props.schema.filter(Boolean) : [];
  for (const schema of schemas) {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-seo-schema", "true");
    script.textContent = JSON.stringify(schema);
    head.appendChild(script);
  }
}

// ── Prerender collection ────────────────────────────────────────────────────
// The SEO component cannot touch the document during SSR, so it records its
// props here and prerender.mjs turns the last set into static head tags.
const ssrCollected = [];

export function collectSEO(props) {
  if (typeof window === "undefined") ssrCollected.push(props);
}

export function flushSeo() {
  return ssrCollected.splice(0);
}

export function buildSchemaTags(schema) {
  if (!Array.isArray(schema)) return "";
  return schema
    .filter(Boolean)
    .map((s) => `<script type="application/ld+json" data-seo-schema="true">${JSON.stringify(s)}</script>`)
    .join("\n    ");
}
