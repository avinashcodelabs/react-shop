import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, Button } from "react-bootstrap";
import { getProducts, deleteProduct } from "../../api/services";
import { formatCurrency } from "../../utils/formatCurrency";
import { CiEdit, CiSquareRemove } from "react-icons/ci";

function List() {
  const [products, setProducts] = React.useState();

  React.useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  const handleDelete = (id) => {
    deleteProduct(id).then(() => {
      getProducts().then((data) => {
        setProducts(data);
      });
    });
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="mb-3">Products</h4>
        <Link to={"/manage/add"}>
          <Button size="sm">Add New Product</Button>
        </Link>
      </div>
      <ListGroup>
        {products
          ? products.map((product) => {
              return (
                <ListGroup.Item
                  key={product.id}
                  className="d-flex justify-content-between align-items-center"
                >
                  <div>
                    <img
                      src={product.imgUrl}
                      style={{
                        width: "100px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                    />
                    <span style={{ marginLeft: "5px" }}>{product.name}</span>
                    <span style={{ marginLeft: "5px" }} className="text-muted">
                      {formatCurrency(product.price)}
                    </span>
                  </div>
                  <div>
                    <Link to={`/manage/edit/${product.id}`}>
                      <CiEdit
                        size={30}
                        style={{ marginRight: "8px", cursor: "pointer" }}
                      ></CiEdit>
                    </Link>
                    <CiSquareRemove
                      style={{ cursor: "pointer" }}
                      size={30}
                      onClick={() => handleDelete(product.id)}
                    ></CiSquareRemove>
                  </div>
                </ListGroup.Item>
              );
            })
          : "Loading the products....."}
      </ListGroup>
    </>
  );
}

export { List };
