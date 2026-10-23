import { Route, Routes } from 'react-router-dom'
import { TransitionProvider } from './Components/TransitionProvider'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Privacy from './Pages/Privacy'
import NotFound from './Pages/NotFound'

export default function App() {
  return (
    <TransitionProvider>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/projects/*" element={<Projects />}/>
        <Route path="/privacy" element={<Privacy />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </TransitionProvider>
  )
}