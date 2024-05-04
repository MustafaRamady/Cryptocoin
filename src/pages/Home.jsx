import React from "react";
import HomeLanding from "../landing/HomeLanding";
import AboutLanding from "../landing/AboutLanding";
import TokenSaleLanding from "../landing/TokenSaleLanding";
import TransactionLanding from "../landing/TransactionLanding";
import ServicesLanding from "../landing/ServicesLanding";
import WhyUsLanding from "../landing/WhyUsLanding";

import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home - Crypto Coins</title>
      </Helmet>
      <HomeLanding />
      <AboutLanding />
      <TransactionLanding />
      <WhyUsLanding />
      <ServicesLanding />
      <TokenSaleLanding background={"#F2F8FE"} />
    </>
  );
}
