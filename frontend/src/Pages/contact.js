import React from "react";
import NavBarTop from "../molecules/navBar";
import clientLogoImg1 from "../assets/image/client-logo-img1.png";
import clientLogoImg2 from "../assets/image/client-logo-img2.png";
import clientLogoImg3 from "../assets/image/client-logo-img3.png";
import clientLogoImg4 from "../assets/image/client-logo-img4.png";
import clientLogoImg5 from "../assets/image/client-logo-img5.png";
import clientLogoImg6 from "../assets/image/client-logo-img6.png";
import scheduleIcon1 from "../assets/image/Schedule-icon1.png";
import scheduleIcon2 from "../assets/image/Schedule-icon2.png";
import scheduleIcon3 from "../assets/image/Schedule-icon3.png";
import scheduleIcon4 from "../assets/image/Schedule-icon4.png";
import FooterDetails from "./footerDetails";

export default function Contact() {
  return (
    <div>
      {/* <div className="w-100 h-10 float-left top-bar-main-con text-white text-xl-left text-lg-left text-md-left text-center">
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
                    <h1>Contact Us</h1>
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
<!-- Schedule-section --> */}
      <section>
        <div className="w-100 float-left Schedule-con">
          <div className="wrapper">
            <div className="Schedule-heading text-center">
              <h2>
                Make Schedule Easier and <br />
                Simpler for Patients
              </h2>
            </div>
            <div className="Schedule-box text-md-left text-center">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="Schedule-box-item position-relative w-100 float-left">
                    <figure className="mb-0 float-md-left overlay-img">
                      <img
                        src={scheduleIcon1}
                        alt="Schedule-icon"
                        className="img-fluid"
                      />
                    </figure>
                    <div className="Schedule-box-title float-md-left overlay-img">
                      <h5>Email</h5>
                      <span className="d-block">pawan@careinindia.co.in</span>
                      <span className="d-block">help@careinindia.co.in</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="Schedule-box-item position-relative w-100 float-left">
                    <figure className="mb-0 float-md-left overlay-img">
                      <img
                        src={scheduleIcon2}
                        alt="Schedule-icon"
                        className="img-fluid"
                      />
                    </figure>
                    <div className="Schedule-box-title float-md-left overlay-img">
                      <h5>Location</h5>
                      <span className="d-block">
                        FCA 3165, Street 4, Block A, SGM Nagar
                        <br />
                        Faridabad, New Delhi - 121001
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="Schedule-box-item position-relative w-100 float-left mb-md-0">
                    <figure className="mb-0 float-md-left overlay-img">
                      <img
                        src={scheduleIcon3}
                        alt="Schedule-icon"
                        className="img-fluid"
                      />
                    </figure>
                    <div className="Schedule-box-title float-md-left overlay-img">
                      <h5>Book your Appointment</h5>
                      <span className="d-block">+91-9971007292</span>
                      <span className="d-block">+91-9971007292</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="Schedule-box-item position-relative w-100 float-left mb-0">
                    <figure className="mb-0 float-md-left overlay-img">
                      <img
                        src={scheduleIcon4}
                        alt="Schedule-icon"
                        className="img-fluid"
                      />
                    </figure>
                    <div className="Schedule-box-title float-md-left overlay-img">
                      <h5>Working Hours</h5>
                      <span className="d-block">
                        Monday - Friday: 8AM - 9PM
                      </span>
                      <span className="d-block"> Weekends: 8AM - 5PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Schedule-section -->
<!-- contact-page-form --> */}
      <section>
        <div className="w-100 float-left contact-page-form-con">
          <div className="wrapper">
            <div className="contact-page-form-txt text-center">
              <h2>
                Contact Our Friendly Reception
                <br />
                Staff with any Enquiry
              </h2>
            </div>
            <div id="form_result"></div>
            <form
              className="contact-form-plan-box"
              id="contactpage"
              method="POST"
            >
              <div className="form-row">
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name:"
                      name="name"
                      id="name"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-lg-6 col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email:"
                      name="email"
                      id="email"
                    />
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="col-lg-6 col-lg-6 col-md-6">
                  <div className="form-group">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone:"
                      name="phone"
                      id="phone"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-lg-6 col-md-6">
                  <div className="form-group">
                    <select className="form-control select-form position-relative">
                      <option>Subject:</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                    <i className="fas fa-angle-down down-icon"></i>
                  </div>
                </div>
              </div>
              <div>
                <div className="textarea form-group">
                  <textarea
                    className="form-control"
                    placeholder="Message:"
                    rows="3"
                    name="comments"
                    id="comments"
                  ></textarea>
                </div>
              </div>
              <div className="submitform-button">
                <button
                  type="submit"
                  id="submit"
                  className="submitform-btn appointment-btn ml-auto mr-auto d-block"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* <!-- contact-page-form -->
<!-- map-section--> */}
      <div className="w-100 float-left map-con">
        <div className="container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51641910.033771195!2d109.09423828124999!3d-37.814123701604444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2s!4v1640952396499!5m2!1sen!2s"
            style={{ height: "360px", width: "100%", border: "0" }}
          ></iframe>
        </div>
      </div>
      {/* <!-- map-section-->
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
      <FooterDetails />
    </div>
  );
}
