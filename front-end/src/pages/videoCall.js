import React from "react";
import CalendarBooking from "../molecules/calendar";
import styled from "styled-components";
import Breadcrumb from "../molecules/breadcrumb";

const VideoCallSection = styled.div`
  margin: 16px;
`;

const BreadCrumbs = styled.div`
  text-align: left;
`;

export default function VideoCall() {
  const breadcrumbItems = [
    { text: "Home", link: "/" },
    { text: "Schedule a Video Call" },
  ];

  return (
    <VideoCallSection>
      <BreadCrumbs>
        <Breadcrumb items={breadcrumbItems} />
      </BreadCrumbs>
      <CalendarBooking />
    </VideoCallSection>
  );
}
