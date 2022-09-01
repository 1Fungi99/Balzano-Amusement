import Container from "react-bootstrap/esm/Container";

export default function Test(props) {
  return (
    <>
      <Container fluid className="landing-page">
        <video src={props.video} autoPlay muter loop className="video-bg" />
        <Container fluid className="bg-overlay">
          <Container fluid>
            <h1 className="fw-bold text-center">{props.companyName}</h1>
            <h3 className="fw-bold text-center">{props.companyEvents}</h3>
          </Container>
        </Container>
      </Container>
      ;
    </>
  );
}
