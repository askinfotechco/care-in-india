import React, { useState, useEffect } from "react";
import NavBarTop from "../../molecules/navBar";
import axios from "axios";
import { URL } from "../../connection";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import FooterDetails from "../footerDetails";
import BookingModal from "../../molecules/bookingModal";
import OnlineBookingModal from "../../molecules/onlineBookingModal";

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
      <div className="w-100 float-left top-bar-main-con text-white text-xl-left text-lg-left text-md-left text-center">
        <div className="container">
          <NavBarTop />
        </div>
      </div>
      {/* <!-- top-bar-section-->
<!-- header-and-banner-section --> */}
      {/* <!-- header-and-banner-section -->
<!-- team detail section --> */}
      <section>
        <div className="team-detail-con text-lg-left text-center w-100 float-left">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 order-lg-0 order-2">
                <div
                  className="team-member-detail wow slideInLeft"
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
                  <div className="team-contanct">
                    <span>{`${doctorDetails.location}, `}</span>
                    <span>{doctorDetails.pincode}</span>
                    {/* <br />
                    <span>Phone: </span>
                    <span>+1 234 684 786 09</span> */}
                  </div>
                  <div className="weight-social-list">
                    <ul className="list-unstyled mb-0">
                      <li className="d-inline-block">
                        <a href="https://www.facebook.com/">
                          <i className="fab fa-facebook-square d-flex align-items-center justify-content-center text-white pr-0"></i>
                        </a>
                      </li>
                      <li className="d-inline-block">
                        <a href="https://twitter.com/?lang=en">
                          <i className="fab fa-twitter-square d-flex align-items-center justify-content-center text-white pr-0"></i>
                        </a>
                      </li>
                      <li className="d-inline-block">
                        <a href="https://www.linkedin.com/signup">
                          <i className="fab fa-linkedin d-flex align-items-center justify-content-center text-white pr-0"></i>
                        </a>
                      </li>
                      <li className="d-inline-block">
                        <a href="https://www.pinterest.com/">
                          <i className="fab fa-pinterest-square mr-0 d-flex align-items-center justify-content-center text-white pr-0"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 d-flex align-items-center justify-content-center">
                <figure
                  className="mb-0 float-lg-right wow slideInRight"
                  style={{ visibility: "visible", animation: "slideInRight" }}
                >
                  <img
                    src="assets/image/team-member-img.png"
                    alt="team-member-img"
                    className="img-fluid"
                  />
                </figure>
              </div>
              <BookingModal doctorDetails={doctorDetails} />
              <OnlineBookingModal doctorDetails={doctorDetails} />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- team detail section -->
<!-- professional skils section --> */}
      {/* <!-- professional skils section -->
     <!-- news-letter-section --> */}
      <section>
        {/* <div className="w-100 float-left news-letter-con"> */}

        <div className="container">
          {/* <div className="row overlay-img align-items-center"> */}
          <div className="col-lg-6 col-md-5">
            <div className="news-letter-title">
              <h2 className="text-white mb-0"></h2>
            </div>
          </div>
        </div>
        {/* </div> */}
        {/* </div> */}
      </section>
      {/* <!-- news-letter-section -->
     <!-- logo-section --> */}
      {/* <div className="w-100 float-left logo-con">
        <div className="container">
          <div className="logo-inner-con">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-sm-4 col-4">
                <figure className="mb-0">
                  <img
                    src="assets/image/client-logo-img1.png"
                    alt="client-logo-img"
                    className="img-fluid"
                  />
                </figure>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-4 col-4">
                <figure className="mb-0">
                  <img
                    src="assets/image/client-logo-img2.png"
                    alt="client-logo-img"
                    className="img-fluid"
                  />
                </figure>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-4 col-4">
                <figure className="mb-0">
                  <img
                    src="assets/image/client-logo-img3.png"
                    alt="client-logo-img"
                    className="img-fluid"
                  />
                </figure>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-4 col-4">
                <figure className="mb-0">
                  <img
                    src="assets/image/client-logo-img4.png"
                    alt="client-logo-img"
                    className="img-fluid mb-0"
                  />
                </figure>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-4 col-4">
                <figure className="mb-0">
                  <img
                    src="assets/image/client-logo-img5.png"
                    alt="client-logo-img"
                    className="img-fluid mb-0"
                  />
                </figure>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-4 col-4">
                <figure className="mb-0">
                  <img
                    src="assets/image/client-logo-img6.png"
                    alt="client-logo-img"
                    className="img-fluid mb-0"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <!-- logo-section -->
      <!-- weight-footer-section --> */}
      {/* <FooterDetails style={{ marginTop: "50px" }} /> */}
    </div>
  );
}
