import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleClick = () => {
    console.log(email, password);
    localStorage.setItem("isLoggedIn", true);
    navigate("/shop");
  };

  return (
    <Container style={{ width: "50%" }}>
      <h3 className="mb-3">Login</h3>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleClick}>
          Login
        </Button>
      </Form>
    </Container>
  );
}

export { Login };
