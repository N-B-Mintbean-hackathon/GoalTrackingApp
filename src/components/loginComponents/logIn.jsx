import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../../layout/header";
import Footer from "../../layout/footer";
import Button from 'react-bootstrap/Button'

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
              <Button variant="primary">Log in</Button>{' '}

            </form>
          </Col>
        </Row>
      </section>
      <Footer />
      <hr />
    </div>
  );
}
