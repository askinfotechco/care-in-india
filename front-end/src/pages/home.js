import React from "react";
import InternalLink from "../atoms/internalLink";

export default function Home() {
  return (
    <div>
      <InternalLink link={"/signin"} text={"Sign In"} />
      <InternalLink link={"/signup"} text={"Sign Up"} />
    </div>
  );
}
