import React, { useState } from "react";
import styled from "styled-components";
import DoctorCard from "../molecules/doctorCard";
import Breadcrumb from "../molecules/breadcrumb";
import Dropdown from "../molecules/selectOptions";

const AppointmentPage = styled.div`
  margin: 16px;
`;

const BreadCrumbs = styled.div`
  text-align: left;
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

const dropdownOptions = [
  { one: "110002", two: "Ajmeri Gate" },
  { one: "110003", two: "Aliganj" },
  { one: "110005", two: "Anand Parbat" },
];

const doctorDetails = [
  {
    imgSource: "your-image-url.jpg",
    title: "Doctor Name 1",
    speciallity: "General Physician",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed deiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imgSource: "your-image-url.jpg",
    title: "Doctor Name 2",
    speciallity: "Dermatologist",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed deiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imgSource: "your-image-url.jpg",
    title: "Doctor Name 3",
    speciallity: "CardioLogist",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed deiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imgSource: "your-image-url.jpg",
    title: "Doctor Name 1",
    speciallity: "Dentist",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed deiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const breadcrumbItems = [
  { text: "Home", link: "/" },
  { text: "Book Appointment" },
];

export default function BookAppointment() {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <AppointmentPage>
      <BreadCrumbs>
        <Breadcrumb items={breadcrumbItems} />
      </BreadCrumbs>
      <Dropdown
        option={dropdownOptions}
        selectedOption={selectedOption}
        selectedOptionFun={setSelectedOption}
      />
      <AppointmentSection>
        {doctorDetails.map((ele) => {
          return <DoctorCard data={ele} />;
        })}
      </AppointmentSection>
    </AppointmentPage>
  );
}
