import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import funFactsIcon1 from "../assets/image/fun-facts-icon1.png";
import funFactsIcon2 from "../assets/image/fun-facts-icon2.png";
import funFactsIcon3 from "../assets/image/fun-facts-icon3.png";
import funFactsIcon4 from "../assets/image/fun-facts-icon4.png";
import clientLogoImg1 from "../assets/image/client-logo-img1.png";
import clientLogoImg2 from "../assets/image/client-logo-img2.png";
import clientLogoImg3 from "../assets/image/client-logo-img3.png";
import clientLogoImg4 from "../assets/image/client-logo-img4.png";
import clientLogoImg5 from "../assets/image/client-logo-img5.png";
import clientLogoImg6 from "../assets/image/client-logo-img6.png";

import featureBoxIcon1 from "../assets/image/feature-box-icon1.png";
import featureBoxIcon2 from "../assets/image/feature-box-icon2.png";
import featureBoxIcon3 from "../assets/image/feature-box-icon3.png";
import featureBoxIcon4 from "../assets/image/feature-box-icon4.png";
import featureBoxIcon5 from "../assets/image/feature-box-icon5.png";
import featureBoxIcon6 from "../assets/image/feature-box-icon6.png";
import featureBoxIcon7 from "../assets/image/feature-box-icon7.png";
import featureBoxIcon8 from "../assets/image/feature-box-icon8.png";

import homeBanner from "../static/images/headerBanner-1.png";
import qualityMedicine from "../static/images/qualityImage.png";

import "../assets/css/animate.css";
import "../assets/css/custom-style.css";
import "../assets/css/mobile.css";
import "../assets/css/style.css";
import "../assets/css/super-classes.css";
import NavBarTop from "../molecules/navBar";
import FooterDetails from "./footerDetails";
import Blog from "./blog";
//import { Link } from "react-router-dom";

function Home() {
  return (
    <div classNameName="App">
      <div className="w-100 float-left header-and-banner-con banner-overlay-img">
        <div className="container">
          <div className="overlay-img">
            <NavBarTop />
            <section>
              <div className="w-100 float-left banner-con text-xl-left text-lg-left text-center">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 order-xl-0 order-lg-0 order-2">
                      <div>
                        <figure style={{ marginTop: "-50px" }}>
                          <img
                            src={homeBanner}
                            alt="Banner-Image"
                            className="img-fluid banner-left-img"
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="banner-right-content text-white">
                        <h5>Healthy. Everyday.</h5>
                        <h1>We are Providing Best and Affordable Healthcare</h1>
                        <a href="/team" className="appointment-btn">
                          Make Appointment
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* <!-- banner-end --> */}
          </div>
        </div>
      </div>
      {/* <!-- header-and-banner-section -->
      <!-- feature-box --> */}
      <section>
        <div className="w-100 float-left feature-box-con text-center">
          <div className="container">
            <div className="row bg-white">
              <div className="col-lg-3 col-md-3 col-sm-6  pl-0 pr-0">
                <a style={{ textDecoration: "none" }} href={"/team"}>
                  <div className="feature-box-item">
                    <figure>
                      <img
                        src={featureBoxIcon1}
                        alt="feature-box-icon"
                        className="img-fluid"
                        style={{ margin: "0 auto" }}
                      />
                    </figure>
                    <h5>Doctors</h5>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet consectetuer adipi.
                    </p>
                  </div>
                </a>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 pl-0 pr-0">
                <div className="feature-box-item ">
                  <figure>
                    <img
                      src={featureBoxIcon2}
                      alt="feature-box-icon"
                      className="img-fluid"
                      style={{ margin: "0 auto" }}
                    />
                  </figure>
                  <h5>Hospitals</h5>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetuer adipi.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 pl-0 pr-0">
                <div className="feature-box-item ">
                  <figure>
                    <img
                      src={featureBoxIcon3}
                      alt="feature-box-icon"
                      className="img-fluid"
                      style={{ margin: "0 auto" }}
                    />
                  </figure>
                  <h5>General Medicine</h5>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetuer adipi.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 pl-0 pr-0">
                <div className="feature-box-item ">
                  <figure>
                    <img
                      src={featureBoxIcon4}
                      alt="feature-box-icon"
                      className="img-fluid"
                      style={{ margin: "0 auto" }}
                    />
                  </figure>
                  <h5>Hospice Care</h5>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetuer adipi.
                  </p>
                </div>
              </div>
            </div>
            <div className="row bg-white">
              <div className="col-lg-3 col-md-3 col-sm-6 pl-0 pr-0 border-bottom-0">
                <div className="feature-box-item">
                  <figure>
                    <img
                      src={featureBoxIcon5}
                      alt="feature-box-icon"
                      className="img-fluid"
                      style={{ margin: "0 auto" }}
                    />
                  </figure>
                  <h5>Rehab</h5>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetuer adipi.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 pl-0 pr-0 border-bottom-0">
                <div className="feature-box-item">
                  <figure>
                    <img
                      src={featureBoxIcon6}
                      alt="feature-box-icon"
                      className="img-fluid"
                      style={{ margin: "0 auto" }}
                    />
                  </figure>
                  <h5>Dialysis Facilities</h5>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetuer adipi.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 pl-0 pr-0 border-bottom-0">
                <div className="feature-box-item">
                  <figure>
                    <img
                      src={featureBoxIcon7}
                      alt="feature-box-icon"
                      className="img-fluid"
                      style={{ margin: "0 auto" }}
                    />
                  </figure>
                  <h5>Health Schedule</h5>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetuer adipi.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 pl-0 pr-0 border-bottom-0 border-right-0">
                <div className="feature-box-item">
                  <figure>
                    <img
                      src={featureBoxIcon8}
                      alt="feature-box-icon"
                      className="img-fluid"
                      style={{ margin: "0 auto" }}
                    />
                  </figure>
                  <h5>Ambulance Call</h5>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetuer adipi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- feature-box -->
      <!-- quality-system-section --> */}
      <section>
        <div className="w-100 float-left quality-system-con">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 d-flex align-items-center">
                <div className="quality-system-left-con">
                  <h2>Our Quality System is Ready to Help You!</h2>
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
                  <a href="/team" className="appointment-btn">
                    Make Appointment
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="quality-system-right-con position-relative text-center">
                  <figure className="mb-0">
                    <img
                      src={qualityMedicine}
                      alt="quality-system-img"
                      className="img-fluid human-img"
                      // width={"1000px"}
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- offer-section -->
      <!-- fun-facts-section--> */}
      <section>
        <div className="w-100 float-left fun-facts-con">
          <div className="container">
            <div className="row text-xl-left text-lg-left text-center">
              <div className="col-lg-6">
                <div className="fun-facts-heading ">
                  <h2>A Healing Touch to Heal you Completely.</h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="fun-facts-content">
                  <p className=" mb-0">
                    Let the power of healing touch soothe your soul 🌿✨
                    #HealingTouch #InnerPeace #Wellness{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="fun-facts-box-con text-sm-left text-center">
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
                        alt="fun-facts-icon2"
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
                        alt="fun-facts-icon3"
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
                        alt="fun-facts-icon4"
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
      </section>

      {/*<!-- blog section --> */}
      <section>
        <Blog />
      </section>
      {/* <!-- blog section -->

      <!-- logo-section --> */}
      {/* <div className="w-100 float-left logo-con">
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
      </div> */}
      {/* <!-- logo-section -->
      <!-- weight-footer-section --> */}
      <FooterDetails />
    </div>
  );
}

export default Home;
