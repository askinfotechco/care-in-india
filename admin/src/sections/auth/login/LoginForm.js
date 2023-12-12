import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// @mui
import {
  Link,
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  Checkbox,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
// components
import Iconify from "../../../components/iconify";
import MenuItem from "@mui/material/MenuItem";
import { useCookies } from "react-cookie";

//connection files
import { URL } from "../../../connection";
import LoginvalidationSchema from "../../../components/Validation/Login";
import SignupvalidationSchema from "../../../components/Validation/SignUp";

// ----------------------------------------------------------------------

export default function LoginForm({ authType, setType, onLogin }) {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies("jwt");
  const email = useRef("null");
  const password = useRef("null");
  const firstname = useRef("null");
  const lastname = useRef("null");
  const [err, setErr] = useState("");
  useEffect(() => {
    navigate("/", { replace: true });
    sessionStorage.removeItem("jwt");
    sessionStorage.removeItem("firstname");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("role");
  }, [
    sessionStorage.getItem("jwt"),
    sessionStorage.getItem("firstname"),
    sessionStorage.getItem("email"),
    sessionStorage.getItem("role"),
  ]);

  const register = async () => {
    const userDetails = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      password: formData.password,
      email: formData.email,
    };

    SignupvalidationSchema.validate(userDetails)
      .then(async (validData) => {
        try {
          const response = await axios.post(
            `${URL}/auth/user/register`,
            userDetails
          );
          console.log(response.data);
          if (response.data.msg.includes("registerd successfully")) {
            setTimeout(() => {
              window.location.reload();
            }, 3000);
            toast.success("Registration successful! Login to Continue...", {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 3000,
            });
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

    // console.log(userDetails);
  };

  const login = async () => {
    const userDetails = {
      email: formData.email,
      password: formData.password,
    };
    console.log(userDetails);
    LoginvalidationSchema.validate(userDetails)
      .then(async (validData) => {
        try {
          const response = await axios.post(
            `${URL}/auth/user/login`,
            userDetails
          );
          // console.log(response.data);
          if (response.data.message?.includes("logged in successfully")) {
            console.log(response);
            setCookie("jwt", response.data.token, { path: "/" });
            sessionStorage.setItem("jwt", response.data.token);
            sessionStorage.setItem("firstname", response.data.firstname);
            sessionStorage.setItem("email", userDetails.email);
            sessionStorage.setItem("role", response.data.role);
            onLogin();
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

  const reset = async () => {
    const userDetails = {
      email: formData.email,
      newPassword: formData.password,
    };
    const response = await axios.post(
      `${URL}/auth/user/resetPassword`,
      userDetails
    );
    // console.log(response.data);
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    navigate("/dashboard", { replace: true });
  };

  const roles = ["admin", "doctor", "receptionist"];
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    password: "",
    email: "",
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
    if (authType === "signup") {
      register();
    } else if (authType === "login") {
      login();
    } else if (authType === "reset") {
      reset();
    }
  };

  return (
    <>
      {authType === "signup" ? (
        <Stack spacing={3}>
          <TextField
            name="email"
            label="Email address"
            type="text"
            inputRef={email}
            value={setFormData.email}
            onChange={handleChange}
          />
          <TextField
            name="firstname"
            label="First Name"
            type="text"
            inputRef={firstname}
            value={setFormData.firstname}
            onChange={handleChange}
          />
          <TextField
            name="lastname"
            label="Last Name"
            type="text"
            inputRef={lastname}
            value={setFormData.lastname}
            onChange={handleChange}
          />
          <TextField
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            inputRef={password}
            value={setFormData.password}
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    <Iconify
                      icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      ) : authType === "login" ? (
        <Stack spacing={3}>
          <TextField
            name="email"
            label="Email address"
            type="text"
            inputRef={email}
            value={setFormData.email}
            onChange={handleChange}
          />

          <TextField
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            inputRef={password}
            value={setFormData.password}
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    <Iconify
                      icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      ) : (
        <Stack spacing={3}>
          <TextField
            name="email"
            label="Email address"
            type="text"
            inputRef={email}
            value={setFormData.email}
            onChange={handleChange}
          />

          <TextField
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            inputRef={password}
            value={setFormData.password}
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    <Iconify
                      icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            name="password"
            label="Confirm Password"
            inputRef={password}
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    <Iconify
                      icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      )}

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ my: 2 }}
      >
        {/* <Checkbox name="remember" label="Remember me" /> */}
        {authType === "login" ? (
          <Link variant="subtitle2" underline="hover">
            <a
              onClick={() => {
                setType("reset");
              }}
            >
              Forgot password?
            </a>
          </Link>
        ) : (
          <Stack></Stack>
        )}
      </Stack>
      <p style={{ color: "red" }}>{err}</p>
      {authType === "signup" ? (
        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          onClick={handleSubmit}
        >
          Sign Up
        </LoadingButton>
      ) : authType === "login" ? (
        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          onClick={handleSubmit}
        >
          Login
        </LoadingButton>
      ) : (
        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          onClick={handleSubmit}
        >
          Reset
        </LoadingButton>
      )}
      <ToastContainer />
    </>
  );
}
