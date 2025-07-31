import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Skill from './Components/Skills';
import Projects from './Components/Projects';
import NotFound from "./Components/NotFound";

function App() {
  const location = useLocation();

  const knownPaths = ["/", "/About", "/Skills", "/Projects", "/Contact"];
  const hideNav = !knownPaths.includes(location.pathname);

  return (
    <>
      {!hideNav && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Skills" element={<Skill />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
