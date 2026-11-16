# PortfolioVsn

Personal portfolio of [Samrat Parajuli](https://www.samratparajuli0.com.np/) (SamratVsn) — an Android developer and software engineer from Kathmandu, Nepal.

Built with React 19, Vite 7, Tailwind CSS 4, and Framer Motion. Every route is prerendered to static HTML at build time and hydrated on the client, so crawlers and social scrapers get real markup without a Node server.

**Live:** [samratparajuli0.com.np](https://www.samratparajuli0.com.np/) · **Blog:** [blog.samratparajuli0.com.np](https://blog.samratparajuli0.com.np/)

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build Tool | Vite 7 |
| Styling | Tailwind CSS 4 |
| Routing | React Router 7 |
| Animation | Framer Motion 12 |
| Icons | Lucide React, React Icons |
| SEO | Built-in `components/seoHead.js` + prerender (React 19, no helmet) |
| Email | EmailJS |
| Deployment | Vercel |

## Routes

| Route | Content |
|---|---|
| `/` | Landing page with hero, expertise grid, featured projects, timeline, writing |
| `/about` | Bio, skills, dev stack, current focus, testimonials, beyond-code |
| `/contact` | Contact form with EmailJS integration |
| `/projects` | Project grid with category filtering |
| `/projects/avalokan` | Avalokan — native Android heritage explorer for Nepal (Kotlin, Compose, Firebase, Room) |
| `/projects/todo` | Tasks — Android productivity app (Kotlin, Compose, Room) |
| `/projects/themovie` | The Movie App — TMDB browser (Kotlin, Compose, Retrofit) |
| `/projects/juicetracker` | Juice Tracker — Compose + Views interop (Kotlin, Room) |
| `/projects/kathmandu` | Kathmandu My-City — Material 3 recommendation app |
| `/projects/sms` | Student Management System (C, CLI, file I/O) |
| `/projects/bmsk` | Bank Management System (Kotlin, OOP, CLI) |
| `/projects/blogvsn` | BlogVsn Platform (React, OAuth, Blogger API) |
| `/projects/this` | Portfolio meta-project deep dive |
| `/privacy` | Privacy policy |
| `*` | 404 page (prerendered as `404.html`, served with a real 404 status, `noindex`) |

## Links

- Portfolio: [https://www.samratparajuli0.com.np/](https://www.samratparajuli0.com.np/)
- Blog: [https://blog.samratparajuli0.com.np/](https://blog.samratparajuli0.com.np/) — long-form writing, linked from the footer Blog button and the home page "Learning in public" section

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
npm run preview
```

The build runs `vite build`, then `scripts/prerender.mjs` renders every route in
`scripts/routes.mjs` to static HTML and generates `dist/sitemap.xml` from the same
route manifest.

### Lint

```bash
npm run lint
```

## Deployment

Deployed on Vercel. `vercel.json` rewrites each public route to its prerendered
`.html` file, permanently redirects duplicate `.html` URLs, `/index.html` and the
apex domain to the canonical `https://www.` URLs, and sets long-lived caching for
hashed assets.

## SEO

- Static, per-route prerendering — titles, descriptions, canonicals, Open Graph,
  Twitter Cards and JSON-LD are present in the initial HTML response
- One head-tag builder (`src/Components/seoHead.js`) used by both the prerenderer
  and client-side navigation, so tags are updated in place instead of duplicated
- Structured data: `Person` + `WebSite` site-wide; `ProfilePage` (home),
  `CollectionPage` (projects), `SoftwareApplication` / `SoftwareSourceCode`
  and `BreadcrumbList` on project pages
- `robots.txt`, generated `sitemap.xml`, and `llms.txt`
- Generated 1200×630 Open Graph image and compact PNG/ICO favicons
- Google Search Console verified

## License

MIT
