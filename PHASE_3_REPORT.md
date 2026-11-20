# Phase 3 — Substance (P1-5 → P1-8)

Status: implemented, verified, and stopped before Phase 4.
Branch: `main`. Phase 3 changes are committed locally as `de6b294` (not yet pushed); one
follow-up accuracy edit and this report are uncommitted.

---

## 1. Summary

Phase 3 replaced the last of the generic portfolio marketing with claims that can be
checked against the actual repositories. The work is deliberately asymmetric: four
projects carry detailed evidence, five carry a short honest status line and nothing
more.

What changed:

- `src/data/projects.js` is now the single source of truth for tier, thesis, verified
  status, engineering decisions, and data model. Nothing in the case studies hardcodes
  a claim that the data file does not hold.
- The Projects index is grouped into three evidence-based tiers instead of one flat grid,
  with the existing All / Android / Web / C / Experiments filters preserved.
- Home and About were repositioned from "list of things I know" to "what I build, how I
  build it, and what exists today".
- Two reusable evidence components were added: `DecisionList` (Context / Choice /
  Trade-off) and `DataModelTable` (a real table at `md+`, labelled cards below `md`).
- 18 engineering decisions and 19 data-model rows were written from source inspection,
  not from memory, with every unimplemented alternative labelled
  "Alternative (not implemented)".
- Four overclaims were corrected while writing the evidence: TheMovie "full offline
  support", BlogVsn OAuth-redirect framing, BlogVsn data-flow order, and Avalokan's
  implication that saved places sync to Firestore.

Nothing in this phase touches Phase 4 scope: no code splitting, no image pipeline, no
CI changes, no dependency additions.

---

## 2. Files

Added:

- `src/Components/case-study/DecisionList.jsx`
- `src/Components/case-study/DataModelTable.jsx`
- `PHASE_3_REPORT.md`

Rewritten:

- `src/data/projects.js` — tier, thesis, status, decisions, dataModel
- `src/Components/projectGrid.jsx` — tiered index with filters
- `src/Pages/Home.jsx` — sections 2–5, Writing, CTA
- `src/Pages/About.jsx` — four-stage journey, principles, grouped toolkit, Beyond code, CTA

Extended:

- `src/Components/Avalokan.jsx` — decisions + data model sections
- `src/Components/Tasks.jsx` — decisions + data model sections
- `src/Components/TheMovie.jsx` — decisions + data model sections, offline wording fix
- `src/Components/BlogVsn.jsx` — decisions + data model sections, data-flow/auth/challenge corrections

Unchanged on purpose: `src/content/routes.js`, `src/Components/seoHead.js`, `src/Components/SEO.jsx`,
the prerender pipeline, `vercel.json`, EmailJS environment names, the design tokens, and
the shared case-study shell.

---

## 3. Tier reasoning

Tiers are defined by evidence, and the definition is printed in the data file so the
grouping cannot quietly drift:

| Tier | Definition | Projects |
| --- | --- | --- |
| **Shipped products** | A verified release artifact or a live product a visitor can open today. | Avalokan, Tasks, BlogVsn |
| **Applied engineering** | A substantial system built to apply a technical idea in depth. No release or production users implied. | TheMovie, JuiceTracker, Portfolio Website |
| **Foundations & Coursework** | Course projects, first builds, and small experiments, kept honest rather than dressed up. | Kathmandu, SMS, BMSK |

Per-project justification:

- **Avalokan → Shipped.** Tagged `v1.0.0` GitHub release with a signed APK, plus an
  in-app launch film and a complete feature set in source.
- **Tasks → Shipped.** `v2.1.0` release and a downloadable APK; Room + DataStore
  persistence, focus timer, categories, and a Compose UI implemented in source.
- **BlogVsn → Shipped.** Live at `blogvsn.vercel.app`, serving a real Blogger feed.
- **TheMovie → Applied.** Complete client architecture (Retrofit, kotlinx.serialization,
  OkHttp cache, DataStore watchlist, Firebase Auth) but no release artifact. Calling it
  shipped would be false.
- **JuiceTracker → Applied.** A real build (Compose + RecyclerView + Room) used to learn
  interop; the status line says "source only, learning build".
