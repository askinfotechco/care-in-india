import React from "react";
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

import professionalDoctorImg from "../assets/image/professional-doctor-img.png";
import coreValueLeftImg from "../assets/image/core-value-left-img.png";
import coreValueBoxIcon1 from "../assets/image/core-vaule-box-icon1.png";
import coreValueBoxIcon2 from "../assets/image/core-vaule-box-icon2.png";
import coreValueBoxIcon3 from "../assets/image/core-vaule-box-icon3.png";
import aboutImage from "../static/images/CII_office.png";
import FooterDetails from "./footerDetails";
import NavBarTop from "../molecules/navBar";

export default function About() {
  return (
    <div>
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
              <div className="w-100 float-left generic-banner-con text-xl-left text-lg-left text-center mt-20 mb-3">
                <div className="container">
                  <div className="text-white text-center">
                    <h1>About Us</h1>
                    <p className="text-white mb-0">
                      CARE IN INDIA: Where Your Health Journey Begins!
                      <br />
                      <p className="text-sm text-white">
                        We see a world where individuals are equipped with the
                        knowledge and tools
                        <br /> to make informed choices about their health,
                        leading to longer, healthier, and more fulfilling lives.
                      </p>
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
        <div className="w-100 float-left quality-system-con Experince-section bg-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 d-flex align-items-center">
                <div className="quality-system-left-con">
                  <h4>Vision</h4>
                  <p className="text-black text-sm">
                    We envision a future where accessible, personalized, and
                    proactive healthcare empowers everyone to proactively manage
                    their well-being and prevent illness before it starts. We
                    see a world where individuals are equipped with the
                    knowledge and tools to make informed choices about their
                    health, leading to longer, healthier, and more fulfilling
                    lives.
                  </p>
                  <h4>Mission</h4>
                  <p className="text-black text-sm">
                    Our mission is to awaken, educate, and empower individuals
                    to take charge of their health. We achieve this by:
                  </p>
                  <ul>
                    <li>
                      <h6>Raising awareness:</h6>
                      <p className="text-black text-sm">
                        We strive to dispel myths and misconceptions around
                        preventive healthcare, providing accurate and easily
                        understandable information on various health conditions
                        and risk factors.
                      </p>
                    </li>
                    <li>
                      <h6>Equipping individuals:</h6>
                      <p className="text-black text-sm">
                        We offer tailored health assessments and personalized
                        guidance to help individuals understand their unique
                        health needs and choose the right preventive measures.
                      </p>
                    </li>
                    <li>
                      <h6>Empowering action:</h6>
                      <p className="text-black text-sm">
                        We provide convenient access to high-quality, affordable
                        preventive healthcare services, including health
                        checkups, screenings, and consultations with medical
                        professionals.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 d-md-flex align-items-md-center">
                <div className="position-relative text-center overlay-img">
                  <figure className="mb-0">
                    <img
                      src={aboutImage}
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

      <section>
        <div className="w-100 float-left quality-system-con Experince-section bg-white">
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

      <!-- logo-section --> */}
      <div className="w-100 float-left logo-con mt-5">
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
        <!-- footer-section --> */}
      <FooterDetails />
    </div>
  );
}
