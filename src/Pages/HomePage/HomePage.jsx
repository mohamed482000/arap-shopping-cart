import React, { useEffect } from "react";
import OffersSection from "../../Components/OffersSection/OffersSection";
import "./homePage.css";
import CatagerySection from "../../Components/CatagerySection/CatagerySection";
import OffersToday from "../../Components/OfferToday/OffersToday";
import LaptopSliderSection from "../../Components/SliderSection/LaptopSliderSection";
import { useDispatch } from "react-redux";
import { getLabtopData } from "../../Redux/LabtopSlice";
import PhoneSliderSection from "../../Components/SliderSection/phoneSliderSection";
import BrandsSection from "../../Components/BrandsSection/BrandsSection";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLabtopData());
  }, []);
  return (
    <div className="home-content">
      <OffersSection />
      <CatagerySection />
      <OffersToday />
      <LaptopSliderSection />
      <PhoneSliderSection />
      <BrandsSection />
    </div>
  );
};

export default HomePage;
