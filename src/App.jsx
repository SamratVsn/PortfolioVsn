import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import RouteFallback from './Components/RouteFallback'
import { lazyPage } from './routes/lazyPages'
import { STATIC_ROUTES } from './content/routes'

// The homepage stays in the initial bundle; every other page and all nine case
// studies are split and preloaded on demand (see src/routes/lazyPages.jsx).
const LAZY_PAGES = {
  about: lazyPage('about'),
  projects: lazyPage('projects'),
  contact: lazyPage('contact'),
  privacy: lazyPage('privacy'),
  'not-found': lazyPage('not-found'),
}

const PAGE_COMPONENTS = {
  home: Home,
  ...LAZY_PAGES,
}

const NotFoundPage = LAZY_PAGES['not-found']

export default function App() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        {STATIC_ROUTES.map((route) => {
          const Page = PAGE_COMPONENTS[route.id]
          // Projects owns its nested case-study routes under /projects/*.
          const path = route.id === 'projects' ? '/projects/*' : route.url
          return <Route key={route.id} path={path} element={<Page />} />
        })}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  )
}
