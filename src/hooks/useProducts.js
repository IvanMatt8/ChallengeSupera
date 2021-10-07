import React, { createContext, useState, useContext, useCallback } from "react";

export const storeContent = createContext(null);

export const StoreContent = ({ children }) => {
  const [productsSelected, setProductsSelected] = useState([]);

  const handleClickBadge = useCallback(({ id, image, name, score, price }) => {
    setProductsSelected((oldProducts) => {
      const hasProductIndex = oldProducts?.findIndex((old) => old.id === id);

      if (hasProductIndex !== -1 && oldProducts.length) {
        oldProducts[hasProductIndex].quantidade += 1;
        return oldProducts;
      }

      return [...oldProducts, { id, image, name, score, price, quantidade: 1 }];
    });
  }, []);

  const handleRemoveClickBadge = useCallback((id) => {
    if (!id) return;
    setProductsSelected((oldProducts) => [
      ...oldProducts.filter((product) => product.id !== id),
    ]);
  }, []);

  const sumTotalProducts = useCallback(() => {
    function calculateTotal(total, currentItem) {
      total.sum += currentItem.price * currentItem.quantidade;

      if (total.sum < 250) {
        total.frete = productsSelected.length * 10;
      } else {
        total.frete = 0;
      }

      return total;
    }
    const { sum, frete } = productsSelected.reduce(calculateTotal, {
      sum: 0,
      frete: 0,
    });

    return {
      sum: formatCurrency(sum),
      frete: formatCurrency(frete),
      total: formatCurrency(sum + frete),
    };
  }, [productsSelected]);

  const handleIncrementAndDecrementQuantidadeByID = useCallback(
    (id, order = "asc") => {
      setProductsSelected((oldProducts) => {
        if (order === "desc")
          return oldProducts.map((old) =>
            old.id === id
              ? {
                  ...old,
                  quantidade: old.quantidade === 1 ? 1 : old.quantidade - 1,
                }
              : { ...old }
          );
        return oldProducts.map((old) =>
          old.id === id
            ? { ...old, quantidade: old.quantidade + 1 }
            : { ...old }
        );
      });
    },
    []
  );

  return (
    <storeContent.Provider
      value={{
        productsSelected,
        setProductsSelected,
        handleClickBadge,
        handleRemoveClickBadge,
        sumTotalProducts,
        handleIncrementAndDecrementQuantidadeByID,
      }}
    >
      {children}
    </storeContent.Provider>
  );
};

export function useStoreContent() {
  const context = useContext(storeContent);
  return context;
}

function formatCurrency(valor) {
  return new Intl.NumberFormat("pt-br", {
    currency: "BRL",
    style: "currency",
  }).format(valor);
}
