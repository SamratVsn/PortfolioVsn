import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './Components/ScrollToTop.jsx'

const container = document.getElementById('root')

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
