import React from "react";
import InternalLink from "../atoms/internalLink";
import styled from "styled-components";
import companyLogoImage from "../static/images/careinindia.png";
import { Link } from "react-router-dom";
import { FaCalendarPlus } from "react-icons/fa";
import { MdVideoCall } from "react-icons/md";
import { BiFileFind } from "react-icons/bi";
import { GiMedicines } from "react-icons/gi";
import { LuFiles } from "react-icons/lu";

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
`;

const FeatureIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Home() {
  return (
    <Wrapper>
      <TopSection>
        <CompanyLogo>
          <img
            src={companyLogoImage}
            alt="Healthcare Image"
            style={{ width: "270px", height: "100px", marginTop: "-10px", marginLeft: "-10px"}}
          />
          {/* <Label>{"We care for India"}</Label> */}
        </CompanyLogo>
        <Links>
          <LineSpan>
            <StyledLink to={"/signup"}>{"Register"}</StyledLink>
          </LineSpan>
          <LineSpan>
            <StyledLink to={"/signin"}>{"Login"}</StyledLink>
          </LineSpan>
        </Links>
      </TopSection>
      <Features>
        <FeatureIcons>
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
        <FeatureIcons style={{ marginTop: "-10px" }}>
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
    </Wrapper>
  );
}
