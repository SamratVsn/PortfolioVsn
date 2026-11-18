# Portfolio Redesign — Phase 0 Audit

**Site:** https://www.samratparajuli0.com.np/
**Repository:** `devPortfoli0` (React 19 + Vite 7 + Tailwind CSS 4)
**Audit date:** 2026-11-18
**Audit type:** Read-only. No application source file was modified. The only file created is this document.
**Current commit under audit:** `b6f091c "Done"` (working tree clean)

---

## 0. How to read this document

Every finding is tagged **P0 / P1 / P2**:

| Tag | Meaning |
| --- | --- |
| **P0** | Incorrect, misleading, broken, or accessibility-blocking. Fix before or during the redesign — not after. |
| **P1** | Structural work the redesign depends on (IA, shared templates, code splitting, design system). |
| **P2** | Polish, optimisation, and nice-to-haves that can ship incrementally. |

Claims are separated into **Verified** (evidence exists in the repo or a public artefact), **Unverified** (plausible but I could not confirm from source), and **Planned** (currently presented as future work). No feature, metric, or accomplishment has been added on the site's behalf anywhere in this document.

Line references are to the audited commit and may drift by a few lines after edits.

---

## 1. Executive summary

### Verdict

The site is **well-built and unusually rigorous for a personal portfolio**: real prerendered HTML for all 14 routes, per-route canonicals, complete OG/Twitter metadata, per-page JSON-LD, a sitemap generated from a single route manifest, a hardened `vercel.json` (CSP, immutable asset caching, apex→www, `.html`→clean-URL redirects), a skip link, a global `:focus-visible` ring, and a genuine `prefers-reduced-motion` strategy.

The problem is **not engineering quality**. It is that the site describes a *narrower and more junior* person than the work demonstrates, and it does so in nine different places with nine slightly different strings.

> The site currently says **"Android Developer"** / **"Android App Developer"** / **"Emerging Android app developer"**.
> The work shows **product framing → data architecture → backend integration → shipped release**.

### The five things that matter most

1. **Identity drift is systemic (P0).** Seven distinct role strings live in eight files, plus `llms.txt` and `README.md`. There is no single source of truth. A redesign that changes copy in one place will leave the other six contradicting it — and `llms.txt` is explicitly fed to AI crawlers.
2. **The hero downloads a 7.76 MB autoplaying video (P0).** `public/media/avalokan-launch.mp4` is `autoPlay` above the fold on the homepage, with `preload="metadata"`. It is the single largest transfer on the site.
3. **No route-level code splitting (P1).** One JS chunk: **625.5 kB raw / 171.75 kB gzip**, containing all 9 case studies. Vite itself warns about it. Zero `lazy()` / `Suspense` in the codebase.
4. **The case studies contradict each other in structure and quality (P0/P1).** Avalokan is a real, release-backed case study with architecture layers and a proper dialog lightbox. The Movie App ships **placeholder and "STALE" screenshots to production**, and four of five lightboxes have no dialog semantics, no Escape, and no focus trap.
5. **The design system exists but is not enforced (P1).** Colour tokens are excellent and re-themeable. But there are **23 distinct arbitrary font sizes across 149 uses**, the container width ladder is copy-pasted **26 times**, and the eyebrow pattern is hand-rebuilt in **10 files**.

### What I recommend

A **phased redesign on the existing stack** — not a rewrite and not a framework migration. Section 13 has the task list; Section 16 has the recommendation and the approval request.

---

## 2. Scope and method

### What was inspected

| Area | Files |
| --- | --- |
| Build / routing | `package.json`, `vite.config.js`, `src/App.jsx`, `src/main.jsx`, `src/Pages/Projects.jsx`, `scripts/routes.mjs`, `scripts/prerender.mjs`, `scripts/prerender-entry.jsx`, `vercel.json` |
| Layout | `src/Components/PageLayout.jsx`, `Header.jsx`, `Footer.jsx`, `PageTransition.jsx`, `PageTransitionConstants.jsx`, `TransitionProvider.jsx`, `TransitionContext.jsx`, `useTransitionContext.jsx`, `ScrollToTop.jsx`, `BackgroundFX.jsx` |
| Design primitives | `src/index.css`, `PageHeader.jsx`, `SectionHeading.jsx`, `CategoryFilter.jsx`, `theme.js`, `ThemeSwitcher.jsx` |
| Pages | `Home.jsx`, `About.jsx`, `Contact.jsx`, `Projects.jsx`, `Privacy.jsx`, `NotFound.jsx` |
| Case studies | `Avalokan.jsx` (944 lines), `Tasks.jsx`, `TheMovie.jsx`, `BlogVsn.jsx`, `JuiceTracker.jsx`, `Kathmandu.jsx`, `SMS.jsx`, `BMSK.jsx`, `This.jsx` |
| Data | `src/data/projects.js` |
| SEO | `SEO.jsx`, `seoHead.js`, `index.html`, `public/robots.txt`, `public/llms.txt`, `dist/sitemap.xml` |
| Performance | Production build output, `dist/` asset inventory, `public/media/` |

### Verification performed

- `npm run build` — **passes**. 15 documents prerendered (14 routes + 404). Build time 18.96 s.
- Asset sizes measured from `dist/` after build.
- Contrast ratios computed from the token values in `src/index.css` (WCAG 2.1 relative-luminance formula).
- Image/lazy-loading/heading/lightbox counts measured with static analysis over `src/**/*.jsx`.

### What could **not** be verified

- **Actual Core Web Vitals / Lighthouse on production.** PSI returned 429 (no API key) and the local headless browser became unavailable mid-audit. All performance statements below are derived from **measured bundle/asset sizes and code paths**, not from field data. Treat them as "structural risk", not "measured failure".
- **External links.** `releases/latest/download/Tasks.apk`, the BlogVsn Vercel deployment, and the GitHub repos were not fetched. Items that depend on them are marked **Unverified** rather than broken.
- **Third-party repos** (Avalokan, TheMovie, Tasks, BlogVsn). Claims about those codebases are taken from how this site describes them.

---

## 3. Current architecture

### 3.1 Stack

```
React 19.1.1  ·  React Router DOM 7.8.2  ·  Vite 7.2.2  ·  Tailwind CSS 4.1.13 (@tailwindcss/vite)
framer-motion 12.23.12  ·  lucide-react 0.542  ·  react-icons 5.5  ·  @emailjs/browser 4.4.1
Hosting: Vercel (static, custom headers + redirects + rewrites)
```

Nine runtime dependencies. No state library, no data-fetching library, no UI kit, no analytics. That restraint is a genuine strength and should survive the redesign.

**Recommendation: keep this stack.** Nothing in this audit justifies a framework migration. The prerender + client-hydration model is unusual and hard to reproduce; replacing it would forfeit the site's biggest SEO asset.

### 3.2 Build and prerender pipeline

```
vite build
  → dist/index.html + dist/assets/*            (single JS chunk, single CSS file)
  → scripts/prerender.mjs
       spawns a Vite dev server in middlewareMode
       ssrLoadModule("/scripts/prerender-entry.jsx")
       renders <StaticRouter> per route from scripts/routes.mjs
       splices <head> tags from seoHead.js and the React tree from #root
       rewrites /src/assets/… → hashed files via .vite/manifest.json
       writes dist/<route>.html + dist/sitemap.xml
```

**This is the best part of the codebase.** `seoHead.js` is a single builder used by three consumers — the prerenderer, the client-side head updater, and the static fallback in `index.html`. The comment explaining *why* `react-helmet-async` was removed (double-rendered tags under React 19) is exactly the kind of institutional knowledge a rewrite would lose.

`vite.config.js` also sets `assetsInlineLimit: 0` with a correct explanation: inlined data-URIs have no manifest entry and would leave broken `/src/assets/…` URLs in the prerendered HTML. That is a subtle bug already solved.

### 3.3 Routing

`src/App.jsx` (22 lines) declares five top-level routes; `src/Pages/Projects.jsx` declares the nine nested case-study routes.

```
/                     Home
/about                About
/contact              Contact
/projects             Projects index        ┐
  /projects/avalokan                        │
  /projects/todo                            │
  /projects/themovie                        │
  /projects/juicetracker                    │ 9 children
  /projects/kathmandu                       │
  /projects/sms                             │
  /projects/bmsk                            │
  /projects/blogvsn                         │
  /projects/this                            ┘
/privacy              Privacy
*                     NotFound
```

**P0 — the route list exists in three places that must be kept in sync manually:**

| Location | What it declares |
| --- | --- |
| `src/App.jsx` + `src/Pages/Projects.jsx` | What React Router renders |
| `scripts/routes.mjs` | What gets prerendered + sitemapped |
| `vercel.json` (`rewrites`) | What the CDN serves |

A fourth list lives in `vercel.json` (`redirects`, for `.html` → clean URL). Add a case study and forget one list, and you get a page that exists but 404s, or is indexable but not prerendered. This is the highest-value structural fix in the repo.

### 3.4 Layout composition

```
PageLayout = BackgroundFX + Header + <main id="main-content"> + PageTransition + Footer
```

Used by **Projects only** (`src/Pages/Projects.jsx:29`). Home, About, Contact, Privacy, and NotFound each re-implement the shell by hand. Concrete consequences:

- **P0: every case study renders two headers.** `PageLayout` supplies the site `Header`, then the case-study component renders its own project bar ("Android App · Download App · View Code"). Confirmed in `dist/projects/avalokan.html`: the skip link, `Primary navigation`, and `<footer>` are all present alongside the project bar.
- `Privacy.jsx` hand-copies `PageHeader`'s markup (`Privacy.jsx:150-160`) instead of using it.
- `About.jsx` imports `SectionHeading` (`About.jsx:7`) and never uses it.
- `Home.jsx` and `About.jsx` each hand-roll their own section header instead of using `SectionHeading`, which is why the eyebrow pattern has drifted.

### 3.5 Styling architecture

`src/index.css` is ~200 lines and does three things well:

1. **Runtime-themeable tokens.** Every Tailwind colour resolves through `--p-*`, so the three accent seeds (`forest`, `terracotta`, `slate`) re-theme the entire app without touching components.
2. **A remapped slate ramp.** `--color-slate-*` is overridden to a warm green-grey so legacy components written against Tailwind's slate stay on-palette. Copy-paste-free and clever.
3. **Motion utilities as CSS.** `.hero-enter` and `.hero-enter-visual` are keyframes, not JS, so above-the-fold content paints before hydration.

