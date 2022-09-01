import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Pricing.css";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function RageRoomPricing() {
  return (
    <Container lg>
      <h1 className="text-center header-padding">RAGE ROOM</h1>
      <Row>
        <Col md={true}>
          <Card className="margin-adjustment" style={{ height: "45rem" }}>
            <Card.Body>
              <Card.Title
                className="text-center title-padding"
                style={{ height: 144 }}
              >
                <h3 className="title">DEADMAN'S RAGE ROOM PACKAGE</h3>
              </Card.Title>
              <Card.Text className="text-center">
                <h3>$45 per 30min</h3>
                <h5>What's Included:</h5>
                <p>10 Glass/Ceramic Breakables (Per Person)</p>
                <p>1 Small Item</p>
                <p>1 Arcade Machine</p>
                <p>“Break The Bank” ATM Challenge Item</p>
                <h5>Additional Items:</h5>
                <p>10 Glass or Ceramic Breakables: $10</p>
                <p>1 Medium Item: $15</p>
                <p>1 Large Item: $20</p>
                <p>1 Additional Arcade Machine $30</p>
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
      </Row>
    </Container>
  );
}
