import React from "react";
import "./style.css";
// import { Container } from './styles';

function Button({ children, onClick, width, style }) {
  return (
    <button
      onClick={onClick}
      className="buttonComponet"
      style={{ width: width, ...style }}
    >
      {children}
    </button>
  );
}

export default Button;
