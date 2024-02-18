import React, { useEffect, useState } from "react";
import "./allElectronicsPage.css";
import FilterByPrice from "../../Components/FiltersComponent/FilterByPrice";
import FilterByCategury from "../../Components/FiltersComponent/FilterByCategury";
import AllProductsInElectronicsPage from "../../Components/AllProductsInElectronicsPage/AllProductsInElectronicsPage";
import { getLabtopData } from "../../Redux/LabtopSlice";
import { useDispatch, useSelector } from "react-redux";
import PaginationCompo from "../../Components/PAginationCompo/PaginationCompo";

const AllElectronicsPage = () => {
  const dispatch = useDispatch();
  const [electronicsData, setElectronicsData] = useState([]);
  const { allData } = useSelector((state) => state.LabtobSlice);
  const [filteredData, setFilteredData] = useState([]);
  const [paginationNumper, setPaginationNumper] = useState(0);

  useEffect(() => {
    dispatch(getLabtopData());
  }, []);

  //   pagination function
  const paginationFunction = (num) => {
    setElectronicsData(
      (filteredData.length != 0 ? filteredData : allData).filter(
        (prod, i) => i <= num * 3 - 1 && i >= (num - 1) * 3
      )
    );
  };
  //   filter by price function
  const handleDataOnFilterPrice = (filterType) => {
    const newA = [...allData];

    if (filterType === "fromSmall") {
      setFilteredData(newA.sort((a, b) => a.price - b.price));
    } else if (filterType === "fromBig") {
      setFilteredData(newA.sort((a, b) => b.price - a.price));
    } else {
      setFilteredData(newA);
    }
    setPaginationNumper(1);
  };
  useEffect(() => {
    setElectronicsData(filteredData.filter((prod, i) => i >= 0 && i < 3));
  }, [filteredData]);

  return (
    <div className="all-electronics-page">
      <div className="filters-Container">
        <FilterByPrice handleDataOnFilterPrice={handleDataOnFilterPrice} />
        <FilterByCategury handleDataOnFilterPrice={handleDataOnFilterPrice} />
      </div>
      <div className="electronics-container">
        <AllProductsInElectronicsPage
          allData={allData}
          electronicsData={electronicsData}
        />
        <PaginationCompo
          allData={allData}
          paginationFunction={paginationFunction}
          paginationNumper={paginationNumper}
          setPaginationNumper={setPaginationNumper}
        />
      </div>
    </div>
  );
};

export default AllElectronicsPage;
