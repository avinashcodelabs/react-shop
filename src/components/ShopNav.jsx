import { Container, Navbar, Badge, Nav } from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

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
          <Nav className="me-auto">
            <Nav.Link to="/manage" as={NavLink}>
              Manage Products
            </Nav.Link>
          </Nav>
          <Nav.Link to="/cart" as={NavLink}>
            <FaCartPlus size={30} />
            <Badge pill bg="dark">
              {totalQuantity}
            </Badge>
          </Nav.Link>
        </Container>
      </Navbar>
    </>
  );
}

export { ShopNav };
