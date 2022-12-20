import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { formatCurrency } from "../utils/formatCurrency";

function Product({ id, name, description, price, imgUrl, addOrUpdateCart }) {
  return (
    <Card>
      <Link to={`products/${id}`}>
        <Card.Img
          variant="top"
          src={imgUrl}
          style={{
            objectFit: "cover",
          }}
        />
      </Link>
      <Card.Body>
        <div className="d-flex justify-content-between">
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="text-muted">
            {formatCurrency(price)}
          </Card.Subtitle>
        </div>
        <Button
          size={"sm"}
          className="w-100"
          variant="primary"
          onClick={() => addOrUpdateCart(id)}
        >
          Add To Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export { Product };
