import React, { useState } from "react";
import "./style.css";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { FiFilter } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import Menu from "../Menu";
import Filter from "../Filter";
import { useStoreContent } from "../../../hooks/useProducts";

function DefaultLayout({ title, children }) {
  const [open, setOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);

  const { productsSelected } = useStoreContent();

  return (
    <div className="wrapperDefaultLayout">
      <Menu open={open} setOpen={setOpen} />

      <div className="wrapperVitrineLayout">
        <header>
          <div className="wrapperLogoIcone">
            <div className="logoIcone">
              <button onClick={() => setOpen(true)}>
                <AiOutlineAlignLeft size={25} />
              </button>
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
          <div className="wrapperIcons">
            <div className="buttonFilter">
              <Filter open={filterOpen} setOpen={setFilterOpen} />
              <FiFilter
                style={{ marginBottom: 12 }}
                size={25}
                onClick={() => setFilterOpen(!filterOpen)}
              />
            </div>
            <Link to="/carrinho">
              <div className="wrapperIconCart">
                {Object.keys(productsSelected)?.length > 0 && (
                  <div className="budgetNumber">
                    {Object.keys(productsSelected)?.length}
                  </div>
                )}
                <FiShoppingCart size={25} />
              </div>
            </Link>
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
