import React from "react";
import FristAppHeader from "./FristAppHeader";
import "./headercomp.css";
import SecondHeaderComp from "./SecondHeaderComp";
import ThirdHeaderComp from "./ThirdHeaderComp";

const HeaderComp = () => {
  return (
    <div className="header-copmonent">
      <FristAppHeader />
      <SecondHeaderComp />
      <ThirdHeaderComp />
    </div>
  );
};

export default HeaderComp;
