import PropTypes from "prop-types";

import React from "react";
import { NavLink } from "react-router-dom";
import "./title.css";

const Title = ({ show }) => {
  return !show ? (
    <NavLink to="/ButtonList">
      <h1 className="main__title-logo">DRINK'R</h1>
    </NavLink>
  ) : (
    <h1 className="main__title-logo">DRINK'R</h1>
  );
};
Title.propTypes = {
  show: PropTypes.bool.isRequired,
};
export default Title;
