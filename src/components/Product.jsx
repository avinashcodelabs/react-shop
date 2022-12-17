import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { formatCurrency } from "../utils/formatCurrency";
import { shortIt } from "../utils/stringManipulate";

function Product({ id, name, description, price, imgUrl, addOrUpdateCart }) {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={imgUrl}
        style={{
          objectFit: "cover",
        }}
      />
      <Card.Body>
        <div className="d-flex justify-content-between">
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="text-muted">
            {formatCurrency(price)}
          </Card.Subtitle>
        </div>

        <Card.Text>
          {shortIt(description, 40)}... <Link to={`products/${id}`}>More</Link>
        </Card.Text>
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
