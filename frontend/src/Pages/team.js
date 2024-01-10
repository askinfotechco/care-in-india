import React from "react";
import NavBar from "../molecules/navBar";
import professionalBoxImg1 from "../assets/image/professional-box-img1.png";
import professionalBoxImg2 from "../assets/image/professional-box-img2.png";
import professionalBoxImg3 from "../assets/image/professional-box-img3.png";
import professionalBoxImg4 from "../assets/image/professional-box-img4.png";
import professionalBoxImg5 from "../assets/image/professional-box-img5.png";
import professionalBoxImg6 from "../assets/image/professional-box-img6.png";
import smallLeftCurveImg from "../assets/image/small-left-curve-img.png";
import smallRightCurveImg from "../assets/image/small-right-curve-img.png";
import formLeftImg from "../assets/image/form-left-img.png";
import clientLogoImg1 from "../assets/image/client-logo-img1.png";
import clientLogoImg2 from "../assets/image/client-logo-img2.png";
import clientLogoImg3 from "../assets/image/client-logo-img3.png";
import clientLogoImg4 from "../assets/image/client-logo-img4.png";
import clientLogoImg5 from "../assets/image/client-logo-img5.png";
import clientLogoImg6 from "../assets/image/client-logo-img6.png";
import footerLogo from "../assets/image/footer-logo.png";
import paymentImg1 from "../assets/image/payment-img1.png";
import paymentImg2 from "../assets/image/payment-img2.png";
import paymentImg3 from "../assets/image/payment-img3.png";
import paymentImg4 from "../assets/image/payment-img4.png";

