import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./productFromApiCart.css";
import { ContextStore } from "../../ContextAPi/ContextStore";

const ProductFromApiCart = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { AddProductToCart } = useContext(ContextStore);
  const [amountOfProduct, setAmountOfProduct] = useState(1);

  useEffect(() => {
    window.scroll(0, 0);
    axios({
      method: "GET",
      url: `https://data-6kmx.onrender.com/products/${id}`,
    }).then((data) => setProduct(data.data));
  }, []);

  const addProductTOCartFun = (id) => {
    AddProductToCart(id, amountOfProduct);
  };
  return (
    <div className="product-section">
      <div className="product-wrapper">
        <div className="product-images">
          <div className="big-image">
            <img src={product.image} alt="product image" />
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

export default ProductFromApiCart;
