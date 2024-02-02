import React from "react";
import styled from "styled-components";
import { FaSuitcaseMedical } from "react-icons/fa6";
import { FaTruckMedical } from "react-icons/fa6";
import { FaHospitalAlt } from "react-icons/fa";

/* MyComponent.css */
const Spinner = styled.div`
  //   border: 4px solid #ccc;
  //   border-left: 10px solid #f0f6ff;
  background: white;
  padding: 5px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 0.4s linear infinite;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes spin {
    0% {
      //transform: rotate(0deg);
      transform: translate(40%);
    }
    50% {
      //   transform: rotate(-360deg);
      transform: translate(60%);
    }
    100% {
      //   transform: rotate(360deg);
      transform: translate(40%);
    }
  }
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent black background */
  z-index: 999; /* Make sure the backdrop is above other elements */
`;

const SpinnerContainer = styled.div`
  display: flex;
  gap: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000; /* Make sure the spinner is above the backdrop */
`;

export default function LoadingSpinner() {
  return (
    <>
      <Backdrop></Backdrop>
      <SpinnerContainer>
        <Spinner>
          <FaTruckMedical
            style={{
              height: 25,
              width: 25,
            }}
          />
        </Spinner>
        <Spinner>
          <FaHospitalAlt
            style={{
              height: 25,
              width: 25,
            }}
          />
        </Spinner>
      </SpinnerContainer>
    </>
  );
}
