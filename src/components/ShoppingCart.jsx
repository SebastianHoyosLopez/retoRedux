import React from "react";

import { useSelector } from "react-redux";

const ShoppingCart = () => {
  const productsCart = useSelector((store) => store.cart.array);
  const activo = useSelector((store) => store.cart.activoProduct);

  return (
    <div className="container">
      <h1 className="text-center mt-2 text-uppercase">
        Lista de productos en el carrito
      </h1>
      {activo ? (
        <h3 className="text-uppercase text-primary mt-5">
          Cantidad de productos en el carrito: {productsCart.length}
        </h3>
      ) : null}
      <div className="row">
        {activo ? (
          productsCart.map((products) => (
            <div key={products.id} className="col-md-3 col-lg-3 my-3 text-center">
              <div className="card" style={{ height: "320px" }}>
                <img src={products.image} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">{products.name}</h5>
                  <p>Price: {products.price}</p>
                </div>
                <button className="btn btn-dark btn-sm mx-3 mb-4">
                  Eliminar
                </button>
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
