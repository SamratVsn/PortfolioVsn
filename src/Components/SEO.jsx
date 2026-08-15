import { Helmet } from 'react-helmet-async'
import { SITE, resolveSEO, collectSEO } from './seoHead'

export default function SEO(props) {
  if (typeof window === 'undefined') collectSEO(props)
  const r = resolveSEO(props)

  return (
    <Helmet>
      <title>{r.t}</title>
      <meta name="title" content={r.t} />
      <meta name="description" content={r.d} />
      <meta name="robots" content={r.noindex ? "noindex, follow" : "index, follow"} />
      <link rel="canonical" href={r.canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={r.ot} />
      <meta property="og:description" content={r.od} />
      <meta property="og:image" content={r.oi} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:alt" content={SITE.imageAlt} />
      <meta property="og:url" content={r.ou} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={r.ot} />
      <meta name="twitter:description" content={r.od} />
      <meta name="twitter:image" content={r.oi} />
      <meta name="twitter:image:alt" content={SITE.imageAlt} />
      <meta name="twitter:url" content={r.ou} />
    </Helmet>
  )
}
