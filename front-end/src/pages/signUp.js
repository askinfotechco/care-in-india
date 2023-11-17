// SignUp.js
import React from "react";
import ExternalLink from "../atoms/externalLink";
import InternalLink from "../atoms/internalLink";
import styled from "styled-components";

const InternalLinkNode = styled(InternalLink)`
  div {
    color: red;
    font-size: 30px;
    border: 1px solid black;
  }
`;

const Wrapper = styled.div``;

const SignUp = () => {
  return (
    <Wrapper>
      <ExternalLink link={"www.google.com"} text={"google"} />
      <InternalLinkNode link={"/signin"} text={"Sign In"} />
      <h2>Sign Up Page</h2>
    </Wrapper>
  );
};

export default SignUp;
