import { Route, Routes } from 'react-router-dom'
import { TransitionProvider } from './Components/TransitionProvider'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Privacy from './Pages/Privacy'
import NotFound from './Pages/NotFound'
import { STATIC_ROUTES } from './content/routes'

const PAGE_COMPONENTS = {
  home: Home,
  about: About,
  projects: Projects,
  contact: Contact,
  privacy: Privacy,
}

export default function App() {
  return (
    <TransitionProvider>
      <Routes>
        {STATIC_ROUTES.map((route) => {
          const Page = PAGE_COMPONENTS[route.id]
          // Projects owns its nested case-study routes under /projects/*.
          const path = route.id === 'projects' ? '/projects/*' : route.url
          return <Route key={route.id} path={path} element={<Page />} />
        })}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TransitionProvider>
  )
}
