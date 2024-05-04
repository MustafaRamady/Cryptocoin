import React from "react";
import SecLanding from "../landing/SecLanding";
import TokenSaleLanding from "../landing/TokenSaleLanding";
import { Helmet } from "react-helmet-async";

export default function TokenSale() {
  return (
    <>
      <Helmet>
        <title>Token Sale - Crypto Coins</title>
      </Helmet>
      <SecLanding Title={"Token Sale"} />
      <TokenSaleLanding background={"white"} />
    </>
  );
}
