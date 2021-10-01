import React from "react";
import { Switch, Route } from "react-router-dom";
import Vitrine from "../pages/Vitrine";
import Carrinho from "../pages/Carrinho";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Vitrine} />
      <Route path="/carrinho" exact component={Carrinho} />
    </Switch>
  );
}

export default Routes;
