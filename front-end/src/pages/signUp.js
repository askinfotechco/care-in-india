// SignUp.js
import React, { useState } from "react";
import ExternalLink from "../atoms/externalLink";
import InternalLink from "../atoms/internalLink";
import styled from "styled-components";
import PrimaryButton from "../atoms/primaryButton";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";

const InternalLinkNode = styled(InternalLink)`
  div {
    color: red;
    font-size: 30px;
    border: 1px solid black;
  }
`;

const MainSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  //padding: 32px;
`;

const LeftSection = styled.div`
  width: 40%;
  background: white;
  align-self: center;
  padding: 2% 5%;
`;

const RightSection = styled.div`
  padding: 20px;
  width: 40%;
  height: 100%;
  background: #f0f6ff;
  color: rgba(0, 0, 0, 0.8);
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Montserrat;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px; /* 120% */
  letter-spacing: -0.45px;
`;

const Wrapper = styled.form`
  margin: auto;
  padding: 8% 8%;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-size: 24px;
`;

const Heading = styled.div`
  margin: auto;
  margin-bottom: 32px;
  color: #000;
  text-align: center;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 72px; /* 200% */
  letter-spacing: -0.54px;
`;

const Label = styled.div`
  display: block;
  margin-bottom: 24px;
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; /* 150% */
  letter-spacing: -0.36px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Logos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here, e.g., send data to a server
    console.log("Form submitted:", formData);
  };

  const onClickSignin = () => {};

  return (
    <MainSection>
      <LeftSection>
        <Label
          style={{
            textAlign: "left",
            fontSize: "20px",
            color: "rgba(0, 0, 0, 0.8)",
          }}
        >
          {"click here to"}{" "}
          <span>
            <Link to={"/signin"}>{"sign in"}</Link>
          </span>
        </Label>

        <Heading className="MontserratItalic">
          {"Welcome to Care In India"}
        </Heading>
        <Label style={{ fontSize: "20px", color: "rgba(0, 0, 0, 0.8)" }}>
          {
            "Embark on your journey to wellness - Sign up today and prioritize your health with us"
          }
        </Label>
        <Wrapper onSubmit={handleSubmit}>
          <Label>Signup to book your first appointment</Label>
          <Input
            type="text"
            name="firstname"
            placeholder="First name"
            value={formData.username}
            onChange={handleChange}
            style={{ width: "47%", marginRight: "3%" }}
          />
          <Input
            type="text"
            name="lastname"
            placeholder="Last name"
            value={formData.username}
            onChange={handleChange}
            style={{ width: "47%", marginLeft: "3%" }}
          />
          <br />
          <Input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
          />
          <br />
          <Input
            type="password"
            name="password"
            placeholder="Create password"
            value={formData.password}
            onChange={handleChange}
          />
          <br />
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <br />
          <PrimaryButton text={"Sign Up"} type={"submit"}></PrimaryButton>
        </Wrapper>
        <Label
          style={{
            fontSize: "20px",
            color: "rgba(0, 0, 0, 0.8)",
            marginTop: "20px",
          }}
        >
          {"Or Sign up with"}
        </Label>
        <Logos>
          <FaFacebookSquare style={{ height: 30, width: 30 }} />
          <FaGoogle style={{ height: 30, width: 30 }} />
        </Logos>
      </LeftSection>
      <RightSection>
        {
          "“Health is a state of complete physical, mental, and social well-being, and not merely the absence of disease or infirmity.”"
        }
        {"- World Health Organization"}
      </RightSection>
    </MainSection>
  );
};

export default SignUp;
