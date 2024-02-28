import React, { useEffect, useState } from "react";
import NavBarTop from "../molecules/navBar";
import clientLogoImg1 from "../assets/image/client-logo-img1.png";
import clientLogoImg2 from "../assets/image/client-logo-img2.png";
import clientLogoImg3 from "../assets/image/client-logo-img3.png";
import clientLogoImg4 from "../assets/image/client-logo-img4.png";
import clientLogoImg5 from "../assets/image/client-logo-img5.png";
import clientLogoImg6 from "../assets/image/client-logo-img6.png";
import axios from "axios";
import { URL } from "../connection";
import DoctorsCard from "../molecules/doctorsCard";
import FooterDetails from "./footerDetails";
import {
  Button,
  ButtonGroup
} from "@mui/material";

export default function Team() {
  // const [selectedOption, setSelectedOption] = useState("All");
  const [loading, setLoading] = useState(false);
  const [doctorDetails, setDoctorDetails] = useState([]);
  // const [filteredData, setFilteredData] = useState([]);
  // const [searchQuery, setSearchQuery] = useState("");
  const [selectedPill, setSelectedPill] = useState("all");
  const [filteredCards, setFilteredCards] = useState();
  const [specialization, setSpecialization] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${URL}/api/doctor/`);
        const responseSpec = await axios.get(`${URL}/api/doctor/getallspecializations`);
        // console.log(response.data);
        // console.log(responseSpec.data);
        setDoctorDetails(response.data.allUser);
        setFilteredCards(response.data.allUser);
        setSpecialization(responseSpec.data.allSpecializations);
      } catch (err) {
        console.log("request not wokring", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handlePillSelect = (pill) => {
    setSelectedPill(pill);
    if (pill === "all") {
      setFilteredCards(doctorDetails);
    } else {
      const filtered = doctorDetails.filter(
        (card) => card.specialization === pill
      );
      setFilteredCards(filtered);
    }
  };

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
              <div className="w-100 float-left text-xl-left text-lg-left text-center mt-24">
                <div className="container">
                  <div className="text-white text-center">
                    <h1>Find a Doctor</h1>
                    <p className="text-white">
                      Book An Appointment at CII.
                      <br />
                      Book an appointment with your doctor who is the perfect match for your medical needs.
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
        <div className="w-100 float-left professional-con">
          <div className="container">
            <ButtonGroup
              color="primary"
              aria-label="outlined primary button group"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                onClick={() => handlePillSelect("all")}
                variant={selectedPill === "all" ? "contained" : "outlined"}
              >
                All
              </Button>
              {specialization?.map((spec) => {
                return <Button
                  onClick={() => handlePillSelect(spec)}
                  variant={
                    selectedPill === spec ? "contained" : "outlined"
                  }
                >
                  {spec}
                </Button>;
              })}
            </ButtonGroup>
            <div className="professional-box mt-10">
              <div className="row">
                {filteredCards?.map((ele) => {
                  return <DoctorsCard data={ele} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- professional-section-->
      <!-- logo-section --> */}
      <div className="w-100 float-left logo-con mt-5">
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
