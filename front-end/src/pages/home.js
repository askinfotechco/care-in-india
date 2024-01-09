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
import { Promotion } from "../components/carousel/Promotion";

const Wrapper = styled.div`
  margin: 16px;
  padding: 8px;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
`;

const CompanyLogo = styled.div`
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
  // font-family: Montserrat;
  font-size: 14px;
  font-weight: 700;
  line-height: 36px; /* 150% */
  letter-spacing: -0.2px;
  color: rgba(0, 0, 0, 0.8);
`;

const Features = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  margin-bottom: 40px;
`;

const FeatureIcons = styled(Link)`
  width: 100px
  display: flex;
  flex-direction: column;
  margin: 0 50px;
  align-items: center;
  border: 1px solid #e2e2e2;
  padding: 15px;
  border-radius: 25%;
  &:hover {
    transform: scale(1.1);
    background-color: #E4F1FF;
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
            style={{ height: 45, width: 45, cursor: "pointer" }}
          />
          <Label
            style={{
              fontSize: "14px"
              // color: "rgba(0, 0, 0, 0.6)",
            }}
          >
            {"Dr. Appointment"}
          </Label>
        </FeatureIcons>
        <FeatureIcons to={"/videoCall"}>
          <MdVideoCall style={{ height: 60, width: 60, cursor: "pointer" }} />
          <Label
            style={{
              fontSize: "14px",
              // color: "rgba(0, 0, 0, 0.6)",
              marginTop: "-15px",
              
            }}
          >
            {"Video call with Dr."}
          </Label>
        </FeatureIcons>
        {/* <FeatureIcons>
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
        </FeatureIcons> */}
        <FeatureIcons>
          <GiMedicines style={{ height: 45, width: 50, cursor: "pointer" }} />
          <Label
            style={{
              fontSize: "14px",
              // color: "rgba(0, 0, 0, 0.6)",
              marginTop: "-5px",
            }}
          >
            {"Order Medicines"}
          </Label>
        </FeatureIcons>
        <FeatureIcons>
          <LuFiles style={{ height: 45, width: 50, cursor: "pointer" }} />
          <Label
            style={{
              fontSize: "14px",
              // color: "rgba(0, 0, 0, 0.6)",
              marginTop: "-5px",
            }}
          >
            {"Medical Records"}
          </Label>
        </FeatureIcons>
      </Features>
      <Promotion />
      {/* <StickyFooter /> */}
    </Wrapper>
  );
}
