import React from "react";
import NavBarTop from "../../molecules/navBar";
import ServiceCards from "../../molecules/serviceCards";
import serviceBoxIcon1 from "../../assets/image/service-box-icon9.png";
import serviceBoxIcon2 from "../../assets/image/service-box-icon10.png";
import serviceBoxIcon3 from "../../assets/image/service-box-icon3.png";
import serviceBoxIcon4 from "../../assets/image/service-box-icon11.png";
import serviceBoxIcon5 from "../../assets/image/service-box-icon12.png";
import serviceBoxIcon6 from "../../assets/image/service-box-icon13.png";
import serviceBoxIcon7 from "../../assets/image/service-box-icon14.png";
import serviceBoxIcon8 from "../../assets/image/service-box-icon15.png";
import serviceBoxIcon9 from "../../assets/image/service-box-icon16.png";
//import serviceBoxBannerImg from "../assets/image/.service-box-banner-img.jpg";

import smallLeftCurveImg from "../../assets/image/small-left-curve-img.png";
import smallRightCurveImg from "../../assets/image/small-right-curve-img.png";
import coreValueLeftImg from "../../assets/image/core-value-left-img.png";
import coreValueBoxIcon1 from "../../assets/image/core-vaule-box-icon1.png";
import coreValueBoxIcon2 from "../../assets/image/core-vaule-box-icon2.png";
import coreValueBoxIcon3 from "../../assets/image/core-vaule-box-icon3.png";
import clientLogoImg1 from "../../assets/image/client-logo-img1.png";
import clientLogoImg2 from "../../assets/image/client-logo-img2.png";
import clientLogoImg3 from "../../assets/image/client-logo-img3.png";
import clientLogoImg4 from "../../assets/image/client-logo-img4.png";
import clientLogoImg5 from "../../assets/image/client-logo-img5.png";
import clientLogoImg6 from "../../assets/image/client-logo-img6.png";
import footerLogo from "../../assets/image/footer-logo.png";
import paymentImg1 from "../../assets/image/payment-img1.png";
import paymentImg2 from "../../assets/image/payment-img2.png";
import paymentImg3 from "../../assets/image/payment-img3.png";
import paymentImg4 from "../../assets/image/payment-img4.png";
import FooterDetails from "../footerDetails";

const posts = [
  {
    id: 1,
    title: "Comprehensive Surgical Care",
    href: "#",
    description:
      "Our Surgery Services cover a broad spectrum of surgical specialties, including but not limited to - General Surgery, Orthopedic Surgery, Cardiovascular Surgery, Neurosurgery, Minimally Invasive Surgery.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Surgery", href: "#" },
  },
  {
    id: 2,
    title: "Expert Surgical Team",
    href: "#",
    description:
      "Our team of board-certified surgeons are leaders in their respective fields, with extensive training, experience, and expertise in performing a wide range of surgical procedures. With a commitment to excellence and patient-centered care, our surgeons collaborate closely with multidisciplinary teams to develop individualized treatment plans tailored to each patient's needs.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Surgery", href: "#" },
  },
  {
    id: 3,
    title: "State-of-the-Art Facilities",
    href: "#",
    description:
      "We operate in modern, state-of-the-art surgical facilities equipped with the latest technology and equipment to ensure the highest standard of care and safety for our patients. Our operating rooms are designed to provide a sterile environment, optimal surgical conditions, and advanced monitoring capabilities to support successful surgical outcomes.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Surgery", href: "#" },
  },
  {
    id: 4,
    title: "Compassionate Patient Care",
    href: "#",
    description:
      "We understand that undergoing surgery can be a daunting experience for many patients. That's why we prioritize compassionate, patient-centered care, providing support, reassurance, and guidance throughout every step of the surgical process. From pre-operative education and preparation to post-operative recovery and follow-up care, our dedicated staff are here to address your concerns, answer your questions, and ensure your comfort and well-being.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Surgery", href: "#" },
  },
];

export default function Surgery() {
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
              <div className="w-100 float-left generic-banner-con text-xl-left text-lg-left text-center">
                <div className="container">
                  <div className="generic-banner-content text-white text-center">
                    <h1>Welcome to Our Surgery Services</h1>
                    <p className="text-white mb-0">
                      {
                        "At CII, we are dedicated to providing exceptional Surgery Services aimed at delivering expert surgical care. Our team of skilled surgeons, nurses, and support staff are committed to ensuring your safety, comfort, and well-being throughout every stage of your surgical journey."
                      }
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

      <!-- core-vaule-section --> */}
      <section>
        <div className="w-100 float-left core-vaule-con service-page-vaule-con bg-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="core-vaule-right-con text-xl-left text-lg-left text-md-left">
                  <div className="core-vaule-title text-center">
                    <h2>{"Key Features of Our Surgery Services"}</h2>
                  </div>
                  <div className="core-vaule-box-con">
                    <div className="bg-white py-6 sm:py-15">
                      <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                          {posts.map((post) => (
                            <article
                              key={post.id}
                              className="flex flex-col items-start justify-between"
                            >
                              <div className="relative w-full">
                                <img
                                  src={post.imageUrl}
                                  alt=""
                                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                                />
                                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                              </div>
                              <div className="max-w-xl">
                                <div className="mt-2 flex items-center gap-x-4 text-xs">
                                  <a
                                    href={post.category.href}
                                    className="relative z-10 rounded-full bg-gray-50 font-medium text-gray-600 hover:bg-gray-100 no-underline"
                                  >
                                    {post.category.title}
                                  </a>
                                </div>
                                <div className="group relative">
                                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <a href={post.href} className="no-underline">
                                      <span className="absolute inset-0" />
                                      {post.title}
                                    </a>
                                  </h3>
                                  <p className="mt-2 line-clamp-4 text-sm leading-6 text-gray-600">
                                    {post.description}
                                  </p>
                                </div>
                              </div>
                            </article>
                          ))}
                        </div>
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

      <!-- news-letter-section --> */}
      {/* <section>
        <div className="w-100 float-left news-letter-con">
          <div className="container">
            <div className="news-letter-inner-con banner-overlay-img">
              <div className="row overlay-img align-items-center">
                <div className="col-lg-6 col-md-5">
                  <div className="news-letter-title">
                    <h2 className="text-white mb-0">Call us to know more</h2>
                  </div>
                </div>
                <div className="col-lg-6 col-md-7">
                  <div className="news-letter-input-con position-relative">
                    <div className="news-letter-input-feild">
                      <input
                        type="email"
                        placeholder="Or Enter Your Email:"
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
      </section> */}
      {/* <!-- news-letter-section -->
      <!-- logo-section --> */}
      <div className="mt-10 w-100 float-left logo-con">
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
