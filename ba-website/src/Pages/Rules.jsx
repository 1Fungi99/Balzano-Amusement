import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import MdLanding from "../Components/MdLanding";
import BgImg from "../Resources/LSAT4.jfif";

export default function Rules() {
  return (
    <>
      <MdLanding img={BgImg} pageName="Rules" />
      <Container lg>
        <h1>Safety Requirements:</h1>
        <ul>
          <li>
            We want safety to be our priority to ensure a safe, fun environment
            for all. You are responsible for your safety overall, but we have
            other guidelines to follow.
          </li>
          <li>Before entering the Rage Room you must first sign our waiver.</li>
          <li>
            Do not enter the Rage Room if you are not physically capable of
            participating in the activities.
          </li>
          <li>
            While inside the Rage Room, provided PPE must be worn at all times
          </li>
          <li>No Food, Drinks, or Gum inside the Rage Room.</li>
          <li>Please no horse-playing in our facility at all.</li>
          <ul>
            <li>Do not pretend to fight with others.</li>
            <li>No running.</li>
          </ul>
          <li>
            If you intentionally try to hurt someone or any of our property you
            will be asked to leave without a refund.
          </li>
          <li>
            Please keep a maximum of two participants at a time hitting one
            object, other participants should stand back to give ample swinging
            space.
          </li>
          <li>
            If there are too many broken items in your way, please let us know
            and someone will be there to clean them up for you.
          </li>
        </ul>
        <h3> Bring Your Own Item Restrictions</h3>
        <h5>
          The following items are not permitted for safety your party and our
          staff:
        </h5>
        <ul>
          <li>Light Bulbs</li>
          <li>
            Pressurized Containers
            <i> (Aerosol cans, paint sprayers, air compressors, etc.)</i>
          </li>
          <li>Firearms or Ammunition</li>
          <li>Explosives</li>
          <li>
            CRT Bulbs <i>(found in older computer monitors and TVs)</i>
          </li>
        </ul>
      </Container>
    </>
  );
}
