import React, { useContext } from "react";
import { ContextStore } from "../../ContextAPi/ContextStore";
import "./productInCart.css";
import ProductsInCartComponent from "../../Components/ProductInCartComponent/ProductsInCartComponent";
import PaymentComponent from "../../Components/ProductInCartComponent/PaymentComponent";

const ProductInCart = () => {
  const { productsAddedToCart } = useContext(ContextStore);

  return (
    <div className="product-in-cart-page">
      <div className="product-header">
        {productsAddedToCart.length > 0 ? (
          <h2>سله التسوق</h2>
        ) : (
          <h2>سله التسوق الخاصه بك فارغه</h2>
        )}
      </div>
      {productsAddedToCart.length > 0 ? (
        <div className="products-information">
          <ProductsInCartComponent productsAddedToCart={productsAddedToCart} />
          <PaymentComponent productsAddedToCart={productsAddedToCart} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProductInCart;
