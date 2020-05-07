/*
 * @Author: Supot Patsaithong
 * @Date: 2020-05-07 23:45:05
 * @Last Modified by: Supot Patsaithong
 * @Last Modified time: 2020-05-08 00:48:43
 */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct, logout, addToCart } from "../actions";
import {
  Navbar,
  Nav,
  Form,
  Button,
  Container,
  Col,
  Row,
  Card,
  Spinner,
} from "react-bootstrap";

export const handleLogout = ({ dispatch }) => {
  dispatch(logout());
};

export default ({ ...props }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const isLoading = useSelector((state) => state.product.loading);
  const carts = useSelector((state) => state.cart.products);
  const total = useSelector((state) => state.cart.total);
  const me = localStorage.getItem("auth");

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  //View Calling
  return UserInterface({
    ...props,
    dispatch,
    me,
    isLoading,
    products,
    carts,
    total,
  });
};

//View Body
export const UserInterface = ({
  props,
  dispatch,
  me,
  isLoading,
  products,
  carts,
  total,
}) => (
  <Container>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Redux Saga</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <Form inline>
        <Button
          variant="outline-danger"
          onClick={() => handleLogout({ ...props, dispatch })}
        >
          Logout
        </Button>
      </Form>
    </Navbar>
    <br />
    <Row>
      <Col md="12">
        <Card>
          <Card.Body>
            Current User : <b>{JSON.parse(me).email}</b>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col md="6">
        <Card>
          <Card.Header>Product</Card.Header>
          <Card.Body>
            {isLoading && (
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            )}
            {products.map((product) => (
              <Card.Text>
                <Form.Label>Name : {product.name}</Form.Label>
                <Form.Label style={{ marginLeft: 10 }}>
                  ราคา : {product.price} บาท
                </Form.Label>
                <Button
                  style={{ marginLeft: 10 }}
                  onClick={() => dispatch(addToCart(product))}
                >
                  Add
                </Button>
              </Card.Text>
            ))}
          </Card.Body>
        </Card>
      </Col>
      <Col md="6">
        <Card>
          <Card.Header>Product</Card.Header>
          <Card.Body>
            {carts.map((product) => (
              <Card.Text>
                <Form.Label>Name : {product.name}</Form.Label>
                <Form.Label style={{ marginLeft: 10 }}>
                  ราคา : {product.price} บาท
                </Form.Label>
              </Card.Text>
            ))}
          </Card.Body>
          <Card.Footer>Total: {total}</Card.Footer>
        </Card>
      </Col>
    </Row>
  </Container>
);
