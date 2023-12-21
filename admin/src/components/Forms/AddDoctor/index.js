import React, { useState } from "react";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useCookies } from "react-cookie";
import {
  Button,
  Stack,
  Select,
  MenuItem,
  TextField,
  FormControl,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  FormLabel,
  Typography,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

//connection file
import { URL } from "../../../connection";

const AddDoctor = (props, { handleQuestionAdd, fromTestFormation }) => {
  //cookies
  const [cookies, setCookie, removeCookie] = useCookies("jwt");

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    country: "",
    city: "",
    phone: "",
    language: "",
    specialization: "",
    role: "doctor",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClose = () => {
    props.setOpenDialog(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = await JSON.stringify(formData);
      console.log(formDataToSend);
      await axios.post(`${URL}/api/doctor/add`, formDataToSend, {
        headers: {
          Authorization: "Bearer " + cookies.jwt,
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      props.setOpenDialog(false);
    } catch {
      console.log("request not wokring");
    }
  };

  return (
    <>
      <Dialog open={props.openDialog} maxWidth={"xl"}>
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <DialogTitle>
          <Typography variant="h4">Add Doctor</Typography>
        </DialogTitle>
        <DialogContent sx={{ width: "75vw" }}>
          <Box>
            <Stack>
              <Box display={"flex"} gap={5}>
                <TextField
                  sx={{ marginTop: "15px", width: "330px" }}
                  label="Firstname"
                  multiline
                  maxRows={Infinity}
                  name="firstname"
                  variant="outlined"
                  value={formData.firstname}
                  onChange={handleChange}
                />
                <TextField
                  sx={{ marginTop: "15px", width: "330px" }}
                  label="Lastname"
                  multiline
                  maxRows={Infinity}
                  name="lastname"
                  variant="outlined"
                  value={formData.lastname}
                  onChange={handleChange}
                />
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Gender
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
            </Stack>
            <Stack>
              <Box display={"flex"} gap={5}>
                {/* <FormControl>
                  <FormLabel sx={{ fontSize: "12px" }}>Role</FormLabel>
                  <Select
                    variant="outlined"
                    placeholder="Role"
                    value={formData.role}
                    label="Type Of Role"
                    onChange={handleChange}
                    name="role"
                    defaultValue="doctor"
                    disabled="true"
                  >
                    <MenuItem value={"doctor"}>Doctor</MenuItem>
                  </Select>
                </FormControl> */}
                <TextField
                  sx={{ marginTop: "30px", width: "390px" }}
                  id="test"
                  label="Email Address"
                  type="email"
                  name="email"
                  variant="outlined"
                  value={formData.email}
                  onChange={handleChange}
                />
                <TextField
                  sx={{ marginTop: "30px", width: "360px" }}
                  label="Password"
                  type="password"
                  name="password"
                  variant="outlined"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Box>
            </Stack>
            <Stack>
              <Box display={"flex"} gap={5}>
                <TextField
                  sx={{ marginTop: "30px", width: "390px" }}
                  label="Specialization"
                  multiline
                  maxRows={Infinity}
                  name="specialization"
                  variant="outlined"
                  value={formData.specialization}
                  onChange={handleChange}
                />
                <TextField
                  sx={{ marginTop: "30px", width: "240px" }}
                  label="City"
                  multiline
                  maxRows={Infinity}
                  name="city"
                  variant="outlined"
                  value={formData.city}
                  onChange={handleChange}
                />
                <TextField
                  sx={{ marginTop: "30px", width: "240px" }}
                  label="Country"
                  multiline
                  maxRows={Infinity}
                  name="country"
                  variant="outlined"
                  value={formData.country}
                  onChange={handleChange}
                />
              </Box>
            </Stack>
            <Stack>
              <Box display={"flex"} gap={5}>
                <TextField
                  sx={{ marginTop: "30px", width: "240px" }}
                  label="Phone"
                  multiline
                  maxRows={Infinity}
                  name="phone"
                  variant="outlined"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <TextField
                  sx={{ marginTop: "30px", width: "390px" }}
                  label="Languages Known"
                  multiline
                  maxRows={Infinity}
                  name="language"
                  variant="outlined"
                  value={formData.language}
                  onChange={handleChange}
                />
              </Box>
            </Stack>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            size="large"
            sx={{
              border: "2px solid #e2e2e2",
              marginBottom: "10px",
              marginTop: "30px",
              marginRight: "15px",
            }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            size="large"
            sx={{
              border: "2px solid #e2e2e2",
              marginBottom: "10px",
              marginTop: "30px",
              marginRight: "15px",
            }}
            onClick={handleSubmit}
            type="submit"
          >
            Add Doctor
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddDoctor;
