/* Accent seed bootstrap.
 *
 * Loaded synchronously from the document head before the first paint, so a
 * stored accent choice never flashes the default palette. It is an external
 * same-origin file (not inline) because the Content-Security-Policy only
 * permits `script-src 'self'`.
 */
(function () {
  try {
    var seed = localStorage.getItem("sp-accent-seed");
    if (seed === "terracotta" || seed === "slate") {
      document.documentElement.setAttribute("data-seed", seed);
    }
  } catch {
    /* storage can be unavailable in private mode — the default palette stays */
  }
})();
