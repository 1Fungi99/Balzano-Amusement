import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

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
      <Container fluid className="landing-page">
        <video src={BgVideo} autoPlay muter loop className="video-bg" />
        <Container fluid className="bg-overlay">
          <Container fluid>
            <h1 className="fw-bold text-center">Deadman's Bluff</h1>
            <h3 className="fw-bold text-center">Rage Room and Axe Throwing</h3>
          </Container>
        </Container>
      </Container>
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
            <Card className="body-card">
              <Card.Img variant="top" src={CardImg1} />
              <Card.Body>
                <Card.Title>Family & Friends</Card.Title>
                <Card.Text>
                  Want to have some catchup time with your loved ones? Come
                  along with them for a thrilling experience at Lone Star Axe
                  Throwing. It's the perfect bonding time!
                </Card.Text>
                <Button className="card-btn card-btn-left" variant="danger">
                  Pricing
                </Button>
                <Button className="card-btn card-btn-right" variant="danger">
                  Contact Us
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={true}>
            <Card className="body-card">
              <Card.Img variant="top" src={CardImg2} />
              <Card.Body>
                <Card.Title>Large Parties</Card.Title>
                <Card.Text>
                  Need to let off some steam? Look no further! Stampede with
                  your co-workers for a fun indoor activity that boosts your
                  competitive edge and team building at Lone Star Axe Throwing.
                  Let's show em' what you got!
                </Card.Text>
                <Button className="card-btn card-btn-left" variant="danger">
                  Pricing
                </Button>
                <Button className="card-btn card-btn-right" variant="danger">
                  Contact Us
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={true}>
            <Card className="body-card">
              <Card.Img variant="top" src={CardImg3} />
              <Card.Body>
                <Card.Title>Celebration/Special Events</Card.Title>
                <Card.Text>
                  Hosting a birthday, bachelor/bachelorette party, baby shower,
                  or engagement party? Make it a fiesta and come on in for a
                  unique way to celebrate together.
                </Card.Text>
                <Button className="card-btn card-btn-left" variant="danger">
                  Pricing
                </Button>
                <Button className="card-btn card-btn-right" variant="danger">
                  Contact Us
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
