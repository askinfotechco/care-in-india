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
import FooterDetails from "../footerDetails";

export default function Surgery() {
  return (
    <div>
      {/* <!-- top-bar-section-->
      <!-- header-and-banner-section --> */}
      <div className="w-100 float-left header-and-banner-con banner-overlay-img">
        <div className="container">
          <div className="overlay-img">
            {/* <!-- navbar-start --> */}
            <NavBar />
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

      <!-- service-box --> */}
      {/* <section>
        <div className="w-100 float-left service-box-con">
          <div className="container">
            <div className="service-box-inner-con">
              <div className="row ml-0 mr-0">
                <ServiceCards
                  img={serviceBoxIcon1}
                  alt={"service-box-icon"}
                  className={"img-fluid"}
                  name={"Radiology Services"}
                  description={
                    "We provide advanced imaging techniques to diagnose and treat medical conditions through non-invasive visualization of internal structures."
                  }
                />
                <ServiceCards
                  img={serviceBoxIcon2}
                  alt={"service-box-icon"}
                  className={"img-fluid"}
                  name={"Surgery"}
                  description={
                    "Discover expert surgical care tailored to your unique needs, ensuring precise and compassionate interventions for optimal health outcomes."
                  }
                />
                <ServiceCards
                  img={serviceBoxIcon3}
                  alt={"service-box-icon"}
                  className={"img-fluid"}
                  name={"Dental Care"}
                  description={
                    "Elevate your oral health with our comprehensive dental services, delivering personalized care for a confident and radiant smile."
                  }
                />
                <ServiceCards
                  img={serviceBoxIcon4}
                  alt={"service-box-icon"}
                  className={"img-fluid"}
                  name={"Physiotherapy"}
                  description={
                    "Experience transformative physiotherapy services focused on restoring mobility, alleviating pain, and enhancing overall well-being for a healthier, active life."
                  }
                />
              </div>
            </div> */}
      {/* <div className="service-box-img">
              <figure className="mb-0">
                <img src={serviceBoxBannerImg} alt="" className="img-fluid" />
              </figure>
            </div> */}
      {/* <div className="service-box-inner-con">
              <div className="row ml-0 mr-0">
                <ServiceCards
                  img={serviceBoxIcon5}
                  alt={"service-box-icon"}
                  className={"img-fluid"}
                  name={"Dermatology"}
                  description={
                    "Rejuvenate your skin, hairs and confidence with our dermatology services, offering expert care for a radiant complexion and the treatment of various skin and hair conditions."
                  }
                />
                <ServiceCards
                  img={serviceBoxIcon6}
                  alt={"service-box-icon"}
                  className={"img-fluid"}
                  name={"Health Packages in Same Day"}
                  description={
                    "Explore comprehensive health packages designed for proactive wellness, offering thorough assessments and screenings to optimize your overall health and prevent potential issues."
                  }
                />
                <ServiceCards
                  img={serviceBoxIcon7}
                  alt={"service-box-icon"}
                  className={"img-fluid"}
                  name={"Sexual Wellness / IVF"}
                  description={
                    "Nurture your reproductive health with our comprehensive Sexual Wellness and IVF services, providing compassionate care and advanced solutions on your journey to parenthood."
                  }
                />
                <ServiceCards
                  img={serviceBoxIcon8}
                  alt={"service-box-icon"}
                  className={"img-fluid"}
                  name={"Mediclaim"}
                  description={
                    "Secure your peace of mind with our mediclaim services, offering tailored insurance solutions to safeguard your health and financial well-being."
                  }
                />
              </div>
            </div>
            <div className="service-box-inner-con">
              <div className="row ml-0 mr-0">
                <ServiceCards
                  img={serviceBoxIcon9}
                  alt={"service-box-icon"}
                  className={"img-fluid"}
                  name={"CII Health Buddy Plan"}
                  rowclassName={"col-6 mx-auto"}
                  description={
                    "Embrace a healthier future with our comprehensive Health Plans, designed to provide personalized coverage and support for your well-being journey."
                  }
                /> */}
      {/* <ServiceCards
                  img={serviceBoxIcon2}
                  alt={"service-box-icon"}
                  className={"img-fluid"}
                  name={"Surgery"}
                  description={
                    "Discover expert surgical care tailored to your unique needs, ensuring precise and compassionate interventions for optimal health outcomes."
                  }
                />
                <ServiceCards
                  img={serviceBoxIcon3}
                  alt={"service-box-icon"}
                  className={"img-fluid"}
                  name={"Dental Care"}
                  description={
                    "Elevate your oral health with our comprehensive dental services, delivering personalized care for a confident and radiant smile."
                  }
                />
                <ServiceCards
                  img={serviceBoxIcon4}
                  alt={"service-box-icon"}
                  className={"img-fluid"}
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
        <div className="w-100 float-left core-vaule-con service-page-vaule-con">
          <div className="container">
            <div className="row">
              {/* <div className="col-lg-6 col-md-6 d-md-flex align-items-md-end order-xl-0 order-lg-0 order-md-0 order-2">
                <div className="form-left-con core-vaule-left-con position-relative text-center overlay-img">
                 
                </div>
              </div> */}
              <div className="col-lg-12 col-md-12">
                <div className="core-vaule-right-con text-xl-left text-lg-left text-md-left text-center">
                  <div className="core-vaule-title">
                    <h2>{"Key Features of Our Surgery Services"}</h2>
                    {/* <p>
                      {
                        "At CII, we are dedicated to providing exceptional Radiology Services aimed at diagnosing and treating a wide range of medical conditions through advanced imaging technology. Our team of skilled radiologists and technologists utilize state-of-the-art equipment and techniques to deliver accurate and timely results, ensuring the highest standard of care for our patients."
                      }
                    </p> */}
                  </div>
                  <div className="core-vaule-box-con">
                    <div className="core-vaule-box-item position-relative">
                      {/* <figure className="mb-0">
                        <img
                          src={coreValueBoxIcon1}
                          alt="core-vaule-box-icon"
                          className="img-fluid"
                        />
                      </figure> */}
                      <div className="core-vaule-box-title">
                        <h5>{"Comprehensive Surgical Care"}</h5>
                        {/* <span className="d-block">
                          Nullam dictum felis eu pede mollis pretium. Integer
                          <br /> tinciduntras dapibus vivamus elementum.
                        </span> */}
                        <p>
                          {
                            "Our Surgery Services cover a broad spectrum of surgical specialties, including but not limited to - General Surgery, Orthopedic Surgery, Cardiovascular Surgery, Neurosurgery, Minimally Invasive Surgery"
                          }
                        </p>
                      </div>
                    </div>
                    <div className="core-vaule-box-item position-relative">
                      {/* <figure className="mb-0">
                        <img
                          src={coreValueBoxIcon2}
                          alt="core-vaule-box-icon"
                          className="img-fluid"
                        />
                      </figure> */}
                      <div className="core-vaule-box-title">
                        <h5>{"Expert Surgical Team"}</h5>
                        {/* <span className="d-block">
                          Cras dapibus vivamus elementum semper nisi enean
                          <br /> vulputate eleifend am eget duieget dui.
                        </span> */}
                        <p>
                          {
                            "Our team of board-certified surgeons are leaders in their respective fields, with extensive training, experience, and expertise in performing a wide range of surgical procedures. With a commitment to excellence and patient-centered care, our surgeons collaborate closely with multidisciplinary teams to develop individualized treatment plans tailored to each patient's needs."
                          }
                        </p>
                      </div>
                    </div>
                    <div className="core-vaule-box-item position-relative mb-0">
                      {/* <figure className="mb-0">
                        <img
                          src={coreValueBoxIcon3}
                          alt="core-vaule-box-icon"
                          className="img-fluid"
                        />
                      </figure> */}
                      <div className="core-vaule-box-title">
                        <h5>{"State-of-the-Art Facilities"}</h5>
                        {/* <span className="d-block">
                          Quisque rutrum aenean imperdiet etiam ultricies nisi{" "}
                          <br />
                          vel augue curabitur ullamcorper ultricies nisi.
                        </span> */}
                        <p>
                          {
                            "We operate in modern, state-of-the-art surgical facilities equipped with the latest technology and equipment to ensure the highest standard of care and safety for our patients. Our operating rooms are designed to provide a sterile environment, optimal surgical conditions, and advanced monitoring capabilities to support successful surgical outcomes."
                          }
                        </p>
                      </div>
                    </div>
                    <div className="core-vaule-box-item position-relative mb-0">
                      {/* <figure className="mb-0">
                        <img
                          src={coreValueBoxIcon3}
                          alt="core-vaule-box-icon"
                          className="img-fluid"
                        />
                      </figure> */}
                      <div className="core-vaule-box-title">
                        <h5>{"Compassionate Patient Care"}</h5>
                        {/* <span className="d-block">
                          Quisque rutrum aenean imperdiet etiam ultricies nisi{" "}
                          <br />
                          vel augue curabitur ullamcorper ultricies nisi.
                        </span> */}
                        <p>
                          {
                            "We understand that undergoing surgery can be a daunting experience for many patients. That's why we prioritize compassionate, patient-centered care, providing support, reassurance, and guidance throughout every step of the surgical process. From pre-operative education and preparation to post-operative recovery and follow-up care, our dedicated staff are here to address your concerns, answer your questions, and ensure your comfort and well-being."
                          }
                        </p>
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
      <section>
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
      <FooterDetails />
    </div>
  );
}
