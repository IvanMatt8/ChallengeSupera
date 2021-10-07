import React, { useState } from "react";
import "./style.css";
import DefaultLayout from "../../components/layout/DefaultLayout";
import Button from "../../components/shared/Button";
import Card from "../../components/shared/Card";
import { useStoreContent } from "../../hooks/useProducts";
import Modal from "react-modal";
import { Link } from "react-router-dom";

function Carrinho() {
  const { productsSelected, sumTotalProducts, setProductsSelected } =
    useStoreContent();
  const [isOpen, setIsOpen] = useState(false);
  const { sum, frete, total } = sumTotalProducts();

  function toggleModal() {
    setIsOpen(!isOpen);
  }

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
          onClick={toggleModal}
          width={"50%"}
          style={{ alignSelf: "center" }}
        >
          Confirmar
        </Button>

        <Modal
          isOpen={isOpen}
          onRequestClose={toggleModal}
          contentLabel="My dialog"
          className="mymodal"
          overlayClassName="myoverlay"
          closeTimeoutMS={500}
        >
          <h1>Compra Efetuada Com Sucesso!</h1>
          <p>
            Obrigado Volte Sempre! Entre Em contato com{" "}
            <span>
              <a href="https://www.supera.com.br/">
                Supera Inovacao em Tecnologia
              </a>
            </span>{" "}
            para Mais informacao da sua Compra.
          </p>
          <button
            className="backVitrine"
            onClick={() => {
              toggleModal();
              setProductsSelected([]);
            }}
          >
            <Link to="/">
              <h3>Volte a Vitrine</h3>
            </Link>
          </button>
        </Modal>
      </div>
    </DefaultLayout>
  );
}

export default Carrinho;
