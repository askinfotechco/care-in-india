import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Input = styled.input`
  width: 22%;
  padding: 8px;
  margin-bottom: 16px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

// const Container = styled.div`
//     display: flex,
//     alignItems: center,
//     justifyContent: center,
//     marginBottom: 20px,
//   `;

const SearchBox = styled.div`
    display: flex,
    alignItems: center,
  `;

const InputStyle = styled.div`
    padding: 10px,
    fontSize: 16px,
    marginRight: 10px,
    border: 1px solid #ccc,
    borderRadius: 4px,
  `;

const Button = styled.div`
    padding: 10px,
    fontSize: 16px,
    backgroundColor: #4CAF50,
    color: #fff,
    border: none,
    borderRadius: 4px,
    cursor: pointer,
  `;

const SearchComponent = (props) => {
  const handleInputChange = (e) => {
    props.setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    // Trigger the search using the onSearch prop
    props.handleSearch();
  };

  return (
    // <Container>
    <SearchBox>
      <Input
        type="text"
        placeholder="Search..."
        value={props.searchQuery}
        onChange={handleInputChange}
      />
      <FaSearch
        onClick={handleSearch}
        style={{
          marginLeft: "-30px",
          alignSelf: "center",
          cursor: "pointer",
          //   background: "#f2f2f2",
          width: "20px",
          height: "20px",
        }}
      />
    </SearchBox>
    // </Container>
  );
  //   (
  //     <div>
  //       <Input
  //         type="text"
  //         placeholder="Search..."
  //         value={props.searchQuery}
  //         onChange={handleInputChange}
  //       />
  //       <button onClick={handleSearch}>Search</button>
  //     </div>
  //   );
};

export default SearchComponent;
