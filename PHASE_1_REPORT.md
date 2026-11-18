# Phase 1 — Trust & Identity Foundation

**Status:** Complete, awaiting review. Phase 2 has not been started.

- **Branch:** `feature/phase-1-trust-identity`
- **Base:** `main` at `b6f091c`
- **Date:** 18 November 2026
- **Scope:** P0 trust and identity work only. No visual redesign, no new routes, no project-content rewrite beyond correcting unsupported claims.

## 1. What changed

### Identity and metadata

- Added `src/content/site.js` as the single source for the name, role, specialty, tagline, location, contact email, social links, `knowsAbout`, and the site-wide `Person` / `WebSite` schema builders.
- Updated `src/Components/seoHead.js` to import from that source and emit `Person` + `WebSite` JSON-LD on **every** route, including during prerender and client-side navigation.
- Removed the duplicate static `Person` / `WebSite` blocks from `index.html`; the route SEO block remains the fallback that the prerenderer replaces.
- Unified the role across Header, Footer, Hero, Home, About, Contact, Projects, the README, and `public/llms.txt`:
  - **Product-Minded Systems & Application Engineer**
  - Specialty: **Native Android — Kotlin, Jetpack Compose**
  - Tagline: **I build applications end to end: product brief → data model → interface → release.**
- Rewrote `public/llms.txt` for the current positioning and verified project facts.
- Updated the README identity, positioning note, Routes table, and the stale reference to `components/seoHead.js`.

### CSP and the pre-paint theme script

- Removed the inline executable theme script from `index.html`.
- Added `public/theme-init.js`, a same-origin external script that applies the stored accent seed before first paint.
- The existing CSP (`script-src 'self'`) now permits it. No CSP relaxation was required.
- Inline JSON-LD remains inline, but it is non-executable (`application/ld+json`) and is not blocked by `script-src`.

### 404 handling

- Kept `dist/404.html` in the build output and did **not** add a catch-all rewrite.
- Vercel's documented behavior is to serve a build-output `404.html` automatically when a request matches no static file, with a real 404 status. A catch-all rewrite would return HTTP 200 and would be worse for crawlers.
- The local production-style server returned `404` for `/does-not-exist`, and all 14 public routes returned `200`.

### Hero media

- Removed autoplay from `src/Components/Hero.jsx`.
- The device frame renders the poster and a labelled play button. The `<video>` element is not mounted, and the MP4 is not requested, until the visitor activates playback.
- Removed the `Link` wrapper around the interactive device frame so the play button is not nested inside a link.
- The video still has `autoPlay` **after** the explicit click, which is the intended behavior.

### Shared lightbox and case-study structure

- Added `src/Components/Lightbox.jsx`: portal dialog with `role="dialog"`, `aria-modal`, a labelled heading, Escape-to-close, focus trap, focus restore, backdrop close, and body scroll lock.
- Migrated all five image viewers (Avalokan, BlogVsn, SMS, Tasks, TheMovie) to the shared component.
- Made every remaining lightbox trigger keyboard-operable:
  - BlogVsn, SMS, and Tasks screenshot cards changed from clickable `<div>`s to `<button type="button">`.
  - SMS, Tasks, and TheMovie hero screenshots are now wrapped in real buttons.
- Added `src/Components/CaseStudyHeader.jsx` for the in-flow case-study title, eyebrow, summary, status badge, and actions.
- Removed the duplicate project bar above the page shell on Avalokan, BlogVsn, SMS, Tasks, and TheMovie.
- Fixed the inverted heading hierarchy on SMS, BMSK, BlogVsn, Tasks, TheMovie, JuiceTracker, Kathmandu, and This.
- Converted This's hero heading to the page `h1` and added the missing eyebrow.
- Converted Privacy's page-introduction `<header>` to a non-landmark `<div>`, leaving the site Header as the only banner landmark.

### Case-study claims

- **Avalokan:** changed "100% offline-first reads" to "Offline-first / Reads after first sync". Hilt, Room, Firebase, and the v1.0.0 APK remain because they were verified.
- **BlogVsn:** React 18 → React 19; replaced "zero-knowledge", "Protected Routes", "Real-time", "Edge-cached", and "serverless email" wording with verified descriptions of Google sign-in, the Blogger API, the static Vercel build, and EmailJS.
- **Tasks:** v1.1.0 → v2.1.0; "Hilt / AppContainer" → manual `AppContainer` DI; min SDK 26; target/compile SDK 37; AGP 9.4.0; removed Hilt from the stack list. Corrected API 37's platform label from Android 15 to Android 17.
- **BMSK:** "real-time transaction processing" → "immediate transaction processing".
- **Tasks:** "real-time stats" → "live stats" (local state, not a network stream).
- **TheMovie:** removed the four stale captures, the placeholder "Favorites" capture, and the visitor-facing TODO block. Only the verified Poster and Movie Details screenshots remain. Corrected the API 37 / Android version label.
- The unused stale image files still exist under `src/assets/TheMovie/`, but they are no longer imported and are not shipped in `dist/`. They can be deleted when replacement captures exist.

