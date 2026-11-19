# Phase 2 — Design System & Shared Architecture

**Status:** Complete, awaiting review. Phase 3 has not been started.

- **Branch:** `feature/phase-1-trust-identity`
- **Phase 2 implementation:** `d292565`
- **Date:** 19 November 2026
- **Scope:** Audit items P1-1 through P1-4 only — route manifest, design primitives, type scale, and a shared case-study template.
- **Compatibility:** React 19, Vite 7, Tailwind CSS 4, the prerender pipeline, all public URLs, the EmailJS environment names, `src/content/site.js`, `seoHead.js`, and the existing SEO architecture are unchanged. No dependency was added.

---

## 1. What changed

### 1.1 One route manifest (P1-1)

`src/content/routes.js` is now the single source for the 14 public routes. It is consumed by:

- `src/App.jsx` — React Router route table
- `src/Pages/Projects.jsx` — project links and counts
- `scripts/routes.mjs` — prerender targets, sitemap entries, and `lastmod`/priority
- `scripts/prerender.mjs` — build-time parity check against `vercel.json`

`vercel.json` stays explicit on purpose: hosting config should be reviewable as hosting config. The build now fails if a manifest route is missing from `vercel.json` rewrites, or if `vercel.json` rewrites a route the manifest does not own. The check currently reports:

```
Hosting config matches 14 public routes.
```

No URL, redirect, rewrite, or trailing-slash behaviour changed.

### 1.2 Design tokens (P1-2, P1-3)

`src/index.css` now owns the type scale, container ladder, and the semantic colour tokens that components consume.

**Type scale — nine rem-based steps**

| Token | Size | Intended use |
| --- | --- | --- |
| `text-display` | `clamp(2.5rem, 5vw, 3.85rem)` | Hero only |
| `text-h1` | `clamp(2rem, 3.4vw, 3rem)` | Page title |
| `text-h2` | `clamp(1.5rem, 2.2vw, 2rem)` | Section title |
| `text-h3` | `1.25rem` | Card / feature title |
| `text-h4` | `1.0625rem` | Compact heading, dialog title |
| `text-body-lg` | `1.0625rem` | Lead paragraph |
| `text-body` | `0.9375rem` | Default prose and form values |
| `text-small` | `0.8125rem` | UI labels, links, captions |
| `text-label` | `0.6875rem` (11px floor) | Mono micro-labels and eyebrows |

Line height and letter spacing ship with the tokens, so headings no longer rely on one-off `leading-*`/`tracking-*` values. All arbitrary `text-[…]` values and default Tailwind sizes (`text-xs` … `text-4xl`) were removed from JSX.

**Container ladder**

`prose` 48rem · `narrow` 56rem · `page` 72rem · `page-wide` 80rem · `page-ultra` 90rem · `page-max` 100rem.

Previously each page hand-rolled its own `max-w-6xl xl:max-w-7xl 2xl:max-w-[90rem] min-[1920px]:max-w-[100rem]` ladder. Header, Footer, Hero, Home, About, Projects, Contact, Privacy, and case studies now resolve through `Container`.

**Colour tokens**

- `--color-accent-text` (and per-seed `--p-accent-text`) — accessible accent text, replacing raw `text-accent` on body-size copy.
- `--color-border-control` (and per-seed `--p-border-control`) — a 3:1 form-control boundary that does not rely on the decorative accent border.
- Existing forest / terracotta / slate seeds continue to drive every utility at runtime through the `--p-*` properties.

### 1.3 Shared UI primitives (P1-2)

New in `src/Components/ui/`:

| Component | Responsibility |
| --- | --- |
| `Container` | The single width/padding ladder |
| `Section` | Three documented vertical rhythms: `tight`, `default`, `loose`, plus optional `divided` rule |
| `Eyebrow` | Mono micro-label with decorative dot/rule and accessible accent tone |
| `Button` | Link/button/anchor rendering, `primary`/`secondary`/`ghost` variants, `sm`/`md`/`lg` sizes |
| `buttonStyles` | Shared class builder for the few places that cannot use `Button` |
| `Card` | Surface variants and paddings, optional interactive border behaviour |
| `StatusPill` | Release/status badge with accent/neutral/success tones |
| `Tag` | Technology chip with optional colour dot |
| `cn` | Class-name join helper |
| `index` | Barrel export |

The point was not to abstract everything. It was to remove the copies that had already drifted: three button recipes, four badge recipes, five container ladders, and a dozen near-identical card borders.

### 1.4 Shared case-study architecture (P1-4)

New in `src/Components/case-study/`:

