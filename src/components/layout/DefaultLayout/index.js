import React from "react";
import "./style.css";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { FiFilter } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

function DefaultLayout({ title, children }) {
  return (
    <div className="wrapperDefaultLayout">
      <div className="wrapperVitrineLayout">
        <header>
          <div className="wrapperLogoIcone">
            <div className="logoIcone">
              <AiOutlineAlignLeft size={25} />
            </div>
            <h1>Supera </h1>
          </div>

          <ul>
            <Link to="/">
              <li>Vitrine</li>
            </Link>
            <Link to="/carrinho">
              <li>Carrinho</li>
            </Link>
          </ul>
          <div className="wrapperLogoCarrinho">
            <div className="IconesFilterCarrinho">
              <FiFilter className="Filtro" size={25} />
              <FiShoppingCart size={25} />
            </div>
          </div>
        </header>
        <div className="wrapperContent">
          <h2>{title}</h2>
          {children}
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
