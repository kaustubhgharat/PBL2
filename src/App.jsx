import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Awards from "./components/Awards";
import Research from "./components/Research";
import Position from "./components/Position";
import Project from "./components/Project";
import Resources from "./components/Resources";
import Academic from "./components/Academic";
import Publications from "./components/Publications";
import Talks from "./components/Talks";
import Patents from "./components/Patents";
import Contact from "./components/Contact";
import '@fontsource/montserrat';
import '@fontsource/montserrat/700.css';

function App() {
  return (
    <div className="bg-black">
      <Router>  {/* Now using HashRouter properly */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/research" element={<Research />} />
          <Route path="/positions" element={<Position />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/academic" element={<Academic />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/talks" element={<Talks />} />
          <Route path="/patents" element={<Patents />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
