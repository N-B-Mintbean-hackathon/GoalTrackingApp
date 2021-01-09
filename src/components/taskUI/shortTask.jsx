import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ShortTask() {
  return (
    <div className="short-task">
      <Row>
        <Col>
          <p className="short-task-title">Title</p>
        </Col>
        <Col>
          <button className="short-task-btn">Upadate</button>
          <button className="short-task-btn">Delete</button>
        </Col>
      </Row>
    </div>
  );
}
