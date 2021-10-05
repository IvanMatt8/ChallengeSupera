import React from "react";
import "./style.css";
import MortalKombat from "../../../assets/mortal-kombat-xl.png";
import { FiPlusCircle } from "react-icons/fi";

function Card() {
  return (
    <div className="card">
      <FiPlusCircle className="carrinhoCard" size={25} />
      <img src={MortalKombat} alt="imagem Jogos" />
      <h3>Mortal Kombat</h3>
      <span>R$ 139,00</span>
    </div>
  );
}

export default Card;
