function getProducts() {
  return fetch("http://api.avinashcodelabs.com/api/products")
    .then((res) => res.json())
    .then((data) => {
      return data.products;
    });
}

function getProduct(id) {
  return fetch(`http://api.avinashcodelabs.com/api/products/${id}`)
    .then((res) => res.json())
    .then((data) => data.product);
}

function createProduct(p) {
  return fetch(`http://api.avinashcodelabs.com/api/products`, {
    method: "POST",
    body: JSON.stringify(p),
  }).then((res) => res.json());
}

function updateProduct(p) {
  return fetch(`http://api.avinashcodelabs.com/api/products/${p.id}`, {
    method: "PUT",
    body: JSON.stringify(p),
  })
    .then((res) => res.json())
    .then((data) => data);
}

function deleteProduct(id) {
  return fetch(`http://api.avinashcodelabs.com/api/products/${id}`, {
    method: "DELETE",
  }).then((d) => d);
}

export { getProducts, getProduct, createProduct, updateProduct, deleteProduct };
