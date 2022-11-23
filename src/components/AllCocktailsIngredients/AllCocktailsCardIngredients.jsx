import { React, useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "../AllCocktails/AllCocktailsCard/AllCocktailsCard.css";

const AllCocktailsCardIngredients = ({ propsFetche }) => {
  const [cocktail, setCocktail] = useState({});
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${propsFetche.idDrink}`
      )
      .then((response) => setCocktail(response.data.drinks[0]));
  }, [cocktail]);

  const Filtreingredients = [
    cocktail.strIngredient1,
    cocktail.strIngredient2,
    cocktail.strIngredient3,
    cocktail.strIngredient4,
    cocktail.strIngredient5,
    cocktail.strIngredient6,
    cocktail.strIngredient7,
    cocktail.strIngredient8,
    cocktail.strIngredient9,
    cocktail.strIngredient10,
    cocktail.strIngredient11,
    cocktail.strIngredient12,
    cocktail.strIngredient13,
    cocktail.strIngredient14,
    cocktail.strIngredient15,
  ];
  function handleClickFavorite() {
    setIsFavorite(!isFavorite);
  }

  return (
    <div className="flip-card">
      <div className="container_card">
        <div className="allcocktails__card">
          <div className="allcocktails__frontcard">
            <img
              src={
                isFavorite
                  ? "/src/assets/images/favorite.png"
                  : "/src/assets/images/notFavorite.png"
              }
              className="heart__image"
              alt="heart"
            />
            <img
              src={propsFetche.strDrinkThumb}
              alt={propsFetche.strDrink}
              className="allcocktails__img"
            />
            <h1 className="allcocktails__title">{propsFetche.strDrink}</h1>
          </div>
          <div className="allcocktails__backcard">
            <img
              onClick={handleClickFavorite}
              onKeyDown={() => {
                setIsFavorite(false);
              }}
              role="presentation"
              src={
                isFavorite
                  ? "/src/assets/images/favorite.png"
                  : "/src/assets/images/notFavorite.png"
              }
              className="heart__image"
              alt="heart"
            />
            <div className="firstblock__title">
              <img
                className="drink_picto"
                src="/src/assets/images/picto_drink.jpg"
                alt="picto_drink"
              />
              <h5>Ingredients: </h5>
            </div>
            <ul className="allcocktails__ingredientsList">
              {Filtreingredients.filter((el) => typeof el === "string").map(
                (elem) => (
                  <li className="allcocktails__li">{elem}</li>
                )
              )}
            </ul>
            <ul className="allcocktails__ingredients" />
            <div className="secondblock__title">
              <img
                className="shaker_picto"
                src="/src/assets/images/picto_shaker.png"
                alt="picto_shaker"
              />
              <h5> Recipe :</h5>
            </div>
            <p className="cocktail__instruction">{cocktail.strInstructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

AllCocktailsCardIngredients.propTypes = {
  propsFetche: PropTypes.func.isRequired,
};

export default AllCocktailsCardIngredients;
