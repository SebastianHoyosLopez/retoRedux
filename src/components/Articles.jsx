import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { getItemsAction } from "../redux/itemsDucks";

const Articles = () => {
  const dispatch = useDispatch();

  const articles = useSelector((store) => store.itemsArticles.array);
  console.log(articles);

  return (
    <div className="container py-5">
      Lista de articulos
      <button
        className="btn btn-warning mx-4"
        onClick={() => dispatch(getItemsAction())}
      >
        Obtener articulos
      </button>
      <ul className="mt-5">
        {articles.map((item) => (
          <li key={item.id} className="row">
            <div className="card col-6">
              <div className="card-title">{item.title}</div>
              <div className="card-body">articulos</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
