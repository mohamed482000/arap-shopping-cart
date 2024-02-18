import React from "react";
import { categories } from "../../data/category";

const CatagerySection = () => {
  return (
    <div className="catagery-section-wrapper">
      {categories.map((p) => (
        <div key={p.id}>
          <img src={p.image} alt="chair-image" />
          <h4>{p.title}</h4>
        </div>
      ))}
    </div>
  );
};

export default CatagerySection;
