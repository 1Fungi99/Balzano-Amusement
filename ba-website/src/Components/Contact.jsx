import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Contact() {
  return (
    <>
      <Container lg>
        <Row>
          <Col>
            <h6>Address:</h6>
            <p>123 Main Street</p>
            <p>Carlsbad NM 12345</p>
          </Col>
          <Col>
            <h1>Get on the schedule!</h1>
            <h3>Balzano Amusement</h3>
            <h5>@: BalzanoAmusement@gmail.com</h5>
            <h5>#: (575) 200-9533</h5>
          </Col>
        </Row>
      </Container>
    </>
  );
}