**What is missing is a documented scale.** There is no type scale, spacing scale, radius scale, or elevation scale in code or docs. Components fill the vacuum with arbitrary values:

| Metric | Count |
| --- | --- |
| Arbitrary font-size utilities (`text-[11px]`, `text-[13.5px]`, …) | **149 uses / 23 distinct sizes** |
| Largest cluster | `11px` ×41, `13px` ×26, `10px` ×21 |
| Smallest | `9px` ×4, `9.5px` ×2 |
| Copy-pasted container ladder (`max-w-6xl … min-[1920px]:max-w-[100rem]`) | **26 verbatim copies** |
| Hand-rebuilt eyebrow (dot + rule + mono caps) | **10 files** |

### 3.6 Data and content model

`src/data/projects.js` is the only structured content source: 9 projects, each with `id`, `category`, `featured`, `title`, `problem`, `solution`, `learning`, `tags`, `github`/`live`/`download`, `path`, plus a `screenshots` map keyed by **route path**.

That model is good for a card grid but **cannot express a case study**: no role, timeline, constraints, trade-offs, architecture, decisions, or per-screen metadata. So each case-study component hardcodes its own copy — which is why the nine pages have nine different structures and nine different quality levels.

Two model defects worth noting now:

- **P2 — key mismatch.** The portfolio project has `id: "portfolio"` but `path: "/projects/this"`, and `screenshots` is keyed `"/projects/this"`. Three identifiers for one project.
- **P2 — no `status` normalisation.** `status: "Android · v1.0.0 Released"` is a display string on one project and absent on the other eight. Status cannot be filtered, sorted, or rendered as a badge without parsing prose.

### 3.7 Integrations (working — preserve)

| Integration | Where | Note |
| --- | --- | --- |
| EmailJS contact form | `Contact.jsx:9-11` | Reads `VITE_EMAILJS_SERVICE_ID/TEMPLATE_ID/PUBLIC_KEY` from `.env` (gitignored). `connect-src` in CSP allows `api.emailjs.com`. Keep as-is; do not replace with a new backend. |
| Google Fonts | `index.html:20-25` | Preconnect + stylesheet, 8 Inter weights + 3 Mono weights. |
| Accent-seed persistence | `index.html:151-159` + `theme.js` | Inline pre-paint script + `localStorage`. **See P0 CSP finding in §6.6.** |
| External blog | `Header.jsx:14`, `Footer.jsx:6` | `https://blog.samratparajuli0.com.np/`. Keep the URL. |
| APK release | `Hero.jsx:13-14`, `Avalokan.jsx:38` | `…/releases/download/v1.0.0/avalokan1.0.0.apk`. **Verified** to exist (release v1.0.0, 2026-10-27). |

### 3.8 Quality-gate risk

- **P2 — no test runner and no CI.** `npm run lint` and `npm run build` are the only gates. There is no automated check that the prerender actually emitted 15 documents, that canonicals are unique, or that links resolve. (`package-lock.json` is present, so dependency versions are pinned — good.)

### 3.9 Dead abstractions (safe to remove, P2)

| Item | Evidence | Status |
| --- | --- | --- |
| `TransitionProvider` / `TransitionContext` / `useTransitionContext` | `App.jsx:2` wraps the tree; **nothing consumes the context**. A `Map` of element refs is created and never read. | Dead |
| `SHARED_ELEMENTS` in `PageTransitionConstants.jsx` | Imported by `PageTransition.jsx:6`, never used. | Dead |
| `layoutId="project-image-…"` on 9 `motion.img` | Depends on the shared-element system above, which is not wired. | Inert |
| `PageTransition` exit animation | `AnimatePresence mode="wait"` with `exit={reduceMotion ? "enter" : "exit"}` — the reduced-motion branch plays the *enter* variant on exit. | Likely bug |
| `SectionHeading` import in `About.jsx` | Imported line 7, zero usages. | Dead import |

`npm run lint` currently passes, so these are not flagged. The reason is in `eslint.config.js`:

```js
'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }]
```

Every PascalCase identifier is exempt — which is *every component and every icon import*. That pattern was almost certainly added to stop false positives on JSX component usage, but it also disables unused-import detection for the exact category that accumulates dead code here.

---

## 4. Design audit

### 4.1 What the current design *is*

An editorial, dark, Nepal-referencing system: warm off-white paper (`#f5f3ed`), deep forest canvas (`#0e1311`), sand and terracotta accents, mono micro-labels with wide tracking, hairline borders, and a single restrained hero illustration (Himalayan ridges + Kathmandu roofline, drawn as flat SVG silhouettes).

**This identity is distinctive and should be preserved.** It does not look like a template. Most portfolios in this market are either purple-gradient SaaS clones or unstyled GitHub READMEs; this one has a point of view.

### 4.2 Tokens (as built)

```
Surfaces   canvas #0e1311 · surface #151c19 · elevated #1a2320
Text       paper #f5f3ed · ink #0b120e · sand #e8d7b7 · terra #c86f4a
Accents    forest #6b8f7a · terracotta #c86f4a · slate #7e929c   (+ hover/soft/muted/border per seed)
Borders    rgba(232,215,183, 0.10 / 0.06 / 0.18)
Type       Inter (300–800) · JetBrains Mono (400–600)
Motion     page 0.35s · hero 0.6s · reveals 0.4–0.45s · all collapsed under reduced-motion
```

### 4.3 Typography — the main design weakness

The scale is not a scale; it is a cluster.

| Role | Current size | Problem |
| --- | --- | --- |
| Case-study `h1` | `text-2xl` = **24px** | Smaller than the sections beneath it |
| Case-study section `h2` | `text-3xl` = **30px** | **Visual hierarchy is inverted** |
| Page `h1` (PageHeader) | 33.6px → 48px | Fine |
| Body | 14–15px | Fine on desktop, tight on mobile |
| Micro-labels | 9–11px | 70 uses ≤ 11px |

Two things follow:

1. **P0 — inverted hierarchy on 9 of 14 pages.** `h1` at 24px above `h2` at 30px reads as a section title over page titles. It also flattens the entry point for anyone skimming — the exact behaviour of the target audience.
2. **P1 — the scale bottoms out at 9px.** With `0.14em–0.22em` tracking, uppercase, at `text-slate-400`, these labels are hard work on a laptop and worse on a phone. For recruiters skimming under time pressure, small-caps mono labels should be a *flourish*, not the primary carry of section structure.

**Recommendation:** define a 9-step scale and delete the arbitrary values:

```
display   clamp(2.5rem, 5vw, 3.85rem)   56–62 / 1.02 / -0.035em
h1        clamp(2rem, 3.4vw, 3rem)      48       / 1.08 / -0.03em
h2        clamp(1.5rem, 2.2vw, 2rem)    32       / 1.15 / -0.025em
h3        1.25rem                       20       / 1.3  / -0.02em
h4        1.0625rem                     17       / 1.4
body-lg   1.0625rem                     17       / 1.7
body      0.9375rem                     15       / 1.75
small     0.8125rem                     13       / 1.6
label     0.6875rem (min 11px)          11       / uppercase / 0.14em
```

### 4.4 Layout and spacing

- Container: 6xl (72rem) → 7xl (80rem) → 90rem → 100rem at 1920px. Sensible, but duplicated 26×.
- Section rhythm: `py-20 sm:py-24` on Home/About, `py-14`/`py-16` on case studies, `py-12` in the footer. Three different rhythms for the same job.
- Grid: `lg:grid-cols-3` with a `col-span-2` main column on every case study; `lg:grid-cols-12` (7/5 split) on About. No shared layout primitive.

**Recommendation:** `Container` (`prose | default | wide | full`) and `Section` (`tight | default | loose`) components. This alone removes ~30 duplicated class strings and makes the rhythm tunable in one place.

### 4.5 Motion

- `framer-motion` is imported in **17 files**. Most usages are `opacity 0 → 1, y 16 → 0` on scroll — which CSS already does correctly in `.hero-enter`.
- Reduced motion is handled three different ways: `useReducedMotion()` (Home, Hero, PageTransition, Testimonials), a global CSS override (`index.css:143-150`), and not at all (several case-study reveals).
- `PageTransition`'s `exit` branch is inverted (see §3.9).

**Recommendation:** keep framer for *state* transitions (mobile menu, lightbox, tab switch, page transition). Move scroll reveals to a single CSS utility + `IntersectionObserver` hook, or keep framer but standardise on one variant module. A ~60 kB gzip dependency earning its keep on fades is not a good trade.

### 4.6 Page-by-page consistency

| Page | Section header | Container | Page intro | Verdict |
| --- | --- | --- | --- | --- |
| Home | `SectionHeading` ×4 + hand-rolled CTA `h2` | 6xl ladder | Hero (bespoke) | Reference implementation |
| Projects | `PageHeader` + `SectionHeading` ×2 | 6xl ladder | `PageHeader` | Good, but `h-3` cards only |
| Case studies | Hand-rolled `<p>` eyebrow + `<h1 class="text-2xl">` | 6xl ladder + own top bar | Own bar | **Inconsistent — 9 variants** |
| About | Hand-rolled numbered eyebrow (`01 / About`) | 6xl, 12-col | Own hero | Good, but not reused |
| Contact | No `h2` at all | `max-w-5xl` | Own `h1` | **Only page with no section headings** |
| Privacy | Hand-copied `PageHeader` | `max-w-3xl` | `PageHeader` clone | Duplication |
| NotFound | Bespoke | `max-w-md` | Bespoke | Fine |

### 4.7 What to preserve / redesign / remove

**Preserve**

- The palette, the three accent seeds, the sand/terra warmth, the flat-SVG Himalayan backdrop.
- Mono micro-labels *as accents*, not as structure.
- The hero composition (portrait + Pixel device + Avalokan media) — it is the strongest single element on the site.
- Hairline borders and the near-flat surface treatment (no glassmorphism, no glow spam).
- The restrained motion language.

**Redesign**

- The type scale (documented, enforced, 11px floor).
- The case-study template (one shared shell, one header, one heading scale).
- The Projects index (three honest tiers instead of featured/others).
- About (role, bio, focus → product/systems narrative).
- All role and SEO strings (§5.2).
- Contact (add section structure and a role-fit statement).

