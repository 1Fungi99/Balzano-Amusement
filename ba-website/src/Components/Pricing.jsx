import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Pricing() {
  return (
    <>
      <Container lg>
        <h1>Pricing:</h1>
        <Row>
          <Col>
            <Container>
              <h3>Break Room:</h3>
              <h5>$45 per person (30 min.)</h5>
              <h6>What is included:</h6>
              <ul>
                <li>10 Glass or Ceramic Breakables (per person)</li>
                <li>1 Small Item</li>
                <li>1 Arcade Machine</li>
                <li>"Break the Bank" ATM Challenge Item</li>
              </ul>
              <h6>Additional Items:</h6>
              <ul>
                <li>10 Glass or Ceramic breakables: $10</li>
                <li>1 Medium Item: $15</li>
                <li>1 Large Item: $20</li>
                <li>1 Arcade Machine: $30</li>
              </ul>
            </Container>
          </Col>
          <Col>
            <Container>
              <h3>Axe Throwing:</h3>
              <h5>$20 per person (30 min.)</h5>
            </Container>
          </Col>
        </Row>
        <h3>Package Deals:</h3>
        <Row>
          <Col>
            <Container>
              <h5>
                $300 for a group of 8 for 30 minutes (group will be broken up
                into two groups of four)
              </h5>
            </Container>
          </Col>
          <Col>
            <Container>
              <h5>
                Smash and Grab Rate $60 per person for both the axe throwing and
                rage room
              </h5>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}
