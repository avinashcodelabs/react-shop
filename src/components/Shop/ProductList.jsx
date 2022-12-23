import React from "react";
import { Col, Row } from "react-bootstrap";
import { Product } from "./Product";
import { getProducts } from "../../api/services";
import { FaSpinner } from "react-icons/fa";

function ProductList({ addOrUpdateCart }) {
  const [products, updateProducts] = React.useState([]);

  React.useEffect(() => {
    getProducts().then((data) => {
      updateProducts(data);
    });
  }, []);

  if (products.length === 0) {
    return <FaSpinner size={50}></FaSpinner>;
  }

  return (
    <>
      <Row md={2} xs={1} lg={4} className="g-3">
        {products.map((product) => {
          return (
            <Col key={product.id}>
              <Product addOrUpdateCart={addOrUpdateCart} product={product} />
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export { ProductList };
