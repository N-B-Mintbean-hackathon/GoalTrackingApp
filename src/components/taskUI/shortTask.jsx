import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';

export default function ShortTask({ id, title, category, status }, props) {
  const [curentTask, setCurentTask] = useState({});
  const handleClick = (id) => {
    console.log("hello world");
    fetch(`/api/users/tasks`)
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
              <Button variant="primary">Upadate</Button>{' '}
              <Button variant="primary">Delete</Button>{' '}


              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}
