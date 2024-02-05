import React from "react";

export default function ServiceCards(props) {
  return (
    <div
      className={
        props.rowClass || "col-lg-3 col-md-3 col-sm-6 pl-0 pr-0 border-right-0"
      }
    >
      <div className="service-box-item text-center">
        <figure>
          <img src={props.img} alt={props.alt} className={props.class} />
        </figure>
        <h5>{props.name}</h5>
        <span className="d-block">{props.description}</span>
      </div>
    </div>
  );
}
