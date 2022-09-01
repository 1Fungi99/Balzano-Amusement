import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Pricing.css";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function AxeThrowingPricing() {
  return (
    <Container lg>
      <h1 className="text-center header-padding">AXE THROWING</h1>
      <Row>
        <Col md={true}>
          <Card className="margin-adjustment" style={{ height: "45rem" }}>
            <Card.Body>
              <Card.Title
                className="text-center title-padding"
                style={{ height: 144 }}
              >
                <h3>DEADMAN'S AXE THROWING PACKAGE</h3>
              </Card.Title>
              <Card.Text className="text-center">
                <Row>
                  <Col>
                    <h3>$15</h3>
                    <p className="reverse-padding ">for kids</p>
                    <p className="fst-italic">(under 14)</p>
                  </Col>
                  <Col>
                    <h3>$20</h3>
                    <p>per person</p>
                  </Col>
                </Row>
                <p>
                  Half an hour of Texas-sized axe throwing fun guided by our
                  Texan coaches (includes safety/training session) includes free
                  arcade, table games, and shuffleboard!
                </p>
                <Row>
                  <Col>
                    <h3>$15</h3>
                    <p className="reverse-padding ">for kids</p>
                    <p className="fst-italic">(under 14)</p>
                  </Col>
                  <Col>
                    <h3>$20</h3>
                    <p>per person</p>
                  </Col>
                </Row>
                <p>
                  One (1) hour of Texas-sized axe throwing fun guided by our
                  Texan coaches (includes short safety/training session)
                  includes free arcade, table games, and shuffleboard!
                </p>
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </Col>
        <Col md={true}>
          <Card className="margin-adjustment" style={{ height: "45rem" }}>
            <Card.Body>
              <Card.Title
                className="text-center title-padding"
                style={{ height: 144 }}
              >
                <h3>CORPERATE EVENTS / TEAM BUILDING</h3>
              </Card.Title>
              <Card.Text className="text-center">
                <h3>Groups of 8+</h3>
                <dl>
                  <dd>Corporate Events</dd>
                  <dd>Team Building</dd>
                  <dd>Family Night</dd>
                  <dd>Birthday Parties</dd>
                  <dd>Bachelor(ette) Parties</dd>
                </dl>
                <p>
                  Plan your next event with us at Lone Star Axe Throwing! We
                  offer a variety of options to make your next outing perfect,
                  with competitive rates!
                </p>
                <p>
                  Larger groups and private events can be accommodated outside
                  of normal business hours!
                </p>
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </Col>
        <Col md={true}>
          <Card className="margin-adjustment" style={{ height: "45rem" }}>
            <Card.Body>
              <Card.Title
                className="text-center title-padding"
                style={{ height: 144 }}
              >
                <h3 className="title">WALK INS</h3>
              </Card.Title>
              <Card.Text className="text-center">
                <h3>$20 per 30min</h3>
                <p>
                  Axe throwing fun -- by the half-hour. Subject to availability
                  -- Don't worry! There is plenty to do in case of a wait!
                  Includes short safety/training session
                </p>
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
