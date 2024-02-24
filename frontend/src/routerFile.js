import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
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
import VideoCall from "./Pages/videoCall";
import Appointment from "./Pages/appointment";

// Example authentication logic
const isAuthenticated = () => {
  // Check if the user is authenticated (e.g., by verifying authentication token)
  // Return true if authenticated, false otherwise
  return localStorage.getItem("role") === "doctor";
};

// PrivateRoute component for authorized routes
// PrivateRoute component for authorized routes
const PrivateRoute = (props) => {
  if (isAuthenticated()) {
    return <Route path={props.path} render={props.render} />;
  } else {
    <Navigate to="/signin" replace />;
  }
};

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
        <Route
          path="/appointment"
          element={
            isAuthenticated() ? <Appointment /> : <SignIn nonAuth={true} />
          }
        />
        <Route path="/services/radiology" element={<Radiology />} />
        <Route path="/services/surgery" element={<Surgery />} />
        <Route path="/services/dental" element={<Dental />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/teamDetails/:regId" element={<TeamDetails />} />
        <Route path="/videoCall" element={<VideoCall />} />
      </Routes>
    </Router>
  );
}

export default RouterFile;
