import React from "react";
import PropTypes from "prop-types";

const ResultList = ({ el, id, setSearch, className }) => {
  const handleClick = () => {
    setSearch("");
  };

  function handleKeyDown(e) {
    if (e.keyCode === 13) {
      handleClick();
    }
  }
  return (
    <li
      className={className}
      onClick={handleClick}
      role="presentation"
      onKeyDown={handleKeyDown}
      key={id}
    >
      {el.strDrink}
    </li>
  );
};

ResultList.propTypes = {
  el: PropTypes.objectOf.isRequired,
  id: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};
export default ResultList;
