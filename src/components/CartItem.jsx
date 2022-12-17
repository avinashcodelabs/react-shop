import React from "react";
import { formatCurrency } from "../utils/formatCurrency";
import { getProduct } from "../api/services.js";

function CartItem({ id, quantity }) {
  const [product, updateProduct] = React.useState({});

  React.useEffect(() => {
    getProduct(id).then((data) => {
      updateProduct(data);
    });
  }, [id]);

  return (
    <div className="d-flex align-items-center">
      <img
        src={product.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      &nbsp;
      <div className="me-auto">
        <div>
          {product.name}&nbsp;
          <span className="text-muted" style={{ fontSize: "0.65rem" }}>
            x {quantity}
          </span>
        </div>
        <div className="text-muted" style={{ fontSize: "0.75rem" }}>
          {formatCurrency(product.price)}
        </div>
      </div>
      <div>{formatCurrency(product.price * quantity)}</div>
    </div>
  );
}

export { CartItem };