- `CaseStudyLayout` — page shell with breadcrumb, shared header, body, optional `banner` and `footer` slots.
- `CaseStudyHeader` — eyebrow, `h1`, summary, status, actions.
- `Breadcrumb` — `Home / Projects / Project` navigation.
- `CaseStudySection` — titled body section with consistent heading rhythm.
- `CaseStudyTabs` — pressed-toggle section control with Arrow/Home/End focus movement and horizontal scrolling on narrow screens.
- `ScreenshotGallery` — shared screenshot grid, derived alt text from existing labels/descriptions, optional lightbox callback.
- `CaseStudyAside` — technical-stack / metadata sidebar.

The old `src/Components/CaseStudyHeader.jsx` was deleted only after confirming the only remaining import was the new `case-study/CaseStudyHeader.jsx`.

All nine case studies now use the shared shell and sections: Avalokan, Tasks, TheMovie, JuiceTracker, Kathmandu, SMS, BMSK, BlogVsn, and This.

**Content preservation was the constraint.** Every project keeps its own:

- narrative paragraphs and section order
- data arrays (features, challenges, architecture, stack, outcomes)
- screenshot set, labels, captions, and descriptions
- links, download URLs, and status wording
- unique hero behaviour

Avalokan is the clearest example: its bespoke hero keeps the project logo, `h1`, action row, and metrics strip. Only its body, tabs, gallery, and aside were moved to shared components. No description was rewritten and no metric, feature, or accomplishment was invented.

### 1.5 Page-level unification

- **Home** — sections use `Section` + `Container`; the Avalokan spotlight and supporting cards use `Card`, `StatusPill`, `Tag`, and `Button`; the journey, writing, and contact CTA inherit the shared rhythms.
- **About** — typography moved to the token scale; the closing CTA uses `Button`. Its information architecture was intentionally left for Phase 3.
- **Projects** — grid consumes the route manifest; cards use `Tag`/`StatusPill`/tokens.
- **Contact** — rebuilt around `PageHeader`, `Container`, `Card`, and `Button`. Form IDs, field names, validation, EmailJS service/template/public-key environment names, timing, and feedback messages are preserved. The only visual change is the shared control boundary and type scale.
- **Privacy** — `PageHeader` + `Container`; content untouched.
- **404** — `Eyebrow`, `Button`, and `text-display`; copy and destinations preserved.
- **Header / Footer** — `Container` and token sizes; the mobile panel, Escape handling, `aria-expanded`, active-route logic, and focus styles are unchanged.
- **Lightbox / CategoryFilter / TestimonialsSection** — token typography and shared container only; behaviour unchanged.

### 1.6 Responsive fixes found during verification

- **Hero padding regression:** the hero had been moved to `Container padded={false}`, which removed horizontal padding at every width. It now uses the standard padded container, so mobile text no longer touches the viewport edge.
- **Tablet header overflow:** the desktop navigation switched on at `md` (768px). At 768–1023px the brand, five links, theme switcher, and CTA exceeded the container and were clipped. The desktop nav and mobile trigger now switch at `lg` (1024px). This keeps the mobile menu available through tablet widths and matches the GitHub action, which was already `lg`-only.

Both fixes are in the working tree after `d292565` and are the only uncommitted source changes.

---

## 2. Files changed

### New

- `src/content/routes.js`
- `src/Components/ui/`: `Container.jsx`, `Section.jsx`, `Eyebrow.jsx`, `Button.jsx`, `buttonStyles.js`, `Card.jsx`, `StatusPill.jsx`, `Tag.jsx`, `cn.js`, `index.js`
- `src/Components/case-study/`: `CaseStudyLayout.jsx`, `CaseStudyHeader.jsx`, `Breadcrumb.jsx`, `CaseStudySection.jsx`, `CaseStudyTabs.jsx`, `ScreenshotGallery.jsx`, `CaseStudyAside.jsx`
- `PHASE_2_REPORT.md`

### Updated

- Build/routing: `scripts/prerender.mjs`, `scripts/routes.mjs`, `src/App.jsx`
- Design system: `src/index.css`
- Shared components: `Header`, `Footer`, `Hero`, `PageHeader`, `SectionHeading`, `Lightbox`, `CategoryFilter`, `TestimonialsSection`, `projectGrid`
- Pages: `Home`, `About`, `Projects`, `Contact`, `Privacy`, `NotFound`
- Case studies: `Avalokan`, `Tasks`, `TheMovie`, `JuiceTracker`, `Kathmandu`, `SMS`, `BMSK`, `BlogVsn`, `This`

### Deleted

- `src/Components/CaseStudyHeader.jsx` (superseded by `src/Components/case-study/CaseStudyHeader.jsx`)

---

## 3. Design decisions

