import React from "react";
import NavBar from "../molecules/navBar";
import footerLogo from "../assets/image/footer-logo.png";
import paymentImg1 from "../assets/image/payment-img1.png";
import paymentImg2 from "../assets/image/payment-img2.png";
import paymentImg3 from "../assets/image/payment-img3.png";
import paymentImg4 from "../assets/image/payment-img4.png";
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
      {/* <div class="w-100 h-10 float-left top-bar-main-con text-white text-xl-left text-lg-left text-md-left text-center">
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
                    <h1>Contact Us</h1>
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
<!-- Schedule-section --> */}
      <section>
        <div class="w-100 float-left Schedule-con">
          <div class="wrapper">
            <div class="Schedule-heading text-center">
              <h2>
                Make Schedule Easier and <br />
                Simpler for Patients
              </h2>
            </div>
            <div class="Schedule-box text-md-left text-center">
              <div class="row">
                <div class="col-lg-6 col-md-6">
                  <div class="Schedule-box-item position-relative w-100 float-left">
                    <figure class="mb-0 float-md-left overlay-img">
                      <img
                        src={scheduleIcon1}
                        alt="Schedule-icon"
                        class="img-fluid"
                      />
                    </figure>
                    <div class="Schedule-box-title float-md-left overlay-img">
                      <h5>Email</h5>
                      <span class="d-block">support@medtexh.com</span>
                      <span class="d-block">help@medtexh.com</span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="Schedule-box-item position-relative w-100 float-left">
                    <figure class="mb-0 float-md-left overlay-img">
                      <img
                        src={scheduleIcon2}
                        alt="Schedule-icon"
                        class="img-fluid"
                      />
                    </figure>
                    <div class="Schedule-box-title float-md-left overlay-img">
                      <h5>Location</h5>
                      <span class="d-block">
                        121 King Street Melbourne,
                        <br /> 3000, Australia
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="Schedule-box-item position-relative w-100 float-left mb-md-0">
                    <figure class="mb-0 float-md-left overlay-img">
                      <img
                        src={scheduleIcon3}
                        alt="Schedule-icon"
                        class="img-fluid"
                      />
                    </figure>
                    <div class="Schedule-box-title float-md-left overlay-img">
                      <h5>Attendance</h5>
                      <span class="d-block">+123 45 678 901</span>
                      <span class="d-block">+234 56 789 012</span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="Schedule-box-item position-relative w-100 float-left mb-0">
                    <figure class="mb-0 float-md-left overlay-img">
                      <img
                        src={scheduleIcon4}
                        alt="Schedule-icon"
                        class="img-fluid"
                      />
                    </figure>
                    <div class="Schedule-box-title float-md-left overlay-img">
                      <h5>Working Hours</h5>
                      <span class="d-block">Monday - Friday: 8AM - 9PM</span>
                      <span class="d-block"> Weekends: Closed</span>
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
        <div class="w-100 float-left contact-page-form-con">
          <div class="wrapper">
            <div class="contact-page-form-txt text-center">
              <h2>
                Contact Our Friendly Reception
                <br />
                Staff with any Enquiry
              </h2>
            </div>
            <div id="form_result"></div>
            <form class="contact-form-plan-box" id="contactpage" method="POST">
              <div class="form-row">
                <div class="col-lg-6 col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Your Name:"
                      name="name"
                      id="name"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-lg-6 col-md-6">
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Your Email:"
                      name="email"
                      id="email"
                    />
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="col-lg-6 col-lg-6 col-md-6">
                  <div class="form-group">
                    <input
                      type="tel"
                      class="form-control"
                      placeholder="Phone:"
                      name="phone"
                      id="phone"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-lg-6 col-md-6">
                  <div class="form-group">
                    <select class="form-control select-form position-relative">
                      <option>Subject:</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                    <i class="fas fa-angle-down down-icon"></i>
                  </div>
                </div>
              </div>
              <div>
                <div class="textarea form-group">
                  <textarea
                    class="form-control"
                    placeholder="Message:"
                    rows="3"
                    name="comments"
                    id="comments"
                  ></textarea>
                </div>
              </div>
              <div class="submitform-button">
                <button
                  type="submit"
                  id="submit"
                  class="submitform-btn appointment-btn ml-auto mr-auto d-block"
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
      <div class="w-100 float-left map-con">
        <div class="container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51641910.033771195!2d109.09423828124999!3d-37.814123701604444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2s!4v1640952396499!5m2!1sen!2s"
            style={{ height: "360px", width: "100%", border: "0" }}
          ></iframe>
        </div>
      </div>
      {/* <!-- map-section-->
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
      <FooterDetails />      
    </div>
  );
}
