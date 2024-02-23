import React, { useState, useEffect } from "react";
import clientLogoImg1 from "../../assets/image/client-logo-img1.png";
import clientLogoImg2 from "../../assets/image/client-logo-img2.png";
import clientLogoImg3 from "../../assets/image/client-logo-img3.png";
import clientLogoImg4 from "../../assets/image/client-logo-img4.png";
import clientLogoImg5 from "../../assets/image/client-logo-img5.png";
import clientLogoImg6 from "../../assets/image/client-logo-img6.png";
import NavBarTop from "../../molecules/navBar";
import axios from "axios";
import { URL } from "../../connection";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import FooterDetails from "../footerDetails";
import BookingModal from "../../molecules/bookingModal";
import OnlineBookingModal from "../../molecules/onlineBookingModal";
import HTMLReactParser from "html-react-parser";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/solid";

const pages = [
  { name: "Team", href: "/team", current: false },
  { name: "Team Details", href: "#", current: true },
];

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
    <div classNameName="App">
      <div className="w-100 float-left header-and-banner-con banner-overlay-img">
        <div className="container">
          <div className="overlay-img mb-5">
            <NavBarTop />
          </div>
        </div>
      </div>
      {/* <!-- header-and-banner-section -->
      <!-- feature-box --> */}
      <br />
      <section>
        <div>
          <nav aria-label="Breadcrumb hover:bg-blue-400">
            <ol
              role="list"
              className="flex space-x-4 rounded-md bg-white px-6 shadow "
            >
              <li className="flex">
                <div className="flex items-center">
                  <a href="/" className="text-gray-400 hover:text-gray-500">
                    <HomeIcon
                      className="h-5 w-5 flex-shrink-0 text-black"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Home</span>
                  </a>
                </div>
              </li>
              {pages.map((page) => (
                <li key={page.name} className="flex">
                  <div className="flex items-center">
                    <svg
                      className="h-full w-6 flex-shrink-0 text-gray-200"
                      viewBox="0 0 24 44"
                      preserveAspectRatio="none"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                    </svg>
                    <a
                      href={page.href}
                      className="ml-4 text-md font-medium text-black hover:text-gray-700 no-underline"
                      aria-current={page.current ? "page" : undefined}
                    >
                      {page.name}
                    </a>
                  </div>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </section>
      <section>
        <div class="bg-gray-100">
          <div class="container mx-auto py-8">
            <div class="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
              <div class="col-span-4 sm:col-span-3 mt-10">
                <div class="bg-white shadow rounded-lg p-6">
                  <div class="flex flex-col items-center">
                    <img
                      src="https://randomuser.me/api/portraits/men/94.jpg"
                      class="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                    ></img>
                    <h1 class="text-xl font-bold">{`${doctorDetails.firstname} ${doctorDetails.lastname}`}</h1>
                    <p class="text-gray-700">{doctorDetails.specialization}</p>
                    <div class="mt-6 flex flex-wrap gap-4 justify-center">
                      <a
                        href="#"
                        class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                      >
                        Contact
                      </a>
                      <a
                        href="#"
                        class="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded"
                      >
                        Resume
                      </a>
                    </div>
                  </div>
                  <hr class="my-6 border-t border-gray-300" />
                  <div class="flex flex-col">
                    <span class="text-gray-700 uppercase font-bold tracking-wider mb-2">
                      Skills
                    </span>
                    <ul>
                      <li class="mb-2">JavaScript</li>
                      <li class="mb-2">React</li>
                      <li class="mb-2">Node.js</li>
                      <li class="mb-2">HTML/CSS</li>
                      <li class="mb-2">Tailwind Css</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-span-4 sm:col-span-9 mt-10">
                <div class="bg-white shadow rounded-lg p-6">
                  <h2 class="text-xl font-bold mb-4">About Me</h2>
                  <p class="text-gray-700">
                    {HTMLReactParser(`${doctorDetails.about}`)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<!-- logo-section --> */}
      <div className="w-100 float-left logo-con mt-20">
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