1. **Tokens over a component library.** Tailwind 4 theme variables plus a small primitive layer solve the drift without adding a styling system or dependency.
2. **Nine type steps, 11px floor.** The scale is deliberately compact. Micro-labels stay legible, and no component needs an arbitrary size. Headings shift by a few pixels on some pages; this is the intended consolidation, not a redesign.
3. **One container ladder, not one width.** `prose`, `narrow`, `page`, and wider variants let reading pages stay narrow while galleries and grids breathe.
4. **Route manifest with an explicit hosting file.** Hosting rewrites remain reviewable in `vercel.json`; the build enforces parity instead of generating a file nobody reads.
5. **Evolve the case-study header.** The Phase 1 header already carried the right semantics. It moved into `case-study/`, gained the optional layout slots, and kept its eyebrow/status/action structure.
6. **Shared shell, unique story.** The shell standardises rhythm, breadcrumb, gallery, and aside. Project narrative, screenshots, and data stay local, so the pages still read as nine different projects rather than one template nine times.
7. **Preserve bespoke heroes.** Avalokan's hero is part of its identity. Forcing it into the generic header would have removed information and character for no architectural gain.
8. **Accessible accent text is a separate token.** Decorative accent borders and fill colours are not guaranteed to pass text contrast at body sizes; `accent-text` is the deliberate alternative.
9. **Editorial page headers.** Contact and Privacy moved to `PageHeader` now because it is a pure presentation change. Home/About IA changes remain Phase 3.

---

## 4. Shared components

The reusable surface is intentionally small:

- **Layout:** `Container`, `Section`, `CaseStudyLayout`, `CaseStudySection`
- **Typography:** `Eyebrow`, `PageHeader`, `SectionHeading`
- **Actions:** `Button`, `buttonStyles`
- **Surfaces:** `Card`
- **Metadata:** `StatusPill`, `Tag`
- **Case-study:** `CaseStudyHeader`, `Breadcrumb`, `CaseStudyTabs`, `ScreenshotGallery`, `CaseStudyAside`
- **Overlay:** `Lightbox`

Everything else remains page- or project-specific on purpose.

---

## 5. Responsive and accessibility work

### Responsive

- Verified at 390, 768, 1024, 1280, and 1440 CSS pixels with CDP device-metrics emulation (not window resizing).
- No horizontal document overflow on any route. The only elements wider than the viewport are:
  - decorative SVG geometry inside the hero backdrop, which is clipped by design;
  - the case-study tab strip at 390px, which is an intentional `overflow-x-auto` control.
- Header fits at 768 / 1024 / 1280 / 1440 after the breakpoint fix.
- Mobile menu opens a 291px panel with `aria-expanded="true"` and `aria-label="Close menu"`, and closes on Escape and on navigation.
- Full pages were reviewed from 390px and 1440px captures for Home, Projects, Contact, Avalokan, SMS, and This, plus 768px captures for Home, Projects, Contact, Avalokan, SMS, and This.

### Accessibility

- Exactly one `h1` on every route, including all nine case studies and the 404 page.
- One `main` landmark per page; the site Header remains the only `banner`.
- Skip link retained and retokenised.
- Focus-visible styles retained on navigation, buttons, cards, tabs, filters, and lightbox controls.
- `CaseStudyTabs` exposes `aria-pressed`, a group label, and Arrow/Home/End focus movement.
- `ScreenshotGallery` builds alt text from the existing label and description; no new copy was invented.
- `Lightbox` now uses `text-h4`/`text-small`; dialog semantics, focus trap, Escape close, scroll lock, and focus restore are unchanged.
- Reduced-motion preferences are still honoured in the motion-driven sections.
- axe-core 4.10.2 scans returned **zero violations** on:
  - Home at 1280 and 390
  - Projects at 1280
  - Avalokan case study at 1280
  - Contact at 1280

  This includes colour-contrast, landmark, heading-order, name/role/value, and link-name rules for the scanned states.

---

## 6. Verification results

### Lint and build

- `npm run lint` — **passes**.
- `npm run build` — **passes**.
- Prerender: **15 documents** (14 public routes + `404.html`).
- `dist/sitemap.xml`: **14 URLs**, excluding `/404`.
- Hosting parity: **14 public routes matched**.
- Output sizes: CSS **63.41 kB / 11.40 kB gzip**; JS **595.96 kB / 173.06 kB gzip**. The existing Vite chunk-size warning remains.

### Static output

- Every public route document has exactly one `<h1>`, a title, a description, a self-referential canonical, `index, follow`, and parseable JSON-LD.
- `404.html` has one `<h1>`, `noindex, follow`, no canonical, and valid JSON-LD.
- `google2e0ee218d053ef6b.html` is a Google verification asset, not a route. It correctly has no SEO head and is excluded from route checks.
- No stale typography utilities (`text-[…]`, `text-xs` … `text-4xl`) remain in JSX.

### Route audit (CDP, preview build)

At 390 and 1440 for all 14 public routes, plus 768 for Home, Projects, Contact, Avalokan, SMS, and This:

- Every scanned route: one `h1`, canonical present, no horizontal overflow, **zero console errors**.
- All nine case studies: one `h1`, canonical present, no overflow.

