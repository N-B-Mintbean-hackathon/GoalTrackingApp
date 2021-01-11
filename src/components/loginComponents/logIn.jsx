import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../../layout/header";
import Footer from "../../layout/footer";

export default function LogIn() {
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
                placeholder=" password"
                type="password"
              />

              <br />
              <button className="btn-lp">Log in</button>
            </form>
          </Col>
        </Row>
      </section>
      <Footer />
      <hr />
    </div>
  );
}
