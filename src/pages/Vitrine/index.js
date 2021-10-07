import React, { useState, useEffect } from "react";
import DefaultLayout from "../../components/layout/DefaultLayout";
import Card from "../../components/shared/Card";
import products from "../../data/mocks/products.json";
import { useLocation } from "react-router-dom";
import "./style.css";

function sortByKey(key, asc = false) {
  return (a, b) => {
    if (asc) return a[key] - b[key];
    return b[key] - a[key];
  };
}

const orderes = {
  alfabetica: (a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0),
  populares: sortByKey("score"),
  caro: sortByKey("price"),
  barato: sortByKey("price", true),
};

function Vitrine() {
  const [productVitrine, setProductVitrine] = useState(products);
  const location = useLocation();

  useEffect(() => {
    const urlSearch = new URLSearchParams(location.search);
    if (!urlSearch.has("order")) return;

    const path = urlSearch.get("order");

    setProductVitrine([...products.sort(orderes[path])]);
  }, [location.search]);

  return (
    <DefaultLayout title="Vitrine">
      <div className="wrapperCard">
        {productVitrine.map((product, key) => (
          <Card key={key} {...product} />
        ))}
      </div>
    </DefaultLayout>
  );
}

export default Vitrine;
