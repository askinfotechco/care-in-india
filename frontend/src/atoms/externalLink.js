import React from "react";

export default function ExternalLink(props) {
  return (
    <div>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        {props.text}
      </a>
    </div>
  );
}
