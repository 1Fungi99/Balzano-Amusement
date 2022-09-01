import Container from "react-bootstrap/esm/Container";

export default function MdLanding(props) {
  return (
    <>
      <Container fluid className="md-landing-page">
        <img src={props.img} className="img-bg" />
        <Container fluid className="md-bg-overlay">
          <Container fluid>
            <h1 className="fw-bold text-center">{props.pageName}</h1>
          </Container>
        </Container>
      </Container>
      ;
    </>
  );
}
