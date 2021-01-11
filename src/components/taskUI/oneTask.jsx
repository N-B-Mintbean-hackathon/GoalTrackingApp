import React from "react";
import Header from "../../layout/header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function OneTask({ title, description, status, category }) {
  return (
    <div>
      <Header />
      <div className="one-task">
        <Container>
          <Row>
            <Col>
              {" "}
              <h3>{title} Title fo one task</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                {description}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                quia tempore repellendus harum animi iure perferendis,
                laboriosam vero laudantium alias quo aut, voluptate iusto,
                perspiciatis molestiae sunt quaerat! Facilis, minima.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              {" "}
              <p>Category:{category} Health</p>
            </Col>
            <Col>
              {" "}
              <p>Status:{status} TO DO</p>
            </Col>
          </Row>
          <Row>
            <Col>
              {" "}
              <p>start time</p>
            </Col>
            <Col>
              {" "}
              <button className="one-task-btn">Timer</button>
            </Col>
            <Col>
              {" "}
              <p>end time</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <button className="one-task-btn">Delete</button>
            </Col>
            <Col>
              <button className="one-task-btn">Update</button>
            </Col>
          </Row>
        </Container>
      </div>
      <hr />
    </div>
  );
}
