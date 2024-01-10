import React from "react";
import NavBar from "../molecules/navBar";

export default function About() {
  return (
    <div>
      <div class="w-100 float-left top-bar-main-con text-white text-xl-left text-lg-left text-md-left text-center">
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
      </div>
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
                    <h1>About Us</h1>
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
      <!-- quality-system-section --> */}
      <section>
        <div class="w-100 float-left quality-system-con Experince-section">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-6 d-flex align-items-center">
                <div class="quality-system-left-con">
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
                  <div class="quality-system-list">
                    <ul class="list-unstyled">
                      <li class="position-relative">
                        <i class="fas fa-circle"></i>24 Hour Service
                      </li>
                      <li class="position-relative">
                        <i class="fas fa-circle"></i>Emergency Cases
                      </li>
                      <li class="position-relative">
                        <i class="fas fa-circle"></i>Expert Doctors
                      </li>
                    </ul>
                  </div>
                  <div class="quality-system-list">
                    <ul class="list-unstyled">
                      <li class="position-relative">
                        <i class="fas fa-circle"></i>Update Covid-19
                      </li>
                      <li class="position-relative">
                        <i class="fas fa-circle"></i>24/7 Help Center
                      </li>
                      <li class="position-relative">
                        <i class="fas fa-circle"></i>Modern Clinic
                      </li>
                    </ul>
                  </div>
                  <a href="faq.html" class="appointment-btn">
                    Learn More
                  </a>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 d-md-flex align-items-md-end">
                <div class="quality-system-right-con position-relative text-center overlay-img">
                  <figure class="mb-0 left-curve-img wow slideInLeft">
                    <img
                      src="assets/image/small-left-curve-img.png"
                      alt=""
                      class="img-fluid"
                    />
                  </figure>
                  <figure class="mb-0">
                    <img
                      src="assets/image/professional-doctor-img.png"
                      alt="professional-doctor-img"
                      class="img-fluid human-img"
                    />
                  </figure>
                  <figure class="mb-0 right-curve-img wow slideInRight">
                    <img
                      src="assets/image/small-right-curve-img.png"
                      alt=""
                      class="img-fluid"
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
        <div class="w-100 float-left core-vaule-con">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-6 d-md-flex align-items-md-end order-xl-0 order-lg-0 order-md-0 order-2">
                <div class="form-left-con core-vaule-left-con position-relative text-center">
                  <figure
                    class="mb-0 left-curve-img wow slideInLeft"
                    style={{
                      visibility: "visible",
                      animationName: "slideInLeft",
                    }}
                  >
                    <img
                      src="assets/image/small-left-curve-img.png"
                      alt=""
                      class="img-fluid"
                    />
                  </figure>
                  <figure class="mb-0">
                    <img
                      src="assets/image/core-value-left-img.png"
                      alt="form-left-img"
                      class="mb-0 img-fluid human-img"
                    />
                  </figure>
                  <figure
                    class="mb-0 right-curve-img wow slideInRight"
                    style={{
                      visibility: "visible",
                      animationName: "slideInRight",
                    }}
                  >
                    <img
                      src="assets/image/small-right-curve-img.png"
                      alt=""
                      class="img-fluid"
                    />
                  </figure>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="core-vaule-right-con text-xl-left text-lg-left text-md-left text-center">
                  <div class="core-vaule-title">
                    <h2>Our Core Values And Principle</h2>
                    <p>
                      Seram ipsum dolor sit amet, consectetur adipiscing elit,
                      sed doeius mod tempor incididunt aenean leo.
                    </p>
                  </div>
                  <div class="core-vaule-box-con">
                    <div class="core-vaule-box-item position-relative">
                      <figure class="mb-0">
                        <img
                          src="assets/image/core-vaule-box-icon1.png"
                          alt="core-vaule-box-icon"
                          class="img-fluid"
                        />
                      </figure>
                      <div class="core-vaule-box-title">
                        <h5>Qualified Doctors</h5>
                        <span class="d-block">
                          Nullam dictum felis eu pede mollis pretium. Integer
                          <br /> tinciduntras dapibus vivamus elementum.
                        </span>
                      </div>
                    </div>
                    <div class="core-vaule-box-item position-relative">
                      <figure class="mb-0">
                        <img
                          src="assets/image/core-vaule-box-icon2.png"
                          alt="core-vaule-box-icon"
                          class="img-fluid"
                        />
                      </figure>
                      <div class="core-vaule-box-title">
                        <h5>24/7 Helpdesk</h5>
                        <span class="d-block">
                          Cras dapibus vivamus elementum semper nisi enean
                          <br /> vulputate eleifend am eget duieget dui.
                        </span>
                      </div>
                    </div>
                    <div class="core-vaule-box-item position-relative mb-0">
                      <figure class="mb-0">
                        <img
                          src="assets/image/core-vaule-box-icon3.png"
                          alt="core-vaule-box-icon"
                          class="img-fluid"
                        />
                      </figure>
                      <div class="core-vaule-box-title">
                        <h5>Latest Drugs</h5>
                        <span class="d-block">
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
        <div class="w-100 float-left fun-facts-con  pt-0 pb-0">
          <div class="container">
            <div class="about-fun-facts-con banner-overlay-img">
              <div class="text-center overlay-img about-fun-facts-title">
                <h2 class="text-white">
                  Our Doctors are Specialist
                  <br />& Experienced
                </h2>
              </div>
              <div class="fun-facts-box-con text-sm-left text-center pt-0 overlay-img">
                <div class="row bg-white">
                  <div class="col-lg-3 col-md-6 col-6 pl-0 pr-0 border-right-0">
                    <div class="fun-facts-box-item d-sm-flex align-items-sm-center">
                      <figure class="mb-0 d-inline-block">
                        <img
                          src="assets/image/fun-facts-icon1.png"
                          alt="fun-facts-icon1"
                          class="img-fluid"
                        />
                      </figure>
                      <div class="fun-facts-item-content d-inline-block">
                        <div class="position-relative fun-facts-item-title d-inline-block">
                          <h2 class="count">814</h2>
                          <span>+</span>
                        </div>
                        <p class="mb-0">Happy Patients</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-6 pl-0 pr-0 border-right-0">
                    <div class="fun-facts-box-item d-sm-flex align-items-sm-center">
                      <figure class="mb-0 d-inline-block">
                        <img
                          src="assets/image/fun-facts-icon2.png"
                          alt="fun-facts-icon1"
                          class="img-fluid"
                        />
                      </figure>
                      <div class="fun-facts-item-content d-inline-block">
                        <div class="position-relative fun-facts-item-title d-inline-block">
                          <h2 class="count">522</h2>
                          <span>+</span>
                        </div>
                        <p class="mb-0">Hospital Room</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-6 pl-0 pr-0 border-right-0">
                    <div class="fun-facts-box-item d-sm-flex align-items-sm-center">
                      <figure class="mb-0 d-inline-block">
                        <img
                          src="assets/image/fun-facts-icon3.png"
                          alt="fun-facts-icon1"
                          class="img-fluid"
                        />
                      </figure>
                      <div class="fun-facts-item-content d-inline-block">
                        <div class="position-relative fun-facts-item-title d-inline-block">
                          <h2 class="count">99</h2>
                          <span>+</span>
                        </div>
                        <p class="mb-0">Qualified Doctor</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-6 pl-0 pr-0">
                    <div class="fun-facts-box-item d-sm-flex align-items-sm-center">
                      <figure class="mb-0 d-inline-block">
                        <img
                          src="assets/image/fun-facts-icon4.png"
                          alt="fun-facts-icon1"
                          class="img-fluid"
                        />
                      </figure>
                      <div class="fun-facts-item-content d-inline-block">
                        <div class="position-relative fun-facts-item-title d-inline-block">
                          <h2 class="count">96</h2>
                          <span>%</span>
                        </div>
                        <p class="mb-0">Positive Feedback</p>
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
                          src="assets/image/professional-box-img1.png"
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
                          src="assets/image/professional-box-img2.png"
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
                    <div class="professional-box-item text-center mb-0">
                      <figure class="mb-0">
                        <img
                          src="assets/image/professional-box-img3.png"
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
                      src="assets/image/small-left-curve-img.png"
                      alt=""
                      class="img-fluid"
                    />
                  </figure>
                  <figure class="mb-0">
                    <img
                      src="assets/image/form-left-img.png"
                      alt="form-left-img"
                      class="mb-0 img-fluid human-img"
                    />
                  </figure>
                  <figure class="mb-0 right-curve-img wow slideInRight">
                    <img
                      src="assets/image/small-right-curve-img.png"
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
                    src="assets/image/client-logo-img1.png"
                    alt="client-logo-img"
                    class="img-fluid"
                  />
                </figure>
              </div>
              <div class="col-lg-2 col-md-2 col-sm-4 col-4">
                <figure class="mb-0">
                  <img
                    src="assets/image/client-logo-img2.png"
                    alt="client-logo-img"
                    class="img-fluid"
                  />
                </figure>
              </div>
              <div class="col-lg-2 col-md-2 col-sm-4 col-4">
                <figure class="mb-0">
                  <img
                    src="assets/image/client-logo-img3.png"
                    alt="client-logo-img"
                    class="img-fluid"
                  />
                </figure>
              </div>
              <div class="col-lg-2 col-md-2 col-sm-4 col-4">
                <figure class="mb-0">
                  <img
                    src="assets/image/client-logo-img4.png"
                    alt="client-logo-img"
                    class="img-fluid mb-0"
                  />
                </figure>
              </div>
              <div class="col-lg-2 col-md-2 col-sm-4 col-4">
                <figure class="mb-0">
                  <img
                    src="assets/image/client-logo-img5.png"
                    alt="client-logo-img"
                    class="img-fluid mb-0"
                  />
                </figure>
              </div>
              <div class="col-lg-2 col-md-2 col-sm-4 col-4">
                <figure class="mb-0">
                  <img
                    src="assets/image/client-logo-img6.png"
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
                        src="assets/image/footer-logo.png"
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
                  src="assets/image/payment-img1.png"
                  alt="payment-img"
                  class="img-fluid"
                />
              </figure>
              <figure class="mb-0 d-inline-block">
                <img
                  src="assets/image/payment-img2.png"
                  alt="payment-img"
                  class="img-fluid"
                />
              </figure>
              <figure class="mb-0 d-inline-block">
                <img
                  src="assets/image/payment-img3.png"
                  alt="payment-img"
                  class="img-fluid"
                />
              </figure>
              <figure class="mb-0 d-inline-block mr-0">
                <img
                  src="assets/image/payment-img4.png"
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
