import FooterDetails from "../footerDetails";
import React, { useState, useEffect } from "react";
import NavBar from "../../molecules/navBar";
import axios from "axios";
import { URL } from "../../connection";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function TeamDetails() {
  const [selectedOption, setSelectedOption] = useState("All");
  const [loading, setLoading] = useState(false);
  const [doctorDetails, setDoctorDetails] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies("jwt");

  const { regId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const formDataToSend = await JSON.stringify({ regId: regId });
      try {
        setLoading(true);
        const response = await axios.post(
          `${URL}/api/doctor/byregid`,
          formDataToSend,
          {
            headers: {
              Authorization: "Bearer " + cookies.jwt,
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
        console.log(response.data);
        setDoctorDetails(response.data.user);
      } catch (err) {
        console.log("request not wokring", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {" "}
      <div class="w-100 float-left top-bar-main-con text-white text-xl-left text-lg-left text-md-left text-center">
        <div class="container">
          <NavBar />
        </div>
      </div>
      {/* <!-- top-bar-section-->
<!-- header-and-banner-section --> */}
      {/* <!-- header-and-banner-section -->
<!-- team detail section --> */}
      <section>
        <div class="team-detail-con text-lg-left text-center w-100 float-left">
          <div class="container">
            <div class="row">
              <div class="col-lg-7 order-lg-0 order-2">
                <div
                  class="team-member-detail wow slideInLeft"
                  style={{ visibility: "visible", animation: "slideInLeft" }}
                >
                  <h5>{doctorDetails.specialization}</h5>
                  <h2>{`Dr ${doctorDetails.firstname} ${doctorDetails.lastname}`}</h2>
                  <p>{doctorDetails.about}</p>
                  {/* <p>
                    Repellendus temporibus autem quibusdam et aut officiis
                    debitis aut rerum necessitatibus saepe eveniet ut et voluta
                    repudi.
                  </p> */}
                  <div class="team-contanct">
                    <span>{doctorDetails.location}</span>
                    <span>{doctorDetails.pincode}</span>
                    {/* <br />
                    <span>Phone: </span>
                    <span>+1 234 684 786 09</span> */}
                  </div>
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
              <div class="col-lg-5 d-flex align-items-center justify-content-center">
                <figure
                  class="mb-0 float-lg-right wow slideInRight"
                  style={{ visibility: "visible", animation: "slideInRight" }}
                >
                  <img
                    src="assets/image/team-member-img.png"
                    alt="team-member-img"
                    class="img-fluid"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- team detail section -->
<!-- professional skils section --> */}
      {/* <!-- professional skils section -->
     <!-- news-letter-section --> */}
      <section>
        {/* <div class="w-100 float-left news-letter-con"> */}
        <div class="container">
          <div class="news-letter-inner-con banner-overlay-img">
            {/* <div class="row overlay-img align-items-center"> */}
            <div class="col-lg-6 col-md-5">
              <div class="news-letter-title">
                <h2 class="text-white mb-0">
                  <button>Book Now</button>
                </h2>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
        {/* </div> */}
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
      <FooterDetails />
    </div>
  );
}
