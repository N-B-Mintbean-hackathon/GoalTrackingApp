import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ShortTask({ title, category, status }) {
  return (
    <div className="short-task">
      <div className={status}>
        <div className={category}>
          <Container>
            <Row>
              <Col>
                {" "}
                <p className="short-task-title">{title}</p>
              </Col>
              <Col>
                {" "}
                <p className="short-task-title">{category}</p>
              </Col>
              <Col>
                {" "}
                <p className="short-task-title">{status}</p>
              </Col>
              <Col>
                <button className="short-task-btn">Update</button>
                <button className="short-task-btn">Delete</button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}
