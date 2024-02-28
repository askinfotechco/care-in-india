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
                    <h1>Contact Us</h1>
                    <p className="text-white mb-0">
                      Make Schedule Easier and Simpler for Patients
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
        <div className="w-100 float-left Schedule-con bg-white">
          <div className="wrapper">
            <div className="Schedule-box text-md-left text-center">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="Schedule-box-item position-relative w-100 float-left">
                    <figure className="mb-0 float-md-left overlay-img">
                      <img
                        src={scheduleIcon1}
                        alt="Schedule-icon"
                        className="img-fluid"
                        style={{ margin: "0 auto" }}
                      />
                    </figure>
                    <div className="Schedule-box-title float-md-left overlay-img mt-3">
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
                        style={{ margin: "0 auto" }}
                      />
                    </figure>
                    <div className="Schedule-box-title float-md-left overlay-img mt-3">
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
                        style={{ margin: "0 auto" }}
                      />
                    </figure>
                    <div className="Schedule-box-title float-md-left overlay-img mt-3">
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
                        style={{ margin: "0 auto" }}
                      />
                    </figure>
                    <div className="Schedule-box-title float-md-left overlay-img mt-3">
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
        <div className="w-100 float-left">
          <div className="wrapper">
            <div className="contact-page-form-txt text-center">
              <h2>
                Contact Our Reception with any Enquiry
              </h2>
            </div>
            <div id="form_result"></div>
            <form
              action="#"
              method="POST"
            >
              <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-semibold leading-6 text-black-900"
                    >
                      First name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-2 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-semibold leading-6 text-black-900"
                    >
                      Last name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-2 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold leading-6 text-black-900"
                    >
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-2 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="phone-number"
                      className="block text-sm font-semibold leading-6 text-black-900"
                    >
                      Phone number
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="tel"
                        name="phone-number"
                        id="phone-number"
                        autoComplete="tel"
                        className="block w-full rounded-md border-2 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold leading-6 text-black-900"
                    >
                      Message
                    </label>
                    <div className="mt-2.5">
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        className="block w-full rounded-md border-2 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Send message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* <!-- contact-page-form -->
<!-- map-section--> */}
      <div className="w-100 float-left map-con mt-20">
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
