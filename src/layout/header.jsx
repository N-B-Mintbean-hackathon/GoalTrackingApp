import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Header() {
  return (
    <div className="header">
      <Container>
        <Row>
          <Col xs={6} md={{ span: 1, offset: 1 }}>
            <Image src="/ACHIVER.png" roundedCircle />
          </Col>

          <Col xs={6} md={{ span: 1, offset: 1 }}>
            <h1 className="headline">ACHIEVER</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
