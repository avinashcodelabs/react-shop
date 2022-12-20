import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { createProduct } from "../../api/services";
import { useNavigate } from "react-router-dom";

function Add() {
  const navigate = useNavigate();
  const [productForm, setProductForm] = React.useState({
    name: "",
    price: "",
    description: "",
    imgUrl: "https://picsum.photos/seed/picsum/300/200",
  });

  const handleChange = (e) => {
    setProductForm({ ...productForm, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    createProduct(productForm).then((data) => {
      navigate("/manage");
    });
  };

  return (
    <>
      <h4 className="mb-3">Create Product</h4>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            value={productForm.name}
            onChange={handleChange}
            placeholder="Enter product name"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            placeholder="description goes here"
            name="description"
            value={productForm.description}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={productForm.price}
            onChange={handleChange}
            placeholder="price"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control
            name="imgUrl"
            placeholder="image here"
            value={productForm.imgUrl}
            onChange={handleChange}
            disabled
          ></Form.Control>
        </Form.Group>
        <Button variant="primary" onClick={handleClick}>
          Create
        </Button>
      </Form>
    </>
  );
}

export { Add };
