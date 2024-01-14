import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/about";
import Contact from "./Pages/contact";
import Services from "./Pages/services";
import Team from "./Pages/team";
import SignIn from "./Pages/signIn";
import SignUp from "./Pages/signUp";

function RouterFile() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/aboutUs" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  );
}

export default RouterFile;
