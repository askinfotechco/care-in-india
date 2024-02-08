import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { URL } from "../connection";
import DoctorsCard from "../molecules/doctorsCard";
import FooterDetails from "./footerDetails";

export default function Team() {
  const [selectedOption, setSelectedOption] = useState("All");
  const [loading, setLoading] = useState(false);
  const [doctorDetails, setDoctorDetails] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${URL}/api/doctor/`);
        console.log(response.data);
        setDoctorDetails(response.data.allUser);
      } catch (err) {
        console.log("request not wokring", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  console.log(doctorDetails);

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
                {doctorDetails.map((ele) => {
                  return <DoctorsCard data={ele} />;
                })}
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
                    <img src={smallLeftCurveImg} alt="" class="img-fluid" />
                  </figure>
                  <figure class="mb-0">
                    <img
                      src={formLeftImg}
                      alt="form-left-img"
                      class="mb-0 img-fluid human-img"
                    />
                  </figure>
                  <figure class="mb-0 right-curve-img wow slideInRight">
                    <img src={smallRightCurveImg} alt="" class="img-fluid" />
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
      <FooterDetails />
    </div>
  );
}
