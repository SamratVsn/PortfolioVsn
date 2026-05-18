import { Helmet } from 'react-helmet-async'

const SITE = {
  title: "Samrat Parajuli | Android Developer & Programmer",
  description: "Portfolio of Samrat Parajuli (SamratVsn), an Android Developer based in Nepal specializing in Kotlin, mobile architecture, and high-performance UI/UX systems.",
  url: "https://www.samratparajuli0.com.np/",
  image: "https://www.samratparajuli0.com.np/og-image.svg",
  twitter: "@SamratVsn",
}

export default function SEO({ title, description, ogTitle, ogDescription, ogImage, ogUrl, noindex }) {
  const t = title || SITE.title
  const d = description || SITE.description
  const ot = ogTitle || t
  const od = ogDescription || d
  const oi = ogImage || SITE.image
  const ou = ogUrl || SITE.url
  const canonical = ogUrl || SITE.url

  return (
    <Helmet>
      <title>{t}</title>
      <meta name="title" content={t} />
      <meta name="description" content={d} />
      <link rel="canonical" href={canonical} />

      {noindex && <meta name="robots" content="noindex, follow" />}

      <meta property="og:type" content="website" />
      <meta property="og:title" content={ot} />
      <meta property="og:description" content={od} />
      <meta property="og:image" content={oi} />
      <meta property="og:url" content={ou} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ot} />
      <meta name="twitter:description" content={od} />
      <meta name="twitter:image" content={oi} />
    </Helmet>
  )
}