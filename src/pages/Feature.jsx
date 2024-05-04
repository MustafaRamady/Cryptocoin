import React from "react";
import SecLanding from "../landing/SecLanding";

import { Helmet } from "react-helmet-async";
import WhyUsLanding from "../landing/WhyUsLanding";

export default function Feature() {
  return (
    <>
      <Helmet>
        <title>Features - Crypto Coins</title>
      </Helmet>
      <SecLanding Title={"Features"} />
      <WhyUsLanding />
    </>
  );
}
