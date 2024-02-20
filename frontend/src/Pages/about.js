import React from "react";
import NavBar from "../molecules/navBar_bkp";
import smallLeftCurveImg from "../assets/image/small-left-curve-img.png";
import smallRightCurveImg from "../assets/image/small-right-curve-img.png";
import funFactsIcon1 from "../assets/image/fun-facts-icon1.png";
import funFactsIcon2 from "../assets/image/fun-facts-icon2.png";
import funFactsIcon3 from "../assets/image/fun-facts-icon3.png";
import funFactsIcon4 from "../assets/image/fun-facts-icon4.png";
import formLeftImg from "../assets/image/form-left-img.png";
import clientLogoImg1 from "../assets/image/client-logo-img1.png";
import clientLogoImg2 from "../assets/image/client-logo-img2.png";
import clientLogoImg3 from "../assets/image/client-logo-img3.png";
import clientLogoImg4 from "../assets/image/client-logo-img4.png";
import clientLogoImg5 from "../assets/image/client-logo-img5.png";
import clientLogoImg6 from "../assets/image/client-logo-img6.png";

import professionalDoctorImg from "../assets/image/professional-doctor-img.png";
import coreValueLeftImg from "../assets/image/core-value-left-img.png";
import coreValueBoxIcon1 from "../assets/image/core-vaule-box-icon1.png";
import coreValueBoxIcon2 from "../assets/image/core-vaule-box-icon2.png";
import coreValueBoxIcon3 from "../assets/image/core-vaule-box-icon3.png";
import professionalBoxImg1 from "../assets/image/professional-box-img1.png";
import professionalBoxImg2 from "../assets/image/professional-box-img2.png";
import professionalBoxImg3 from "../assets/image/professional-box-img3.png";
import FooterDetails from "./footerDetails";
import NavBarTop from "../molecules/navBar";

