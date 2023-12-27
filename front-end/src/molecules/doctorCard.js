import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
  width: 300px;
  img {
    width: 100%;
    height: auto;
  }
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
const CardContent = styled.div`
  padding: 16px;
`;

const CardTitle = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 8px;
`;

const CardText = styled.div`
  font-size: 1em;
  color: #555;
`;

const Speciallity = styled.div`
  font-size: 1em;
  color: #555;
  font-weight: 500;
  background-color: #f0f6ff;
  border-radius: 5%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export default function DoctorCard(props) {
  return (
    <Card>
      <img src={props.data.imgSource} alt="Card Image" />
      <CardContent>
        <CardTitle>{`${props.data.firstname}, ${props.data.lastname}`}</CardTitle>
        <Speciallity>{props.data.specialization}</Speciallity>
        <CardText>{`${props.data.address}, ${props.data.location}, ${props.data.pincode}`}</CardText>
      </CardContent>
    </Card>
  );
}