## 2. Files changed

**New**

- `src/content/site.js`
- `src/Components/Lightbox.jsx`
- `src/Components/CaseStudyHeader.jsx`
- `public/theme-init.js`
- `PHASE_1_REPORT.md`

**Updated**

- `index.html`
- `README.md`
- `public/llms.txt`
- `src/Components/seoHead.js`
- `src/Components/Header.jsx`
- `src/Components/Footer.jsx`
- `src/Components/Hero.jsx`
- `src/Components/Avalokan.jsx`
- `src/Components/BlogVsn.jsx`
- `src/Components/Tasks.jsx`
- `src/Components/TheMovie.jsx`
- `src/Components/SMS.jsx`
- `src/Components/BMSK.jsx`
- `src/Components/JuiceTracker.jsx`
- `src/Components/Kathmandu.jsx`
- `src/Components/This.jsx`
- `src/Pages/Home.jsx`
- `src/Pages/About.jsx`
- `src/Pages/Contact.jsx`
- `src/Pages/Projects.jsx`
- `src/Pages/Privacy.jsx`

`PORTFOLIO_REDESIGN_AUDIT.md` was already untracked on `main` before this branch and was not modified.

## 3. Claims verified or removed

Verification was performed against the public repositories and release assets on 18 November 2026.

| Claim | Result | Action |
| --- | --- | --- |
| Tasks latest release is v2.1.0 | Verified: `releases/latest` resolves to `v2.1.0` | Kept and updated the copy |
| Tasks `releases/latest/download/Tasks.apk` | Verified: HTTP 200, ~9.95 MB | Kept the release CTA |
| Tasks min SDK 26, target SDK 37 | Verified in `app/build.gradle.kts` | Kept |
| Tasks uses manual `AppContainer`, not Hilt | Verified in source and Gradle files | Removed Hilt references |
| Tasks AGP 9.4.0, Kotlin 2.2.10 | Verified in `gradle/libs.versions.toml` | Kept |
| Avalokan v1.0.0 APK | Verified: HTTP 200, 20,883,094 bytes | Kept the download CTA and "20 MB" label |
| Avalokan min SDK 24, target SDK 37 | Verified in `app/build.gradle.kts` | Kept "Android 7.0+" (API 24) |
| Avalokan uses Hilt and Room | Verified | Kept |
| "100% offline-first reads" | Overclaim: a cold install cannot read offline | Qualified as reads after first sync |
| TheMovie min SDK 24, target SDK 37 | Verified in `app/build.gradle.kts` | Kept |
| TheMovie "API 37 (Android 15)" | Incorrect mapping; API 37 is Android 17 | Corrected |
| BlogVsn React 18 | Incorrect; `package.json` has React 19.1.1 | Corrected to React 19 |
| BlogVsn Google sign-in, Blogger API, EmailJS | Verified in `package.json` and source | Kept with precise wording |
| BlogVsn "zero-knowledge", "Protected Routes", "Real-time", "Edge-cached" | Unsupported by the implementation | Removed or replaced |
| BMSK "real-time transaction processing" | Puffery for a synchronous console simulation | Changed to "immediate" |
| Tasks "real-time profile stats" | Local computed state, not a live feed | Changed to "live stats" |
| External project, live-demo, blog, and social URLs | Reached successfully, except bot-blocked HEAD responses from LinkedIn (405) and Medium (403) | Kept |

The interactive Media/streaming claims and the project roadmaps were not invented or upgraded; planned work remains labelled as planned.

## 4. Verification results

### Lint and build

- `npm run lint` — **passes**.
- `npm run build` — **passes**.
- Prerender emitted **15 documents**: 14 public routes + `404.html`.
- `dist/sitemap.xml` contains **14 URLs**, excluding `/404`.
- The only build warning is Vite's existing large-chunk warning: `index-*.js` is **623.30 kB raw / 172.89 kB gzip**. Route-level code splitting remains P1 work.

### Routes, canonicals, and metadata

- All 14 public routes plus `/404` were generated.
- Each route has a self-referential canonical except `/404`, which correctly omits the canonical and sets `noindex, follow`.
- All routes have a title, description, Open Graph tags, Twitter tags, `Person`, and `WebSite` schema.
- No stale strings (`STALE`, `Placeholder`, `TODO`, `Android App Developer`, `Emerging Android`, `zero-knowledge`, `Protected Routes`, `Edge-cached`, `v1.1.0`, `Hilt / AppContainer`, `100% offline`) were found in the prerendered page text.

