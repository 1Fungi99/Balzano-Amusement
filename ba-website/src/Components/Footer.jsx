import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

/* Stashed for future */

import { GrFacebookOption, GrTwitter, GrInstagram } from "react-icons/gr";

export default function Footer() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="imageWrapper">
        <Container>
          <Navbar.Brand href="/">Deadman's Bluff Rage Room </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="text-end">
              {/* Change to Facebook page link */}
              <Nav.Link href="/">
                <GrFacebookOption />
              </Nav.Link>
              {/* Change to Twitter page link */}
              <Nav.Link href="/">
                <GrTwitter />
              </Nav.Link>
              <Nav.Link href="/">
                {/* Change to Instagram page link */}
                <GrInstagram />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
