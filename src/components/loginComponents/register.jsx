import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../../layout/header";

export default function Register() {
  return (
    <div>
      <Header />
      <section>
        <Row>
          <Col>
            <form>
              <input
                className="input-field"
                placeholder="username"
                type="text"
              />
              <br />
              <input
                className="input-field"
                placeholder="E-mail"
                type="password"
              />

              <br />
              <input
                className="input-field"
                placeholder="password"
                type="text"
              />
              <br />
              <input
                className="input-field"
                placeholder="password"
                type="password"
              />
              <br />
              <button className="btn-lp">Register</button>
            </form>
          </Col>
        </Row>
      </section>
      <hr />
    </div>
  );
}
