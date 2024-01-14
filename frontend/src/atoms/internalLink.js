import React from "react";
import { Link } from "react-router-dom";

export default function InternalLink(props) {
  return (
    <div>
      <Link to={props.link}>{props.text}</Link>
    </div>
  );
}
