# devPortfoli0

Personal portfolio of [Samrat Parajuli](https://www.samratparajuli0.com.np/) (SamratVsn) — an Android developer and systems engineer from Nepal.

Built with React 19, Vite 7, Tailwind CSS 4, and Framer Motion.

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

## Pages

| Route | Content |
|---|---|
| `/` | Landing page with hero, expertise grid, featured projects, testimonials |
| `/about` | Bio, skills, dev stack, current focus, learning roadmap |
| `/contact` | Contact form with EmailJS integration |
| `/projects` | Project grid listing all projects |
| `/projects/sms` | Student Management System (C, CLI, file I/O) |
| `/projects/bmsk` | Bank Management System (Kotlin, OOP, CLI) |
| `/projects/blogvsn` | BlogVsn Platform (React, OAuth, Blogger API) |
| `/projects/this` | Portfolio meta-project deep dive |
| `/dev` | Meditative philosophy page |
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

### Lint

```bash
npm run lint
```

## Deployment

Deployed on Vercel. The `vercel.json` rewrites all routes to `index.html` for SPA routing.

## SEO

- Per-page meta tags via `react-helmet-async`
- JSON-LD structured data (Person schema)
- Open Graph + Twitter Card support
- Sitemap with all pages
- Google Search Console verified

## License

MIT
