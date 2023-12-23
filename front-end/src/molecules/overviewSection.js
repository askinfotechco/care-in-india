import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  flex-direction: column;
`;
const Head = styled.div`
  //font-family: Montserrat;
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; /* 150% */
  letter-spacing: -0.36px;
`;

const Body = styled.div`
  color: rgba(0, 0, 0, 0.8);
  /* Body P */
  //font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 166.667% */
  letter-spacing: -0.27px;
`;

export default function OverviewSection(props) {
  return (
    <Section>
      <Head>{props.heading}</Head>
      <Body>{props.content}</Body>
    </Section>
  );
}
