import React, { useState } from "react";

const TimeSelector = () => {
  const [fromHour, setFromHour] = useState(0);
  const [fromMinute, setFromMinute] = useState(0);
  const [toHour, setToHour] = useState(0);
  const [toMinute, setToMinute] = useState(0);

  console.log(fromHour, fromMinute, toHour, toMinute);

  const handleFromHourChange = (e) => {
    setFromHour(parseInt(e.target.value));
  };

  const handleFromMinuteChange = (e) => {
    setFromMinute(parseInt(e.target.value));
  };

  const handleToHourChange = (e) => {
    setToHour(parseInt(e.target.value));
  };

  const handleToMinuteChange = (e) => {
    setToMinute(parseInt(e.target.value));
  };

  return (
    <div>
      <label htmlFor="fromTime">From:</label>
      <select id="fromHour" value={fromHour} onChange={handleFromHourChange}>
        {[...Array(24).keys()].map((hour) => (
          <option key={hour} value={hour}>
            {hour}
          </option>
        ))}
      </select>
      <select
        id="fromMinute"
        value={fromMinute}
        onChange={handleFromMinuteChange}
      >
        {[...Array(60).keys()].map((minute) => (
          <option key={minute} value={minute}>
            {minute < 10 ? `0${minute}` : minute}
          </option>
        ))}
      </select>

      <label htmlFor="toTime">To:</label>
      <select id="toHour" value={toHour} onChange={handleToHourChange}>
        {[...Array(24).keys()].map((hour) => (
          <option key={hour} value={hour}>
            {hour}
          </option>
        ))}
      </select>
      <select id="toMinute" value={toMinute} onChange={handleToMinuteChange}>
        {[...Array(60).keys()].map((minute) => (
          <option key={minute} value={minute}>
            {minute < 10 ? `0${minute}` : minute}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimeSelector;
