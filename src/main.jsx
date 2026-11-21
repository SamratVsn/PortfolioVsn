import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './Components/ScrollToTop.jsx'
import { applySeed, getStoredSeed } from './Components/theme.js'
import { preloadRoute } from './routes/lazyPages.jsx'

// Apply the stored accent seed before React renders. The inline script in
// index.html handles the very first paint; this keeps the in-memory state in
// sync for the client render.
applySeed(getStoredSeed())

const container = document.getElementById('root')

// Resolve the current route before hydrating. The chunk is cached in the same
// registry the lazy components use, so hydration sees the real markup instead
// of a Suspense fallback.
async function start() {
  await preloadRoute(window.location.pathname)

  const app = (
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  )

  // Production builds ship prerendered HTML for every route, so hydrate it
  // instead of throwing it away and re-rendering from scratch. Vite's dev server
  // serves an empty #root, which still needs a regular client render.
  if (container.hasChildNodes()) {
    hydrateRoot(container, app)
  } else {
    createRoot(container).render(app)
  }
}

start()
