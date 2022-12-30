import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import { ProductDetails } from "./components/Shop/ProductDetails";
import { ProductList } from "./components/Shop/ProductList";
import { Cart } from "./components/Shop/Cart";
import { ShopNav } from "./components/ShopNav";
import { List } from "./components/Manage/List";
import { Add } from "./components/Manage/Add";
import { Edit } from "./components/Manage/Edit";
import { Home } from "./components/Home";
import { Support } from "./components/Support";
import { Login } from "./components/Login";

function App() {
  const [cartItems, setCartItems] = React.useState([]);

  function addOrUpdateCart({ id, name, imgUrl, price }) {
    const itemExisted = cartItems.find((item) => item.id == id);
    if (!itemExisted) {
      setCartItems([...cartItems, { id, name, imgUrl, price, quantity: 1 }]);
    } else {
      setCartItems(
        cartItems.map((item) => {
          if (item.id == id) {
            return { id, name, imgUrl, price, quantity: item.quantity + 1 };
          }
          return item;
        })
      );
    }
  }

  function removeCart(id) {
    setCartItems(
      cartItems.filter((item) => {
        return item.id != id;
      })
    );
  }

  function emptyCart() {
    setCartItems([]);
  }

  return (
    <BrowserRouter>
      <ShopNav cartItems={cartItems} emptyCart={emptyCart}></ShopNav>

      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={<ProductList addOrUpdateCart={addOrUpdateCart} />}
          />
          <Route path="/support" element={<Support />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/products/:id"
            element={<ProductDetails addOrUpdateCart={addOrUpdateCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} removeCart={removeCart} />}
          />
          <Route path="/manage" element={<List />} />
          <Route path="/manage/add" element={<Add />} />
          <Route path="/manage/edit/:id" element={<Edit />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export { App };