**Remove**

- `TransitionProvider` / `TransitionContext` / `useTransitionContext` / `SHARED_ELEMENTS` / inert `layoutId`s.
- The second header on case studies.
- STALE and PLACEHOLDER screenshots from production.
- The duplicated container ladder and eyebrow markup (replace with components).
- Inline `style={{ willChange: "transform" }}` on images (applied unconditionally, forces a compositor layer on every image).

---

## 5. Content audit

### 5.1 The positioning gap

Target identity: **Product-Minded Systems & Application Engineer** — can take a product brief through data architecture, backend integration, and shipped interface; Android/Kotlin/Compose is the deepest specialisation, not the boundary.

| Dimension | What the site says now | What the work shows | Gap |
| --- | --- | --- | --- |
| Role | "Android Developer", "Android App Developer", "Emerging Android app developer" | A shipped release with cloud sync + offline cache; a REST client; a CMS-backed web app | Role is a *job title*, not a *capability* |
| Product thinking | Absent outside Avalokan's "problem" line | Every project card has `problem → solution → learning` | The structure exists; it is never surfaced as a capability |
| Systems | "offline-first architecture" (a phrase, unexplained) | Repository merge of Firestore snapshots + Room cache; Hilt graph; DataStore prefs; Retrofit + serialization | **The most valuable evidence is one sentence long** |
| Scope | Implied learning projects | 9 projects across Android, web, and C | Under-claimed |
| Seniority signal | "Emerging", "built while learning and experimenting", "open to Android roles" | v1.0.0 release, APK distribution, real testimonials from a PM and two engineers | **Actively undercutting** |

The single sentence that most damages the new positioning is on the Projects page:

> *"Android, web, and C projects by Samrat Parajuli — built while learning and experimenting with Kotlin, Jetpack Compose, React, and C."*
> — `src/Pages/Projects.jsx:23` and `:33`, and duplicated in the `CollectionPage` schema

"Built while learning and experimenting" is honest, but it frames nine projects as coursework. One of them is a released app with a versioned APK. The honest framing is tiering, not diminishment — which the page already does well in its section subtitles ("kept here honestly, not presented as shipped products", `projectGrid.jsx:308`).

### 5.2 Identity strings (P0 — must be unified)

| File:line | Current string |
| --- | --- |
| `src/Components/Header.jsx:66` | `Android Developer` |
| `src/Components/Footer.jsx:50` | `Android developer in Kathmandu, Nepal. Building Kotlin and …` |
| `src/Components/Hero.jsx:311` | `Android developer crafting Kotlin, Jetpack Compose, and Material 3 applications…` |
| `src/Components/Hero.jsx:390` | alt: `Portrait of Samrat Parajuli, Android developer` |
| `src/Components/seoHead.js:12` | `Samrat Parajuli (SamratVsn) \| Android App Developer` |
| `src/Components/seoHead.js:14` | description: `…an Android developer in Kathmandu, Nepal…` |
| `src/Components/seoHead.js:18` | imageAlt: `…— Android App Developer` |
| `index.html:52` | Person `jobTitle`: `Android App Developer` |
| `index.html:49` | Person `description`: `Android developer from Kathmandu…` |
| `index.html:95,107,130` | OG/Twitter titles: `… \| Android App Developer` |
| `index.html:123,144` | OG/Twitter image alt: `…— Android App Developer` |
| `src/Pages/About.jsx:185-195` | title + description + schema `name`: `Android Developer in Nepal` |
| `src/Pages/About.jsx:259` | visible role: `Android Developer` |
| `src/Pages/About.jsx:263` | `I'm an Android developer building native applications…` |
| `src/Pages/About.jsx:227` | alt: `Samrat Parajuli, Android developer` |
| `src/Pages/Contact.jsx:73-83` | title + schema: `Contact Samrat Parajuli \| Android Developer` |
| `src/Pages/Home.jsx:191` | `ProfilePage.name`: `… \| Android App Developer` |
| `src/Pages/Projects.jsx:23,33` | `…built while learning and experimenting…` |
| `public/llms.txt` | `Emerging Android app developer`; `Role: Android Developer`; `Focus: Native Android app development…` |
| `README.md` | (not inspected in detail, but it is served publicly on GitHub) |

**P0 fix:** create `src/content/site.js` exporting `SITE`, `IDENTITY`, `ROLE`, `TAGLINE`, `DESCRIPTION`, `SOCIAL` and have `seoHead.js`, `index.html`'s static block, Header, Footer, About, Contact, Home schema, `llms.txt`, and `README.md` all derive from it. `index.html` cannot import JS, so the static block must be generated (or clearly marked as a fallback that the prerenderer always overwrites — which is already `ROUTE_SEO_START/END` behaviour, but the *Person* schema at line 42 is **not** inside that block).

**Suggested canonical strings** (to be approved before writing):

```
Name        Samrat Parajuli (SamratVsn)
Role        Product-Minded Systems & Application Engineer
Specialty   Native Android — Kotlin, Jetpack Compose
Tagline     I build applications end to end: product brief → data model → interface → release.
Meta title  Samrat Parajuli (SamratVsn) — Product-Minded Systems & Application Engineer
```

### 5.3 Per-project audit

#### Avalokan — strongest asset, weakest explanation of *why*

**Verified:** Kotlin, Jetpack Compose, Firebase (Auth/Firestore), Room, Hilt, DataStore; MVVM + Repository; offline-first merge of Firestore snapshots into a Room cache; Credential Manager + Google ID; v1.0.0 APK published 2026-10-27; 4 Firestore collections; 9 Compose screens; API 24+.

**What works:** the page has real structure — quick stats, features, architecture layers, per-layer notes, a roadmap, and a screenshot gallery. It is the only case study with dialog semantics on its lightbox.

**What is missing for the new positioning:**

- **No data model.** "4 Firestore collections" is a count. A hiring manager wants the entities and relationships (place, story, festival, event, user-save) and *why* those boundaries.
- **No merge policy.** "Repositories emit the Room cache immediately, then merge Firestore snapshots" is the best sentence on the site — but there is no explanation of conflict resolution, staleness, or what the UI shows while merging.
- **One absolute claim needs qualifying.** "100% offline-first reads" (`Avalokan.jsx:427`). On a cold install with an empty cache the app cannot serve reads offline. Change to *"offline-first reads after first sync"* or state the cold-start behaviour. This is the kind of detail an interviewer will probe, and it currently reads as an overclaim.
- **No constraints or trade-offs.** Why Firebase over a REST backend? Why Room *and* Firestore? What was cut from v1.0.0?
- **No role or timeline.** Solo? Duration? The site never says.

#### The Movie App — P0 content quality issue

**Verified structure:** Kotlin, Compose M3, Navigation, Retrofit + OkHttp, kotlinx.serialization, Coil, DataStore, Firebase Auth (email/password), TMDB API; debounced paginated search; favorites; disk + memory cache with stale fallback; API 24 / target 37.

**Blocking problem — the page ships placeholder and stale imagery to production:**

| Screenshot | Flag in source | `src/Components/TheMovie.jsx` |
| --- | --- | --- |
| Home | `stale: true` → caption *"STALE — shows the old bottom nav…"* | :56 |
| Search | `stale: true` | :57 |
| Settings | `stale: true` | :59 |
| Profile | `stale: true` | :60 |
| Favorites | `placeholder: true`, reuses the poster image | :61 |

Five of seven screenshots are explicitly labelled as outdated or fake, and those labels are rendered as visitor-facing captions. This is the most credibility-damaging thing on the site: it tells a reader the case study is unfinished. **Regenerate the screenshots or remove them.** Also remove the `TODO(TheMovie)` block at `:117-119` — useful note, wrong place.

**Content gaps:** the "Personalized Recommendations / *Because you like X*" row is claimed but not explained (what signal? local prefs or API?). No mention of error/empty/loading state design, which is the actual craft in a network-backed app.

#### Tasks — the most complete template, with two precision problems

**Verified structure:** Kotlin, Compose M3, Room, DataStore, Navigation Compose, ViewModel, Coroutines/Flow, SplashScreen API; MVVM + Repository; Pomodoro focus timer; categories; reminders; dynamic theming; profile stats; v1.1.0 badge.

**Precision issues:**

- **"Hilt / AppContainer"** (`Tasks.jsx:103`) hedges between two different DI approaches. Pick the one the app actually uses. A slash reads as uncertainty in exactly the place where a systems engineer would be precise.
- **`downloadUrl: …/releases/latest/download/Tasks.apk`** (`Tasks.jsx:142`, **Unverified**) — GitHub requires the asset filename to match exactly. If no `Tasks.apk` asset exists on the latest release, this is a 404 in the structured data *and* behind the "Download App" button. Verify before redesign; if there is no release, remove the CTA and the `downloadUrl` rather than ship a broken one.
- License listed as MIT with no link; fine, but only claim it if the repo has a `LICENSE` file.

**What works:** this is the best-sequenced case study on the site — features, layers, structure, roadmap, runtime, libraries. It is the natural template for the other eight.

#### BlogVsn — honest card, inflated case study

The `projects.js` entry is admirably modest:

> *"Connected a React website to Google's Blogger API so I can write posts in Blogger and have them appear on the site automatically."*

The case study is a different register: *"Cloud-integrated blog engine using Google OAuth 2.0, Blogger API v3, and React with edge-cached Vercel deployment."*

**Claims to verify before keeping (all Unverified):**

- **"OAuth 2.0"** — reading public Blogger content needs an API key, not OAuth. If OAuth is genuinely implemented (the screenshot caption says *"Auth Dashboard: protected route handling for authenticated users"*), keep it and explain *why* — that distinction is exactly the kind of systems judgement worth writing about. If it is an API key, calling it OAuth is an overclaim.
- **"React 18"** — plausible for a separate app, but the portfolio runs React 19; state the version once, deliberately.
- **"Edge-cached Vercel deployment"** — hosting, not engineering. Reframe as a content-delivery decision (static build + CDN) with a reason.
- **"Dynamic HTML parsing from API response"** (`BlogVsn.jsx:31`) — if Blogger HTML is injected without sanitisation, that is a real XSS surface. Mentioning sanitisation would turn a weakness into evidence of systems thinking; ignoring it invites the question.

