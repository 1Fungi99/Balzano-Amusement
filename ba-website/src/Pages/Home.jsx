import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Home.css";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import Landing from "../Components/LgVideoLanding.jsx";
import HomeCard from "../Components/HomeCard.jsx";

/* Can be changed */
/* ----------------------------------------------- */
import BgVideo from "../Resources/video.mp4";
import CardImg1 from "../Resources/LSAT1.jpg";
import CardImg2 from "../Resources/LSAT2.jpg";
import CardImg3 from "../Resources/LSAT3.jpg";
/* ----------------------------------------------- */

export default function Home() {
  return (
    <>
      <Landing
        video={BgVideo}
        companyName="Deadman's Bluff"
        companyEvents="Rage Room and Axe Throwing"
      />
      <Container className="text-center page-body">
        <h1>UNLIMITED TEXAS</h1>
        <h3>SIZED FUN</h3>
        <Container className="text-start">
          <h5>
            Whether it's a family gathering, a birthday party, date night, or a
            corporate event, we offer an exhilarating experience featuring:
          </h5>
          <ul>
            <li>
              <h5>Axe Throwing</h5>
            </li>
            <li>
              <h5>Texas-themed Beer and Wine Bar (Arlington)</h5>
            </li>
            <li>
              <h5>440 Rattler - Cocktail Bar (Dallas)</h5>
            </li>
            <li>
              <h5>Great Food</h5>
            </li>
            <li>
              <h5>Free Catering service for your events</h5>
            </li>
            <li>
              <h5>Free Classic Arcade Games</h5>
            </li>
            <li>
              <h5>Free Shuffleboard & Table Games</h5>
            </li>
          </ul>
          <h5>
            No prior skill needed; our Texan coaches will be partners by your
            side to guide you along and ensure an unforgettable axe throwing
            experience! So pony-up and bring out your inner Cowboy with us at
            Lone Star Axe Throwing!
          </h5>
        </Container>
      </Container>
      <Container>
        <Row>
          <Col md={true}>
            <HomeCard
              cardImg={CardImg1}
              cardTitle="Family & Friends"
              cardText="Want to have some catchup time with your loved ones? Come
                  along with them for a thrilling experience at Lone Star Axe
                  Throwing. It's the perfect bonding time!"
            />
          </Col>
          <Col md={true}>
            <HomeCard
              cardImg={CardImg2}
              cardTitle="Large Parties"
              cardText="Need to let off some steam? Look no further! Stampede with
                  your co-workers for a fun indoor activity that boosts your
                  competitive edge and team building at Lone Star Axe Throwing.
                  Let's show em' what you got!"
            />
          </Col>
          <Col md={true}>
            <HomeCard
              cardImg={CardImg3}
              cardTitle="Celebration/Special Events"
              cardText="Hosting a birthday, bachelor/bachelorette party, baby shower,
                  or engagement party? Make it a fiesta and come on in for a
                  unique way to celebrate together."
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
