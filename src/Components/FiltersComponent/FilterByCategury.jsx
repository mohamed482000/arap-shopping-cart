import React, { useState } from "react";

const FilterByCategury = () => {
  const [filterCateguryLabtop, setFilterCateguryLabtop] = useState(false);
  const [filterCateguryPhone, setFilterCateguryPhone] = useState(false);

  const functionCateguryFilter = (value) => {
    setFilterCateguryLabtop(false);
    setFilterCateguryPhone(false);
    if (value === "labtop") {
      setFilterCateguryLabtop(true);
    } else {
      setFilterCateguryPhone(true);
    }
  };
  return (
    <div className="filter-by-catugury">
      <h3>فلتر حسب السلعه</h3>

      <div className="input-container">
        <input
          type="radio"
          name="second-filter"
          id="labtop"
          checked={filterCateguryLabtop}
          onChange={() => functionCateguryFilter("labtop")}
        />
        <label htmlFor="labtop">لابتوب</label>
      </div>
      <div className="input-container">
        <input
          type="radio"
          name="second-filter"
          id="phone"
          checked={filterCateguryPhone}
          onChange={() => functionCateguryFilter("phone")}
        />
        <label htmlFor="phone">جوال</label>
      </div>
    </div>
  );
};

export default FilterByCategury;