#### Foundations tier (JuiceTracker, Kathmandu, SMS, BMSK, This)

These are correctly framed as coursework on the Projects index. Two notes:

- **JuiceTracker** has the most interesting technical hook of the five (Compose ↔ View interop, `RecyclerView` inside a Compose screen) and buries it in one sentence.
- **This** (the portfolio itself) is a legitimate case study but undersells the strongest engineering on the site — the prerender pipeline, the single-source SEO builder, the CSP, the runtime theming. Today it says *"practiced React component design, responsive layouts, and making deliberate UX choices."* That is the weakest true sentence on the site.

### 5.4 Claims ledger (implemented vs planned)

| Project | Claim | Status |
| --- | --- | --- |
| Avalokan | v1.0.0 released with APK | **Verified** (release 2026-10-27) |
| Avalokan | Offline-first Room + Firestore merge | **Verified** (site describes repository merge; repo-linked) |
| Avalokan | 4 Firestore collections / 9 Compose screens / API 24+ | **Unverified counts** — plausible, no source in this repo |
| Avalokan | "100% offline-first reads" | **Overclaim** — cold start with empty cache cannot serve reads |
| Avalokan | Firebase Analytics | Listed in the spec table; no outcome or event model described |
| The Movie App | Debounced search, favorites, Firebase auth, disk cache | **Verified** as described; screenshots **stale/placeholder** |
| The Movie App | "Personalized recommendations" | **Unverified** — no explanation of the signal |
| Tasks | v1.1.0, Pomodoro, Room, DataStore, reminders | **Verified** as described |
| Tasks | `releases/latest/download/Tasks.apk` | **Unverified** — may 404 |
| Tasks | "Hilt / AppContainer" | **Ambiguous** — pick one |
| BlogVsn | OAuth 2.0, Blogger API v3, EmailJS | **Unverified** |
| BlogVsn | "Edge-cached Vercel deployment" | Hosting fact, not an engineering claim |
| Portfolio | Prerendered routes, per-route SEO, CSP | **Verified in this repo** |
| All | Roadmaps | Correctly framed as future work — keep the `Planned` label |

**Rule for the redesign:** every number on a case study must be reproducible from the repo or the release. If it is not, remove the number or label it *estimated*.

### 5.5 What the content is missing structurally

Across all nine case studies:

