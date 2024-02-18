import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const OffersTodayComp = ({
  id,
  header,
  firstImage,
  secondImage,
  offerRate,
  deletedPrice,
  numberOfReviews,
  reviewsRate,
}) => {
  const [toggle100, setToggle100] = useState(true);
  const [toggle101, setToggle101] = useState(true);
  const [toggle102, setToggle102] = useState(true);
  const [toggle103, setToggle103] = useState(true);

  const setToggles = () => {
    if (id === 100) {
      setToggle100(!toggle100);
    } else if (id === 101) {
      setToggle101(!toggle101);
    } else if (id === 102) {
      setToggle102(!toggle102);
    } else {
      setToggle103(!toggle103);
    }
  };

  return (
    <div className="offer-today-content">
      <div
        className="offer-today-img"
        onMouseEnter={() => setToggles()}
        onMouseLeave={setToggles}
      >
        <img
          src={`${
            id === 100
              ? toggle100
                ? firstImage
                : secondImage
              : id === 101
              ? toggle101
                ? firstImage
                : secondImage
              : id === 102
              ? toggle102
                ? firstImage
                : secondImage
              : toggle103
              ? firstImage
              : secondImage
          }`}
          alt="product image"
        />
      </div>
      <div className="offer-today-info">
        <h3>{header}</h3>
        <h4>
          <span>
            {reviewsRate} <span>{numberOfReviews}</span>
          </span>
          تقییمات
        </h4>
        <h4>
          <span>%{deletedPrice - deletedPrice * (offerRate / 100)} </span>
          <span className="deleted-price">%{deletedPrice}</span>
        </h4>
        <NavLink to={`/cart/${id}`}>
          <button>شاهد المزيد...</button>
        </NavLink>
      </div>
      <div className="offer-rate"> خصم{offerRate}%</div>
    </div>
  );
};

export default OffersTodayComp;
