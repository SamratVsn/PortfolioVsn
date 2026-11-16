import { useEffect, useRef } from 'react'
import { applySeoToDocument, collectSEO } from './seoHead'

/**
 * Per-route metadata.
 *
 * Renders nothing. The tags live in the document head: written once by the
 * prerenderer and updated in place on client navigation (see seoHead.js).
 * This intentionally replaces react-helmet-async, which duplicated every tag
 * under React 19 (once from the prerendered HTML, once on hydration).
 */
export default function SEO(props) {
  if (typeof window === 'undefined') collectSEO(props)

  const latest = useRef(props)
  latest.current = props

  // Props are rebuilt on every render, so key the effect on their serialised
  // value rather than object identity.
  const key = JSON.stringify(props)

  useEffect(() => {
    applySeoToDocument(latest.current)
  }, [key])

  return null
}
