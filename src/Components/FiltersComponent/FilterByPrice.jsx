import React, { useState } from "react";

const FilterByPrice = ({ handleDataOnFilterPrice }) => {
  const [filterPriceDefault, setFilterPriceDefault] = useState(true);
  const [filterPriceFromSmall, setFilterPriceFromSmall] = useState(false);
  const [filterPriceFromBig, setFilterPriceFromBig] = useState(false);

  const functionPriceFilter = (value) => {
    setFilterPriceDefault(false);
    setFilterPriceFromSmall(false);
    setFilterPriceFromBig(false);
    if (value === "default") {
      setFilterPriceDefault(true);
    } else if (value === "fromSmall") {
      setFilterPriceFromSmall(true);
    } else {
      setFilterPriceFromBig(true);
    }
  };
  return (
    <div className="filter-by-price">
      <h3>ترتیب حسب السعر</h3>
      <div className="input-container">
        <input
          type="radio"
          value="setFilterPriceDefault"
          name="first-filter"
          id="default"
          checked={filterPriceDefault}
          onChange={() => {
            functionPriceFilter("default");
            handleDataOnFilterPrice("default");
          }}
        />
        <label htmlFor="default">بدون ترتیب</label>
      </div>
      <div
        className="input-container"
        onChange={() => functionPriceFilter("fromSmall")}
      >
        <input
          type="radio"
          name="first-filter"
          value="setFilterPriceFromSmall"
          id="small-first"
          checked={filterPriceFromSmall}
          onChange={() => {
            functionPriceFilter("fromSmall");
            handleDataOnFilterPrice("fromSmall");
          }}
        />
        <label htmlFor="small-first">من الأقل الی الأعلی</label>
      </div>
      <div className="input-container">
        <input
          type="radio"
          name="first-filter"
          value="setFilterPriceFromBig"
          id="big-first"
          checked={filterPriceFromBig}
          onChange={() => {
            functionPriceFilter("fromBig");
            handleDataOnFilterPrice("fromBig");
          }}
        />
        <label htmlFor="big-first">من الأعلی الی الأقل</label>
      </div>
    </div>
  );
};

export default FilterByPrice;
