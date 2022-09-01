import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";

export default function HomeCard(props) {
  return (
    <>
      <Card className="body-card">
        <Card.Img variant="top" src={props.cardImg} />
        <Card.Body style={{ overflow: "scroll" }}>
          <Card.Title>{props.cardTitle}</Card.Title>
          <Card.Text style={{ "margin-bottom": "12%" }}>
            {props.cardText}
          </Card.Text>

          <Button
            className="card-btn card-btn-left"
            href="/pricing"
            variant="danger"
          >
            Pricing
          </Button>
          <Button
            className="card-btn card-btn-right"
            href="/contact"
            variant="danger"
          >
            Contact Us
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
