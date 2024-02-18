import React from "react";
import { brands } from "../../data/brands";

const BrandsSection = () => {
  return (
    <div className="brands-secion">
      <h3 className="brands-secion-header">تسوق حسب المارک</h3>
      <div className="brands-Wrapper">
        {brands.map((p) => (
          <div className="brands-image" key={p.id}>
            <img src={p.image} alt="prand image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsSection;
