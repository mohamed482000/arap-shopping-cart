import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ContextStore } from "../../ContextAPi/ContextStore";

const SecondHeaderComp = () => {
  const { productsAddedToCart } = useContext(ContextStore);
  return (
    <div className="second-header-wrapper">
      <div className="second-header-first-section search-input-wrapper">
        <input type="text" placeholder="ماذا تريد ؟" />
        <button> ابحث</button>
      </div>
      <NavLink to="/productInCart">
        <div className="second-header-second-section">
          سله التسوق
          <div className="amount-of-products">{productsAddedToCart.length}</div>
        </div>
      </NavLink>
    </div>
  );
};

export default SecondHeaderComp;
