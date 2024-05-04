import React from "react";
import SecLanding from "../landing/SecLanding";
import AboutLanding from "../landing/AboutLanding";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About - Crypto Coins</title>
      </Helmet>
      <SecLanding Title={"About Us"} />
      <AboutLanding />
    </>
  );
}
