# PortfolioVsn

Personal portfolio of [Samrat Parajuli](https://www.samratparajuli0.com.np/) (SamratVsn) — an Android developer and software engineer from Kathmandu, Nepal.

Built with React 19, Vite 7, Tailwind CSS 4, and Framer Motion. Includes per-route static prerendering for SEO.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build Tool | Vite 7 |
| Styling | Tailwind CSS 4 |
| Routing | React Router 7 |
| Animation | Framer Motion 12 |
| Icons | Lucide React, React Icons |
| SEO | react-helmet-async |
| Email | EmailJS |
| Deployment | Vercel |

## Routes

| Route | Content |
|---|---|
| `/` | Landing page with hero, expertise grid, featured projects, timeline, notes |
| `/about` | Bio, skills, dev stack, current focus, testimonials, beyond-code |
| `/contact` | Contact form with EmailJS integration |
| `/projects` | Project grid with category filtering |
| `/projects/todo` | Tasks — Android productivity app (Kotlin, Compose, Room) |
| `/projects/themovie` | The Movie App — TMDB browser (Kotlin, Compose, Retrofit) |
| `/projects/juicetracker` | Juice Tracker — Compose + Views interop (Kotlin, Room) |
| `/projects/kathmandu` | Kathmandu My-City — Material 3 recommendation app |
| `/projects/sms` | Student Management System (C, CLI, file I/O) |
| `/projects/bmsk` | Bank Management System (Kotlin, OOP, CLI) |
| `/projects/blogvsn` | BlogVsn Platform (React, OAuth, Blogger API) |
| `/projects/this` | Portfolio meta-project deep dive |
| `/notes` | Blog-style notes with category filtering |
| `*` | 404 page with navigation links |

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

The build script runs `vite build` followed by `scripts/prerender.mjs` to generate static HTML for each route.

### Lint

```bash
npm run lint
```

## Deployment

Deployed on Vercel. The `vercel.json` rewrites all routes to their prerendered `.html` files for SPA routing with static generation.

## SEO

- Per-page meta tags via `react-helmet-async`
- Static prerendering for search engine crawlers
- JSON-LD structured data (Person + WebSite schema)
- Open Graph + Twitter Card support
- Sitemap, robots.txt, and `llms.txt`
- Google Search Console verified

## License

MIT
