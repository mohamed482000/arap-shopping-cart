import React from "react";

const PaginationCompo = ({
  allData,
  paginationNumper,
  setPaginationNumper,
  paginationFunction,
}) => {
  return (
    <div className="pagination">
      <button
        className="page previous"
        onClick={() => {
          paginationFunction(
            paginationNumper > 1 ? +paginationNumper - 1 : paginationNumper
          );
          setPaginationNumper(
            paginationNumper > 1 ? +paginationNumper - 1 : paginationNumper
          );
        }}
      >
        <i className="bi bi-arrow-right"></i>
        السابق
      </button>

      {allData.map((prod, i) => {
        if (i < 8) {
          return (
            <div
              className={i + 1 == paginationNumper ? "active page" : "page"}
              key={prod.id}
              onClick={() => {
                paginationFunction(i + 1);
                setPaginationNumper(i + 1);
              }}
            >
              {i + 1}
            </div>
          );
        }
      })}

      <button
        className="page next"
        onClick={() => {
          paginationFunction(
            paginationNumper < 8 ? +paginationNumper + 1 : paginationNumper
          );
          setPaginationNumper(
            paginationNumper < 8 ? +paginationNumper + 1 : paginationNumper
          );
        }}
      >
        التالی
        <i className="bi bi-arrow-left"></i>
      </button>
    </div>
  );
};

export default PaginationCompo;
