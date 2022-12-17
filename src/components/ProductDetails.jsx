import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { formatCurrency } from "../utils/formatCurrency";
import { useParams } from "react-router-dom";
import { getProduct } from "../api/services";

function ProductDetails({ addOrUpdateCart }) {
  const [product, updateProduct] = React.useState({});
  const params = useParams();

  React.useEffect(() => {
    getProduct(params.id).then((data) => {
      updateProduct(data);
    });
  }, [params.id]);

  return (
    <div className="d-flex justify-content-center">
      <Card style={{ width: "33rem", height: "36rem" }}>
        <Card.Header className="d-flex justify-content-between">
          {product.name}
          <Link to={`/`}>
            <FaArrowCircleLeft></FaArrowCircleLeft>
          </Link>
        </Card.Header>
        <Card.Img
          variant="top"
          src={product.imgUrl}
          style={{
            objectFit: "cover",
            borderRadius: 0,
          }}
        />
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Card.Title className="fs-2">{product.name}</Card.Title>
            <Card.Subtitle className="fs-2 text-muted">
              {formatCurrency(product.price)}
            </Card.Subtitle>
          </div>

          <Card.Text>{product.description}</Card.Text>
          <Button
            variant="primary"
            className="w-100"
            onClick={() => addOrUpdateCart(params.id)}
          >
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export { ProductDetails };