- **Portfolio Website → Applied.** It is live, but it is also the page you are reading —
  a self-referential entry with no release artifact. It is placed with the engineering
  work rather than promoted into a product tier; this is a judgement call and is stated
  as one.
- **Kathmandu → Foundations.** Built to complete *Android Basics with Compose*.
- **SMS → Foundations.** First-year C coursework: binary file I/O, no database.
- **BMSK → Foundations.** A single-file Kotlin OOP exercise.

Two consequences are intentional:

1. The tier headings are visible in the UI, so a reader can see that three projects are
   coursework before clicking anything.
2. The tier assignment is data, not layout. Moving a project between tiers is a one-line
   edit, and the filters continue to work across tiers.

---

## 4. Home and About changes

### Home (`/`)

The page now reads as argument → proof → method → evidence → contact.

| Section | Before | After |
| --- | --- | --- |
| 1 | Hero | Unchanged |
| 2 | Skills/tech grid | **Capabilities** — Product framing, Data & systems, Interface, each anchored to a real project and linking to it |
| 3 | Generic project cards | **Selected work** — a wide Avalokan card with status, thesis, APK/source actions, then Tasks and BlogVsn cards |
| 4 | "My process" bullets | **How I build** — Brief → Model → Layers → Ship, each step carrying a real artifact from Avalokan or Tasks |
| 5 | — | **Evidence** — Avalokan v1.0.0 release, Tasks v2.1.0 release, BlogVsn live site, GitHub source, with an explicit line that no user counts or performance numbers are claimed |
| 6 | Journey timeline | Removed (duplicated About, and the timeline belongs on About) |
| 7 | Testimonials | Kept unchanged, now between evidence and writing |
| 8 | Writing | Kept, trimmed to three posts, with the "All blogs" affordance |
| 9 | CTA | Kept; copy now names product engineering and Android roles explicitly |

All destination URLs, APK links, and the section anchors (`#capabilities-heading`,
`#selected-heading`, `#approach-heading`, `#evidence-heading`, `#writing-heading`,
`#contact-cta-heading`) are new or preserved as required; no public URL changed.

### About (`/about`)

- Hero kept, but the identity line now reads as a definition rather than a slogan, and
  the four metadata facts are Location / Focus / Stack / Approach.
- **Journey** cut to four stages: Foundations in C (2024) → The web, then Kotlin (2025) →
  Android with Compose (late 2025 – early 2026) → Shipping complete applications
  (2026 – now, marked active). Each stage names what was actually built.
- **Working principles** kept as Build / Break / Share with the "Build again" close.
- **Toolkit** regrouped into Product / Data / Interface / Android, limited to tools that
  appear in the projects on this site, each with a one-line note.
- **Beyond code** kept (Nepal, Sanskrit & spirituality, technology events, writing,
  beyond apps).
- **CTA** now says "I'm looking for teams where the app is the product", which sets a
  hiring expectation instead of a generic invitation.

Accessibility fix applied during this phase: the section-number labels used
`text-accent/70`, which failed contrast at 390 px on the dark canvas. All five now use
`text-accent-soft`.

---

## 5. New components

### `DecisionList`

- Renders an ordered list; each item has a numbered heading and a three-column
  `<dl>` of **Context**, **Choice**, **Trade-off** at `sm+`, stacking to one column on
  mobile.
- `alternative` is optional and, when present, prints as a separate paragraph prefixed
  **"Alternative (not implemented):"** so a rejected option can never be read as shipped.
- Returns `null` for an empty array, so a project without decisions simply has no
  section rather than an empty shell.
- No `div` used where a definition list is correct; numbering is `aria-hidden` because it
  is visual only.

### `DataModelTable`

- A real `<table>` with `<caption>` (screen-reader only), `<thead>`, `<th scope="col">`,
  and `<th scope="row">` for the entity name.
- At `md+`: four columns — Entity, Important fields, Responsibility, Note.
- Below `md`: the table switches to `display: block` and each row becomes a card with
  visible micro-labels (Fields / Responsibility / Note) that are `md:hidden` on desktop,
  so no column header is lost and no horizontal scroll is introduced.
