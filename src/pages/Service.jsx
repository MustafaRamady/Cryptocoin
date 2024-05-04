import React from "react";
import SecLanding from "../landing/SecLanding";
import ServicesLanding from "../landing/ServicesLanding";
import { Helmet } from "react-helmet-async";

export default function Service() {
  return (
    <>
      <Helmet>
        <title>Services - Crypto Coins</title>
      </Helmet>
      <SecLanding Title={"Services"} />
      <ServicesLanding />
    </>
  );
}
