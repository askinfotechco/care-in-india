import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/about";
import Contact from "./Pages/contact";
import Services from "./Pages/services";
import Team from "./Pages/team";
import SignIn from "./Pages/signIn";
import SignUp from "./Pages/signUp";
import Radiology from "./Pages/secondaryLanding/radiology";
import Surgery from "./Pages/secondaryLanding/surgery";
import Dental from "./Pages/secondaryLanding/dental";
import TeamDetails from "./Pages/secondaryLanding/teamDetails";

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
        <Route path="/services/radiology" element={<Radiology />} />
        <Route path="/services/surgery" element={<Surgery />} />
        <Route path="/services/dental" element={<Dental />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/teamDetails/:regId" element={<TeamDetails />} />
      </Routes>
    </Router>
  );
}

export default RouterFile;
