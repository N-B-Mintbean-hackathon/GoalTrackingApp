import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer() {
  return (
    <div className="footer">
      <hr />
      <Container>
        <Row>
          <Col>
            <h3>Achievers:</h3>
          </Col>
          <Col>
            <img src="/ACHIVER.png" alt="logo" className="soc-ico" />
            <li>Andrew Lloyd</li>
            <a
              href="https://www.linkedin.com/in/andrewlloyd01/"
              target="_blanck"
            >
              <img
                src="/linkedin.png"
                className="soc-ico"
                alt="linkedin icon"
              />
            </a>
            <a href="https://github.com/AndrewRLloyd88" target="_blanck">
              <img src="/github.png" className="soc-ico" alt="github icon" />
            </a>
          </Col>
          <Col>
            <img src="/ACHIVER.png" alt="logo" className="soc-ico" />
            <li>Nikola Mihajlovic</li>
            <a href="https://www.linkedin.com/in/nmihajlovic/" target="_blanck">
              <img
                src="/linkedin.png"
                className="soc-ico"
                alt="linkedin icon"
              />
            </a>
            <a href="https://github.com/wnikola" target="_blanck">
              <img src="/github.png" className="soc-ico" alt="github icon" />
            </a>
          </Col>
          <Col>
            <img src="/ACHIVER.png" alt="logo" className="soc-ico" />
            <li>Biljana Pavlovic</li>
            <a
              href="https://www.linkedin.com/in/biljana-pavlovic-29a0907b/"
              target="_blanck"
            >
              <img
                src="/linkedin.png"
                className="soc-ico"
                alt="linkedin icon"
              />
            </a>
            <a href="https://github.com/BiljanaPavlovic" target="_blanck">
              <img src="/github.png" className="soc-ico" alt="github icon" />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
