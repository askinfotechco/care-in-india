import React, { useEffect, useState } from "react";
import NavBarTop from "../molecules/navBar";
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
import { useCookies } from "react-cookie";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

export default function Appointment() {
  const [selectedOption, setSelectedOption] = useState("All");
  const [loading, setLoading] = useState(false);
  const [doctorDetails, setDoctorDetails] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPill, setSelectedPill] = useState("all");
  const [filteredCards, setFilteredCards] = useState();
  const [cookies, setCookie, removeCookie] = useCookies("jwt");
  const [email, setEmail] = useState(sessionStorage.getItem("email"));
  const [appointments, setAppointments] = useState([]);

  const data = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    // Add more data objects as needed
  ];

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const formDataToSend = await JSON.stringify({ email: email });
  //     console.log(formDataToSend);
  //     try {
  //       setLoading(true);
  //       const response = await axios.post(
  //         `${URL}/api/doctor/appointment`,
  //         formDataToSend,
  //         {
  //           headers: {
  //             Authorization: "Bearer " + cookies.jwt,
  //             Accept: "application/json",
  //             "Content-Type": "application/json",
  //             "Access-Control-Allow-Origin": "*",
  //           },
  //         }
  //       );
  //       console.log(response.data);
  //       setAppointments(response.data.user);
  //     } catch (err) {
  //       console.log("request not wokring", err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   // fetchData();
  // }, []);

  // console.log(doctorDetails);
  //console.log(filteredCards);

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
              <div className="w-100 float-left generic-banner-con text-xl-left text-lg-left text-center">
                <div className="container">
                  <div className="generic-banner-content text-white text-center">
                    <h1>Your Appointments</h1>
                    <p>
                      select the dates
                      <br />
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
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-black-900 sm:text-4xl">
                Meet our Doctors
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We’re a dynamic group of individuals who are passionate about
                what we do and dedicated to delivering the best healthcare
                facilities.
              </p>
            </div>
            <div className="professional-box">
              <Paper>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Email</TableCell>
                      {/* Add more table headers as needed */}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.email}</TableCell>
                        {/* Add more table cells for additional data */}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Paper>
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
