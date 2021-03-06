import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCurrentPage } from "../../actions/newsActions";

const Pagination = ({
  perPage,
  totalNews,
  curPage,
  getCurrentPage,
  handleClick
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalNews.length / perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      <li className={curPage === 1 ? "disabled" : "waves-effect"}>
        <a
          href="#!"
          onClick={() => {
            handleClick();
            if (curPage === 1) {
              return getCurrentPage(curPage);
            } else {
              return getCurrentPage(curPage - 1);
            }
          }}
        >
          <i className="material-icons">chevron_left</i>
        </a>
      </li>
      {pageNumbers.map(number => (
        <li key={number} className={"waves-effect"}>
          <a
            href="#!"
            onClick={() => {
              handleClick();
              getCurrentPage(number);
            }}
          >
            {number}
          </a>
        </li>
      ))}
      <li
        className={curPage === pageNumbers.length ? "disabled" : "waves-effect"}
      >
        <a
          href="#!"
          onClick={() => {
            handleClick();
            if (curPage === pageNumbers.length) {
              return getCurrentPage(curPage);
            } else {
              return getCurrentPage(curPage + 1);
            }
          }}
        >
          <i className="material-icons">chevron_right</i>
        </a>
      </li>
    </ul>
  );
};

Pagination.propTypes = {
  perPage: PropTypes.number.isRequired,
  totalNews: PropTypes.array.isRequired
};

export default connect(
  null,
  { getCurrentPage }
)(Pagination);
