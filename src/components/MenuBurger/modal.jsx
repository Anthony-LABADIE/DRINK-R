import React from "react";
import "./MenuBurger.css";
import { NavLink } from "react-router-dom";
import Buttons from "../Buttonlist/Buttons";

const Modal = () => {
  return (
    <div className="modalContainer">
      <NavLink className="margin" to="/FormIngredients">
        <Buttons
          type=""
          className="menu_burger__btn btn"
          value="Add your ingredients"
        />
      </NavLink>
      <NavLink className="margin" to="/AllCocktails">
        <Buttons
          type=""
          className="menu_burger__btn btn"
          value="Search all cocktails"
        />
      </NavLink>
    </div>
  );
};
export default Modal;
