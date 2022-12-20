import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "./components/Cart";
import { Container } from "react-bootstrap";
import { ProductDetails } from "./components/ProductDetails";
import { ProductList } from "./components/ProductList";
import { ShopNav } from "./components/ShopNav";
import { List } from "./components/Manage/List";
import { Add } from "./components/Manage/Add";
import { Edit } from "./components/Manage/Edit";

export default function App() {
  const [cartItems, setCartItems] = React.useState([]);
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  function addOrUpdateCart(id) {
    const itemExisted = cartItems.find((item) => item.id == id);
    if (!itemExisted) {
      setCartItems([...cartItems, { id, quantity: 1 }]);
    } else {
      setCartItems(
        cartItems.map((item) => {
          if (item.id == id) {
            return { id, quantity: item.quantity + 1 };
          }
          return item;
        })
      );
    }
  }
  return (
    <BrowserRouter>
      <ShopNav setIsCartOpen={setIsCartOpen} cartItems={cartItems}></ShopNav>
      <Cart
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        cartItems={cartItems}
      ></Cart>
      <Container>
        <Routes>
          <Route
            path="/"
            element={<ProductList addOrUpdateCart={addOrUpdateCart} />}
          />
          <Route
            path="/products/:id"
            element={<ProductDetails addOrUpdateCart={addOrUpdateCart} />}
          />
          <Route path="/manage" element={<List />} />
          <Route path="/manage/add" element={<Add />} />
          <Route path="/manage/edit/:id" element={<Edit />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