export default function About() {
  return (
    <div>
      {/* <div className="w-100 float-left top-bar-main-con text-white text-xl-left text-lg-left text-md-left text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="top-bar-left-con ">
                <i className="fas fa-map-marker-alt"></i>
                <span>King Street Melbourne, 3000, Australia</span>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-xl-end justify-content-lg-end justify-content-md-end justify-content-center">
              <div className="top-bar-right-con d-flex">
                <span>Get Social:</span>
                <ul className="list-unstyled mb-0">
                  <li className="float-left">
                    <a href="https://www.facebook.com/" className="text-white">
                      <i className="fab fa-facebook-square"></i>
                    </a>
                  </li>
                  <li className="float-left">
                    <a href="https://twitter.com/?lang=en" className="text-white">
                      <i className="fab fa-twitter-square"></i>
                    </a>
                  </li>
                  <li className="float-left">
                    <a href="https://www.pinterest.com/" className="text-white">
                      <i className="fab fa-pinterest-square"></i>
                    </a>
                  </li>
                  <li className="float-left">
                    <a href="https://www.youtube.com/" className="text-white">
                      <i className="fab fa-youtube-square"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <!-- top-bar-section-->
      <!-- header-and-banner-section --> */}
      <div className="w-100 float-left header-and-banner-con banner-overlay-img">
        <div className="container">
          <div className="overlay-img">
            {/* <!-- navbar-start --> */}
            <NavBarTop />
            {/* <!-- navbar-end -->
               <!-- banner-start --> */}
            <section>
              <div className="w-100 float-left generic-banner-con text-xl-left text-lg-left text-center">
                <div className="container">
                  <div className="generic-banner-content text-white text-center">
                    <h1>About Us</h1>
                    <p className="text-white mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor
                      <br /> incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {/* <!-- banner-end --> */}
          </div>
        </div>
      </div>
      {/* <!-- header-and-banner-section -->
      <!-- quality-system-section --> */}
      <section>
        <div className="w-100 float-left quality-system-con Experince-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 d-flex align-items-center">
                <div className="quality-system-left-con">
                  <h2>Professional Doctor With Years Of Experince</h2>
                  <p>
                    Seram ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eius mod tempor incididunt.
                  </p>
                  <p>
                    Aenean leo ligula, porttitor eu consequat vitae eleifend ac
                    enim aliqu am lorem ante dapibus in viverra quis feugiata
                    tellus.
                  </p>
                  <div className="quality-system-list">
                    <ul className="list-unstyled">
                      <li className="position-relative">
                        <i className="fas fa-circle"></i>24 Hour Service
                      </li>
                      <li className="position-relative">
                        <i className="fas fa-circle"></i>Emergency Cases
                      </li>
                      <li className="position-relative">
                        <i className="fas fa-circle"></i>Expert Doctors
                      </li>
                    </ul>
                  </div>
                  <div className="quality-system-list">
                    <ul className="list-unstyled">
                      <li className="position-relative">
                        <i className="fas fa-circle"></i>Update Covid-19
                      </li>
                      <li className="position-relative">
                        <i className="fas fa-circle"></i>24/7 Help Center
                      </li>
                      <li className="position-relative">
                        <i className="fas fa-circle"></i>Modern Clinic
                      </li>
                    </ul>
                  </div>
                  <a href="faq.html" className="appointment-btn">
                    Learn More
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 d-md-flex align-items-md-end">
                <div className="quality-system-right-con position-relative text-center overlay-img">
                  <figure className="mb-0">
                    <img
                      src={professionalDoctorImg}
                      alt="professional-doctor-img"
                      className="img-fluid human-img"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- quality-system-section -->
      <!-- core-vaule-section --> */}
      <section>
        <div className="w-100 float-left core-vaule-con">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 d-md-flex align-items-md-end order-xl-0 order-lg-0 order-md-0 order-2">
                <div className="form-left-con core-vaule-left-con position-relative text-center">
                  <figure className="mb-0">
                    <img
                      src={coreValueLeftImg}
                      alt="form-left-img"
                      className="mb-0 img-fluid human-img"
                    />
                  </figure>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="core-vaule-right-con text-xl-left text-lg-left text-md-left text-center">
                  <div className="core-vaule-title">
                    <h2>Our Core Values And Principle</h2>
                    <p>
                      Seram ipsum dolor sit amet, consectetur adipiscing elit,
                      sed doeius mod tempor incididunt aenean leo.
                    </p>
                  </div>
                  <div className="core-vaule-box-con">
                    <div className="core-vaule-box-item position-relative">
                      <figure className="mb-0">
                        <img
                          src={coreValueBoxIcon1}
                          alt="core-vaule-box-icon"
                          className="img-fluid"
                        />
                      </figure>
                      <div className="core-vaule-box-title">
                        <h5>Qualified Doctors</h5>
                        <span className="d-block">
                          Nullam dictum felis eu pede mollis pretium. Integer
                          <br /> tinciduntras dapibus vivamus elementum.
                        </span>
                      </div>
                    </div>
                    <div className="core-vaule-box-item position-relative">
                      <figure className="mb-0">
                        <img
                          src={coreValueBoxIcon2}
                          alt="core-vaule-box-icon"
                          className="img-fluid"
                        />
                      </figure>
                      <div className="core-vaule-box-title">
                        <h5>24/7 Helpdesk</h5>
                        <span className="d-block">
                          Cras dapibus vivamus elementum semper nisi enean
                          <br /> vulputate eleifend am eget duieget dui.
                        </span>
                      </div>
                    </div>
                    <div className="core-vaule-box-item position-relative mb-0">
                      <figure className="mb-0">
                        <img
                          src={coreValueBoxIcon3}
                          alt="core-vaule-box-icon"
                          className="img-fluid"
                        />
                      </figure>
                      <div className="core-vaule-box-title">
                        <h5>Latest Drugs</h5>
                        <span className="d-block">
                          Quisque rutrum aenean imperdiet etiam ultricies nisi{" "}
                          <br />
                          vel augue curabitur ullamcorper ultricies nisi.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- core-vaule-section -->
      <!-- fun-facts-section--> */}
      
      <section>
        <div className="w-100 float-left fun-facts-con  pt-0 pb-0">
          <div className="container">
            <div className="about-fun-facts-con banner-overlay-img">
              <div className="text-center overlay-img about-fun-facts-title">
                <h2 className="text-white">
                  Our Doctors are Specialist
                  <br />& Experienced
                </h2>
              </div>
              <div className="fun-facts-box-con text-sm-left text-center pt-0 overlay-img">
                <div className="row bg-white">
                  <div className="col-lg-3 col-md-6 col-6 pl-0 pr-0 border-right-0">
                    <div className="fun-facts-box-item d-sm-flex align-items-sm-center">
                      <figure className="mb-0 d-inline-block">
                        <img
                          src={funFactsIcon1}
                          alt="fun-facts-icon1"
                          className="img-fluid"
                        />
                      </figure>
                      <div className="fun-facts-item-content d-inline-block">
                        <div className="position-relative fun-facts-item-title d-inline-block">
                          <h2 className="count">814</h2>
                          <span>+</span>
                        </div>
                        <p className="mb-0">Happy Patients</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-6 pl-0 pr-0 border-right-0">
                    <div className="fun-facts-box-item d-sm-flex align-items-sm-center">
                      <figure className="mb-0 d-inline-block">
                        <img
                          src={funFactsIcon2}
                          alt="fun-facts-icon1"
                          className="img-fluid"
                        />
                      </figure>
                      <div className="fun-facts-item-content d-inline-block">
                        <div className="position-relative fun-facts-item-title d-inline-block">
                          <h2 className="count">522</h2>
                          <span>+</span>
                        </div>
                        <p className="mb-0">Hospital Room</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-6 pl-0 pr-0 border-right-0">
                    <div className="fun-facts-box-item d-sm-flex align-items-sm-center">
                      <figure className="mb-0 d-inline-block">
                        <img
                          src={funFactsIcon3}
                          alt="fun-facts-icon1"
                          className="img-fluid"
                        />
                      </figure>
                      <div className="fun-facts-item-content d-inline-block">
                        <div className="position-relative fun-facts-item-title d-inline-block">
                          <h2 className="count">99</h2>
                          <span>+</span>
                        </div>
                        <p className="mb-0">Qualified Doctor</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-6 pl-0 pr-0">
                    <div className="fun-facts-box-item d-sm-flex align-items-sm-center">
                      <figure className="mb-0 d-inline-block">
                        <img
                          src={funFactsIcon4}
                          alt="fun-facts-icon1"
                          className="img-fluid"
                        />
                      </figure>
                      <div className="fun-facts-item-content d-inline-block">
                        <div className="position-relative fun-facts-item-title d-inline-block">
                          <h2 className="count">96</h2>
                          <span>%</span>
                        </div>
                        <p className="mb-0">Positive Feedback</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- fun-facts-section-->

      <!-- form-section --> */}
      {/* <section>
        <div className="w-100 float-left form-main-con" style={{marginTop: "100px"}}>
          <div className="container">
            <div className="text-center">
              <h2>Book An Appointment</h2>
              <p>
                Seram ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eius mod tempor incididunt aenean
                <br />
                leo ligula porttitor eu consequat vitae eleifend tac.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6 order-xl-0 order-lg-0 order-2">
                <div className="form-left-con position-relative text-center">
                  <figure className="mb-0">
                    <img
                      src={formLeftImg}
                      alt="form-left-img"
                      className="mb-0 img-fluid human-img"
                    />
                  </figure>
                </div>
              </div>
              <div className="col-lg-6">
                <form className="contact-form">
                  <div className="form-group">
                    <label for="exampleFormControlSelect1" className="text-white">
                      Department
                    </label>
                    <select
                      className="form-control position-relative"
                      id="exampleFormControlSelect1"
                    >
                      <option>General Health Checkup</option>
                      <option>General Health Checkup</option>
                      <option>General Health Checkup</option>
                      <option>General Health Checkup</option>
                      <option>General Health Checkup</option>
                    </select>
                    <i className="fas fa-angle-down"></i>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name:"
                          name="name"
                          id="name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email:"
                        />
                        <small
                          id="emailHelp"
                          className="form-text text-muted"
                        ></small>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input type="time" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <select className="form-control position-relative">
                          <option>Choose Doctor </option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                        <i className="fas fa-angle-down down-icon"></i>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="textarea form-group W-100">
                        <textarea
                          className="form-control "
                          placeholder="Message:"
                          rows="3"
                          name="comments"
                          id="comments"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn  appointment-btn">
                    Make Appointment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <!-- form-section -->
      <!-- news-letter-section --> */}
      <section>
        <div className="w-100 float-left news-letter-con">
          <div className="container">
            <div className="news-letter-inner-con banner-overlay-img">
              <div className="row overlay-img align-items-center">
                <div className="col-lg-6 col-md-5">
                  <div className="news-letter-title">
                    <h2 className="text-white mb-0">Subscribe to our Newsletter</h2>
                  </div>
                </div>
                <div className="col-lg-6 col-md-7">
                  <div className="news-letter-input-con position-relative">
                    <div className="news-letter-input-feild">
                      <input
                        type="email"
                        placeholder="Enter Your Email:"
                        className="w-100"
                      />
                    </div>
                    <button>
                      <i className="far fa-envelope"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- news-letter-section -->
      <!-- logo-section --> */}
      <div className="w-100 float-left logo-con">
        <div className="container">
          <div className="logo-inner-con">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-sm-4 col-4">
                <figure className="mb-0">
                  <img
                    src={clientLogoImg1}
                    alt="client-logo-img"
                    className="img-fluid"
                  />
                </figure>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-4 col-4">
                <figure className="mb-0">
                  <img
                    src={clientLogoImg2}
                    alt="client-logo-img"
                    className="img-fluid"
                  />
                </figure>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-4 col-4">
                <figure className="mb-0">
                  <img
                    src={clientLogoImg3}
                    alt="client-logo-img"
                    className="img-fluid"
                  />
                </figure>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-4 col-4">
                <figure className="mb-0">
                  <img
                    src={clientLogoImg4}
                    alt="client-logo-img"
                    className="img-fluid mb-0"
                  />
                </figure>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-4 col-4">
                <figure className="mb-0">
                  <img
                    src={clientLogoImg5}
                    alt="client-logo-img"
                    className="img-fluid mb-0"
                  />
                </figure>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-4 col-4">
                <figure className="mb-0">
                  <img
                    src={clientLogoImg6}
                    alt="client-logo-img"
                    className="img-fluid mb-0"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- logo-section -->
      <!-- weight-footer-section --> */}
      {/* <!-- weight-footer-section -->
      <!-- footer-section --> */}
      <FooterDetails />
    </div>
    
  );
}
