import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Projects from './Pages/Projects'
import NotFound from './Pages/NotFound'
import Dev from './Pages/Dev'
import Blog from './Pages/Blog'
import BlogPost from './Pages/BlogPost'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/projects/*" element={<Projects />}/>
        <Route path="/dev" element={<Dev />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/blog/:slug" element={<BlogPost />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  )
}

export default App
