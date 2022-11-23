import React from "react";
import PropTypes from "prop-types";
import Title from "../titleblock/title/Title";
import AllCocktailsCardIngredients from "./AllCocktailsCardIngredients";
import "../AllCocktails/AllCocktails.css";
import MenuBurger from "../MenuBurger/MenuBurger";
import SearchBar from "../Buttonlist/SearchBar";
import ButtonListResult from "../Buttonlist/ButtonListResult";

const AllCocktailsIngredients = ({
  propsFetche,
  userInput,
  handleChange,
  search,
  setSearch,
}) => {
  return (
    <div className="allcocktails_section">
      <MenuBurger />
      <Title />
      <form className="allCocktails__form">
        <SearchBar
          className="allCocktails__searchbar"
          value={userInput}
          handleChange={handleChange}
        />
        <ButtonListResult
          classeNameLi="allCocktails__result__li"
          classResultList="allCocktails__result__li"
          classname="allCocktails__resultList"
          search={search}
          userInput={userInput}
          setSearch={setSearch}
        />
      </form>
      <div className="list__allcocktails">
        {propsFetche.map((e) => (
          <AllCocktailsCardIngredients propsFetche={e} />
        ))}
      </div>
      <img
        className="green_drinks"
        src="/src/assets/images/green_cocktail.png"
        alt="green_cocktail"
      />
    </div>
  );
};

AllCocktailsIngredients.propTypes = {
  propsFetche: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  userInput: PropTypes.string.isRequired,
  search: PropTypes.func.isRequired,
  setSearch: PropTypes.func.isRequired,
};
export default AllCocktailsIngredients;
