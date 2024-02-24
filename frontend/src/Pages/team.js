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
  ButtonGroup,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

export default function Team() {
  const [selectedOption, setSelectedOption] = useState("All");
  const [loading, setLoading] = useState(false);
  const [doctorDetails, setDoctorDetails] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
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
                    <p className="text-black">
                      We’re a dynamic group of individuals who are passionate
                      about what
                      <br />
                      we do and dedicated to delivering the best results for our
                      clients.
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
              {/* <Button
                onClick={() => handlePillSelect("Cardiologist")}
                variant={
                  selectedPill === "Cardiologist" ? "contained" : "outlined"
                }
              >
                Cardiologist
              </Button>
              <Button
                onClick={() => handlePillSelect("Dentist")}
                variant={selectedPill === "Dentist" ? "contained" : "outlined"}
              >
                Dentist
              </Button>
              <Button
                onClick={() => handlePillSelect("Dermatologist")}
                variant={
                  selectedPill === "Dermatologist" ? "contained" : "outlined"
                }
              >
                Dermatologist
              </Button>
              <Button
                onClick={() => handlePillSelect("General Physician")}
                variant={
                  selectedPill === "General Physician"
                    ? "contained"
                    : "outlined"
                }
              >
                General Physician
              </Button> */}
              {/* Add more buttons for other categories */}
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
      <!-- form-section --> */}
      {/* <section>
        <div className="w-100 float-left form-main-con">
          <div className="container">
            <div className="text-center">
              <h2>Book An Appointment</h2>
              <p>
                Seram ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eius mod tempor incididunt aenean
                <br />
                leo ligula porttitor eu consequat vitae eleifend tac.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6 order-xl-0 order-lg-0 order-2">
                <div className="form-left-con position-relative text-center">
                  <figure className="mb-0">
                    <img
                      src={formLeftImg}
                      alt="form-left-img"
                      className="mb-0 img-fluid human-img"
                    />
                  </figure>
                </div>
              </div>
              <div className="col-lg-6">
                <form className="contact-form">
                  <div className="form-group">
                    <label
                      for="exampleFormControlSelect1"
                      className="text-white"
                    >
                      Department
                    </label>
                    <select
                      className="form-control position-relative"
                      id="exampleFormControlSelect1"
                    >
                      <option>General Health Checkup</option>
                      <option>General Health Checkup</option>
                      <option>General Health Checkup</option>
                      <option>General Health Checkup</option>
                      <option>General Health Checkup</option>
                    </select>
                    <i className="fas fa-angle-down"></i>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name:"
                          name="name"
                          id="name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email:"
                        />
                        <small
                          id="emailHelp"
                          className="form-text text-muted"
                        ></small>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input type="time" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <select className="form-control position-relative">
                          <option>Choose Doctor </option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                        <i className="fas fa-angle-down down-icon"></i>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="textarea form-group W-100">
                        <textarea
                          className="form-control "
                          placeholder="Message:"
                          rows="3"
                          name="comments"
                          id="comments"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn  appointment-btn">
                    Make Appointment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <!-- form-section -->
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
