import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TimeSelector from "./timeSelector";
import { useCookies } from "react-cookie";
import axios from "axios";
import { URL } from "../connection";
import VideoCall from "../Pages/videoCall";
import { Navigate, useNavigate } from "react-router-dom";

function OnlineBookingModal(props) {
  const [show, setShow] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [loading, setLoading] = useState();
  const [cookies, setCookie, removeCookie] = useCookies("jwt");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    timeSlot: "",
    selectedDate: "",
  });
  const navigate = useNavigate();

  const handleClose = () => {
    setShow(false);
    setStep(1); // Reset step to 1 when modal is closed
  };
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const bookAppointment = async () => {
    const dataToSend = {
      patientEmail: sessionStorage.getItem("email"),
      doctorEmail: props.doctorDetails.email,
      day: getDayName(new Date(formData.selectedDate)),
      date: formData.selectedDate,
    };
    const formDataToSend = await JSON.stringify(dataToSend);
    console.log(formDataToSend);
    try {
      setLoading(true);
      const response = await axios.post(
        `${URL}/api/doctor/bookAppointment`,
        formDataToSend,
        {
          headers: {
            Authorization: "Bearer " + cookies.jwt,
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      console.log(response.data);
    } catch (err) {
      console.log("request not wokring", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    if (step === 3) {
      bookAppointment();
      navigate("/videoCall", { replace: true });
      handleClose();
    } else {
      setStep(step + 1);
    }
  };

  // Function to disable past days for a week
  const disablePastDays = () => {
    const today = new Date();
    const timezones = { timeZone: "Asia/Kolkata" }; // Indian time zone
    today.toLocaleString("en-US", timezones);
    today.setHours(0, 0, 0, 0); // Set hours to 0 to compare dates accurately
    const dayOfWeek = today.getDay(); // 0 (Sunday) to 6 (Saturday)
    const startDate = new Date(today); // Clone today's date
    startDate.setDate(today.getDate() - dayOfWeek); // Set to first day of the week (Sunday)

    const options = [
      <option key="default" value="">
        Select a date
      </option>,
    ];

    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      const dateString = date.toISOString().split("T")[0];
      console.log(props);

      options.push(
        <option key={dateString} value={dateString} disabled={date <= today}>
          {dateString}
        </option>
      );
    }

    return options;
  };

  const getDayName = (date = new Date(), locale = "en-US") => {
    return date.toLocaleDateString(locale, { weekday: "long" });
  };

  const getSlotArray = (date) => {
    const slotArray =
      props.doctorDetails.doctorSlotArray[
        findIndexByProperty(
          props.doctorDetails.doctorSlotArray,
          "day",
          getDayName(new Date(formData.selectedDate))
        )
      ]?.availableTiming;
    const fromHour = slotArray?.fromHour;
    const fromMinute = slotArray?.fromMinute;
    const toHour = slotArray?.toHour;
    const toMinute = slotArray?.toMinute;
    return `${fromHour}hrs : ${fromMinute}min - ${toHour}hrs : ${toMinute}min`;
  };

  const findIndexByProperty = (array, propertyName, searchValue) => {
    return array.findIndex((item) => item[propertyName] === searchValue);
  };
  const renderModalBody = () => {
    switch (step) {
      case 1:
        return (
          <Form.Group controlId="formName">
            {/* <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            /> */}
            <h4>{"Doctor Details"}</h4>
            <p>{`Name: ${props.doctorDetails.firstname} ${props.doctorDetails.lastname}`}</p>
            <p>{`Speciality: ${props.doctorDetails.specialization}`}</p>
            <p>{`Address: ${props.doctorDetails.address}`}</p>
            <p>{`Locality: ${props.doctorDetails.location}, ${props.doctorDetails.pincode}`}</p>
          </Form.Group>
        );
      case 2:
        return (
          <>
            <Form.Group controlId="date">
              <Form.Label>When to book?</Form.Label>
              <Form.Control
                as="select"
                name="selectedDate"
                value={formData.selectedDate}
                onChange={handleChange}
              >
                {disablePastDays()}
              </Form.Control>
            </Form.Group>
            <div>{`${formData.selectedDate} - ${getDayName(
              new Date(formData.selectedDate)
            )}`}</div>
            <div>{`Available Timing - ${getSlotArray(
              formData.selectedDate
            )}`}</div>
            {/* <Form.Group>
              <div>
                <label htmlFor="date">Select a date:</label>
                <select
                  id="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                >
                  {disablePastDays()}
                </select>
              </div>
              <div>{selectedDate}</div>
            </Form.Group> */}
          </>
        );
      case 3:
        return (
          <>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </Form.Group>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Button to toggle modal */}
      <Button variant="primary" onClick={handleShow}>
        Book Online
      </Button>

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        {/* Modal header */}
        <Modal.Header closeButton>
          <Modal.Title>Book an Appointment</Modal.Title>
        </Modal.Header>

        {/* Modal body */}
        <Modal.Body>
          {/* Form inside modal body */}
          <Form onSubmit={handleSubmit}>{renderModalBody()}</Form>
        </Modal.Body>

        {/* Modal footer */}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* Next and Previous buttons */}
          {step !== 1 && (
            <Button variant="secondary" onClick={() => setStep(step - 1)}>
              Previous
            </Button>
          )}
          {step !== 3 ? (
            <Button variant="primary" onClick={handleSubmit}>
              Next
            </Button>
          ) : (
            <Button variant="primary" onClick={handleSubmit}>
              Payment
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default OnlineBookingModal;