import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Navigation() {
  const currentURL = window.location.pathname;
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="imageWrapper">
        <Container>
          <Navbar.Brand href="/">Deadman's Bluff Rage Room </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="text-end">
              <Nav.Link
                href="/home"
                className={currentURL === "/home" ? "active" : ""}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="/pricing"
                className={currentURL === "/pricing" ? "active" : ""}
              >
                Pricing
              </Nav.Link>
              <Nav.Link
                href="/contact"
                className={currentURL === "/contact" ? "active" : ""}
              >
                Contact
              </Nav.Link>
              <Nav.Link
                href="/rules"
                className={currentURL === "/rules" ? "active" : ""}
              >
                Rules
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
