import { Container, Navbar, Badge, Nav, Button } from "react-bootstrap";
import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ShopNav({ cartItems, emptyCart }) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = React.useState(
    localStorage.getItem("isLoggedIn")
  );

  React.useEffect(() => {
    const status = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(status);
  });

  const totalQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const navLinkStyle = {
    textDecoration: "none",
    marginRight: "10px",
    fontSize: "15px",
    fontWeight: "bold",
  };
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
            <Link style={navLinkStyle} to="/shop">
              Shopping
            </Link>
            <Link style={navLinkStyle} to="/manage">
              Manage
            </Link>
            <Link style={navLinkStyle} to="/support">
              Contact Us
            </Link>
          </Nav>
          <Link style={navLinkStyle} to="/cart">
            <FaCartPlus color="grey" size={30} />
            <Badge pill bg="secondary">
              {totalQuantity}
            </Badge>
          </Link>
          {isLoggedIn ? (
            <Button
              // className="outline-danger"
              onClick={() => {
                localStorage.removeItem("isLoggedIn");
                emptyCart();
                navigate("/");
              }}
            >
              Logout
            </Button>
          ) : (
            <Link style={navLinkStyle} to="/login">
              Login
            </Link>
          )}
        </Container>
      </Navbar>
    </>
  );
}

export { ShopNav };