export default function Team() {
  return (
    <div>
      {/* <div class="w-100 float-left top-bar-main-con text-white text-xl-left text-lg-left text-md-left text-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-12">
              <div class="top-bar-left-con ">
                <i class="fas fa-map-marker-alt"></i>
                <span>King Street Melbourne, 3000, Australia</span>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-12 d-flex justify-content-xl-end justify-content-lg-end justify-content-md-end justify-content-center">
              <div class="top-bar-right-con d-flex">
                <span>Get Social:</span>
                <ul class="list-unstyled mb-0">
                  <li class="float-left">
                    <a href="https://www.facebook.com/" class="text-white">
                      <i class="fab fa-facebook-square"></i>
                    </a>
                  </li>
                  <li class="float-left">
                    <a href="https://twitter.com/?lang=en" class="text-white">
                      <i class="fab fa-twitter-square"></i>
                    </a>
                  </li>
                  <li class="float-left">
                    <a href="https://www.pinterest.com/" class="text-white">
                      <i class="fab fa-pinterest-square"></i>
                    </a>
                  </li>
                  <li class="float-left">
                    <a href="https://www.youtube.com/" class="text-white">
                      <i class="fab fa-youtube-square"></i>
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
      <div class="w-100 float-left header-and-banner-con banner-overlay-img">
        <div class="container">
          <div class="overlay-img">
            {/* <!-- navbar-start --> */}
            <NavBar />
            {/* <!-- navbar-end -->
               <!-- banner-start --> */}
            <section>
              <div class="w-100 float-left generic-banner-con text-xl-left text-lg-left text-center">
                <div class="container">
                  <div class="generic-banner-content text-white text-center">
                    <h1>Our Team</h1>
                    <p class="text-white mb-0">
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
      <!-- professional-section--> */}
      <section>
        <div class="w-100 float-left professional-con">
          <div class="container">
            <div class="professional-title text-center">
              <h2>Meet Our Professionals</h2>
              <p>
                Seram ipsum dolor sit amet, consectetur adipiscing elit sed
                lorem ipsum dolor sit amet, consectetur
                <br />
                adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
                pulvinar dapibus leo.
              </p>
            </div>
            <div class="professional-box">
              <div class="row">
                <div class="col-lg-4 col-md-4">
                  <a href="team-detail.html">
                    <div class="professional-box-item text-center">
                      <figure class="mb-0">
                        <img
                          src={professionalBoxImg1}
                          alt="professional-box-img"
                          class="img-fluid"
                        />
                      </figure>
                      <h5>Dr. Richard Muldoon</h5>
                      <small class="d-block">Doctor of Medicine</small>
                      <span class="d-block">
                        Lorem ipsum dolor sit ametc onsectetur adipiscing
                        elitsed do eiusmod
                      </span>
                      <div class="professional-box-social-list">
                        <ul class="list-unstyled mb-0">
                          <li class="d-inline-block">
                            <a href="https://www.facebook.com/">
                              <i class="fab fa-facebook-square d-flex align-items-center justify-content-center text-white pr-0"></i>
                            </a>
                          </li>
                          <li class="d-inline-block">
                            <a href="https://twitter.com/?lang=en">
                              <i class="fab fa-twitter-square d-flex align-items-center justify-content-center text-white pr-0"></i>
                            </a>
                          </li>
                          <li class="d-inline-block">
                            <a href="https://www.linkedin.com/signup">
                              <i class="fab fa-linkedin d-flex align-items-center justify-content-center text-white pr-0"></i>
                            </a>
                          </li>
                          <li class="d-inline-block">
                            <a href="https://www.pinterest.com/">
                              <i class="fab fa-pinterest-square mr-0 d-flex align-items-center justify-content-center text-white pr-0"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-lg-4 col-lg-4 col-md-4">
                  <a href="team-detail.html">
                    <div class="professional-box-item text-center">
                      <figure class="mb-0">
                        <img
                          src={professionalBoxImg2}
                          alt="professional-box-img"
                          class="img-fluid"
                        />
                      </figure>
                      <h5>Dr. Maria Andaloro</h5>
                      <small class="d-block">Dental Medicine</small>
                      <span class="d-block">
                        Lorem ipsum dolor sit ametc onsectetur adipiscing
                        elitsed do eiusmod
                      </span>
                      <div class="professional-box-social-list">
                        <ul class="list-unstyled mb-0">
                          <li class="d-inline-block">
                            <a href="https://www.facebook.com/">
                              <i class="fab fa-facebook-square d-flex align-items-center justify-content-center text-white pr-0"></i>
                            </a>
                          </li>
                          <li class="d-inline-block">
                            <a href="https://twitter.com/?lang=en">
                              <i class="fab fa-twitter-square d-flex align-items-center justify-content-center text-white pr-0"></i>
                            </a>
                          </li>
                          <li class="d-inline-block">
                            <a href="https://www.linkedin.com/signup">
                              <i class="fab fa-linkedin d-flex align-items-center justify-content-center text-white pr-0"></i>
                            </a>
                          </li>
                          <li class="d-inline-block">
                            <a href="https://www.pinterest.com/">
                              <i class="fab fa-pinterest-square mr-0 d-flex align-items-center justify-content-center text-white pr-0"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-lg-4 col-lg-4 col-md-4">
                  <a href="team-detail.html">
                    <div class="professional-box-item text-center">
                      <figure class="mb-0">
                        <img
                          src={professionalBoxImg3}
                          alt="professional-box-img"
                          class="img-fluid"
                        />
                      </figure>
                      <h5>Dr. Michael Brian</h5>
                      <small class="d-block">Family Physician</small>
                      <span class="d-block">
                        Lorem ipsum dolor sit ametc onsectetur adipiscing
                        elitsed do eiusmod
                      </span>
                      <div class="professional-box-social-list">
                        <ul class="list-unstyled mb-0">
                          <li class="d-inline-block">
                            <a href="https://www.facebook.com/">
                              <i class="fab fa-facebook-square d-flex align-items-center justify-content-center text-white pr-0"></i>
                            </a>
                          </li>
                          <li class="d-inline-block">
                            <a href="https://twitter.com/?lang=en">
                              <i class="fab fa-twitter-square d-flex align-items-center justify-content-center text-white pr-0"></i>
                            </a>
                          </li>
                          <li class="d-inline-block">
                            <a href="https://www.linkedin.com/signup">
                              <i class="fab fa-linkedin d-flex align-items-center justify-content-center text-white pr-0"></i>
                            </a>
                          </li>
                          <li class="d-inline-block">
                            <a href="https://www.pinterest.com/">
                              <i class="fab fa-pinterest-square mr-0 d-flex align-items-center justify-content-center text-white pr-0"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-4 col-md-4">
                  <a href="team-detail.html">
                    <div class="professional-box-item text-center">
                      <figure class="mb-0">
                        <img
                          src={professionalBoxImg4}
                          alt="professional-box-img"
                          class="img-fluid"
                        />
                      </figure>
                      <h5>Dr. Tomas Albrektsson</h5>
                      <small class="d-block">Cardiologist</small>
                      <span class="d-block">
                        Lorem ipsum dolor sit ametc onsectetur adipiscing
                        elitsed do eiusmod
                      </span>
                      <div class="professional-box-social-list">
                        <ul class="list-unstyled mb-0">
                          <li class="d-inline-block">
                            <a href="https://www.facebook.com/">
                              <i class="fab fa-facebook-square d-flex align-items-center justify-content-center text-white pr-0"></i>
                            </a>
                          </li>
                          <li class="d-inline-block">
                            <a href="https://twitter.com/?lang=en">
                              <i class="fab fa-twitter-square d-flex align-items-center justify-content-center text-white pr-0"></i>
                            </a>
                          </li>
                          <li class="d-inline-block">
                            <a href="https://www.linkedin.com/signup">
                              <i class="fab fa-linkedin d-flex align-items-center justify-content-center text-white pr-0"></i>
                            </a>
                          </li>
                          <li class="d-inline-block">
                            <a href="https://www.pinterest.com/">
                              <i class="fab fa-pinterest-square mr-0 d-flex align-items-center justify-content-center text-white pr-0"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-lg-4 col-lg-4 col-md-4">
                  <a href="team-detail.html">
                    <div class="professional-box-item text-center">
                      <figure class="mb-0">
                        <img
                          src={professionalBoxImg5}
                          alt="professional-box-img"
                          class="img-fluid"
                        />
                      </figure>
                      <h5>Dr. Edward Angle</h5>
                      <small class="d-block">Gynecologist</small>
                      <span class="d-block">
                        Lorem ipsum dolor sit ametc onsectetur adipiscing
                        elitsed do eiusmod
                      </span>
                      <div class="professional-box-social-list">
                        <ul class="list-unstyled mb-0">
                          <li class="d-inline-block">
                            <a href="https://www.facebook.com/">
                              <i class="fab fa-facebook-square d-flex align-items-center justify-content-center text-white pr-0"></i>
                            </a>
                          </li>
                          <li class="d-inline-block">
                            <a href="https://twitter.com/?lang=en">
                              <i class="fab fa-twitter-square d-flex align-items-center justify-content-center text-white pr-0"></i>
                            </a>
                          </li>
                          <li class="d-inline-block">
                            <a href="https://www.linkedin.com/signup">
                              <i class="fab fa-linkedin d-flex align-items-center justify-content-center text-white pr-0"></i>
                            </a>
                          </li>
                          <li class="d-inline-block">
                            <a href="https://www.pinterest.com/">
                              <i class="fab fa-pinterest-square mr-0 d-flex align-items-center justify-content-center text-white pr-0"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-lg-4 col-lg-4 col-md-4">
                  <a href="team-detail.html">
                    <div class="professional-box-item text-center mb-0">
                      <figure class="mb-0">
                        <img
                          src={professionalBoxImg6}
                          alt="professional-box-img"
                          class="img-fluid"
                        />
                      </figure>
                      <h5>Dr. Amalia Assur</h5>
                      <small class="d-block">Physician Assistant</small>
                      <span class="d-block">
                        Lorem ipsum dolor sit ametc onsectetur adipiscing
                        elitsed do eiusmod
                      </span>
                      <div class="professional-box-social-list">
                        <ul class="list-unstyled mb-0">
                          <li class="d-inline-block">
                            <a href="https://www.facebook.com/">
                              <i class="fab fa-facebook-square d-flex align-items-center justify-content-center text-white pr-0"></i>
                            </a>
                          </li>
                          <li class="d-inline-block">
                            <a href="https://twitter.com/?lang=en">
                              <i class="fab fa-twitter-square d-flex align-items-center justify-content-center text-white pr-0"></i>
                            </a>
                          </li>
                          <li class="d-inline-block">
                            <a href="https://www.linkedin.com/signup">
                              <i class="fab fa-linkedin d-flex align-items-center justify-content-center text-white pr-0"></i>
                            </a>
                          </li>
                          <li class="d-inline-block">
                            <a href="https://www.pinterest.com/">
                              <i class="fab fa-pinterest-square mr-0 d-flex align-items-center justify-content-center text-white pr-0"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- professional-section-->
      <!-- form-section --> */}
      <section>
        <div class="w-100 float-left form-main-con">
          <div class="container">
            <div class="text-center">
              <h2>Book An Appointment</h2>
              <p>
                Seram ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eius mod tempor incididunt aenean
                <br />
                leo ligula porttitor eu consequat vitae eleifend tac.
              </p>
            </div>
            <div class="row">
              <div class="col-lg-6 order-xl-0 order-lg-0 order-2">
                <div class="form-left-con position-relative text-center">
                  <figure class="mb-0 left-curve-img wow slideInLeft">
                    <img
                      src={smallLeftCurveImg}
                      alt=""
                      class="img-fluid"
                    />
                  </figure>
                  <figure class="mb-0">
                    <img
                      src={formLeftImg}
                      alt="form-left-img"
                      class="mb-0 img-fluid human-img"
                    />
                  </figure>
                  <figure class="mb-0 right-curve-img wow slideInRight">
                    <img
                      src={smallRightCurveImg}
                      alt=""
                      class="img-fluid"
                    />
                  </figure>
                </div>
              </div>
              <div class="col-lg-6">
                <form class="contact-form">
                  <div class="form-group">
                    <label for="exampleFormControlSelect1" class="text-white">
                      Department
                    </label>
                    <select
                      class="form-control position-relative"
                      id="exampleFormControlSelect1"
                    >
                      <option>General Health Checkup</option>
                      <option>General Health Checkup</option>
                      <option>General Health Checkup</option>
                      <option>General Health Checkup</option>
                      <option>General Health Checkup</option>
                    </select>
                    <i class="fas fa-angle-down"></i>
                  </div>
                  <div class="row">
                    <div class="col-lg-6 col-md-6">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Name:"
                          name="name"
                          id="name"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Email:"
                        />
                        <small
                          id="emailHelp"
                          class="form-text text-muted"
                        ></small>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="form-group">
                        <input type="time" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="form-group">
                        <select class="form-control position-relative">
                          <option>Choose Doctor </option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                        <i class="fas fa-angle-down down-icon"></i>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="textarea form-group W-100">
                        <textarea
                          class="form-control "
                          placeholder="Message:"
                          rows="3"
                          name="comments"
                          id="comments"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <button type="submit" class="btn  appointment-btn">
                    Make Appointment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- form-section -->
      <!-- news-letter-section --> */}
      <section>
        <div class="w-100 float-left news-letter-con">
          <div class="container">
            <div class="news-letter-inner-con banner-overlay-img">
              <div class="row overlay-img align-items-center">
                <div class="col-lg-6 col-md-5">
                  <div class="news-letter-title">
                    <h2 class="text-white mb-0">Subscribe to our Newsletter</h2>
                  </div>
                </div>
                <div class="col-lg-6 col-md-7">
                  <div class="news-letter-input-con position-relative">
                    <div class="news-letter-input-feild">
                      <input
                        type="email"
                        placeholder="Enter Your Email:"
                        class="w-100"
                      />
                    </div>
                    <button>
                      <i class="far fa-envelope"></i>
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
      <div class="w-100 float-left logo-con">
        <div class="container">
          <div class="logo-inner-con">
            <div class="row">
              <div class="col-lg-2 col-md-2 col-sm-4 col-4">
                <figure class="mb-0">
                  <img
                    src={clientLogoImg1}
                    alt="client-logo-img"
                    class="img-fluid"
                  />
                </figure>
              </div>
              <div class="col-lg-2 col-md-2 col-sm-4 col-4">
                <figure class="mb-0">
                  <img
                    src={clientLogoImg2}
                    alt="client-logo-img"
                    class="img-fluid"
                  />
                </figure>
              </div>
              <div class="col-lg-2 col-md-2 col-sm-4 col-4">
                <figure class="mb-0">
                  <img
                    src={clientLogoImg3}
                    alt="client-logo-img"
                    class="img-fluid"
                  />
                </figure>
              </div>
              <div class="col-lg-2 col-md-2 col-sm-4 col-4">
                <figure class="mb-0">
                  <img
                    src={clientLogoImg4}
                    alt="client-logo-img"
                    class="img-fluid mb-0"
                  />
                </figure>
              </div>
              <div class="col-lg-2 col-md-2 col-sm-4 col-4">
                <figure class="mb-0">
                  <img
                    src={clientLogoImg5}
                    alt="client-logo-img"
                    class="img-fluid mb-0"
                  />
                </figure>
              </div>
              <div class="col-lg-2 col-md-2 col-sm-4 col-4">
                <figure class="mb-0">
                  <img
                    src={clientLogoImg6}
                    alt="client-logo-img"
                    class="img-fluid mb-0"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- logo-section -->
      <!-- weight-footer-section --> */}
      <section>
        <div class="w-100 float-left weight-footer-con">
          <div class="container">
            <div class="weight-footer-inner-con">
              <div class="row">
                <div class="col-lg-5 col-12 text-xl-left text-lg-left text-center">
                  <div class="weight-footer-content ">
                    <figure>
                      <img
                        src={footerLogo}
                        alt="footer-logo"
                        class="img-fluid"
                      />
                    </figure>
                    <p class="col-lg-11 col-md-7 pl-0 pr-0 ml-lg-0 mr-lg-0 ml-md-auto mr-md-auto">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elitsed
                      do eiusmod tempororem ipsum dolor sit am econsect
                      ametconsectetetur adipiscing.
                    </p>
                    <div class="weight-social-list">
                      <ul class="list-unstyled mb-0">
                        <li class="d-inline-block">
                          <a href="https://www.facebook.com/">
                            <i class="fab fa-facebook-square d-flex align-items-center justify-content-center text-white pr-0"></i>
                          </a>
                        </li>
                        <li class="d-inline-block">
                          <a href="https://twitter.com/?lang=en">
                            <i class="fab fa-twitter-square d-flex align-items-center justify-content-center text-white pr-0"></i>
                          </a>
                        </li>
                        <li class="d-inline-block">
                          <a href="https://www.linkedin.com/signup">
                            <i class="fab fa-linkedin d-flex align-items-center justify-content-center text-white pr-0"></i>
                          </a>
                        </li>
                        <li class="d-inline-block">
                          <a href="https://www.pinterest.com/">
                            <i class="fab fa-pinterest-square mr-0 d-flex align-items-center justify-content-center text-white pr-0"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-4 col-6">
                  <div class="weight-footer-content">
                    <h5>Important Link</h5>
                    <ul class="list-unstyled mb-0">
                      <li>
                        <i class="fas fa-caret-right"></i>Appointment
                      </li>
                      <li>
                        <i class="fas fa-caret-right"></i>Doctors
                      </li>
                      <li>
                        <i class="fas fa-caret-right"></i>Services
                      </li>
                      <li>
                        <i class="fas fa-caret-right"></i>Specialties
                      </li>
                      <li>
                        <i class="fas fa-caret-right"></i>Neurology
                      </li>
                      <li class="mb-0">
                        <i class="fas fa-caret-right"></i>Oncology
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-3 col-6">
                  <div class="weight-footer-content">
                    <h5>Support</h5>
                    <ul class="list-unstyled mb-0">
                      <li>
                        <i class="fas fa-caret-right"></i>Support
                      </li>
                      <li>
                        <i class="fas fa-caret-right"></i>Contact Us
                      </li>
                      <li>
                        <i class="fas fa-caret-right"></i>Knowledge Base
                      </li>
                      <li>
                        <i class="fas fa-caret-right"></i>About Us
                      </li>
                      <li>
                        <i class="fas fa-caret-right"></i>Faq
                      </li>
                      <li class="mb-0">
                        <i class="fas fa-caret-right"></i>Partnerships
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-3 col-md-5 col-sm-5 col-12">
                  <div class="weight-footer-content">
                    <h5>Get in Touch</h5>
                    <ul class="list-unstyled mb-0">
                      <li>
                        <span>Email: </span>info@medtexh.com
                      </li>
                      <li>
                        <span>Phone: </span>+1 234 567 89 0 0
                      </li>
                      <li>
                        <span>Fax: </span>+1 ( 987 ) 654 321 9 9
                      </li>
                      <li class="mb-0">
                        <span class="pr-2">Address:</span>King Street Melbourne,
                        3000, Australia
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- weight-footer-section -->
      <!-- footer-section --> */}
      <div class="w-100 float-left footer-con text-xl-left text-lg-left text-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-12">
              <p class="mb-0">
                Copyright ©2022 medtexh.com All Rights Reserved
              </p>
            </div>
            <div class="col-lg-6 col-md-6 col-12 d-flex justify-content-xl-end justify-content-lg-end justify-content-center">
              <figure class="mb-0 d-inline-block">
                <img
                  src={paymentImg1}
                  alt="payment-img"
                  class="img-fluid"
                />
              </figure>
              <figure class="mb-0 d-inline-block">
                <img
                  src={paymentImg2}
                  alt="payment-img"
                  class="img-fluid"
                />
              </figure>
              <figure class="mb-0 d-inline-block">
                <img
                  src={paymentImg3}
                  alt="payment-img"
                  class="img-fluid"
                />
              </figure>
              <figure class="mb-0 d-inline-block mr-0">
                <img
                  src={paymentImg4}
                  alt="payment-img"
                  class="img-fluid"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
