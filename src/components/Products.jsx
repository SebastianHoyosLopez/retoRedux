import React, { useEffect, useState } from "react";
import axios from "axios";

import { addToCart } from '../redux/ShoppingCartDucks'
import {useDispatch} from 'react-redux'

const Products = () => {

  const dispatch = useDispatch()

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMoreCount, setHasMoreCount] = useState();

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
            className="btn btn-dark btn-sm"
          >
            Anterior
          </button>
        )}
        {hasMoreCount && (
          <button
            onClick={() => {
              setCurrentPage(currentPage + 1);
            }}
            className="btn btn-dark btn-sm mx-3"
          >
            Sigiente
          </button>
        )}
      </div>
      <div className="row">
        {products.map((products) => (
          <div key={products.id} className="col-md-6 col-lg-3 my-5" style={{height:"350px"}}>
            <div className="card">
              <img
                src={products.image}
                className="card-img-top"
                alt={products.name}
              />
              <div className="card-body">
                <h5 className="card-title">{products.name}</h5>
                <p>Price: {products.price}</p>
                <button onClick={() => dispatch(addToCart(products))} className="btn btn-dark">Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
