import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Notes from './Pages/Notes'
import Dev from './Pages/Dev'
import NotFound from './Pages/NotFound'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/projects/*" element={<Projects />}/>
        <Route path="/notes" element={<Notes />}/>
        <Route path="/dev" element={<Dev />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  )
}