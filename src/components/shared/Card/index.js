import React from "react";
import "./style.css";
import { FiTrash } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useStoreContent } from "../../../hooks/useProducts.js";

function Card({ isCart, image, name, score, price, id, quantidade }) {
  const {
    handleClickBadge,
    handleRemoveClickBadge,
    handleIncrementAndDecrementQuantidadeByID,
  } = useStoreContent();

  return (
    <div className="card">
      <div className="headerCard">
        {isCart ? (
          <div className="wrapperButtonCard">
            <button
              onClick={() =>
                handleIncrementAndDecrementQuantidadeByID(id, "desc")
              }
            >
              <h4>-</h4>
            </button>
            <h4>{quantidade}</h4>
            <button
              onClick={() =>
                handleIncrementAndDecrementQuantidadeByID(id, "asc")
              }
            >
              <h4>+</h4>
            </button>
          </div>
        ) : (
          <div className="wrapperButtonCard" style={{ border: 0 }} />
        )}
        <div className="borderIcon">
          {isCart ? (
            <button onClick={() => handleRemoveClickBadge(id)}>
              <FiTrash className="icon" />
            </button>
          ) : (
            <button
              onClick={() =>
                handleClickBadge({ id, image, name, score, price })
              }
            >
              <HiOutlineShoppingBag className="icon" />
            </button>
          )}
        </div>
      </div>

      <div className="wrapperContentCard">
        <img src={image} alt="imagem Jogos" />
        <h3>{name}</h3>
        <span>R$ {price}</span>
      </div>
    </div>
  );
}

export default Card;
