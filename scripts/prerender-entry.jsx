import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import App from "../src/App.jsx";
import ScrollToTop from "../src/Components/ScrollToTop.jsx";
import { flushSeo, headTagsAsString } from "../src/Components/seoHead.js";
import { preloadRoute } from "../src/routes/lazyPages.jsx";

// renderToString is synchronous and cannot resolve a Suspense boundary, so the
// route's split chunks are loaded into the shared registry first. The same
// preload runs in main.jsx before hydration.
export async function render(url) {
  await preloadRoute(url);
  flushSeo();
  const content = renderToString(
    <MemoryRouter initialEntries={[url]}>
      <ScrollToTop />
      <App />
    </MemoryRouter>
  );
  const collected = flushSeo();
  const props = collected[collected.length - 1] || {};
  return { content, head: headTagsAsString(props) };
}
