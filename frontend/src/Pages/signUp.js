// SignUp.js
import React, { useState, useRef, useEffect } from "react";
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
import SignupvalidationSchema from "../components/validations/SignupValidation";
import { URL } from "../connection";

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
  padding: 5% 8%;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-size: 12px;
`;

const Heading = styled.div`
  margin: auto;
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

const CheckBoxLabel = styled.div`
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
`;

const CheckBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20%;
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
  gap: 20px;
`;

const Error = styled.div`
  display: block;
  font-family: Montserrat;
  font-size: 8px;
  font-style: normal;
  letter-spacing: -0.36px;
  color: rgba(1000, 0, 0, 0.8);
`;

const SignUp = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies("jwt");
  // const email = useRef("null");
  // const password = useRef("null");
  // const firstname = useRef("null");
  // const lastname = useRef("null");
  const [err, setErr] = useState("");

  useEffect(() => {
    // navigate("/", { replace: true });
    sessionStorage.removeItem("jwt");
    sessionStorage.removeItem("email");
  }, [sessionStorage.getItem("jwt"), sessionStorage.getItem("email")]);

  const register = async () => {
    const userDetails = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
      email: formData.email,
    };
    SignupvalidationSchema.validate(userDetails)
      .then(async (validData) => {
        try {
          const response = await axios.post(
            `${URL}/auth/user/register`,
            userDetails
          );
          if (response.data.msg.includes("registerd successfully")) {
            toast.success("Registration successful! Login to Continue...", {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 3000,
            });
            setTimeout(() => {
              navigate("/signin", { replace: true });
            }, 3000);
          } else {
            toast.error(response.data.msg, {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 3000,
            });
          }
          //navigate("/dashboard", { replace: true });
        } catch (err) {
          console.log("request not wokring", err);
        }
      })
      .catch(({ errors }) => setErr(errors[0]));
  };

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    gender: "male",
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
    register();
    // console.log("Form submitted:", formData);
  };

  const onClickSignin = () => {};

  return (
    <>
      <MainSection>
        <LeftSection>
          <Heading className="MontserratItalic">
            {"Welcome to Care In India"}
          </Heading>
          <Label style={{ fontSize: "15px", color: "rgba(0, 0, 0, 0.8)" }}>
            {
              "Embark on your journey to wellness - Sign up today and prioritize your health with us"
            }
          </Label>
          <p className="mt-2 text-sm leading-6">
            <a
              href="/"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Go to Home Page
            </a>
          </p>
          <Wrapper onSubmit={handleSubmit}>
            <Label>Signup to book your first appointment</Label>
            <Input
              type="text"
              name="firstname"
              placeholder="First name"
              value={formData.firstname}
              onChange={handleChange}
              style={{ width: "47%", marginRight: "3%" }}
            />
            <Input
              type="text"
              name="lastname"
              placeholder="Last name"
              value={formData.lastname}
              onChange={handleChange}
              style={{ width: "47%", marginLeft: "3%" }}
            />
            <CheckBox>
              <CheckBoxLabel>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                />
                {"Male"}
              </CheckBoxLabel>
              <CheckBoxLabel>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                />
                {"Female"}
              </CheckBoxLabel>
              <CheckBoxLabel>
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={formData.gender === "other"}
                  onChange={handleChange}
                />
                {"Other"}
              </CheckBoxLabel>
            </CheckBox>
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
            {err && <Error>{err}</Error>}
            <br />
            <PrimaryButton
              text={"Sign Up"}
              type={"submit"}
              onClick={() => register()}
            ></PrimaryButton>
            <Label
              style={{
                textAlign: "center",
                fontSize: "15px",
                color: "rgba(0, 0, 0, 0.8)",
                marginTop: "20px",
              }}
            >
              {"Already have an account? "}{" "}
              <span>
                <Link to={"/signin"}>{"sign in"}</Link>
              </span>
            </Label>
          </Wrapper>
          <Label
            style={{
              fontSize: "15px",
              color: "rgba(0, 0, 0, 0.8)",
              marginTop: "20px",
            }}
          >
            {"Or Sign up with"}
          </Label>
          <Logos>
            <FaFacebookSquare
              style={{
                height: 24,
                width: 24,
                cursor: "pointer",
              }}
            />
            <FaGoogle style={{ height: 24, width: 24, cursor: "pointer" }} />
          </Logos>
        </LeftSection>
        <RightSection>
          {
            "“Health is a state of complete physical, mental, and social well-being, and not merely the absence of disease or infirmity.”"
          }
          {"- World Health Organization"}
        </RightSection>
      </MainSection>
      <ToastContainer />
    </>
  );
};

export default SignUp;
