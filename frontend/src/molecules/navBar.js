import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import companyLogo from "../assets/image/CIILogo.png";
import { Link } from "react-router-dom";
import UserProfile from "./userProfile";

export default function NavBarTop() {
  const [userEmail, setUserEmail] = useState();
  const [cookies, setCookie, removeCookie] = useCookies("jwt");

  useEffect(() => {
    setUserEmail(sessionStorage.getItem("email"));
  }, [sessionStorage]);

  const handleLogout = () => {
    // Add logout logic here
    removeCookie("jwt", { path: "/" });
    sessionStorage.removeItem("jwt");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("name");
    setUserEmail(sessionStorage.getItem("email"));
    console.log("Logging out...");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="index.html">
          <img
            src={companyLogo}
            width={150}
            alt="logo-img"
            className="img-fluid"
          />
        </a>
        <button
          className="navbar-toggler p-0 collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="hidden sm:ml-6 sm:flex sm:space-x-8" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mr-auto">
            <li className="nav-item active ">
              <a className="nav-link p-0 text-white" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link p-0 text-white" href="/aboutUs">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link p-0 text-white" href="/services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link p-0 text-white" href="/team">
                Team
              </a>
            </li>
            <li className="nav-item pr-0">
              <a className="nav-link p-0 text-white" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          {userEmail === null ? (
            <>
              <span>
                <Link className="navbar-btn text-white ml-60" to={"/signin"}>
                  {"Login"}
                </Link>
              </span>
              <span>
                <Link
                  className="navbar-btn text-white"
                  style={{ marginLeft: "15px" }}
                  to={"/signup"}
                >
                  {"Register"}
                </Link>
              </span>
            </>
          ) : (
            <span>
              <UserProfile handleLogout={handleLogout} />
            </span>
          )}

          {/* <a href="." className="navbar-btn text-white">
            Login
          </a>
          <a href="." className="navbar-btn text-white" style={{marginLeft: "15px"}}>
            Register
          </a> */}
        </div>
      </nav>
    </div>
  );
}
