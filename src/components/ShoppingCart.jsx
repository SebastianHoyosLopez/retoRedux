import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

const ShoppingCart = () => {
  const productsCart = useSelector((store) => store.cart.array);
  const activo = useSelector((store) => store.cart.activoProduct);

  return (
    <div className="container">
      <h1 className="text-center mt-2 text-uppercase">
        Lista de productos en el carrito
      </h1>
      <div className="row">
        {activo ? (
          productsCart.map((products, index) => (
            <div
              key={index}
              className="col-md-3 col-lg-3 mx-2 my-5 text-center"
              style={{ height: "350px" }}
            >
              <div className="card">
                <img src={products.image} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">{products.name}</h5>
                  <p>Price: {products.price}</p>
                </div>
                <button className="btn btn-dark btn-sm">Eliminar</button>
              </div>
            </div>
          ))
        ) : (
          <h3 className="text-center mt-5">
            No tienes ningun producto en el carrito
          </h3>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
