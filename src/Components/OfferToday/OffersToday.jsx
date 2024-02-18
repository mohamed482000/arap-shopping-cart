import React, { useRef, useState } from "react";
import OffersTodayComp from "./OffersTodayComp";
import { specialOffers } from "../../data/special-offers";

const OffersToday = () => {
  return (
    <div className="offer-today-section">
      <h3 className="offer-today-header">
        عروض کبیره للیوم <span>ل 24 ساعه بس</span>
      </h3>
      <div className="offer-today-wrapper">
        {specialOffers.map((p) => (
          <OffersTodayComp
            key={p.id}
            id={p.id}
            header={p.title}
            firstImage={p.firstImage}
            secondImage={p.secondImage}
            offerRate={p.discount}
            deletedPrice={p.price}
            numberOfReviews={p.rating}
            reviewsRate={p.reviews}
          />
        ))}
      </div>
    </div>
  );
};

export default OffersToday;
