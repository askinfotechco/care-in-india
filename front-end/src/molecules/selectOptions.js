// Dropdown.js
import React from "react";

const Dropdown = (props) => {
  const handleDropdownChange = (event) => {
    props.selectedOptionFun(event.target.value);
  };

  return (
    <div>
      <label htmlFor="dropdown">{"Choose location "}</label>
      <select
        id="dropdown"
        value={props.selectedOption}
        onChange={handleDropdownChange}
      >
        {props.option.map((ele) => {
          return <option value={ele.one}>{`${ele.one} ${ele.two}`}</option>;
        })}
      </select>

      <p>Selected option: {props.selectedOption}</p>
    </div>
  );
};

export default Dropdown;
