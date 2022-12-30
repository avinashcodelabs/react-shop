import React from "react";
import { ListGroup, Container, Button } from "react-bootstrap";
import { CiCircleRemove } from "react-icons/ci";
import { formatCurrency } from "../../utils/formatCurrency";

function Cart({ cartItems, removeCart }) {
  const subTotals = cartItems.map((item) => {
    return item.quantity * item.price;
  });

  const total = subTotals.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  return (
    <Container className="w-75 text-bg-secondary ">
      <h4 className="mb-3">My Cart</h4>
      <ListGroup>
        {cartItems
          ? cartItems.map((item) => {
              return (
                <ListGroup.Item
                  key={item.id}
                  className="d-flex align-items-center"
                >
                  <img
                    src={item.imgUrl}
                    style={{
                      width: "125px",
                      height: "75px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="me-auto">
                    &nbsp;
                    {item.name}
                    &nbsp;
                    {item.quantity} x {formatCurrency(item.price)}
                  </div>
                  <div>
                    <span
                      className="text-muted"
                      style={{ fontSize: "0.75rem" }}
                    >
                      Subtotal :
                    </span>
                    {formatCurrency(item.price * item.quantity)}
                    &nbsp;
                    <CiCircleRemove
                      style={{ cursor: "pointer", color: "red" }}
                      size={20}
                      onClick={() => removeCart(item.id)}
                    ></CiCircleRemove>
                  </div>
                </ListGroup.Item>
              );
            })
          : "Loading"}
      </ListGroup>
      <div className="fw-bold d-flex justify-content-end">
        Total: {formatCurrency(total)}
      </div>
    </Container>
  );
}

export { Cart };
