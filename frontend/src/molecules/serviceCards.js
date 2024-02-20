import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function ServiceCards(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(props.navigate, { replace: false });
  };
  return (
    <div
      className={
        props.rowClass || "col-lg-3 col-md-2 col-sm-6 pl-0 pr-0 border-right-0"
      }
      onClick={handleClick}
    >
      <div className="service-box-item text-center">
        <figure>
          <img src={props.img} alt={props.alt} className={props.class} style={{margin: "0 auto"}}/>
        </figure>
        <h5>{props.name}</h5>
        <span className="d-block">{props.description}</span>
      </div>
    </div>
  );
}
