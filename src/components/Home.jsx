import React from "react";
import { Carousel, Container } from "react-bootstrap";
import { FaSpinner } from "react-icons/fa";
import { getProducts } from "../api/services";

function Home() {
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
    <Container className="me-auto">
      <h5>Welcome...</h5>
      <Carousel>
        {products.map((product) => {
          return (
            <Carousel.Item key={product.id}>
              <img
                style={{ width: "33rem", height: "36rem", objectFit: "cover" }}
                className="d-block w-100"
                src={product.imgUrl}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
  );
}

export { Home };
