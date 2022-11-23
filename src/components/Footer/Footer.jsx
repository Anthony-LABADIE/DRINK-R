import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p className="copyright"> COPYRIGHT © 2022 - ALL RIGHTS RESERVED</p>
      <button className="legal-notice" type="button">
        {" "}
        <NavLink to="/LegalNotice"> LEGAL NOTICE</NavLink>
      </button>
    </div>
  );
};

export default Footer;
