import React from "react";

const ProductsInCartComponent = ({ productsAddedToCart }) => {
  return (
    <div>
      {productsAddedToCart.map((product) => (
        <div key={product.id} className="product-in-cart-wrapper">
          <div className="product-image">
            <img
              src={
                product.image !== undefined ? product.image : product.firstImage
              }
              alt="produc image"
            />
          </div>
          <div className="product-info">
            <h3>{product.title}</h3>
            <h4>الكميه : {product.mount}</h4>
            <h4>
              السعر : <span>{product.price}:00$</span>
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsInCartComponent;
