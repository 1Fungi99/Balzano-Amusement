import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import MdLanding from "../Components/MdLanding";

import Img from "../Resources/Contact-Us-Landing.jpeg";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import {
  GrMapLocation,
  GrPhone,
  GrContactInfo,
  GrMailOption,
} from "react-icons/gr";

export default function Contact() {
  return (
    <>
      <MdLanding img={Img} pageName="Contact Us" />
      <Container lg>
        <Row>
          <Col>
            <h1>Get on the schedule!</h1>
            <h3>
              <GrContactInfo />
              {"\u00a0\u00a0"}
              Balzano Amusement
            </h3>
            <h3>
              <GrMapLocation />
              {"\u00a0\u00a0"}123 Main Street, Carlsbad, New Mexico 12345
            </h3>
            <h3>
              <GrMailOption />
              {"\u00a0\u00a0"}
              BalzanoAmusement@gmail.com
            </h3>
            <h3>
              <GrPhone />
              {"\u00a0\u00a0"}(575) 200-9533
            </h3>
          </Col>
        </Row>
      </Container>
    </>
  );
}