- **No role, no timeline, no team size.** Even "solo, ~6 weeks, evenings" is a stronger signal than silence.
- **No trade-off section.** Systems engineers are hired for judgement, and judgement is only visible in what was rejected.
- **No failure or limitation.** Nothing on the site says what does not work yet. That is *more* credible, not less.
- **No measure of shipped-ness** beyond one version number. APK size, startup time, database size, number of screens — all measurable, none present (except Avalokan's counts).
- **No "what I'd do differently".** One paragraph per flagship project would do more for seniority than any adjective.

### 5.6 Copy-level issues

- `Android developer` / `Android Developer` / `Android App Developer` / `Emerging Android app developer` — four capitalisations and two seniority levels for one person.
- Case studies use an em dash in titles (`Tasks — Android To-Do…`) while `index.html` uses an em dash and `BlogVsn` uses one; consistent, keep it.
- `The Movie App` is titled "The Movie App" on the card, "The Movie App" in the case study, but the repo is `TheMovie` and a code comment says `TheMovieApp` 404s. One name, everywhere.
- "Let's Connect" (apostrophe escaped as `Let&apos;s`) and "Let's Connect" in the footer — fine, but the CTA label differs from "Get in touch" and "Contact". Pick one verb.
- `Writing` section on Home links to an **external** blog while the site has no `/writing` route. Fine, but the section heading implies onsite content.

---

## 6. SEO audit

### 6.1 What is genuinely strong (do not break)

- **Real prerendered HTML** for all 14 routes. Not an SPA shell. This is rarer than it should be.
- **Unique title + description + canonical per route.**
- **Complete OG/Twitter card set**, including `og:image:width/height/type/alt` and `twitter:image:alt` — and a comment explaining why dimensions must match the file (`seoHead.js:22-26`).
- **Per-page JSON-LD:** `ProfilePage` (Home), `WebPage` + `speakable` (About), `CollectionPage` (Projects), `BreadcrumbList` + `SoftwareApplication` per case study, `Person` + `WebSite` site-wide.
- **AI-crawler policy is deliberate** (`robots.txt` allows GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, ChatGPT-User, Google-Extended, Applebot-Extended) and paired with `llms.txt` + `rel="alternate" type="text/plain"`.
- **Hosting hygiene:** apex→www 301, `.html`→clean 301, `/index.html`→`/`, `/home`→`/`, immutable hashed assets, CSP, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`.
- **Sitemap generated from the same manifest as the prerender.**

### 6.2 Findings

| # | Priority | Finding |
| --- | --- | --- |
| S1 | **P0** | The default `<title>` and description describe "Android App Developer", not the new positioning. This is the single highest-leverage string on the site (SERP + social + `llms.txt`). |
| S2 | **P0** | `llms.txt` is stale and says **"Emerging Android app developer"**. It is explicitly advertised to LLM crawlers via `rel="alternate"` — so machine summaries of this person will repeat the weakest framing. |
| S3 | **P0** | The custom 404 is prerendered to `dist/404.html` but `vercel.json` has **no fallback rewrite**, so visitors and crawlers get Vercel's default 404. `dist/404.html` is unreachable. |
| S4 | **P1** | 8 of 9 case studies share `og/og-default.jpg`. Only Avalokan has a bespoke `.og` image (`avalokan-og.jpg`, 37 KB). Social previews for the strongest case studies look identical. |
| S5 | **P1** | `og:type="article"` on every case study, but no `article:published_time`, `article:author`, or `article:modified_time`. Either complete the Article contract or use `og:type="website"`. |
| S6 | **P1** | `SoftwareApplication.offers` with `availability: InStock` is a *retail* signal. For a free GitHub APK it implies purchasability. Prefer `offers: { price: 0 }` without availability, or model repos as `SoftwareSourceCode`. |
| S7 | **P1** | Structured-data coverage is uneven: `BreadcrumbList`/`SoftwareApplication` exist on Avalokan, Tasks, TheMovie, BlogVsn; I found no equivalent on JuiceTracker, Kathmandu, SMS, BMSK, This. |
| S8 | **P1** | No `dateModified` anywhere in markup or JSON-LD, and every sitemap `lastmod` is `2026-11-16`. Crawlers see a site that never changes. |
| S9 | **P2** | `SITE.url` ends with `/` while per-page `ogUrl` values do not. Both are valid; pick one convention. |
| S10 | **P2** | No `meta name="keywords"` — correct, leave it. |
| S11 | **P2** | Contact page has no `<h2>` at all; the form, the contact cards, and the response note are all unlabelled siblings under one `h1`. |
| S12 | **P2** | Home `<title>` is inherited from `SITE`; the highest-value page has no page-specific title/description. |

### 6.3 Canonicals and duplicates

Every route emits exactly one canonical via `seoHead.js`. The `.html` variants are 301'd, so `/about.html` and `/about` do not compete. `/index.html` and `/home` are 301'd. `trailingSlash: false` is set. **No duplicate-content problem found.**

One subtlety: `resolveSEO` drops the canonical when `noindex` is set (`seoHead.js:49-50`), which is correct — but no route currently uses `noindex`. The 404 route should.

### 6.4 Heading structure

| Page | h1 | Effective h2s | Issue |
| --- | --- | --- | --- |
| Home | 1 (Hero) | 4 via `SectionHeading` + 1 CTA | Good |
| Projects | 1 (`PageHeader`) | 2 via `SectionHeading` | Good |
| Case study ×9 | 1 | 3–6 | **h1 visually smaller than h2** |
| About | 1 | 6 | Good (h3 ×4 nested correctly) |
| Contact | 1 | **0** | No section structure |
| Privacy | 1 | several | Good |
| 404 | 1 | 0 | Fine |

### 6.5 Social preview defaults

`index.html:31-35` sets `og:site_name`, `og:locale`, `twitter:site`, `twitter:creator`, `author` site-wide — correct, and correctly outside the `ROUTE_SEO_*` replacement block so it survives prerender.

### 6.6 robots.txt / llms.txt / CSP

`robots.txt` is correct and intentional. `llms.txt` needs a full rewrite for the new positioning (P0) — it is currently the only machine-readable identity on the site and it disagrees with the HTML.

**P0 — CSP blocks the pre-paint theme script.** `vercel.json` sets:

```
script-src 'self'
```

`index.html:151-159` contains an executable inline `<script>` whose entire purpose is to apply the stored accent seed *before first paint*. Under that policy the browser blocks it, so the comment "applied before first paint so a stored choice never flashes the default palette" is not true in production. The client-side `applySeed()` in `main.jsx:11` still runs after hydration, so the theme eventually applies — with a flash of Forest Sage.

Confirmed in the built output: `dist/index.html` contains four inline script blocks — three `application/ld+json` (data blocks, generally exempt from `script-src`) and one executable `<script>`.

**Fix options:** (a) add a SHA-256 hash to `script-src`; (b) move the seed into a `nonce`-based setup (needs SSR); (c) move the seed bootstrap into the Vite-bundled entry and accept one frame of the default theme; (d) serve the seed as a tiny `/theme-init.js` with `src` and keep `script-src 'self'`. (d) is the smallest change that preserves the behaviour.

---

## 7. Accessibility audit

### 7.1 Strengths

| Feature | Evidence |
| --- | --- |
| Skip link | `Header.jsx:41-46`, targets `#main-content` (present in `PageLayout` and in every hand-rolled `<main>`) |
| Global focus ring | `index.css:123-127` — `:focus-visible` outline in `--p-accent-soft`, applied even where components forget |
| `prefers-reduced-motion` | `index.css:143-150` collapses all animation/transition durations globally; JS also consumes `useReducedMotion` |
| Labelled landmarks | `nav aria-label="Primary navigation"` / `"Mobile navigation"`, `aria-current="page"`, `main id="main-content"` |
| Icon-button names | GitHub, theme switcher, menu toggle all carry `aria-label`; decorative icons are `aria-hidden` |
| Form labelling | `label htmlFor` + `autoComplete` on all three fields; success state uses `role="status" aria-live="polite"` |
| Sections named by heading | `aria-labelledby` on Home's CTA and Testimonials sections |
| Dialog (one of five) | `Avalokan.jsx:972-973` — `role="dialog" aria-modal="true"` |
| Language | `<html lang="en">` |
| Images | Every `<img>`/`motion.img` I sampled has a non-empty `alt` |

### 7.2 Findings

| # | Priority | Finding | Evidence |
| --- | --- | --- | --- |
| A1 | **P0** | **Four lightboxes are not dialogs.** `BlogVsn.jsx:307`, `SMS.jsx:308`, `Tasks.jsx:506`, `TheMovie.jsx:481`. No `role="dialog"`, no `aria-modal`, no Escape handler (the only `Escape` listener in the codebase is the mobile menu, `Header.jsx:33`), no focus trap, no focus restore, no background scroll lock. Keyboard users can tab into the page behind the overlay. | Confirmed by grep: `role="dialog"` matches ≤1 file |
| A2 | **P0** | **Case-study heading hierarchy is inverted** — `h1` at 24px, `h2` at 30px. Nine pages. | `Tasks.jsx:153`, `TheMovie.jsx:113`, `BlogVsn.jsx:75`, `SMS.jsx:81`, `BMSK.jsx:61`, `Kathmandu.jsx:92`, `JuiceTracker.jsx:88`, `This.jsx:55` vs `<h2 class="text-3xl">` in the same files |
| A3 | **P1** | **Two headers on every case study** — the site header plus the project bar. Visually it reads as a broken sticky header; for screen-reader landmark navigation it means two competing "header/navigation" regions before the content. | `dist/projects/avalokan.html` contains the skip link, primary nav and footer alongside the project bar |
| A4 | **P1** | **Small-text accent fails contrast.** Section numbers and eyebrows use `text-accent/70` at 11px. Computed from tokens: accent `#6b8f7a` at 70% over canvas `#0e1311` ≈ **3.16:1** — below the 4.5:1 minimum for non-large text. | `About.jsx:244`, `:298`; `PageHeader.jsx:14`-adjacent patterns |
| A5 | **P1** | **Form borders fail non-text contrast.** Inputs use `border-border` = `rgba(232,215,183,0.10)` over `surface/60` ≈ **1.2:1**, well under the 3:1 required for UI component boundaries. Focus relies on a colour change (`focus:border-accent`, ~5.2:1) plus a `ring-accent/20` that is itself ~1.5:1. | `Contact.jsx:208, 225, 241` |
| A6 | **P1** | **No field-level error association.** No `aria-invalid`, no `aria-describedby` linking the error message to the field. Native `required` handles empty submit, but an EmailJS failure is announced only by the container. | `Contact.jsx:196-243`, error region near `:276` |
| A7 | **P2** | **Lightbox image alt text is the label only** (`alt="Home"`, `alt="Focus"`). It should describe the screen ("Tasks home screen showing grouped task list and swipe actions"). | `Tasks.jsx:70-78` |
| A8 | **P2** | **Code / file-tree blocks are `<div>`s with mono font.** No `<pre><code>`, so line structure is not conveyed. `Tasks.jsx:331` is the clearest example. | No `<pre>` or `<code>` in case studies |
| A9 | **P2** | **27 images, 3 with intrinsic dimensions** (18 `<img>` + 9 `<motion.img>`; only 3 declare `width`+`height`). Missing dimensions cause layout shift, which is a WCAG 2.2 / Core Web Vitals concern and a real annoyance on slow connections. | Measured; e.g. all `motion.img` lack `width` |
| A10 | **P2** | **`willChange: "transform"` applied unconditionally** to every case-study hero image, promoting all of them to compositor layers whether or not they animate. | `BlogVsn.jsx:114`, `TheMovie.jsx:146`, and siblings |
| A11 | **P2** | **`PageTransition` reduced-motion branch is inverted** — `exit={reduceMotion ? "enter" : "exit"}` plays the enter variant on exit instead of suppressing the animation. | `PageTransition.jsx:23` |
| A12 | **P2** | No `aria-live` region for the Projects filter result count. Changing category silently changes the grid; a screen-reader user gets no announcement. | `projectGrid.jsx:271-276` |

### 7.3 Contrast measurements (computed from `src/index.css`)

| Pair | Ratio | Verdict |
| --- | --- | --- |
| `#a3b1aa` (slate-400) on `#0e1311` (canvas) | **7.9:1** | ✅ |
| `#a3b1aa` on `#151c19` (surface) | **7.8:1** | ✅ |
| `#c6d0c9` (slate-300) on canvas | ~10.4:1 | ✅ |
| `#7d8b84` (slate-500) on canvas | **5.3:1** | ✅ |
| `#f5f3ed` (paper) on canvas | ~16.5:1 | ✅ |
| `#6b8f7a` (forest accent) on canvas | **5.7:1** | ✅ |
| `#c86f4a` (terracotta accent) on canvas | **5.2:1** | ✅ |
| `#7e929c` (slate accent) on canvas | **5.8:1** | ✅ |
| `#6b8f7a` @ 70% opacity on canvas | **3.2:1** | ❌ small text |
| `rgba(232,215,183,0.10)` border on canvas | **~1.2:1** | ❌ UI boundary |
| `#0b120e` (ink) on `#6b8f7a` (accent button) | **~6.0:1** | ✅ |

The palette is otherwise in good shape. The two failures are both **opacity modifiers**, which is a one-line fix per token: use `--p-accent-soft` for small accent text and a stronger border token for form controls.

---

## 8. Responsive audit

- **Breakpoints** are consistently `sm 640 / md 768 / lg 1024 / xl 1280 / 2xl 1536`, with a custom `min-[1920px]` step. Widely used, no rogue breakpoints found.
- **Container ladder** is consistent in value and inconsistent in duplication (26 copies).
- **Mobile navigation** is a disclosure panel with `aria-expanded` / `aria-controls`, closes on navigation and Escape. Good pattern; no focus trap is needed because it is inline, not modal.
- **Tables / spec grids** use `grid-cols-2 sm:grid-cols-4` (Avalokan stats) and `grid-cols-2` (About meta). No horizontal overflow containers found, so no unbounded tables.
- **Long unbroken strings** (URLs, package names like `com.google.firebase:firebase-auth`) sit inside `text-sm` cells without `break-words`. Risk of overflow at 320px on the libraries table.
- **Fixed pixel type** (9–11px) does not scale with user font size because it is set in `px`, not `rem`. Users who increase their default font size will not see these labels grow.

**Recommendation:** verify at 320 / 390 / 768 / 1024 / 1440 / 1920 after the redesign, and convert the label scale to `rem`.

---

## 9. Performance audit

### 9.1 Measured output (local production build)

| Artefact | Raw | Gzip |
| --- | --- | --- |
| `dist/assets/index-*.js` | **625.50 kB** | **171.75 kB** |
| `dist/assets/index-*.css` | 66.38 kB | 11.51 kB |
| `dist/` images (36 files) | **6.84 MB total** | — |
| `public/media/avalokan-launch.mp4` | **7.76 MB** | — |
| `public/media/avalokan-poster.jpg` | 105 kB | — |
| `public/media/avalokan-og.jpg` | 37 kB | — |
| `public/og/og-default.jpg` | 78 kB | — |

Vite emits its own warning: *"Some chunks are larger than 500 kB after minification."*

### 9.2 Causes, in impact order

| # | Priority | Cause | Evidence |
| --- | --- | --- | --- |
| P1 | **P0** | **7.76 MB autoplay video in the hero.** `autoPlay` + `preload="metadata"` means the browser must fetch and decode it to start. Only users with `prefers-reduced-motion: reduce` get the 540×1170 still image instead. | `Hero.jsx:233-243` |
| P2 | **P1** | **No route-level code splitting.** Zero `lazy()` / `Suspense`. All 9 case studies, all 944 lines of Avalokan, and all 17 framer-motion consumers ship in one chunk to every visitor, including someone who only reads the homepage. | grep: 0 matches for `lazy(`/`Suspense` |
| P3 | **P1** | **Screenshots are oversized PNGs.** Largest: 571 kB, 561 kB, 493 kB, 441 kB, 372 kB, 360 kB, 340 kB, 328 kB, 321 kB, 319 kB. A 571 kB PNG displayed in a ~400 px card is roughly 3–5× the pixels needed. | `dist/assets/*.png` |
| P4 | **P1** | **No responsive images.** No `srcset`/`sizes` anywhere, so mobile downloads desktop-resolution screenshots. | grep: 0 `srcset` |
| P5 | **P2** | **External Google Fonts stylesheet** with 8 Inter weights + 3 JetBrains Mono weights, render-blocking, two extra origins. Self-hosting 3–4 weights would remove a round trip and ~10 font files. | `index.html:20-25` |
| P6 | **P2** | **27 images, 3 with dimensions** → CLS on 24 of them. | measured |
| P7 | **P2** | **Hero LCP image** uses `fetchPriority="high"` (good) but there is no `<link rel="preload">`; the image is only discovered when the React tree paints. | `Hero.jsx:388-396` |
| P8 | **P2** | **Unconditional `willChange: transform`** on 9 case-study images. | see A10 |
| P9 | **P2** | **No `<video>` poster preload strategy on case studies** — `preload="metadata"` is correct there, keep it. | `Avalokan.jsx:463-469` |
| P10 | **P2** | **CSS 66 kB raw** is acceptable; Tailwind 4 JIT is doing its job. No action. | — |

### 9.3 What is already right

- Prerendered HTML means FCP does not wait for JS.
- Hashed assets with `max-age=31536000, immutable`.
- Hero entrance animation is CSS, not JS, so above-the-fold paint is not hydration-dependent.
- `assetsInlineLimit: 0` avoids inline-data-URI bloat and broken prerender URLs.
- Fonts use `display=swap` and preconnect.

### 9.4 Target budget (proposal)

| Metric | Now (structural) | Target |
| --- | --- | --- |
| Initial JS (gzip) | 171.75 kB | **≤ 110 kB** on `/` |
| Case-study route JS | +0 (all in one chunk) | **≤ 40 kB** extra, lazy-loaded |
| Homepage media | ~7.9 MB potential | **≤ 400 kB** (poster + optional 1.2 MB video on demand) |
| Any single image | 571 kB | **≤ 120 kB** (WebP/AVIF, 1× and 2×) |
| LCP | unknown | ≤ 2.5 s on 4G |
| CLS | unknown | ≤ 0.05 |

---

## 10. Proposed information architecture

### 10.1 Positioning strategy

> **Product-Minded Systems & Application Engineer.**
> I take an application from product brief to data model to interface to release. Android with Kotlin and Compose is where I go deepest; the systems thinking is the same everywhere.

Three proof layers, in this order, on every page:

1. **Shipped** — something real exists (v1.0.0, APK, live URL).
2. **Reasoned** — a visible decision chain (constraint → option → choice → trade-off).
3. **Broad** — the same method applied to Android, web, and low-level C.

The current site leads with *learning* ("Emerging", "built while learning"). The redesign must lead with *shipped and reasoned* while keeping the honesty — the tiering already present on the Projects page is the right mechanism.

### 10.2 URL map — preserve all existing URLs

| URL | Keep? | Change |
| --- | --- | --- |
| `/` | ✅ | New IA, new copy |
| `/about` | ✅ | Repositioned |
| `/projects` | ✅ | Tiered restructure |
| `/projects/avalokan` | ✅ | Flagship template |
| `/projects/todo` | ✅ | Apply template |
| `/projects/themovie` | ✅ | Apply template + fix screenshots |
| `/projects/juicetracker` | ✅ | Apply template |
| `/projects/kathmandu` | ✅ | Apply template |
| `/projects/sms` | ✅ | Apply template |
| `/projects/bmsk` | ✅ | Apply template |
| `/projects/blogvsn` | ✅ | Apply template + verify claims |
| `/projects/this` | ✅ | Apply template; **keep URL** (add `/projects/portfolio` → 301 later if desired) |
| `/contact` | ✅ | Add structure + role-fit |
| `/privacy` | ✅ | Keep as-is (content is accurate) |
| 404 | ✅ | **Wire it up in `vercel.json`** |

**No new routes are required.** Optional later additions (`/writing`, `/uses`) should not be introduced until there is content to justify them — inventing empty pages would work against the positioning.

### 10.3 Page blueprints

#### Homepage

```
1  Hero
     eyebrow   Samrat Parajuli · Kathmandu, Nepal
     h1        Product-minded systems & application engineer.
               Native Android is where I go deepest.
     sub       I take applications from product brief to data model
               to interface to release — most recently Avalokan v1.0.0.
     CTA       View selected work · Download Avalokan (APK)
     proof     Kotlin · Compose · Firebase · Room · Hilt · Retrofit
     visual    portrait + Pixel device (keep; replace 7.7 MB video)

2  What I actually do            (3 columns, each with one real example)
     Product framing    → Avalokan: one brief, scattered heritage sources
     Data & systems     → Firestore + Room merge, Hilt graph, DataStore
     Interface          → Compose M3, edge-to-edge, offline states

3  Selected work                (2–3, outcome-first)
     Avalokan   Released v1.0.0 · APK
     Tasks      v1.1.0 · Pomodoro + Room
     BlogVsn    Live · CMS-backed React

4  How I build                  (the decision chain, 4 steps)
     Brief → Model → Layers → Ship
     Each step one sentence + the artefact it produced

5  Evidence
     release · repos · 3 testimonials (already real, with LinkedIn)

6  Writing                      (external blog; 2–3 latest if available)

7  Contact CTA                  "Have something worth building?"
```

#### Projects overview

```
PageHeader   "Work" / "Projects." / one-line thesis
Tier 1       Shipped products        (status badge: Released v1.0.0 / Live)
Tier 2       Applied engineering     (built to learn a system, honestly labelled)
Tier 3       Foundations & coursework (JuiceTracker, Kathmandu, SMS, BMSK, This)
             ↑ keep the existing honest subtitle; it is one of the best lines on the site

Each card: title · one-sentence thesis · stack chips · status · 1 screenshot
Filter: All / Android / Web / C / Experiments  (keep; add aria-live result count)
```

#### Case study template (shared by all 9)

```
CaseStudyLayout
  Breadcrumb            Home / Projects / <Project>
  Header                h1, thesis, status pill, links (Repo · Live · APK)
  Meta strip            Role · Timeline · Platform · Release
  Problem & users       2–3 short paragraphs
  Constraints           what made it hard (offline, cold start, API limits)
  System design         layer diagram · data model · key libraries
  Decisions             3–5 × { context → choice → trade-off }
  Screens               gallery (real screenshots only, descriptive alt)
  What shipped          version, date, what is in scope
  What's next           explicitly labelled Planned
  Stack table
  Next project
```

#### About

```
1  Portrait + h1 + role line ("Product-minded systems & application engineer")
   + one paragraph: what I do, where I'm strongest, what I'm optimising for
2  How I got here        (trim the 6-step timeline to 4)
3  Working principles    (Build → Break → Share — already good, keep)
4  Toolkit               (group by Product / Data / Interface / Android, not by library name)
5  Beyond code           (keep: Nepal, Sanskrit, community, writing — it differentiates)
6  CTA                   "I'm looking for teams where the app is the product."
```

#### Contact

```
h1   Let's build something.
sub  What I'm looking for + what I'm good at + response expectation
Grid: Email / GitHub / LinkedIn / Location   (keep, it works)
Form: keep EmailJS exactly as-is
      add h2 "Send a message", per-field error association
      add a short "What to include" hint (role, scope, timeline)
```

### 10.4 Content model

Replace the prose-only `projects.js` with one structured record per project. The card grid consumes summary fields; the case study consumes the rest. Nothing is invented — every field maps to something a case study already says or should say.

```js
// src/content/projects/avalokan.js
export default {
  slug: "avalokan",
  name: "Avalokan",
  thesis: "One place for Nepal's heritage — offline-first by design.",
  tier: "shipped",                 // shipped | applied | foundations
  category: "Android",
  status: { state: "released", label: "v1.0.0", date: "2026-10-27" },
  role: "Solo — product, design, engineering",
  timeline: "—",                   // fill only if true
  platforms: ["Android 7.0+ (API 24)"],
  links: {
    repo: "https://github.com/SamratVsn/Avalokan",
    release: "https://github.com/SamratVsn/Avalokan/releases/tag/v1.0.0",
    download: "https://github.com/SamratVsn/Avalokan/releases/download/v1.0.0/avalokan1.0.0.apk",
  },
  stack: {
    language: ["Kotlin"],
    ui: ["Jetpack Compose", "Material 3"],
    data: ["Room", "Firestore", "DataStore"],
    platform: ["Hilt", "Credential Manager", "Coroutines & Flow"],
  },
  problem: "…",
  users: "…",
  constraints: ["…"],              // e.g. intermittent connectivity
  architecture: {
    layers: [{ name, detail }],
    dataModel: [{ entity, fields: [], note }],
    mergePolicy: "…",              // the sentence that earns trust
  },
  decisions: [
    { title, context, choice, tradeoff },
  ],
  features: [{ title, detail }],
  screenshots: [
    { src, alt, caption, width, height, screen: "home" },
  ],
  shipped: ["…"],
  roadmap: [{ title, detail, status: "planned" }],
  stats: [{ value, label, source: "repo | release | measured" }],
};
```

Then `src/content/projects/index.js` exports an ordered array, and `scripts/routes.mjs` derives the route list from it — killing the three-list drift in §3.3.

**Rules for the model:**

- `status.state ∈ { released, live, prototype, coursework }` — a closed set, so badges and filters are typed, not parsed.
- `roadmap[].status` must be `"planned"` until it ships. The current site does this correctly; keep it.
- `stats[].source` forces every number to declare where it came from.
- `screenshots[]` requires `width`/`height` and a descriptive `alt`, which fixes A9 and A7 by construction.

---

## 11. Proposed design system

### 11.1 Principles

1. **Editorial, not decorative.** Hairlines, generous whitespace, one accent. No glass, no glow, no gradient text.
2. **Type carries hierarchy; colour carries meaning.** If a heading needs colour to read as a heading, the scale is wrong.
3. **Every number is sourced.** In UI *and* in copy.
4. **Motion explains, never entertains.** 150–250 ms for state, 400 ms for entry, zero under reduced motion.
5. **One screen, one job.** Case studies answer: what is it, what was hard, what did you decide, what shipped.

### 11.2 Tokens (extend, don't replace)

**Keep:** all `--p-*` colour tokens, the three accent seeds, the slate remap, `--font-sans`/`--font-mono`.

**Add:**

```
/* Type — rem, 9 steps */
--text-display / h1 / h2 / h3 / h4 / body-lg / body / small / label
--leading-tight / snug / normal / relaxed
--tracking-display / heading / normal / label

/* Space — 4px base */
--space-1 … --space-24   (4 8 12 16 24 32 40 48 64 80 96)

/* Radius */
--radius-sm 8 · --radius-md 12 · --radius-lg 16 · --radius-xl 20 · --radius-device 30

/* Elevation — 3 levels, dark-mode correct */
--shadow-1 hairline+2% · --shadow-2 card · --shadow-3 overlay

/* Container */
--container-prose 48rem · --container-default 72rem · --container-wide 80rem
```

**Add two semantic tokens to close the contrast failures:**

```
--p-accent-text:  #97bca5;   /* for ≤ 14px accent text (≥ 4.5:1 on canvas) */
--p-border-control: rgba(232,215,183,0.28);  /* ≥ 3:1 for inputs, per 1.4.11 */
```

### 11.3 Component inventory

| Component | Variants / states | Replaces |
| --- | --- | --- |
| `Container` | `prose \| default \| wide \| full` | 26 copy-pasted ladders |
| `Section` | `tight \| default \| loose`, `divided` | 3 competing section rhythms |
| `Eyebrow` | `label \| numbered` | 10 hand-built copies |
| `SectionHeading` | `left \| center`, `as` | existing (keep, extend) |
| `PageHeader` | `default \| withBreadcrumb` | existing + Privacy's copy |
| `Button` | `primary \| secondary \| ghost \| danger`, `sm \| md \| lg` | 20+ inline button class strings |
| `Card` | `flat \| raised \| interactive` | featured/compact/project cards |
| `StatusPill` | `released \| live \| prototype \| coursework \| planned` | v1.0.0 badge, "New" chip |
| `Tag` | default | stack chips |
| `Stat` | `default \| withSource` | Avalokan quick stats |
| `SpecTable` | `two-col \| grid` | 6 hand-built spec grids |
| `DecisionList` | — | new (the systems-thinking block) |
| `LayerDiagram` | — | Avalokan's architecture layers |
| `ScreenshotGallery` | `grid \| row`, opens `Lightbox` | 9 bespoke galleries |
| `Lightbox` | `dialog` — focus trap, Escape, restore, scroll lock | 5 lightboxes |
| `Prose` | typographic defaults for long copy | new |
| `TOC` | — | new (long case studies) |
| `Breadcrumb` | — | inline breadcrumb markup |
| `Callout` | `note \| warning \| planned` | roadmap / constraint notes |

### 11.4 Accessibility contract (apply to every component)

- Interactive elements: real `<button>`/`<a>`, never a clickable `<div>`.
- Focus: visible ring from `:focus-visible`; never `outline: none` without an equivalent.
- Overlays: `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, Escape, focus trap, focus restore, `overflow: hidden` on the body.
- Images: `width` + `height` + descriptive `alt`, or `alt=""` + `aria-hidden` when purely decorative.
- Form controls: label + `aria-invalid` + `aria-describedby` on error.
- Motion: honour `prefers-reduced-motion` in both CSS and JS.
- Text: minimum 11px, no accent colour below 4.5:1 on small text.
- Announcements: `aria-live="polite"` for filter results and form status.

---

## 12. Recommended component structure

```
src/
  main.jsx                      (hydrate vs render — unchanged)
  App.jsx                       (routes only, generated from content)
  index.css                     (tokens + primitives only)

  content/
    site.js                     SITE, IDENTITY, ROLE, DESCRIPTION, SOCIAL   ← P0 new
    testimonials.js             the 3 real testimonials from Home.jsx
    projects/
      index.js                  ordered list + helpers
      avalokan.js  todo.js  themovie.js  juicetracker.js  kathmandu.js
      sms.js  bmsk.js  blogvsn.js  this.js

  seo/
    SEO.jsx                     (moved, unchanged behaviour)
    seoHead.js                  (reads content/site.js)
    schema.js                   builders: person, profilePage, caseStudy, breadcrumb

  layout/
    SiteLayout.jsx              Header + main + Footer + BackgroundFX
    Header.jsx  Footer.jsx  SkipLink.jsx  ScrollToTop.jsx
    BackgroundFX.jsx            (unchanged)

  ui/
    Container.jsx  Section.jsx  Eyebrow.jsx
    SectionHeading.jsx  PageHeader.jsx  Breadcrumb.jsx
    Button.jsx  Card.jsx  StatusPill.jsx  Tag.jsx
    Stat.jsx  SpecTable.jsx  Callout.jsx  Prose.jsx  TOC.jsx
    Lightbox.jsx  ScreenshotGallery.jsx
    DeviceFrame.jsx             (extracted from Hero)

  patterns/
    DecisionList.jsx  LayerDiagram.jsx  DataModelTable.jsx
    ProjectCard.jsx  ProjectFilters.jsx

  pages/
    Home.jsx  About.jsx  Projects.jsx  Contact.jsx  Privacy.jsx  NotFound.jsx

  features/home/
    Hero.jsx  Capabilities.jsx  SelectedWork.jsx  Approach.jsx
    Testimonials.jsx  WritingTeaser.jsx  ContactCTA.jsx

  features/case-study/
    CaseStudyLayout.jsx         header, meta strip, breadcrumb, next-project
    CaseStudySections.jsx       Problem, Constraints, System, Decisions,
                                Screens, Shipped, Roadmap, Stack

  case-studies/                 thin wrappers: metadata + section content only
    Avalokan.jsx  Tasks.jsx  TheMovie.jsx  …
```

**Migration mapping**

| Today | Target |
| --- | --- |
| `PageLayout.jsx` | `layout/SiteLayout.jsx` (used by *all* pages) |
| `PageHeader.jsx`, `SectionHeading.jsx` | `ui/` (extended, not rewritten) |
| `projectGrid.jsx` (337 lines) | `pages/Projects.jsx` + `patterns/ProjectCard/ProjectFilters` |
| `Avalokan.jsx` (944 lines) | `case-studies/Avalokan.jsx` (~200 lines) + shared sections |
| `Tasks/TheMovie/BlogVsn/...` | same, each ~150 lines |
| `TestimonialsSection.jsx` | `features/home/Testimonials.jsx` + `content/testimonials.js` |
| `TransitionProvider/Context/useTransitionContext/PageTransitionConstants` | **delete** |
| `data/projects.js` | `content/projects/*` |

**Why this shape:** it is still React + Vite + Tailwind. It adds folders, not dependencies. The only new abstraction is the case-study template — which is the thing the nine pages are currently missing.

---

## 13. Prioritised implementation tasks

### P0 — correctness, trust, positioning (ship first)

| ID | Task | Why | Acceptance |
| --- | --- | --- | --- |
| **P0-1** | Create `src/content/site.js`; replace all 20 identity strings in §5.2, plus `llms.txt` and `README.md` | Seven contradictory role strings, one of them machine-facing | One grep for "Android developer" returns only historical/project copy; `llms.txt` matches the `Person` schema |
| **P0-2** | Rewrite `public/llms.txt` for the new positioning | It is the site's machine-readable identity and currently says "Emerging" | Lists the role, the specialty, all projects and the shipped release; no "Emerging" |
| **P0-3** | Fix CSP vs inline theme script (`vercel.json` + `index.html`) | The pre-paint theme guarantee is currently false in production | No CSP violation in DevTools console; seed applies before first paint or the claim is removed |
| **P0-4** | Wire the 404: add a `vercel.json` rewrite/fallback for unknown paths | `dist/404.html` is unreachable | `/does-not-exist` returns the styled 404 with a 404 status |
| **P0-5** | Replace TheMovie's 4 STALE + 1 PLACEHOLDER screenshots; delete the visitor-facing stale captions and the `TODO(TheMovie)` block | A case study that calls its own evidence fake | 7 real screenshots, no "STALE"/"placeholder" text in `src/` |
| **P0-6** | Build a shared `Lightbox` (dialog, Escape, focus trap/restore, scroll lock) and use it in all 5 case studies | Four lightboxes are keyboard traps | axe: no dialog violations; Escape closes and restores focus |
| **P0-7** | Fix case-study heading scale (`h1` ≥ `h2`) via the shared template | Inverted hierarchy on 9 pages | Every case study: h1 > h2 at every breakpoint |
| **P0-8** | Remove the duplicate header on case studies (one shell) | Two headers on 9 pages | One `<header>` landmark per page |
| **P0-9** | Verify or remove: Tasks `release/latest/download/Tasks.apk`, BlogVsn OAuth/React-18 claims, "100% offline-first reads", Tasks "Hilt / AppContainer" | Unverified claims in schema + CTAs | Each remaining claim has a repo/release source; broken ones removed |
| **P0-10** | Replace the 7.76 MB hero video with a compressed loop (target ≤ 1.2 MB) or a poster + play control | Largest transfer on the site, autoplaying above the fold | Homepage media ≤ 400 kB before interaction |

### P1 — the redesign itself

| ID | Task | Why |
| --- | --- | --- |
| **P1-1** | Single route manifest: `content/projects/index.js` → React routes + `routes.mjs` + `vercel.json` rewrites | Three hand-synced route lists |
| **P1-2** | Introduce `Container`, `Section`, `Eyebrow`, `Button`, `Card`, `StatusPill`, `Tag` | 149 arbitrary sizes, 26 container copies, 10 eyebrow copies |
| **P1-3** | Publish the type scale and migrate case studies first | The scale is the visual fix that matters most |
| **P1-4** | Build `CaseStudyLayout` + section components; migrate all 9 pages | 9 divergent structures → 1 |
| **P1-5** | Restructure the Projects index into Shipped / Applied / Foundations | Positioning without inventing |
| **P1-6** | Rewrite Home sections 2–5 (capabilities, selected work, approach, evidence) | The positioning has no home on the current homepage |
| **P1-7** | Rewrite About role/bio/focus/toolkit grouping | Currently the strongest "Android Developer" statement on the site |
| **P1-8** | Add `DecisionList` + `DataModelTable` and populate them for Avalokan, Tasks, TheMovie, BlogVsn | The systems evidence is currently one sentence deep |
| **P1-9** | Route-level `lazy()` + `Suspense` for case studies | 171.75 kB gzip for a homepage visit |
| **P1-10** | Image pipeline: WebP/AVIF + `srcset`/`sizes` + `width`/`height` for all 27 images | 6.84 MB of PNGs, 3 images with dimensions |
| **P1-11** | Fix contrast: `--p-accent-text` for small accent text, `--p-border-control` for inputs | Two measured 1.4.3 / 1.4.11 failures |
| **P1-12** | Per-project OG images (1200×630) for the 4 flagship case studies | 8 of 9 share one social card |
| **P1-13** | Delete the dead transition abstractions and fix the inverted reduced-motion exit | Dead code + a motion bug |
| **P1-14** | Add `dateModified` + real sitemap `lastmod` per route | Crawlers currently see a static site |

### P2 — polish and hardening

| ID | Task |
| --- | --- |
| P2-1 | Complete `Article` metadata or switch `og:type` to `website` on case studies |
| P2-2 | Normalise `SoftwareApplication.offers` / add `SoftwareSourceCode` for repos |
| P2-3 | Add `BreadcrumbList` + `SoftwareApplication` to the 5 case studies that lack them |
| P2-4 | Add `aria-live` result count to the Projects filter |
| P2-5 | Field-level `aria-invalid` + `aria-describedby` on the contact form |
| P2-6 | Convert code/file-tree blocks to `<pre><code>` |
| P2-7 | Descriptive alt text for every screenshot (not just the label) |
| P2-8 | Replace Google Fonts with self-hosted subsets (3–4 weights) |
| P2-9 | Remove unconditional `willChange: "transform"` |
| P2-10 | Rename the portfolio project's `id` to match its path (`portfolio` ↔ `this`) |
| P2-11 | `rem`-based label scale so browser font-size settings apply |
| P2-12 | Use `npm ci` in the build script so the committed lockfile is authoritative |
| P2-13 | Add a build assertion: 15 HTML documents, unique canonicals, no broken internal routes |
| P2-14 | Add Lighthouse CI + axe CI once the redesigned pages stabilise |
| P2-15 | Decide analytics (none today; `Privacy.jsx` is accurate — keep it that way or update it together) |
| P2-16 | `break-words` on library/spec tables for 320 px |

---

## 14. Risks and migration considerations

### 14.1 SEO risk — **medium**

- **Preserve every URL** in §10.2. The prerender pipeline must emit the same 14 documents + `404.html` with the same clean URLs. Any slug change needs a 301 in `vercel.json` *and* a `lastmod` update.
- **Keep `seoHead.js` as the single builder.** Do not reintroduce a head-management library — the comment at the top of the file documents a real React 19 duplicate-tag bug.
- **Canonicals must stay self-referential.** If a case study is temporarily hidden during migration, remove it from `routes.mjs`, `vercel.json` rewrites, *and* the sitemap together — otherwise crawlers see 404s from the sitemap.
- **Title changes are safe but ranking-visible.** Changing the home title from "Android App Developer" to a systems-engineering title may cost some long-tail "android developer portfolio" queries. The `Person` `jobTitle` and `knowsAbout` should keep Android explicit so both queries are served.

### 14.2 Prerender / hydration risk — **medium**

- New components must be SSR-safe: no `window`, `document`, `localStorage`, `matchMedia`, or `Date.now()` at module scope or during render. `SEO.jsx` already demonstrates the correct pattern (`typeof window === "undefined"`).
- **Hydration parity:** no random IDs, no timestamps in markup, no `Math.random()` for keys. A mismatch silently re-renders and destroys the prerender benefit.
- `useReducedMotion()` (framer) resolves differently on server and client. Keep using it only for *behaviour* (which element renders), not for markup that must match.
- The prerenderer renders with `StaticRouter`; anything that reads `useLocation` during SSR must behave for a static path.

### 14.3 Content-loss risk — **medium**

Nine hand-written case studies contain details that exist nowhere else (architecture layers, library lists, roadmap items). Migrating to the shared template is a **transcription** task, not a rewrite. Mitigation: for each project, diff the new page against `git show HEAD:src/Components/<X>.jsx` before deleting the old component.

### 14.4 Integration risk — **low**

- EmailJS: keep the three `VITE_EMAILJS_*` variables and the `connect-src` allowlist. Do not rename the env vars.
- APK/release URLs: copy them verbatim into `content/projects/*.js`.
- External blog: keep `https://blog.samratparajuli0.com.np/`.
- CSP: any new third-party origin (fonts, analytics, video host) must be added to `vercel.json` or it will be blocked — this is exactly how the inline theme script broke.

### 14.5 Parallel-work risk — **elevated (project-specific)**

This working tree has been reset twice during the audit by commits landing in parallel (`81737f6`, `6248be3`, `b6f091c`). Concrete consequences already observed:

- `6248be3 "Deleted Old Stuff"` removed `src/assets/Hero_Image.webp` while `Hero.jsx` and `About.jsx` still imported it — the build was broken until it was restored.
- An About portrait rewrite (`About_Portrait.webp`, 900×1094 WebP) was reverted by a later commit; `About.jsx` is back to `Hero_Image.webp` while the unused WebP sits in `src/assets/`.

**Mitigation:** create a worktree (`tools.opencode.worktree_create`) or a feature branch, and run `npm run build` before every commit. Do not edit `About.jsx` and `Hero.jsx` while another change is in flight.

### 14.6 Performance regression risk — **low–medium**

The redesign *adds* components and a case-study template. Guard rails:

- Keep the lazy-route split (P1-9) — it is the main win.
- Do not add a UI kit, an animation library, or a data-fetching library. The stack is lean; keep it lean.
- Set a bundle budget in CI (P2-14) so 171.75 kB cannot silently become 250 kB.

### 14.7 Accessibility regression risk — **low**

The redesign will replace the one accessible lightbox with a shared one. Build `Lightbox` first (P0-6), test it with keyboard only, then migrate. Do not ship two lightbox implementations.

### 14.8 Scope risk — **elevated**

The positioning change touches every page. The realistic risk is not technical, it is **rewriting nine case studies at once**. Mitigation: ship the template + Avalokan + Tasks first (the two strongest), then migrate the remaining seven in one pass each. The content model makes the remaining seven mechanical.

---

## 15. Measurement plan (how we prove the redesign worked)

| Check | Tool | Gate |
| --- | --- | --- |
| Build + prerender | `npm run build` | 15 documents, no warnings besides the chunk-size one (which should disappear) |
| Route parity | diff `dist/**/*.html` filenames against §10.2 | 14 + 404, no extras, no losses |
| Canonicals | grep `rel="canonical"` across `dist` | 14 unique, one per route |
| Structured data | Rich Results Test / schema validator | 0 errors on Home, About, Projects, Avalokan, Tasks |
| Social cards | OG debugger ×3 (Home, Avalokan, Projects) | 1200×630, correct title/description |
| Lighthouse (mobile) | `/`, `/projects`, `/projects/avalokan` | Perf ≥ 90, A11y 100, BP 100, SEO 100 |
| axe | all 14 routes | 0 critical / 0 serious |
| Keyboard | Tab-only walkthrough: skip link → nav → cards → lightbox → close | Focus visible, trap works, Escape restores |
| Reduced motion | `prefers-reduced-motion: reduce` | No transitions, still image instead of video |
| Responsive | 320 / 390 / 768 / 1024 / 1440 / 1920 | No horizontal scroll, no clipped labels |
| Contrast | computed ratios for the new label/control tokens | ≥ 4.5:1 text, ≥ 3:1 UI |
| Bundle | `dist/assets/*.js` | Home ≤ 110 kB gzip, case study ≤ 150 kB total |

The original Lighthouse run on `/` (1/1/1, zero failing audits) is a good baseline — but that run predates the current hero video, so re-measure rather than trust it.

---

## 16. Implementation recommendation

**Keep React + Vite + Tailwind. Do not migrate.** The prerender pipeline, the single-source SEO builder, and the hardened `vercel.json` are the site's real engineering assets. A migration would replace proven infrastructure with unproven infrastructure and forfeit prerendered HTML — the one thing that makes this portfolio rank.

The redesign is a **content and structure problem wearing a design costume**. The palette is good, the hero is good, the motion is restrained, and the build is solid. What is missing is a single identity, a case-study template, and the systems evidence that already exists but is never shown.

### Suggested sequencing

| Phase | Scope | Outcome |
| --- | --- | --- |
| **1 — Trust** | P0-1 … P0-10 | One identity, no stale/placeholder/false claims, accessible lightboxes, one header, wire the 404, prune the 7.7 MB video |
| **2 — Structure** | P1-1, P1-2, P1-3, P1-4 | Single route manifest, design primitives, type scale, shared case-study template |
| **3 — Substance** | P1-5 … P1-8 | New IA, tiered projects, repositioned About/Home, decision + data-model sections |
| **4 — Hardening** | P1-9 … P1-14, P2 | Code splitting, image pipeline, contrast, OG images, schema, CI gates |

Phase 1 is a day of work and removes every credibility risk in this document. Phase 2 unblocks everything else. Phases 3–4 are the actual redesign.

### What I need from you before writing code

1. **Approve the positioning strings** in §5.2 (role, tagline, meta title/description). Everything downstream inherits them.
2. **Confirm the facts I could not verify** (§5.4): Tasks release asset, BlogVsn OAuth, Avalokan screen/collection counts, "100% offline-first reads".
3. **Choose one case-study narrative style**: *decision-led* (why each choice was made) or *capability-led* (what was built and how it works). Decision-led supports "systems engineer" better; capability-led is faster to write from existing copy.
4. **Confirm the hero video decision**: compress to ~1.2 MB, or poster + explicit play.
5. **Confirm scope**: full 4-phase redesign, or Phase 1 only (identity + trust fixes) as a first merge.

I have **not** modified any application file. On approval I will start with Phase 1, P0-1 (single content source) — because every other fix depends on it.

---

## Appendix A — Evidence index

| Finding | Primary evidence |
| --- | --- |
| Single 625.5 kB JS chunk | `npm run build` output; `dist/assets/index-sLw8OEUT.js` |
| No code splitting | 0 matches for `lazy(` / `Suspense` in `src/` |
| 7.76 MB autoplay hero video | `public/media/avalokan-launch.mp4`; `Hero.jsx:233-243` |
| 6.84 MB of images / 36 files | `dist/assets` inventory |
| 27 images, 3 with dimensions | static count over `src/**/*.jsx` |
| 149 arbitrary font sizes / 23 distinct | static count |
| 26 container-ladder copies | static count |
| 10 eyebrow implementations | `BlogVsn:295`, `BMSK:284`, `JuiceTracker:349`, `Kathmandu:355`, `PageHeader:12`, `SectionHeading:20`, `Tasks:356`, `TheMovie:445`, `About:473`, `Privacy:152` |
| 4 non-dialog lightboxes | `BlogVsn:307`, `SMS:308`, `Tasks:506`, `TheMovie:481` |
| Only one Escape handler | `Header.jsx:33` |
| Case-study h1 = 24px, h2 = 30px | `Tasks.jsx:153` vs `<h2 class="text-3xl">` |
| Two headers on case studies | `dist/projects/avalokan.html` contains skip link + primary nav + footer alongside the project bar |
| CSP blocks inline theme script | `vercel.json` `script-src 'self'`; `dist/index.html` has 3 JSON-LD + 1 executable inline script |
| 404 unreachable | `dist/404.html` exists; no `vercel.json` rewrite targets it |
| Route lists in 3 places | `App.jsx` / `Projects.jsx`, `scripts/routes.mjs`, `vercel.json` rewrites |
| Stale/placeholder screenshots | `TheMovie.jsx:56-61` |
| Identity strings | §5.2 table |
| Dead transition context | `App.jsx:2`, `TransitionProvider.jsx`, no consumers |
| Inverted reduced-motion exit | `PageTransition.jsx:23` |
| Unused `SectionHeading` import | `About.jsx:7` |
| `llms.txt` says "Emerging" | `public/llms.txt` |
