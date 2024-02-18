import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LaptopSliderSection = () => {
  const navigate = useNavigate();
  const [sliderMover, setSliderMover] = useState(1);
  const { labtops } = useSelector((state) => state.LabtobSlice);

  const goToProductPage = (id) => {
    navigate(`product/${id}`);
  };
  const moveSlider = (mood) => {
    if (mood === "right") {
      if (sliderMover < 1) {
        setSliderMover(sliderMover + 1);
      } else {
        setSliderMover(-(labtops.length - 4));
      }
    } else {
      if (sliderMover > -(labtops.length - 4)) {
        setSliderMover(sliderMover - 1);
      } else {
        setSliderMover(0);
      }
    }
  };

  return (
    <div className="slider-section">
      <div className="slider-container">
        <h3 className="slider-header">الجدید من اللابتوبات</h3>
        <div className="slider">
          <div style={{ transform: `translate(${sliderMover * "-250"}px)` }}>
            {labtops.map((lap) => (
              <div
                className="every-product-in-slider"
                onClick={(id) => goToProductPage(lap.id)}
                key={lap.id}
              >
                <div className="product-image">
                  <img src={lap.image} alt="laptop image" />
                </div>
                <h4 className="product-title">{lap.title}</h4>
                <h4>
                  <span>
                    {lap.rating} <span>{lap.reviews}</span>
                  </span>
                  تقییمات
                </h4>
                <h4>{lap.price}$</h4>
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

export default LaptopSliderSection;
