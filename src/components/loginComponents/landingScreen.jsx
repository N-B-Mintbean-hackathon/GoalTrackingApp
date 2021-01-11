import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

export default function LandingScreen() {
  return (
    <div>
      <section className="showcase">
        <div className="video-container">
          <video
            src="/img/video-background.mp4"
            autoPlay
            muted
            loop
            className="mov"
          />
        </div>
        <div className="content">
          <Container>
            <Row>
              <Col xs={6} md={{ span: 1, offset: 1 }}>
                <Image src="/ACHIVER.png" roundedCircle />
              </Col>

              <Col xs={6} md={{ span: 1, offset: 1 }}>
                <h1 className="headline">ACHIEVER</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link to="/logIn">
                  <button className="btn-lp">Log in</button>
                </Link>
              </Col>

              <Col>
                <Link to="/register">
                  <button className="btn-lp">Register</button>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </div>
  );
}