- Verified: at 390 px `docScrollWidth == docClientWidth == 390`; the table renders at
  `display: block` with `348 px` inside a `350 px` wrapper; at 1280 px it renders as
  `table`/`table-row`/`table-cell`.

### `projectGrid.jsx`

- Loads `TIERS` from the data file and filters inside each tier, so the filter and the
  grouping cannot disagree.
- Shipped tier uses the wide feature card for the first project; Applied and Foundations
  use compact cards; the Foundations grid is three-up at `lg`.
- Keeps the original filter chips, empty state, status pills, and a single card-level
  link per project with separate GitHub / Live / APK actions above it.

---

## 6. Documented decisions and models

Every entry below was written after reading the repository source. Where a claim could
not be supported, it was removed rather than softened.

### Avalokan — 5 decisions, 5 model rows

Decisions: Room as the UI's read stream; only server-confirmed data may remove cache;
the database is a disposable cache (destructive fallback plus a real v9→v10 migration);
relationships are ID lists, not foreign keys; device-local preferences stay out of
Firestore.

Model rows: `PlaceItem` (`places`), `EventItem` (`events`), `StoryItem` (`stories`),
`SnapshotBatch` (sync layer, not persisted), `PreferencesStore` (DataStore).

One alternative is labelled not-implemented: reading Firestore directly from ViewModels.

Accuracy fix: the profile feature card previously implied that saved places and stats
sync to `users/{uid}`. Firestore only stores `displayName`, `bio`, a remote `avatarUrl`,
and `updatedAt`; saved places and visited/saved/favourite counts come from DataStore.
The card now says exactly that.

### Tasks — 5 decisions, 5 model rows

Decisions: seed categories in both migration and creation; deleting a category moves its
tasks to Personal instead of deleting them; manual dependency injection through
`AppContainer`; local-only persistence; `Flow` from Room into `StateFlow` in ViewModels.

Model rows: `ToDoItem` (`Tasks`), `Category` (`Categories`), `UserPreferences`
(DataStore), `DateConverters`, `FocusUiState` (runtime state).

Notable honest detail: `category` is a string label, not a Room foreign key, and cloud
sync is described as roadmap only.

### TheMovie — 4 decisions, 6 model rows

Decisions: two cache layers with different jobs (OkHttp 10 MB disk cache + a five-minute
in-memory first-page/detail cache with stale fallback); API key attached in an interceptor
with logging reduced in release; watchlist serialised as JSON in DataStore; Firebase Auth
owns identity while DataStore owns profile fields.

Model rows: `Movie`, `MovieApiResponse`, `MovieDetail`, `Genre`, `AuthState / AuthUser`,
`UserPreferences`.

Accuracy fixes: "full offline support" became "cached reads with a stale fallback", which
is what the repository does; the API-key-in-APK limitation is stated, with a backend
proxy labelled not implemented; email verification and Google sign-in are described as
roadmap, not shipped.

### BlogVsn — 4 decisions, 3 model rows

Decisions: Blogger is the CMS (latest three posts only; search and tag chips are
presentational); all data fetching happens in the browser on a static Vercel build;
Google sign-in is identity display, not authorization; contact delivery is client-side
through EmailJS.

Model rows: Blogger post (external API), Google profile (`localStorage: user`), contact
payload (EmailJS template).

Accuracy fixes:

- The old "OAuth Callback Logic" challenge described redirect-URI juggling that the
  source does not perform. Replaced with three limitations that are visible in the code:
  the Blogger API key ships in the browser request URL, post HTML is truncated as a
  string before `dangerouslySetInnerHTML`, and the decoded profile sits in
  `localStorage`.
- The sidebar "Data Flow" no longer implies sign-in gates content.

### Projects without evidence sections

JuiceTracker, Kathmandu, SMS, BMSK, and Portfolio Website intentionally have no
`decisions` or `dataModel`. They are small or coursework-scale, the source does not
support a meaningful engineering-decision narrative, and inventing one would be exactly
the failure this phase exists to fix.

---

## 7. Verification sources

