import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Product } from "./Product";
import { getProducts } from "../../api/services";
import { FaSpinner } from "react-icons/fa";

function ProductList({ addOrUpdateCart }) {
  const [products, updateProducts] = React.useState([]);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    getProducts().then((data) => {
      updateProducts(data);
    });
  }, []);

  React.useEffect(() => {
    const status = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(status);
  });

  if (products.length === 0) {
    return <FaSpinner size={50}></FaSpinner>;
  }

  return (
    <>
      {isLoggedIn ? (
        <Row md={2} xs={1} lg={4} className="g-3">
          {products.map((product) => {
            return (
              <Col key={product.id}>
                <Product addOrUpdateCart={addOrUpdateCart} product={product} />
              </Col>
            );
          })}
        </Row>
      ) : (
        <h5>
          Kindly login to continue shopping... <Link to="/login">Login</Link>
        </h5>
      )}
    </>
  );
}

export { ProductList };
