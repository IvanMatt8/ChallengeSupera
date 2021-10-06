import React from "react";
import "./style.css";
import DefaultLayout from "../../components/layout/DefaultLayout";
import Button from "../../components/shared/Button";
import Card from "../../components/shared/Card";
import { useStoreContent } from "../../hooks/useProducts";
function Carrinho() {
  const { productsSelected, sumTotalProducts } = useStoreContent();
  const { sum, frete, total } = sumTotalProducts();

  return (
    <DefaultLayout title="Carrinho">
      <div className="wrappercardCarrinho">
        {productsSelected.map((product, key) => (
          <Card {...product} key={key} isCart />
        ))}
      </div>
      <div className="summer">
        <h3>Resumo do Pedido</h3>
        <div className="productFreight">
          <p>{Object.keys(productsSelected).length} produtos</p>
          <p>{sum}</p>
        </div>
        <div className="productFreight">
          <p>Frete</p>
          <p>{frete}</p>
        </div>
        <div className="lineProduct" />
        <div className="productFreight">
          <h3>Total</h3>
          <h3>{total}</h3>
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
