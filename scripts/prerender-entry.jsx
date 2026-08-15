import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "../src/App.jsx";
import ScrollToTop from "../src/Components/ScrollToTop.jsx";
import { flushSeo, headTagsAsString } from "../src/Components/seoHead.js";

export function render(url) {
  flushSeo();
  const helmetContext = {};
  const content = renderToString(
    <HelmetProvider context={helmetContext}>
      <MemoryRouter initialEntries={[url]}>
        <ScrollToTop />
        <App />
      </MemoryRouter>
    </HelmetProvider>
  );
  const collected = flushSeo();
  const props = collected[collected.length - 1] || {};
  return { content, head: headTagsAsString(props) };
}
