import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ShortTask({ title, category, status }, props) {
  const [curentTask, setCurentTask] = useState({});

  const handleClick = (id) => {
    console.log("hello world");
    fetch(`/api/users/1/tasks/${id}`)
      .then((res) => res.json())
      .then((json) => setCurentTask(json.tasks));
    console.log(curentTask);
  };
  return (
    <div className="short-task" onClick={handleClick}>
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
