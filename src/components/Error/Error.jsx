import React from "react";
import { NavLink } from "react-router-dom";
import BrokenGlass from "../../assets/images/broken-glass.png";
import "./Error.css";

const Error = () => {
  return (
    <div className="error">
      <div className="container__error">
        <img className="img__error" src={BrokenGlass} alt="Error" />
        <h1>404</h1>
        <h2>Page not found</h2>
        <NavLink to="/ButtonList">
          <p className="error__title__site">DRINK'R</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Error;
