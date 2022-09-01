import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Pricing.css";
import "../Styles/Landing.css";

import PricingLanding from "../Resources/Pricing-Landing.jpg";

import AxeThrowingPricing from "../Components/AxeThrowingPricing.jsx";
import RageRoomPricing from "../Components/RageRoomPricing.jsx";
import MdLanding from "../Components/MdLanding";

export default function Pricing() {
  return (
    <>
      <MdLanding img={PricingLanding} pageName="Pricing" />
      <AxeThrowingPricing />
      <RageRoomPricing />
    </>
  );
}