Read directly from cloned repositories under
`C:\Users\baburam\AppData\Local\Temp\opencode\repos\`:

| Project | Evidence inspected |
| --- | --- |
| Avalokan | `data/event/EventItem.kt`, `data/story/StoryItem.kt`, `data/firestore/FirestoreCachePolicy.kt`, `data/local/UserPreferences.kt`, `data/local/PreferencesStore.kt`, `data/di/AppModule.kt`, `data/AvalokanMigrations.kt`, `data/user/userRepository.kt`, `data/auth/LoginAttemptLimiter.kt`, `ui/profile/ProfileScreen.kt` |
| Tasks | `data/ToDoItem.kt`, `data/Category.kt`, `data/ToDoDatabase.kt`, `data/ToDoDao.kt`, `data/CategoryDao.kt`, `data/OfflineToDoRepository.kt`, `data/AppContainer.kt`, `data/preference/UserPreferences.kt`, `ui/screens/FocusViewModel.kt`, `build.gradle.kts`, `gradle/libs.versions.toml` |
| TheMovie | `model/Movie.kt`, `data/MovieRepository.kt`, `data/WatchlistRepository.kt`, `data/PreferencesRepository.kt`, `data/UserPreferences.kt`, `data/auth/AuthState.kt`, `network/MovieApiService.kt`, `network/RetrofitClient.kt`, `MovieApplication.kt` |
| BlogVsn | `src/App.jsx`, `src/Pages/Home.jsx`, `src/Pages/Login.jsx`, `src/Pages/Contact.jsx`, `src/Components/IntroPost.jsx`, `src/Components/Search.jsx`, `package.json`, `vite.config.js`, `vercel.json` |

Release and live-status evidence:

- Avalokan release tag `v1.0.0` and APK URL already used by the site.
- Tasks "latest" release URL, version string `v2.1.0` shown in the project data.
- BlogVsn live deployment at `https://blogvsn.vercel.app/`.

---

## 8. Verification results

Run against the final build (`dist` served on `http://localhost:4173` with production CSP,
headless Edge via CDP).

### Lint

`npm run lint` — clean, no warnings.

### Build

- Prerender: 14 public routes + `/404` written as static HTML (15 documents).
- Route-manifest parity check passes.
- `dist/sitemap.xml` written.
- Single JS chunk: **620.86 kB raw / 181.35 kB gzip**.
- Expected Vite warning: "Some chunks are larger than 500 kB after minification." Code
  splitting is Phase 4 scope and was deliberately not addressed here.

### Static route audit (`check-dist.mjs`)

16 HTML documents checked, **1 failing** — `google2e0ee218d053ef6b.html`, the Google
Search Console verification file, which has no `h1`, title, description, or canonical by
design. Every real route reports exactly one `h1`, a canonical URL, and JSON-LD.

### Runtime route audit (all 14 routes, 1280 px)

Every route rendered with **one `h1`**, non-trivial `<main>` content, and **zero console
or runtime errors**. Flagship pages reported one table each and 5 / 5 / 4 / 4 decision
entries:

| Route | h1 | h2 | table | decisions |
| --- | --- | --- | --- | --- |
| `/` | 1 | 9 | 0 | 0 |
| `/about` | 1 | 7 | 0 | 0 |
| `/projects` | 1 | 5 | 0 | 0 |
| `/contact` | 1 | 2 | 0 | 0 |
| `/privacy` | 1 | 9 | 0 | 0 |
| `/projects/avalokan` | 1 | 12 | 1 | 5 |
| `/projects/todo` | 1 | 9 | 1 | 5 |
| `/projects/themovie` | 1 | 9 | 1 | 4 |
| `/projects/blogvsn` | 1 | 8 | 1 | 4 |
| `/projects/juicetracker` | 1 | 6 | 0 | 0 |
| `/projects/kathmandu` | 1 | 6 | 0 | 0 |
| `/projects/sms` | 1 | 7 | 0 | 0 |
| `/projects/bmsk` | 1 | 7 | 0 | 0 |
| `/projects/this` | 1 | 5 | 0 | 0 |

### Filters and links

