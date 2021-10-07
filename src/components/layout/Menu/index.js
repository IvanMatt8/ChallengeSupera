import React from "react";
import "./style.css";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

const Menu = ({ open, setOpen }) => {
  return (
    <div className={`wrapperMenu ${open ? "activeMenu" : ""}`}>
      <button onClick={() => setOpen(false)}>
        <GrClose className="closeIcon" color="#fff" size={25} />
      </button>
      <div>
        <Link to="/">
          <h1>Vitrine</h1>
        </Link>
        <Link to="/carrinho">
          <h1>Carrinho</h1>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
