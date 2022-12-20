import React from "react";
import { Form, Button } from "react-bootstrap";
import { getProduct, updateProduct } from "../../api/services";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const navigate = useNavigate();
  const params = useParams();
  const [product, setProduct] = React.useState();

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    updateProduct(product).then(() => {
      navigate("/manage");
    });
  };

  React.useEffect(() => {
    getProduct(params.id).then((data) => {
      setProduct(data);
    });
  }, [params.id]);

  return (
    product && (
      <>
        <h4 className="mb-3">Edit Product</h4>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Id</Form.Label>
            <Form.Control disabled value={product.id} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              value={product.name}
              onChange={handleChange}
              placeholder="Enter product name"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              placeholder="description goes here"
              name="description"
              value={product.description}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              placeholder="price"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control
              name="imgUrl"
              placeholder="image here"
              value={product.imgUrl}
              onChange={handleChange}
              disabled
            ></Form.Control>
          </Form.Group>
          <Button variant="primary" onClick={handleClick}>
            Update
          </Button>
        </Form>
      </>
    )
  );
}

export { Edit };
