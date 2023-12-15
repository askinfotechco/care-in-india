import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import Home from "./pages/home";
import UserDetailsPage from "./pages/userDetailsPage";

function RoutersPage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/userProfile" element={<UserDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default RoutersPage;
