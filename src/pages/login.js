/*
 * @Author: Supot Patsaithong
 * @Date: 2020-05-07 23:45:25
 * @Last Modified by: Supot Patsaithong
 * @Last Modified time: 2020-05-08 00:55:29
 */
import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { signIn } from "../actions";

export const handleSubmit = ({ dispatch, username, password }) => {
  dispatch(signIn({ username, password }));
};

export default ({ ...props }) => {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("admin1234");
  const dispatch = useDispatch();

  //View Calling
  return UserInterface({
    ...props,
    username,
    setUsername,
    password,
    setPassword,
    dispatch,
  });
};

//View Body
export const UserInterface = ({
  props,
  username,
  setUsername,
  password,
  setPassword,
  dispatch,
}) => (
  <Container>
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="username"
          placeholder="Enter username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </Form.Group>
      <Button
        variant="primary"
        onClick={() => handleSubmit({ ...props, dispatch, username, password })}
      >
        Login
      </Button>
    </Form>
  </Container>
);
