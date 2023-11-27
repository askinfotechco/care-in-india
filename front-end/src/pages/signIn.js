// SignIn.js
import React, { useState, useRef, useEffect } from "react";
import ExternalLink from "../atoms/externalLink";
import InternalLink from "../atoms/internalLink";
import styled from "styled-components";
import PrimaryButton from "../atoms/primaryButton";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// components
import { useCookies } from "react-cookie";
import LoginvalidationSchema from "../components/validations/Login";

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
  width: 75%;
  padding: 8px;
  margin-bottom: 16px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const SignIn = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies("jwt");
  const mail = useRef("null");
  const password = useRef("null");
  const username = useRef("null");
  const role = useRef("null");
  const [err, setErr] = useState("");

  useEffect(() => {
    navigate("/", { replace: true });
    sessionStorage.removeItem("jwt");
    sessionStorage.removeItem("email");
  }, [sessionStorage.getItem("jwt"), sessionStorage.getItem("email")]);

  const login = async () => {
    const userDetails = {
      email: mail.current.value,
      password: password.current.value,
    };
    LoginvalidationSchema.validate(userDetails)
      .then(async (validData) => {
        try {
          const response = await axios.post(
            `${URL}/auth/v1/login`,
            userDetails
          );
          // console.log(response.data);
          if (response.data.message?.includes("logged in successfully")) {
            console.log(response);
            setCookie("jwt", response.data.token, { path: "/" });
            sessionStorage.setItem("jwt", response.data.token);
            sessionStorage.setItem("email", userDetails.email);
            // onLogin();
            navigate("/dashboard", { replace: true });
          } else {
            toast.error(response.data.message, {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 3000,
            });
          }
        } catch (err) {
          console.log("request not wokring", err);
        }
      })
      .catch(({ errors }) => setErr(errors[0]));
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    console.log("Form submitted:", formData);
  };

  const onClickSignin = () => {};

  return (
    <MainSection>
      <LeftSection>
        <Heading className="MontserratItalic">
          {"Welcome to Care In India"}
        </Heading>
        <Label style={{ fontSize: "20px", color: "rgba(0, 0, 0, 0.8)" }}>
          {
            "We're here to support you on the path to a healthier, happier life."
          }
        </Label>
        <Wrapper onSubmit={handleSubmit}>
          <Label>{"Sign in to your health portal"}</Label>
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
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
          />
          <br />
          <PrimaryButton text={"Sign In"} type={"submit"} onClick= {() => login()}></PrimaryButton>
        </Wrapper>
        <Label
          style={{
            fontSize: "20px",
            color: "rgba(0, 0, 0, 0.8)",
            marginTop: "20px",
          }}
        >
          {"Doesn't have an account?"}
        </Label>
        <Label
          style={{
            fontSize: "20px",
            color: "rgba(0, 0, 0, 0.8)",
          }}
        >
          {"click here to"}{" "}
          <span>
            <Link to={"/signup"}>{"sign up"}</Link>
          </span>
        </Label>
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

export default SignIn;
