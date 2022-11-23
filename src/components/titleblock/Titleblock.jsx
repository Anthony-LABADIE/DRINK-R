import PropTypes from "prop-types";

import React from "react";
import Title from "./title/Title";
import Subtitle from "./subtitle/Subtitle";
import "./titleblock.css";

const Titleblock = ({ show }) => {
  return (
    <div className="titleblock__container">
      <Title show={show} />
      <Subtitle />
    </div>
  );
};
Titleblock.propTypes = {
  show: PropTypes.bool.isRequired,
};
export default Titleblock;
