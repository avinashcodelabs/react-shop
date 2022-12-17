import React from "react";
import { Col, Row } from "react-bootstrap";
import { Product } from "./Product";
import { getProducts } from "../api/services";
import {} from "react-icons/fa";

function ProductList({ addOrUpdateCart }) {
  const [products, updateProducts] = React.useState([]);

  React.useEffect(() => {
    getProducts().then((data) => {
      updateProducts(data);
    });
  }, []);

  if (products.length === 0) {
    return <p className="fw-bold">Loading products in a sec .....</p>;
  }

  return (
    <>
      <Row md={2} xs={1} lg={4} className="g-3">
        {products.map((product) => {
          return (
            <Col key={product.id}>
              <Product addOrUpdateCart={addOrUpdateCart} {...product} />
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export { ProductList };
