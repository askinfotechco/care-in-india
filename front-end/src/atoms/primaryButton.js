import React from "react";
import styled from "styled-components";

const Button = styled.button.attrs((props) => props.textColor)`
  background-color: #f0f6ff;
  color: ${(props) => props.textColor};
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 700;
  &:hover {
    background-color: ${(props) => props.textColor};
    color: #f0f6ff;
  }
`;

export default function PrimaryButton(props) {
  return (
    <Button
      type={props.type}
      textColor={props.textColor ? props.textColor : "black"}
    >
      {props.text}
    </Button>
  );
}
