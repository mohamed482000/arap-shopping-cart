import React from "react";
import { useNavigate } from "react-router-dom";

const AllProductsInElectronicsPage = ({ allData, electronicsData }) => {
  const navigate = useNavigate();
  const goToProductPage = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <div className="all-products">
      {(electronicsData.length > 1
        ? electronicsData.length > 3
          ? electronicsData.filter((prod, i) => i < 3)
          : electronicsData
        : allData.filter((prod, i) => i < 3)
      ).map((prod) => (
        <div
          className="every-product"
          onClick={() => goToProductPage(prod.id)}
          key={prod.id}
        >
          <div className="product-image">
            <img src={prod.image} alt="phone image" />
          </div>
          <h4 className="product-title">{prod.title}</h4>
          <h4>
            <span>
              {prod.rating} <span>{prod.reviews}</span>
            </span>
            تقییمات
          </h4>
          <h4>{prod.price}$</h4>
        </div>
      ))}
    </div>
  );
};

export default AllProductsInElectronicsPage;
