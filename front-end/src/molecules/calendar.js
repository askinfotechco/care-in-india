// CalendarBooking.js
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";

const CalendarSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CalendarBooking = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [bookedSlots, setBookedSlots] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSlotBooking = () => {
    // Assuming you want to book a slot for the selected date
    setBookedSlots([...bookedSlots, selectedDate]);
  };

  return (
    <CalendarSection>
      <h1>Schedule a Video Call</h1>

      <div>
        <Calendar onChange={handleDateChange} value={selectedDate} />
      </div>

      <div>
        <h2>Booked Slots</h2>
        <ul>
          {bookedSlots.map((slot, index) => (
            <li key={index}>{slot.toLocaleDateString()}</li>
          ))}
        </ul>
      </div>

      <button onClick={handleSlotBooking}>Book Slot</button>
    </CalendarSection>
  );
};

export default CalendarBooking;
