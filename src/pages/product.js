import React, { useState } from "react";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { rename, changeAmount, fetchProduct } from "../actions";
import { useHistory } from "react-router-dom";
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
  Alert,
} from "react-bootstrap";

export const _handleRename = (dispatch, value) => {
  dispatch(rename(value));
};

export const _handleChangeAmount = (dispatch, value) => {
  dispatch(changeAmount(parseInt(value)));
};

export default () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const message = useSelector((state) => state.message);
  const isLoading = useSelector((state) => state.isLoading);
  const products = useSelector((state) => state.products);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);

  console.log("products", products);

  return (
    <Container>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Redux Saga</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
      <br />
      <Row>
        <Col md="6">
          <Card>
            <Card.Header>Subscribe</Card.Header>
            <Card.Body>
              <Card.Title>Product</Card.Title>
              <Card.Text>
                <Form.Label>Name : {product.name}</Form.Label>
                <br></br>
                <Form.Label>จำนวน : {product.amount} ชิ้น</Form.Label>
              </Card.Text>
              <Alert variant="success">{message}</Alert>
            </Card.Body>
          </Card>
        </Col>
        <Col md="6">
          <Card>
            <Card.Header>Dispatch</Card.Header>
            <Card.Body>
              <Card.Title>เปลี่ยนแปลงข้อมูลสินค้า</Card.Title>
              <Card.Text>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Rename</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="ชื่อสินค้า"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Amount</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="จำนวนสินค้า"
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Button onClick={() => _handleRename(dispatch, name)}>
                      Rename
                    </Button>
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Button
                      onClick={() => _handleChangeAmount(dispatch, amount)}
                    >
                      Amount
                    </Button>
                  </Form.Group>
                </Form.Row>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Button onClick={() => fetchProduct()}>Get Product</Button>
      {isLoading && (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
    </Container>
  );
};