**Known preview-only artifact:** `vite preview` applies an SPA fallback, so `/definitely-missing` receives `index.html` and React logs minified error #418. A production-style server that mirrors `vercel.json` returns HTTP **404** with the prerendered `404.html` body, one `h1`, `noindex, follow`, and no canonical.

### CSP and production-style hosting

`dist/` was served with the exact `vercel.json` CSP header and route map:

| Check | Result |
| --- | --- |
| CSP header present | Pass |
| CSP violations / console errors | None on Home, About, Contact, Avalokan |
| JSON-LD blocks after load | 3 / 3 / 3 / 5, intact |
| Missing route | HTTP 404 + `404.html` |
| Canonicals on all tested public routes | Self-referential |
| Assets served | Pass |

The only logged error on the missing route was the expected 404 resource response.

### Interaction checks

| Check | Result |
| --- | --- |
| Mobile menu open / `aria-expanded` / Escape close | Pass |
| Theme switch forest → terracotta → forest | Pass |
| Theme persistence across reload (`sp-accent-seed`) | Pass |
| Lightbox dialog / `aria-modal` / labelled heading | Pass |
| Lightbox initial focus on close button | Pass |
| Lightbox Tab containment | Pass |
| Lightbox Escape close | Pass |
| Lightbox focus restore to trigger | Pass |
| Body scroll lock and restore | Pass |

---

## 7. Limitations and deferred work

1. **No live Vercel deployment test.** Headers, CSP, redirects, rewrites, and 404 behaviour were verified with a local server that mirrors `vercel.json`. A deploy preview should still confirm them at the edge.
2. **`vite preview` is not production-accurate for 404s.** Its SPA fallback serves the home document for unknown paths. This is why the missing-route check above uses a production-style server.
3. **Bundle size is unchanged in practice.** The single JS chunk remains ~596 kB raw / ~173 kB gzip and still triggers Vite's warning. Route-level `lazy()`/`Suspense` is Phase 3 performance work.
4. **Keyboard tests are synthetic.** CDP `Input.dispatchKeyEvent` delivered Escape and Tab to the page, but this is not an OS-level keyboard walkthrough or a screen-reader session.
5. **Accessibility coverage is automated plus manual DOM checks.** axe-core is strong but does not replace a manual screen-reader and keyboard pass, especially for the tabs and gallery.
6. **Responsive checks are emulated.** 390/768/1024/1280/1440 were real CSS widths via device-metrics override, but no physical phone or tablet was used.
7. **Visual review is screenshot-based.** Full-page captures are downscaled and can duplicate or omit sticky elements in CDP compositing; local slices were used for inspection.
8. **`lastmod` is editorial.** The route manifest records content-change dates rather than deploy dates. Future content edits need to update the relevant entry.
9. **Fonts are still remote.** The CSP allows Google Fonts; no self-hosting or font-subset work was done in this phase.
10. **Unused assets remain.** TheMovie's removed captures are still on disk under `src/assets/TheMovie/` but are not imported or shipped.

---

## 8. Recommendations for Phase 3

1. **Home and About IA** — the audit's remaining P2 content work. Phase 2 deliberately left their narrative structure intact; changing it now would mix architecture with copy decisions.
2. **Projects page arbitration** — decide the reading order and featured set against the route manifest, then align Home's spotlight with it. Avoid maintaining two different "featured" definitions.
3. **Route-level code splitting** — `lazy()` each page, keep the prerenderer in sync, and confirm that canonicals/JSON-LD still render during prerender.
4. **Motion review** — audit the `framer-motion` surface for duplicate entry animations, ensure `useReducedMotion` is applied consistently, and consider removing motion from above-the-fold copy.
5. **Image delivery** — add `srcset`/`sizes` for screenshots and posters, confirm aspect ratios, and replace remaining large PNG captures with appropriately sized WebP/AVIF.
6. **Automated quality gates** — run axe (or Lighthouse CI) in the build pipeline, add a link checker, and keep the existing hosting parity check.
7. **Deploy-preview verification** — confirm 404 status, CSP, canonical tags, sitemap, and redirects on the live Vercel preview.
8. **Content debt** — update the route `lastmod` dates alongside Phase 3 copy changes, and delete the unused TheMovie assets once their replacement captures are settled.
9. **Case-study quality bar** — if more standardisation is wanted, standardise section *order* only after each project's narrative has been reviewed. Do not backfill shared copy or metrics.

---

## 9. Review gate

Phase 2 is implemented and verified. Phase 3 has not been started.

Two follow-up fixes are present in the working tree after `d292565`:

- `src/Components/Header.jsx` — tablet navigation breakpoint from `md` to `lg`.
- `src/Components/Hero.jsx` — restore standard container padding.

They are small, independently reviewable, and should be committed with this report once approved.
