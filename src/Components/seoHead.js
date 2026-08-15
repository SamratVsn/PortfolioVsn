export const SITE = {
  title: "Samrat Parajuli (SamratVsn) | Android App Developer",
  description: "Portfolio of Samrat Parajuli (SamratVsn), an Android developer based in Nepal specializing in Kotlin, Jetpack Compose, mobile architecture, and high-performance UI/UX systems.",
  url: "https://www.samratparajuli0.com.np/",
  image: "https://www.samratparajuli0.com.np/Profile.jpg",
  imageAlt: "Samrat Parajuli (SamratVsn) — Android App Developer",
  twitter: "@SamratVsn",
};

export function resolveSEO({ title, description, ogTitle, ogDescription, ogImage, ogUrl, noindex } = {}) {
  const t = title || SITE.title
  const d = description || SITE.description
  const ot = ogTitle || t
  const od = ogDescription || d
  const oi = ogImage || SITE.image
  const ou = ogUrl || SITE.url
  return { t, d, ot, od, oi, ou, canonical: ou, noindex: !!noindex }
}

// Build the exact head block react-helmet-async would emit on the client,
// so prerendered pages stay identical to runtime output.
export function headTagsAsString(props) {
  const r = resolveSEO(props)
  return [
    `<title>${r.t}</title>`,
    `<meta name="title" content="${r.t}" />`,
    `<meta name="description" content="${r.d}" />`,
    `<meta name="robots" content="${r.noindex ? "noindex, follow" : "index, follow"}" />`,
    `<link rel="canonical" href="${r.canonical}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:title" content="${r.ot}" />`,
    `<meta property="og:description" content="${r.od}" />`,
    `<meta property="og:image" content="${r.oi}" />`,
    `<meta property="og:image:type" content="image/jpeg" />`,
    `<meta property="og:image:alt" content="${SITE.imageAlt}" />`,
    `<meta property="og:url" content="${r.ou}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${r.ot}" />`,
    `<meta name="twitter:description" content="${r.od}" />`,
    `<meta name="twitter:image" content="${r.oi}" />`,
    `<meta name="twitter:image:alt" content="${SITE.imageAlt}" />`,
    `<meta name="twitter:url" content="${r.ou}" />`,
  ].join('\n    ')
}

// react-helmet-async v3 does not support server rendering under React 19
// (its HelmetProvider is a no-op and attributes only sync on the client).
// Collect the resolved props during SSR so the prerender script can emit the
// same head tags that runtime renders.
const ssrCollected = []

export function collectSEO(props) {
  if (typeof window === 'undefined') ssrCollected.push(props)
}

export function flushSeo() {
  return ssrCollected.splice(0)
}
