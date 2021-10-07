import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Filter = ({ open, setOpen }) => {
  return (
    <div className={`wrapperFilter ${open ? "activeFilter" : ""}`}>
      <div className="wrapperFilterButtons">
        <h1>Ordem</h1>
        <Link as="button" to="?order=alfabetica">
          Alfabetica de A-Z
        </Link>
        <Link as="button" to="?order=populares">
          Mais Populares
        </Link>
        <Link as="button" to="?order=barato">
          Mais barato Para Mais Caro
        </Link>
        <Link as="button" to="?order=caro">
          Mais caro Para Mais Barato
        </Link>
      </div>
    </div>
  );
};

export default Filter;