- **All** → 9 cards across 3 tiers: Shipped 3, Applied 3, Foundations 3.
- **Android** → 5 (2 / 2 / 1).
- **Web** → 2 (1 / 1).
- **C** → 1 (Foundations).
- **Experiments** → 1 (Foundations).
- All nine cards resolve to their expected `/projects/*` route; no tier is rendered when
  its filtered list is empty, and the empty state exists for a category with no matches.
- Home evidence links verified: Avalokan release tag, Tasks latest release, BlogVsn live
  site, GitHub profile — all `target="_blank"` with `rel="noopener noreferrer"`.

### Accessibility and responsive behaviour

`axe-core` (violations only, serious + critical treated as failures):

- `/`, `/projects`, `/projects/avalokan`, `/contact` at 1280; `/` at 390.
- `/about`, `/projects/todo`, `/projects/themovie`, `/projects/blogvsn` at both 1280 and 390.

Result: **0 failing checks, 0 serious or critical violations** on the final build. The
earlier `about@390` contrast violation on `text-accent/70` is resolved.

Other interaction checks (home, projects, avalokan, contact): header fit at 768/1024/1280/1440,
mobile menu open/close with `aria-expanded`, theme switching and persistence, and the
lightbox open/Escape/restore-focus flow — **0 failing checks**.

Layout checks at 390 px:

- `/`, `/projects`, `/about`, `/projects/avalokan`, `/projects/todo` → `docScrollWidth ==
  docClientWidth == 390` (no horizontal overflow).
- Sticky header stays at `top: 0`, height 65, `z-index: 50`.
- Data model tables stack as labelled cards with no clipping.

---

## 9. Missing evidence

Called out so it is not mistaken for an oversight:

1. **No usage, download, or retention metrics exist for any project.** Nothing in the UI
   claims any, and the Evidence section says so explicitly.
2. **No performance measurements are published.** No Lighthouse scores, frame timings,
   or API latency numbers appear anywhere in Phase 3 copy.
3. **TheMovie, JuiceTracker, Kathmandu, SMS, BMSK, and Portfolio have no decisions or
   data-model sections.** The source supports a status line and a thesis, not a design
   rationale at the depth used for the flagship projects.
4. **Tasks reminder scheduling** is described at the preference level
   (`smartRemindersEnabled`); the exact notification scheduling behaviour was not
   documented as a decision because it was not traced end to end.
5. **BlogVsn has no server-side validation or sanitisation** and no tests; that is stated
   as a limitation rather than a decision.
6. **No automated test suites were found in any of the four flagship repositories**, so
   no "tested by" or coverage claim is made.
7. **Portfolio tier placement** (Applied rather than Shipped) is a judgement call, not a
   verifiable fact.

---

## 10. Phase 4 recommendations

Ordered by value per unit of risk:

1. **Split the 620 kB bundle.** The build warns on every run. Route-level
   `React.lazy` for the nine project components plus a `manualChunks` split for
   `framer-motion` and `react-icons` should remove the warning without changing any route.
   Verify the prerender output still matches the route manifest afterwards.
2. **Image pipeline.** Case-study screenshots are PNGs up to several hundred kB and are
   the largest remaining payload. Move to AVIF/WebP with explicit `width`/`height` and
   `srcset`, and confirm CLS stays at zero on `/projects` and the flagship pages.
3. **CI guardrails.** Add a workflow running `lint`, `build`, the prerender parity check,
   the static route audit, and an axe pass on the nine audited page/width combinations.
   The scripts already exist in the verification toolkit; they need to be moved into the
   repository.
4. **A11y regression coverage.** Encode the current axe baseline as a test so the
   `text-accent/70` class of regression cannot return.
5. **Optional: extend evidence depth selectively.** JuiceTracker is the one non-flagship
   project with a defensible decision story (Compose/View interop, Room, StateFlow). If
   more depth is wanted, document that one from source — and nothing else.
6. **Keep the "no invented numbers" rule.** Any future section that adds metrics needs a
   source (Play Console, release stats, a measured run) recorded at the same time.

Stop point: Phase 4 has not been started. No code-splitting, image conversion, dependency
change, or CI file was added in this phase.
