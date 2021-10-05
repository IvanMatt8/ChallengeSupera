import React from "react";
import "./style.css";
import DefaultLayout from "../../components/layout/DefaultLayout";
import Button from "../../components/shared/Button";
import CardCarrinho from "../../components/layout/CardCarrinho";

function Carrinho() {
  return (
    <DefaultLayout title="Carrinho">
      <div className="wrappercardCarrinho">
        <CardCarrinho />
        <CardCarrinho />
        <CardCarrinho />
        <CardCarrinho />
        <CardCarrinho />
        <CardCarrinho />
      </div>
      <div className="summer">
        <h3>Resumo do Pedido</h3>
        <div className="productFreight">
          <p>6 produtos</p>
          <p>R$ 1.700</p>
        </div>
        <div className="productFreight">
          <p>Frete</p>
          <p>Gratis</p>
        </div>
        <div className="lineProduct" />
        <div className="productFreight">
          <h3>Total</h3>
          <h3>R$ 1.700</h3>
        </div>

        <Button
          onClick={() => console.log("eAI")}
          width={"50%"}
          style={{ alignSelf: "center" }}
        >
          Confirmar
        </Button>
      </div>
    </DefaultLayout>
  );
}

export default Carrinho;
