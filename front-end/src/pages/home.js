import React, { useEffect, useState } from "react";
import InternalLink from "../atoms/internalLink";
import styled from "styled-components";
import companyLogoImage from "../static/images/careinindia.png";
import { Link } from "react-router-dom";
import { FaCalendarPlus } from "react-icons/fa";
import { MdVideoCall } from "react-icons/md";
import { BiFileFind } from "react-icons/bi";
import { GiMedicines } from "react-icons/gi";
import { LuFiles } from "react-icons/lu";
import UserProfileDropdown from "../molecules/userInfo";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import StickyFooter from "../molecules/StickyFooter";
import Carousel from "../molecules/coro";

const Wrapper = styled.div`
  margin: 16px;
  padding: 8px;
  background-color: white;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
`;

const CompanyLogo = styled.div`
  background-color: white;
  flex: 70%;
  text-align: left;
`;

const Links = styled.div`
  display: flex;
  flex: 1%;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  color: black; /* Set your desired text color */
  text-decoration: none;
`;

const LineSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f6ff;
  height: 30px;
  padding: 2px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    ${StyledLink} {
      color: #f0f6ff;
    }
    background-color: black;
    transform: scale(1.1);
  }
`;

const Label = styled.div`
  display: block;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 700;
  line-height: 36px; /* 150% */
  letter-spacing: -0.36px;
  color: rgba(0, 0, 0, 0.8);
`;

const Features = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f2f2f2;
  padding: 8px;
  margin-bottom: 40px;
`;

const FeatureIcons = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    transform: scale(1.1);
  }
`;

export default function Home() {
  const [userEmail, setUserEmail] = useState();
  const [cookies, setCookie, removeCookie] = useCookies("jwt");

  useEffect(() => {
    setUserEmail(sessionStorage.getItem("email"));
  }, [sessionStorage]);

  const handleLogout = () => {
    // Add logout logic here
    removeCookie("jwt", { path: "/" });
    sessionStorage.removeItem("jwt");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("name");
    setUserEmail(sessionStorage.getItem("email"));
    console.log("Logging out...");
  };

  console.log(userEmail);
  return (
    <>
      <Wrapper>
        <TopSection>
          <CompanyLogo>
            <img
              src={companyLogoImage}
              alt="Healthcare Image"
              style={{
                width: "270px",
                height: "100px",
                marginTop: "-10px",
                marginLeft: "-10px",
              }}
            />
            {/* <Label>{"We care for India"}</Label> */}
          </CompanyLogo>
          <Links>
            {userEmail === null && (
              <>
                <LineSpan>
                  <StyledLink to={"/signup"}>{"Register"}</StyledLink>
                </LineSpan>
                <LineSpan>
                  <StyledLink to={"/signin"}>{"Login"}</StyledLink>
                </LineSpan>
              </>
            )}
            {userEmail !== null && (
              <UserProfileDropdown handleLogout={handleLogout} />
            )}
          </Links>
        </TopSection>
        <Features>
          <FeatureIcons to={"/bookAppointment"}>
            <FaCalendarPlus
              style={{ height: 50, width: 50, cursor: "pointer" }}
            />
            <Label
              style={{
                fontSize: "12px",
                color: "rgba(0, 0, 0, 0.6)",
              }}
            >
              {"Book an Appointment"}
            </Label>
          </FeatureIcons>
          <FeatureIcons to={"/videoCall"} style={{ marginTop: "-10px" }}>
            <MdVideoCall style={{ height: 75, width: 75, cursor: "pointer" }} />
            <Label
              style={{
                fontSize: "12px",
                color: "rgba(0, 0, 0, 0.6)",
                marginTop: "-16px",
              }}
            >
              {"Schedule a video call"}
            </Label>
          </FeatureIcons>
          <FeatureIcons>
            <BiFileFind style={{ height: 55, width: 55, cursor: "pointer" }} />
            <Label
              style={{
                fontSize: "12px",
                color: "rgba(0, 0, 0, 0.6)",
                marginTop: "-5px",
              }}
            >
              {"Find Nearest Doctor"}
            </Label>
          </FeatureIcons>
          <FeatureIcons>
            <GiMedicines style={{ height: 55, width: 55, cursor: "pointer" }} />
            <Label
              style={{
                fontSize: "12px",
                color: "rgba(0, 0, 0, 0.6)",
                marginTop: "-5px",
              }}
            >
              {"Order Medicines"}
            </Label>
          </FeatureIcons>
          <FeatureIcons>
            <LuFiles style={{ height: 55, width: 55, cursor: "pointer" }} />
            <Label
              style={{
                fontSize: "12px",
                color: "rgba(0, 0, 0, 0.6)",
                marginTop: "-5px",
              }}
            >
              {"Medical Records"}
            </Label>
          </FeatureIcons>
        </Features>
        <Carousel />
        {/* <Album /> */}
        {/* <Checkout /> */}
      </Wrapper>
      <StickyFooter />
    </>
  );
}
