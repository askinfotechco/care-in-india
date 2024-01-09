import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/about";
import Contact from "./Pages/contact";
import Services from "./Pages/services";
import Team from "./Pages/team";

function RouterFile() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  );
}

export default RouterFile;
