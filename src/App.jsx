import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Awards from "./components/Awards";
import Research from "./components/Research";
import Position from "./components/Position";
import Bookchapters from "./components/Bookchapters";
import Resources from "./components/Resources";
import Conferencepublications from "./components/Conferencepublications";
import Talks from "./components/Talks";
import Patents from "./components/Patents";
import Contact from "./components/Contact";
import Newf from "./view/Newf.jsx"
import NewTalk from "./view/NewTalk.jsx";
import NewConferencePublication from "./view/NewConferencePublication.jsx";
import NewResearch from "./view/NewResearch.jsx";
import NewAward from "./view/NewAward.jsx";
import LoginPage from "./components/LoginPage.jsx";
import NewAbout from "./view/NewAbout.jsx";
import '@fontsource/montserrat';
import '@fontsource/montserrat/700.css';

function App() {
  return (
    <div className="bg-black">
      <Router>  {/* Now using HashRouter properly */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/new" element={<NewAbout />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/awards/new" element={<NewAward />} />
          <Route path="/research" element={<Research />} />
          <Route path="/research/new" element={<NewResearch />} />
          <Route path="/positions" element={<Position />} />
          <Route path="/Bookchapters" element={<Bookchapters />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/Conferencepublications" element={<Conferencepublications />} />
          <Route path="/Conferencepublications/new" element={<NewConferencePublication />} />
          <Route path="/talks" element={<Talks />} />
          <Route path="/talks/new" element={<NewTalk />} />
          <Route path="/patents" element={<Patents />} />
          <Route path="/patents/new" element={<Newf />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
