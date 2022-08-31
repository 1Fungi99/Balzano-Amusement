import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Navigation() {
  const currentURL = window.location.pathname;
  console.log(currentURL);
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Deadman's Bluff Rage Room </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
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
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
