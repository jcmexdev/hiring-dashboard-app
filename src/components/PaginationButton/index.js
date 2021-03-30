import React from "react";
import "./styles.css";

const PaginationButton = ({ currentPage, pageNumber, setPage }) => {
  let styles = "Pagination_button";
  if (currentPage == pageNumber) styles += " Pagination_button--active";

  return (
    <button className={styles} value={pageNumber} onClick={(e) => setPage(e)}>
      {pageNumber}
    </button>
  );
};

export default PaginationButton;
