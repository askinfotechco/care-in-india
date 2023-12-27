// Dropdown.js
import React, { useEffect, useState } from "react";

const Dropdown = (props) => {
  const [dropDownOption, setDropdownOptions] = useState([]);

  const handleDropdownChange = (event) => {
    props.selectedOptionFun(event.target.value);
  };

  useEffect(() => {
    const handleOptions = () => {
      const dropDownArray = [{ one: "All", two: "Locations" }];
      props.option.forEach((ele) => {
        dropDownArray.push({ one: ele.pincode, two: ele.location });
      });
      const uniqueData = dropDownArray.filter(
        (obj, index, array) =>
          index === array.findIndex((o) => o.one === obj.one)
      );
      setDropdownOptions(uniqueData);
    };
    handleOptions();
  }, [props.option]);
  return (
    <div>
      <label htmlFor="dropdown">{"Choose location "}</label>
      <select
        id="dropdown"
        value={props.selectedOption}
        onChange={handleDropdownChange}
      >
        {dropDownOption.map((ele) => {
          return <option value={ele.one}>{`${ele.one} ${ele.two}`}</option>;
        })}
      </select>

      <p>Selected option: {props.selectedOption}</p>
    </div>
  );
};

export default Dropdown;
