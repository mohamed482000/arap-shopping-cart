import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { specialOffers } from "../../data/special-offers";
import { nanoid } from "@reduxjs/toolkit";
import { ContextStore } from "../../ContextAPi/ContextStore";

const CartComponent = () => {
  const { id } = useParams();
  const [amountOfProduct, setAmountOfProduct] = useState(1);
  const { AddProductToCart } = useContext(ContextStore);
  const [product, setProduct] = useState({});
  const [mainImageSrc, setMainImageSrc] = useState("");

  useEffect(() => {
    window.scroll(0, 0);
    if (id >= 100) {
      setProduct(specialOffers.find((prod) => prod.id === +id));
      setMainImageSrc(product.images !== undefined ? product.images[0] : "");
    }
  }, [product]);

  const addProductTOCartFun = (id) => {
    AddProductToCart(id, amountOfProduct);
  };
  return (
    <div className="cart-section">
      <div className="cart-wrapper">
        <div className="product-images">
          <div className="big-image">
            <img
              src={
                product.images !== undefined
                  ? mainImageSrc
                  : product.image !== undefined
                  ? mainImageSrc
                  : ""
              }
              alt="product image"
            />
          </div>
          <div className="small-image-container">
            {product.images !== undefined
              ? product.images.map((i) => (
                  <div
                    key={nanoid()}
                    onClick={() => setMainImageSrc(i)}
                    className="small-images"
                  >
                    <img src={i} alt="product images" />
                  </div>
                ))
              : ""}
          </div>
        </div>
        <div className="product-info">
          <h2 className="cart-title">{product.title}</h2>
          <h4>
            <span>
              <span>{product.reviews}</span>
              {product.rating}
            </span>
            تقییمات
          </h4>
          <h4>
            <span>
              %{product.price - product.price * (product.discount / 100)}{" "}
            </span>
            <span className="deleted-price">%{product.price}</span>
          </h4>
          <h4>الكميه</h4>
          <div className="product-button-inputs">
            <input
              type="number"
              onChange={(e) => setAmountOfProduct(e.target.value)}
            />
            <button onClick={() => addProductTOCartFun(product.id)}>
              اضافه الي سلة التسوق
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
