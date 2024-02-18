import React from "react";
import { NavLink } from "react-router-dom";

const ThirdHeaderComp = () => {
  return (
    <div className="third-header-wrapper">
      <ul className="third-header-first-section nav-links">
        <li>
          <NavLink to="/">الصفحه الرئیسیه</NavLink>
        </li>
        <li>
          <NavLink to="/allelectronicsPage">الإلكترونيات و الموبايلات</NavLink>
        </li>
        <li>
          <a href="#">المنزل و المطبخ</a>
        </li>
        <li>
          <a href="#">رجاليه</a>
        </li>
        <li>
          <a href="#">نسائیه</a>
        </li>
      </ul>
      <div className="third-header-second-section">تسجيل الدخول</div>
    </div>
  );
};

export default ThirdHeaderComp;
