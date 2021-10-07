import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { StoreContent } from "./hooks/useProducts.js";

function App() {
  return (
    <BrowserRouter>
      <StoreContent>
        <Routes />
      </StoreContent>
    </BrowserRouter>
  );
}

export default App;
