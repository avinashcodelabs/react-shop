import { Container, Navbar, Badge } from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

function ShopNav({ setIsCartOpen, cartItems }) {
  const totalQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );
  return (
    <>
      <Navbar sticky="top" className="bg-white shadow-lg mb-4">
        <Container>
          <Navbar.Brand>
            <Link to={"/"}>
              <img src="https://img.logoipsum.com/258.svg" />
            </Link>
          </Navbar.Brand>
          <div
            onClick={() => setIsCartOpen(true)}
            style={{ cursor: "pointer" }}
          >
            <FaCartPlus size={30} />
            <Badge pill bg="dark">
              {totalQuantity}
            </Badge>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export { ShopNav };
