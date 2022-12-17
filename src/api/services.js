function getProducts() {
  return fetch(
    "https://my-json-server.typicode.com/avinash2wards/mock-rest-api/products"
  ).then((res) => res.json());
}

function getProduct(id) {
  return fetch(
    `https://my-json-server.typicode.com/avinash2wards/mock-rest-api/products/${id}`
  ).then((res) => res.json());
}

export { getProducts, getProduct };
