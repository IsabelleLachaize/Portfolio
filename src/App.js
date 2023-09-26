import React from "react";
import "./index.css";
import Home from "./routes/Home";
import CV from "./routes/CV"
import About from "./routes/About";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";

import { Route, Routes } from "react-router-dom";

function App() { 
  return (
      <Routes>
        <Route path="" element={<Home />}/>
        <Route path="/cv" element={<CV />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
  );
}

export default App;
