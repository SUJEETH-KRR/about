import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import About from "./pages/About/About";
import Skill from "./pages/Skill/Skill";
import Project from "./pages/Project/Project";
import Resume from "./pages/Resume/Resume";
import Navbar from "./pages/Navbar/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
