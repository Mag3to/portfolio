import React from "react";
import "./index.css";
import Home from "./Pages/Home";
import Project from "./Pages/Project";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
