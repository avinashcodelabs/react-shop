import React from "react";
import { Col, Offcanvas, Row } from "react-bootstrap";
import { CartItem } from "./CartItem";
import { formatCurrency } from "../utils/formatCurrency";
import { getProducts } from "../api/services";

function Cart({ isCartOpen, setIsCartOpen, cartItems }) {
  const [products, updateProducts] = React.useState([]);

  const total = cartItems.reduce((total, cartItem) => {
    const price = products.find((item) => item.id == cartItem.id).price;
    return total + cartItem.quantity * price;
  }, 0);

  React.useEffect(() => {
    getProducts().then((data) => {
      updateProducts(data);
    });
  }, []);

  return (
    <Offcanvas
      show={isCartOpen}
      placement={"end"}
      onHide={() => setIsCartOpen(false)}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>My Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Row xs={1} md={1} lg={1} className="g-3">
          {cartItems.map((item) => {
            return (
              <Col key={item.id}>
                <CartItem {...item}></CartItem>
              </Col>
            );
          })}
        </Row>
        <div className="fw-bold d-flex justify-content-end">
          Total: {formatCurrency(total)}
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export { Cart };
