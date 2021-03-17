import React, { useEffect, useState } from "react";
import axios from "axios";

import { addToCart } from "../redux/ShoppingCartDucks";
import { useDispatch, useSelector } from "react-redux";

const Products = () => {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMoreCount, setHasMoreCount] = useState();
  const [nameProduct, setNameProduct] = useState("");

  const searchProduct = (nameProduct) => {
    return function (product) {
      return product.name.includes(nameProduct) || !nameProduct;
    };
  };

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://dev2.th3insid3.com/api/products?page=${currentPage}`
      );
      const products = response.data.products;
      setProducts(products);
      const hasMorePages = response.data.paginatorInfo.hasMorePages;
      setHasMoreCount(hasMorePages);
    }
    fetchData();
  }, [currentPage]);

  return (
    <div className="container text-center mt-4">
      <h1>Product List</h1>
      <div className="d-flex justify-content-center mt-5">
        {currentPage > 1 && (
          <button
            onClick={() => {
              setCurrentPage(currentPage - 1);
            }}
            className="btn btn-warning btn-sm"
          >
            Anterior
          </button>
        )}
        {hasMoreCount && (
          <button
            onClick={() => {
              setCurrentPage(currentPage + 1);
            }}
            className="btn btn-warning btn-sm mx-3"
          >
            Sigiente
          </button>
        )}
      </div>
      {products && (
        <div className="input-group d-flex justify-content-end">
          <div className="form-outline">
            <input
              type="search"
              onChange={(e) => setNameProduct(e.target.value)}
              id="form1"
              className="form-control"
              placeholder="Buscar"
            />
          </div>
          <button type="button" className="btn btn-success">
            <i className="fas fa-search">Buscar</i>
          </button>
        </div>
      )}
      <div className="row">
        {products.filter(searchProduct(nameProduct)).map((products) => (
          <div
            key={products.id}
            className="col-md-6 col-lg-3 my-5"
            style={{ height: "350px" }}
          >
            <div className="card" style={{ height: "400px" }}>
              <img
                src={products.image}
                className="card-img-top"
                alt={products.name}
              />
              <div className="card-body ">
                <h5 className="card-title">{products.name}</h5>
                <p>Price: {products.price}</p>
                <button
                  onClick={() => dispatch(addToCart(products))}
                  className="btn btn-danger"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
