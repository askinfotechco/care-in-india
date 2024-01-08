import React, { useState, useEffect, useRef } from "react";
import userInfo from "../static/images/userInfo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

const UserProfileSection = styled.div``;

const Avtar = styled.div`
  border: 1px dotted black;
  border-radius: 50%;
  padding: 6px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const UserName = styled.span`
  font-size: 12px;
`;

const UserProfile = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 150px;
  background: #f0f6ff;
`;

const UserOptionSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Options = styled(Link)`
  margin: 3px;
  &:hover {
    cursor: pointer;
    background-color: white;
  }
`;

const UserProfileDropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies("jwt");

  //   useEffect(() => {
  //     const handleClickOutside = (event) => {
  //       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //         // Click occurred outside the dropdown, so close it
  //         setIsOpen(false);
  //       }
  //     };

  //     // Attach the event listener
  //     document.addEventListener("click", handleClickOutside);

  //     // Clean up the event listener on component unmount
  //     return () => {
  //       document.removeEventListener("click", handleClickOutside);
  //     };
  //   }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  //to implement the user info like health records, prescriptions and appointment history
  const handleUserInfo = () => {
    // Add logout logic here
    toggleDropdown();
  };

  const handleLogout = () => {
    // Add logout logic here
    toggleDropdown();
    props.handleLogout();
  };

  console.log(sessionStorage);
  return (
    <UserProfileSection>
      {!isOpen && (
        <Avtar className="profile-trigger" onClick={toggleDropdown}>
          <img
            src={userInfo} // Replace with the actual URL of the user's avatar
            alt="User Avatar"
            className="avatar"
            style={{ width: "20px", height: "20px" }}
          />
        </Avtar>
      )}
      {isOpen && (
        <UserProfile>
          <UserName>{sessionStorage.getItem("name")}</UserName>
          <UserOptionSection>
            <Options to={"/userProfile"} onClick={handleUserInfo}>
              User Profile
            </Options>
            <Options className="option" onClick={handleLogout}>
              Logout
            </Options>
            {/* Add more options as needed */}
          </UserOptionSection>
        </UserProfile>
      )}
    </UserProfileSection>
  );
};

export default UserProfileDropdown;
