import React from "react";
import { NavLink } from "react-router-dom";
import Firstbutton from "./Firstbutton/Firstbutton";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/ButtonList">
          <Firstbutton />
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
