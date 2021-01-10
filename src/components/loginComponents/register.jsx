import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { auth, db } from '../../firebase';
import Header from '../../layout/header';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
        //e.g. VR4ODCbQ7hcExmo7poSwHIUz9y33
        console.log(user.user.uid);
        //create and send the schema to tasks > username in Firebase
        db.collection(user.user.uid).add({});
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <br />
              <input
                className="input-field"
                placeholder="E-mail"
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <br />
              <input
                className="input-field"
                placeholder="password"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <br />
              <input
                className="input-field"
                placeholder="password"
                type="password"
              />
              <br />
              <button
                className="btn-lp"
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                Register
              </button>
            </form>
          </Col>
        </Row>
      </section>
      <hr />
    </div>
  );
}
