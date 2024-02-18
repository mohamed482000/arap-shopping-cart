import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PhoneSliderSection = () => {
  const navigate = useNavigate();
  const [sliderMover, setSliderMover] = useState(1);
  const { phones } = useSelector((state) => state.LabtobSlice);

  const goToProductPage = (id) => {
    navigate(`product/${id}`);
  };

  const moveSlider = (mood) => {
    if (mood === "right") {
      if (sliderMover < 1) {
        setSliderMover(sliderMover + 1);
      } else {
        setSliderMover(-(phones.length - 4));
      }
    } else {
      if (sliderMover > -(phones.length - 4)) {
        setSliderMover(sliderMover - 1);
      } else {
        setSliderMover(0);
      }
    }
  };

  return (
    <div className="slider-section">
      <div className="slider-container">
        <h3 className="slider-header">الجدید من الجوالات</h3>
        <div className="slider">
          <div style={{ transform: `translate(${sliderMover * "-250"}px)` }}>
            {phones.map((pho) => (
              <div
                className="every-product-in-slider"
                onClick={(id) => goToProductPage(pho.id)}
                key={pho.id}
              >
                <div className="product-image">
                  <img src={pho.image} alt="phone image" />
                </div>
                <h4 className="product-title">{pho.title}</h4>
                <h4>
                  <span>
                    {pho.rating} <span>{pho.reviews}</span>
                  </span>
                  تقییمات
                </h4>
                <h4>{pho.price}$</h4>
              </div>
            ))}
          </div>
          <div className="left-arrow" onClick={() => moveSlider("left")}></div>
          <div
            className="right-arrow"
            onClick={() => moveSlider("right")}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default PhoneSliderSection;
