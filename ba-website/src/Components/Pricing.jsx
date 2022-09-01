import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AxeThrowingPricing from "./AxeThrowingPricing";
import RageRoomPricing from "./RageRoomPricing";

export default function Pricing() {
  return (
    <>
      <AxeThrowingPricing />
      <RageRoomPricing />
    </>
  );
}
