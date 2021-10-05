import React from "react";
import DefaultLayout from "../../components/layout/DefaultLayout";
import Card from "../../components/shared/Card";
import "./style.css";

function Vitrine() {
  return (
    <DefaultLayout title="Vitrine">
      <div className="wrapperCard">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </DefaultLayout>
  );
}

export default Vitrine;
