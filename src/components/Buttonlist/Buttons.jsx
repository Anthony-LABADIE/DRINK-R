import React from "react";
import PropTypes from "prop-types";

const Buttons = ({ value, className }) => {
  return (
    <button type="button" className={className}>
      {value}
    </button>
  );
};
Buttons.propTypes = {
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Buttons;
