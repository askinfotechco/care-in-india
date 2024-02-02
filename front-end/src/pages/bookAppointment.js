import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DoctorCard from "../molecules/doctorCard";
import Breadcrumb from "../molecules/breadcrumb";
import Dropdown from "../molecules/selectOptions";
import axios from "axios";
import { URL } from "../connection";
import LoadingSpinner from "../molecules/loadingSpinner";
import SearchComponent from "../molecules/search";

const AppointmentPage = styled.div`
  margin: 16px;
  background-color: #f2f2f2;
  padding: 8px;
`;

const BreadCrumbs = styled.div`
  text-align: left;
`;

const MainSection = styled.div`
  background: #fff;
  margin: 0 16px;
`;

const AppointmentSection = styled.div`
  background-image: url("path/to/your/image.jpg");
  //   background-size: cover;
  //   background-position: center;
  //   background-repeat: no-repeat;
  //   height: 100vh; /* Set the height to fill the entire viewport */
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   color: #ffffff; /* Set text color to contrast with the background */
  display: flex;
`;

//can be pushed to dummy data
// const dropdownOptions = [
//   { one: "110002", two: "Ajmeri Gate" },
//   { one: "110003", two: "Aliganj" },
//   { one: "110005", two: "Anand Parbat" },
// ];

// const doctorDetails = [
//   {
//     imgSource: "your-image-url.jpg",
//     title: "Doctor Name 1",
//     speciallity: "General Physician",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed deiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     imgSource: "your-image-url.jpg",
//     title: "Doctor Name 2",
//     speciallity: "Dermatologist",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed deiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     imgSource: "your-image-url.jpg",
//     title: "Doctor Name 3",
//     speciallity: "CardioLogist",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed deiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     imgSource: "your-image-url.jpg",
//     title: "Doctor Name 1",
//     speciallity: "Dentist",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed deiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
// ];

const breadcrumbItems = [
  { text: "Home", link: "/" },
  { text: "Book Appointment" },
];

export default function BookAppointment() {
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

  useEffect(() => {
    let filteredData = [];
    if (selectedOption === "All") {
      filteredData = [...doctorDetails];
    } else {
      filteredData = doctorDetails.filter((item) =>
        item.pincode.toLowerCase().includes(selectedOption.toLowerCase())
      );
    }
    setFilteredData(filteredData);
  }, [doctorDetails, selectedOption]);

  const onSearchClick = () => {
    let filteredData = [];
    // filteredData = doctorDetails.filter(
    //   (item) =>
    //     item.pincode.toLowerCase().includes(searchQuery.toLowerCase()) ||
    //     item.name.toLowerCase().includes(searchQuery.toLowerCase())
    // );
    filteredData = doctorDetails.filter((item) => {
      for (const prop in item) {
        if (Object.prototype.hasOwnProperty.call(item, prop)) {
          const value = item[prop];
          if (
            typeof value === "string" &&
            value.toLowerCase().includes(searchQuery.toLowerCase())
          ) {
            return true; // If keyword found in any string property
          }
        }
      }
      return false; // If keyword not found in any property
    });
    setFilteredData(filteredData);
  };

  return (
    <MainSection>
      {loading && <LoadingSpinner />}
      <AppointmentPage>
        <BreadCrumbs>
          <Breadcrumb items={breadcrumbItems} />
        </BreadCrumbs>
        <Dropdown
          option={doctorDetails}
          selectedOption={selectedOption}
          selectedOptionFun={setSelectedOption}
        />
        <SearchComponent
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSearch={onSearchClick}
        />
        <AppointmentSection>
          {filteredData.map((ele) => {
            return <DoctorCard data={ele} />;
          })}
        </AppointmentSection>
      </AppointmentPage>
    </MainSection>
  );
}