### Headers and headings

| Document | Site headers | `h1` |
| --- | --- | --- |
| All 14 public routes | 1 | 1 |
| `404.html` | 0 | 1 |

- `/404` is intentionally a standalone error screen with no site Header; it still provides "Back to Home" and "View Projects" links. This is the only page without a site header.
- No case study has a second project bar or a second header landmark.

### CSP in the browser

Verified against `dist/` served with the exact `vercel.json` CSP header:

- The document response includes `Content-Security-Policy: default-src 'self'; script-src 'self'; ...`.
- No CSP violations or console warnings on the homepage or a case-study route.
- `/theme-init.js` loads and executes. With `sp-accent-seed=terracotta` in `localStorage`, `data-seed="terracotta"` was present after reload.
- The only inline scripts in the document are `application/ld+json` blocks, which are not executable.

### Hero media transfer

- On a fresh homepage load: `0` `<video>` elements and `0` MP4 requests.
- After activating the play button: one `/media/avalokan-launch.mp4` request, and the video plays.
- The video remains 7.94 MB and is downloaded only on demand. Compressing it to the audit's ~1.2 MB target is deferred.

### Lightboxes

All five shared viewers were exercised on their routes:

| Route | Dialog | Escape | Tab trap | Focus restore | Scroll lock |
| --- | --- | --- | --- | --- | --- |
| `/projects/avalokan` | Pass | Pass | Pass | Pass | Pass |
| `/projects/blogvsn` | Pass | Pass | Pass | Pass | Pass |
| `/projects/sms` | Pass | Pass | Pass | Pass | Pass |
| `/projects/todo` | Pass | Pass | Pass | Pass | Pass |
| `/projects/themovie` | Pass | Pass | Pass | Pass | Pass |

The browser automation environment would not deliver physical key presses to the page, so the key handlers were exercised by dispatching `keydown` events for Tab, Shift+Tab, and Escape. The same runs confirmed the dialog heading, `aria-modal`, close-button focus, background scroll lock, and focus restoration to the trigger. Static review confirms the listeners are registered on `document` in the capture phase.

### 404 behavior

- A production-style local server returned HTTP **404** for `/does-not-exist` and served the prerendered `404.html` body.
- `/404` itself returns 200 and is `noindex`, which is correct for an explicit preview path.
- No catch-all rewrite was added, so Vercel can apply its documented automatic `404.html` behavior without turning missing pages into 200 responses.

## 5. Remaining limitations and deferred work

1. **Bundle size:** still one JS chunk (623.30 kB raw / 172.89 kB gzip). The audit's route-level `lazy()` / `Suspense` work is not part of Phase 1.
2. **Hero video:** 7.94 MB, on demand only. No compressed replacement has been produced yet.
3. **TheMovie gallery:** only two verified screenshots remain. The four stale captures and the placeholder were removed rather than recaptured. Replacement captures need a current build.
4. **No live Vercel deployment test:** 404 behavior, headers, and redirects were tested against a local server that mirrors the `vercel.json` headers and static routing. The final production check still needs a deploy.
5. **Physical keyboard test:** the in-app browser could not inject real keystrokes while the desktop window was not input-focused. Behavior was verified with dispatched key events and code review, not an OS-level keyboard walkthrough.
6. **No automated axe/Lighthouse run:** accessibility checks were manual DOM and interaction checks.
7. **Unused assets:** the removed TheMovie screenshots remain in `src/assets/TheMovie/` but are not imported or shipped. They are safe to delete after recapture.
8. **External claims are a snapshot:** repository and release facts were verified on 18 November 2026. They can drift if the projects change.

## 6. Decisions that need approval

1. **404 strategy:** keep relying on Vercel's automatic `dist/404.html` serving rather than adding a catch-all rewrite. A rewrite would return HTTP 200 instead of a real 404. If you want an explicit rewrite, it should use Vercel `routes` with `status: 404`, not `rewrites`.
2. **TheMovie evidence:** accept a two-screenshot gallery (Poster + Movie Details) until fresh captures are available, rather than keeping stale or placeholder images.
3. **Keyboard verification:** accept dispatched key-event verification for Phase 1, with a manual keyboard walkthrough after the next production deploy.
4. **Hero video:** keep the current 7.94 MB on-demand video for now, or prioritise a compressed replacement before launch.
5. **Code splitting:** defer the single-chunk bundle to the Phase 2/performance work rather than mixing it into the trust phase.

## 7. Review gate

Phase 1 is approved and committed on this branch. The pre-existing audit document is committed separately from the Phase 1 implementation. No Phase 2 work is included in this commit.
