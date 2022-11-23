import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Buttons from "./Buttons";
import SearchBar from "./SearchBar";
import ButtonListResult from "./ButtonListResult";
import Titleblock from "../titleblock/Titleblock";
import "./ButtonList.css";

const ButtonList = ({ userInput, handleChange, search, setSearch }) => {
  return (
    <div className="button-list__container">
      <Titleblock />
      <img
        className="home__bg-pink"
        src="/src/assets/images/pink_cocktailtrans.png"
        alt=""
      />
      <img
        className="home__bg-mint"
        src="/src/assets/images/Fresh-mint-leaves--on-transparent-background-PNG 16.48.26.png"
        alt=""
      />
      <NavLink className="margin" to="/FormIngredients">
        <Buttons
          type=""
          className="list__btn  btn-up btn"
          value="Add your ingredients"
        />
      </NavLink>
      <NavLink className="margin" to="/AllCocktails">
        <Buttons
          type=""
          className="list__btn btn-midle btn"
          value="Find new cocktail ideas"
          search={search}
          userInput={userInput}
          setSearch={setSearch}
          handleChange={handleChange}
        />
      </NavLink>
      <form className="button_list_form button-list__form btn-down margin ">
        <SearchBar
          className="list__searchbar"
          value={userInput}
          handleChange={handleChange}
        />
        <ButtonListResult
          classeNameLi="button-list__result__li"
          classResultList="button-list__result__li"
          classname="button-list__result-container"
          search={search}
          userInput={userInput}
          setSearch={setSearch}
        />
      </form>
    </div>
  );
};
ButtonList.propTypes = {
  handleChange: PropTypes.func.isRequired,
  userInput: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default ButtonList;
