import React from "react";
import NavBar from "../../molecules/navBar";
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
import { Link } from "react-router-dom";
import FooterDetails from "../footerDetails";

export default function Dental() {
  return (
    <div>
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
                    <h1>Welcome to our premier dental services</h1>
                    <p class="text-white mb-0">
                      {
                        "At CII, we understand the importance of a healthy, radiant smile. Our team of experienced and compassionate dental professionals is dedicated to providing you and your family with the highest quality dental care in a comfortable and welcoming environment."
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

      <!-- service-box --> */}
      {/* <section>
        <div class="w-100 float-left service-box-con">
          <div class="container">
            <div class="service-box-inner-con">
              <div class="row ml-0 mr-0">
                <ServiceCards
                  img={serviceBoxIcon1}
                  alt={"service-box-icon"}
                  class={"img-fluid"}
                  name={"Radiology Services"}
                  description={
                    "We provide advanced imaging techniques to diagnose and treat medical conditions through non-invasive visualization of internal structures."
                  }
                />
                <ServiceCards
                  img={serviceBoxIcon2}
                  alt={"service-box-icon"}
                  class={"img-fluid"}
                  name={"Surgery"}
                  description={
                    "Discover expert surgical care tailored to your unique needs, ensuring precise and compassionate interventions for optimal health outcomes."
                  }
                />
                <ServiceCards
                  img={serviceBoxIcon3}
                  alt={"service-box-icon"}
                  class={"img-fluid"}
                  name={"Dental Care"}
                  description={
                    "Elevate your oral health with our comprehensive dental services, delivering personalized care for a confident and radiant smile."
                  }
                />
                <ServiceCards
                  img={serviceBoxIcon4}
                  alt={"service-box-icon"}
                  class={"img-fluid"}
                  name={"Physiotherapy"}
                  description={
                    "Experience transformative physiotherapy services focused on restoring mobility, alleviating pain, and enhancing overall well-being for a healthier, active life."
                  }
                />
              </div>
            </div> */}
      {/* <div class="service-box-img">
              <figure class="mb-0">
                <img src={serviceBoxBannerImg} alt="" class="img-fluid" />
              </figure>
            </div> */}
      {/* <div class="service-box-inner-con">
              <div class="row ml-0 mr-0">
                <ServiceCards
                  img={serviceBoxIcon5}
                  alt={"service-box-icon"}
                  class={"img-fluid"}
                  name={"Dermatology"}
                  description={
                    "Rejuvenate your skin, hairs and confidence with our dermatology services, offering expert care for a radiant complexion and the treatment of various skin and hair conditions."
                  }
                />
                <ServiceCards
                  img={serviceBoxIcon6}
                  alt={"service-box-icon"}
                  class={"img-fluid"}
                  name={"Health Packages in Same Day"}
                  description={
                    "Explore comprehensive health packages designed for proactive wellness, offering thorough assessments and screenings to optimize your overall health and prevent potential issues."
                  }
                />
                <ServiceCards
                  img={serviceBoxIcon7}
                  alt={"service-box-icon"}
                  class={"img-fluid"}
                  name={"Sexual Wellness / IVF"}
                  description={
                    "Nurture your reproductive health with our comprehensive Sexual Wellness and IVF services, providing compassionate care and advanced solutions on your journey to parenthood."
                  }
                />
                <ServiceCards
                  img={serviceBoxIcon8}
                  alt={"service-box-icon"}
                  class={"img-fluid"}
                  name={"Mediclaim"}
                  description={
                    "Secure your peace of mind with our mediclaim services, offering tailored insurance solutions to safeguard your health and financial well-being."
                  }
                />
              </div>
            </div>
            <div class="service-box-inner-con">
              <div class="row ml-0 mr-0">
                <ServiceCards
                  img={serviceBoxIcon9}
                  alt={"service-box-icon"}
                  class={"img-fluid"}
                  name={"CII Health Buddy Plan"}
                  rowClass={"col-6 mx-auto"}
                  description={
                    "Embrace a healthier future with our comprehensive Health Plans, designed to provide personalized coverage and support for your well-being journey."
                  }
                /> */}
      {/* <ServiceCards
                  img={serviceBoxIcon2}
                  alt={"service-box-icon"}
                  class={"img-fluid"}
                  name={"Surgery"}
                  description={
                    "Discover expert surgical care tailored to your unique needs, ensuring precise and compassionate interventions for optimal health outcomes."
                  }
                />
                <ServiceCards
                  img={serviceBoxIcon3}
                  alt={"service-box-icon"}
                  class={"img-fluid"}
                  name={"Dental Care"}
                  description={
                    "Elevate your oral health with our comprehensive dental services, delivering personalized care for a confident and radiant smile."
                  }
                />
                <ServiceCards
                  img={serviceBoxIcon4}
                  alt={"service-box-icon"}
                  class={"img-fluid"}
                  name={"Physiotherapy"}
                  description={
                    "Experience transformative physiotherapy services focused on restoring mobility, alleviating pain, and enhancing overall well-being for a healthier, active life."
                  }
                /> */}
      {/* </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <!-- service-box -->
            <!-- core-vaule-section --> */}
      <section>
        <div class="w-100 float-left core-vaule-con service-page-vaule-con">
          <div class="container">
            <div class="row">
              {/* <div class="col-lg-6 col-md-6 d-md-flex align-items-md-end order-xl-0 order-lg-0 order-md-0 order-2">
                <div class="form-left-con core-vaule-left-con position-relative text-center overlay-img">
                 
                </div>
              </div> */}
              <div class="col-lg-12 col-md-12">
                <div class="core-vaule-right-con text-xl-left text-lg-left text-md-left text-center">
                  <div class="core-vaule-title">
                    <h2>
                      {"Our comprehensive range of dental services includes"}
                    </h2>
                    {/* <p>
                      {
                        "At CII, we are dedicated to providing exceptional Radiology Services aimed at diagnosing and treating a wide range of medical conditions through advanced imaging technology. Our team of skilled radiologists and technologists utilize state-of-the-art equipment and techniques to deliver accurate and timely results, ensuring the highest standard of care for our patients."
                      }
                    </p> */}
                  </div>
                  <div class="core-vaule-box-con">
                    <div class="core-vaule-box-item position-relative">
                      {/* <figure class="mb-0">
                        <img
                          src={coreValueBoxIcon1}
                          alt="core-vaule-box-icon"
                          class="img-fluid"
                        />
                      </figure> */}
                      <div class="core-vaule-box-title">
                        <h5>{"Routine Dental Exams and Cleanings"}</h5>
                        {/* <span class="d-block">
                          Nullam dictum felis eu pede mollis pretium. Integer
                          <br /> tinciduntras dapibus vivamus elementum.
                        </span> */}
                        <p>
                          {
                            "Regular check-ups and cleanings essential for maintaining good oral health and preventing dental problems such as cavities, gum disease, and tooth decay."
                          }
                        </p>
                      </div>
                    </div>
                    <div class="core-vaule-box-item position-relative">
                      {/* <figure class="mb-0">
                        <img
                          src={coreValueBoxIcon2}
                          alt="core-vaule-box-icon"
                          class="img-fluid"
                        />
                      </figure> */}
                      <div class="core-vaule-box-title">
                        <h5>{"Restorative Dentistry"}</h5>
                        {/* <span class="d-block">
                          Cras dapibus vivamus elementum semper nisi enean
                          <br /> vulputate eleifend am eget duieget dui.
                        </span> */}
                        <p>
                          {
                            "Whether you need a filling for a cavity, a crown to restore a damaged tooth, or a dental implant to replace a missing tooth, our restorative dental treatments can help you regain a healthy, functional smile."
                          }
                        </p>
                      </div>
                    </div>
                    <div class="core-vaule-box-item position-relative mb-0">
                      {/* <figure class="mb-0">
                        <img
                          src={coreValueBoxIcon3}
                          alt="core-vaule-box-icon"
                          class="img-fluid"
                        />
                      </figure> */}
                      <div class="core-vaule-box-title">
                        <h5>{"Cosmetic Dentistry"}</h5>
                        {/* <span class="d-block">
                          Quisque rutrum aenean imperdiet etiam ultricies nisi{" "}
                          <br />
                          vel augue curabitur ullamcorper ultricies nisi.
                        </span> */}
                        <p>
                          {
                            "Enhance the appearance of your smile with our cosmetic dental services, including teeth whitening, porcelain veneers, and Invisalign clear aligners. Achieve the smile of your dreams and boost your confidence with our personalized cosmetic treatments."
                          }
                        </p>
                      </div>
                    </div>
                    <div class="core-vaule-box-item position-relative mb-0">
                      {/* <figure class="mb-0">
                        <img
                          src={coreValueBoxIcon3}
                          alt="core-vaule-box-icon"
                          class="img-fluid"
                        />
                      </figure> */}
                      <div class="core-vaule-box-title">
                        <h5>{"Oral Surgery"}</h5>
                        {/* <span class="d-block">
                          Quisque rutrum aenean imperdiet etiam ultricies nisi{" "}
                          <br />
                          vel augue curabitur ullamcorper ultricies nisi.
                        </span> */}
                        <p>
                          {
                            "From wisdom teeth extractions to dental implant placement, our oral surgery services are performed with precision and care to ensure optimal outcomes for our patients."
                          }
                        </p>
                      </div>
                    </div>
                    <div class="core-vaule-box-item position-relative mb-0">
                      {/* <figure class="mb-0">
                        <img
                          src={coreValueBoxIcon3}
                          alt="core-vaule-box-icon"
                          class="img-fluid"
                        />
                      </figure> */}
                      <div class="core-vaule-box-title">
                        <h5>
                          {
                            "Orthodontics, Periodontal Care, Emergency Dental Care and many more..."
                          }
                        </h5>
                        {/* <span class="d-block">
                          Quisque rutrum aenean imperdiet etiam ultricies nisi{" "}
                          <br />
                          vel augue curabitur ullamcorper ultricies nisi.
                        </span> */}
                        {/* <p>
                          {
                            "From wisdom teeth extractions to dental implant placement, our oral surgery services are performed with precision and care to ensure optimal outcomes for our patients."
                          }
                        </p> */}
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
      <section
        style={{ display: "flex", marginTop: "20px", marginBottom: "150px" }}
      >
        {/* <div class="w-100 float-left news-letter-con">
          <div class="container">
            <div class="news-letter-inner-con banner-overlay-img">
              <div class="row overlay-img align-items-center"> */}
        {/* <div class="col-lg-6 col-md-5">
                  <div class="news-letter-title">
                    <h3 class="text-white mb-0">{"Book An Appointment Now"}</h3>
                  </div>
                </div> */}
        <div class="col-lg-3 col-md-4">
          <div class="news-letter-input-con position-relative">
            {/* <div class="news-letter-input-feild">
                      <input
                        type="email"
                        placeholder="Or Enter Your Email:"
                        class="w-100"
                      />
                    </div> */}
            <Link to={"/team"}>
              <button>
                <i class="far fa-envelope">{"Schedule a Visit"}</i>
              </button>
            </Link>
          </div>
        </div>
        <div class="col-lg-3 col-md-4">
          <div class="news-letter-input-con position-relative">
            {/* <div class="news-letter-input-feild">
                      <input
                        type="email"
                        placeholder="Or Enter Your Email:"
                        class="w-100"
                      />
                    </div> */}
            <Link to={"/team"}>
              <button>
                <i class="far fa-envelope">{"Book Online Consulting"}</i>
              </button>
            </Link>
          </div>
        </div>
        {/* </div>
            </div>
          </div>
        </div> */}
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