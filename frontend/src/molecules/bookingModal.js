import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function BookingModal(props) {
  const [show, setShow] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    timeSlot: "",
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    if (step === 3) {
      handleClose();
    } else {
      setStep(step + 1);
    }
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
            <Form.Group controlId="formTimeSlot">
              <Form.Label>Select a Time Slot</Form.Label>
              <Form.Control
                as="select"
                name="timeSlot"
                value={formData.timeSlot}
                onChange={handleChange}
              >
                <option value="">Select a time slot</option>
                <option value="9:00 AM - 10:00 AM">9:00 AM - 10:00 AM</option>
                <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                {/* Add more options as needed */}
              </Form.Control>
            </Form.Group>
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
        Book Now
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

export default BookingModal;
