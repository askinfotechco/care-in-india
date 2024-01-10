import React from "react";
import companyLogo from "../assets/image/logo-img.png"

export default function NavBar() {
  return (
    <div>
      {" "}
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="index.html">
          <img
            src={companyLogo}
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mr-auto">
            <li className="nav-item active ">
              <a className="nav-link p-0 text-white" href="/">
                Home
                {/* <span className="sr-only">(current)</span> */}
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
                Team{" "}
              </a>
            </li>
            <li className="nav-item dropdown pr-lg-0">
              <a
                className="nav-link dropdown-toggle p-0 text-white"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Blog
              </a>
              <div
                className="dropdown-menu p-0"
                aria-labelledby="navbarDropdown"
              >
                <a className="dropdown-item" href="faq.html">
                  Faq
                </a>
                <a className="dropdown-item" href="four-column.html">
                  four-column
                </a>
                <a className="dropdown-item" href="infinite-scroll.html">
                  infinite-scroll
                </a>
                <a className="dropdown-item" href="load-more.html">
                  load-more
                </a>
                <a className="dropdown-item" href="one-column.html">
                  one-column
                </a>
                <a className="dropdown-item" href="six-colum-full-wide.html">
                  six-colum-full-wide
                </a>
                <a className="dropdown-item" href="three-column.html">
                  three-colum-sidbar
                </a>
                <a className="dropdown-item" href="three-colum-sidbar.html">
                  three-column
                </a>
                <a className="dropdown-item" href="two-column.html">
                  two-column
                </a>
              </div>
            </li>
            <li className="nav-item pr-0">
              <a className="nav-link p-0 text-white" href="/contact">
                Contact{" "}
              </a>
            </li>
          </ul>
          <a href="tel:+12345678" className="navbar-btn text-white">
            <i className="fas fa-phone-volume"></i>
            +1 234 56 78
          </a>
        </div>
      </nav>
    </div>
  );
}
