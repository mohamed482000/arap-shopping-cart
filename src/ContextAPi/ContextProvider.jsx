import React, { useState } from "react";
import { ContextStore } from "./ContextStore";
import { useSelector } from "react-redux";
import { specialOffers } from "../data/special-offers";

const ContextProvider = ({ children }) => {
  const { allData } = useSelector((state) => state.LabtobSlice);
  const [productsAddedToCart, setProductsAddedToCart] = useState([]);
  const AddProductToCart = (id, amount) => {
    if (id < 100) {
      const productAdded = allData.find((product) => product.id === id);
      setProductsAddedToCart([
        ...productsAddedToCart,
        { ...productAdded, mount: amount },
      ]);
    } else {
      const productAdded = specialOffers.find((product) => product.id === id);
      setProductsAddedToCart([
        ...productsAddedToCart,
        { ...productAdded, mount: amount },
      ]);
    }
  };

  return (
    <ContextStore.Provider value={{ productsAddedToCart, AddProductToCart }}>
      {children}
    </ContextStore.Provider>
  );
};

export default ContextProvider;
