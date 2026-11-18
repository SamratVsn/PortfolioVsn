// Single source of truth for who this site is about.
//
// Everything visitor-facing that names the person, role, or contact details
// derives from this file: the SEO head builder, the prerendered JSON-LD, the
// header, the footer, the hero, About, Contact, llms.txt and the README.
// Keeping it here means the identity can only change in one place.

export const IDENTITY = "Product-Minded Systems & Application Engineer";

// Used where the full identity would crowd a compact lockup (site header).
export const IDENTITY_SHORT = "Systems & Application Engineer";

export const SPECIALTY = "Native Android — Kotlin, Jetpack Compose";

// Prose form of the same specialism, for sentences that shouldn't repeat an
// em dash.
export const SPECIALTY_PLAIN = "Native Android in Kotlin and Jetpack Compose";

export const TAGLINE =
  "I build applications end to end: product brief → data model → interface → release.";

export const SITE_TITLE =
  "Samrat Parajuli (SamratVsn) — Product-Minded Systems & Application Engineer";

export const SITE_DESCRIPTION =
  "Portfolio of Samrat Parajuli (SamratVsn), a product-minded systems and application engineer in Kathmandu, Nepal. Native Android in Kotlin and Jetpack Compose, built end to end from product brief to release.";

export const SITE_IMAGE_ALT =
  "Samrat Parajuli (SamratVsn) — Product-Minded Systems & Application Engineer";

export const SITE = {
  name: "Samrat Parajuli",
  alternateName: "SamratVsn",
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  imageAlt: SITE_IMAGE_ALT,
  origin: "https://www.samratparajuli0.com.np",
  url: "https://www.samratparajuli0.com.np/",
  image: "https://www.samratparajuli0.com.np/og/og-default.jpg",
  twitter: "@SamratVsn",
  email: "samratvsn@gmail.com",
  blog: "https://blog.samratparajuli0.com.np/",
  location: {
    locality: "Kathmandu",
    country: "NP",
  },
};

export const SOCIAL = [
  { label: "GitHub", href: "https://github.com/SamratVsn" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/samratvsn/" },
  { label: "Google Developer Profile", href: "https://g.dev/samratparajuli" },
  { label: "X", href: "https://x.com/SamratVsn" },
  { label: "Medium", href: "https://medium.com/@samratvsn" },
  { label: "Facebook", href: "https://facebook.com/samratvsn" },
];

export const KNOWS_ABOUT = [
  "Product engineering",
  "Systems design",
  "Application architecture",
  "Android development",
  "Kotlin",
  "Jetpack Compose",
  "Offline-first design",
  "Firebase",
  "Room",
  "REST APIs",
  "UI/UX design",
];

// Site-wide entities. These are emitted on every route by seoHead.js so the
// Person and WebSite always describe the current positioning, even on pages
// that only add page-specific schema.
export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE.origin}/#person`,
    name: SITE.name,
    alternateName: SITE.alternateName,
    description:
      "Product-minded systems and application engineer in Kathmandu, Nepal. Builds native Android applications in Kotlin and Jetpack Compose, from product brief and data model through interface and release.",
    url: SITE.url,
    image: `${SITE.origin}/profile-400.jpg`,
    jobTitle: IDENTITY,
    email: `mailto:${SITE.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.location.locality,
      addressCountry: SITE.location.country,
    },
    sameAs: SOCIAL.map((social) => social.href),
    knowsAbout: KNOWS_ABOUT,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.origin}/#website`,
    name: SITE.name,
    alternateName: SITE.alternateName,
    url: SITE.url,
    inLanguage: "en",
    publisher: { "@id": `${SITE.origin}/#person` },
  };
}
