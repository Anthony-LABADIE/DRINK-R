import PropTypes from "prop-types";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { motion } from "framer-motion";
import ButtonListResult from "../Buttonlist/ButtonListResult";
import SearchBar from "../Buttonlist/SearchBar";
import RecipeIngredientsList from "./RecipeIngredientsList";
import "./CocktailRecipe.css";
import Title from "../titleblock/title/Title";
import MenuBurger from "../MenuBurger/MenuBurger";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 100,
  (x - window.innerWidth / 2) / 100,
  1.01,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const CocktailRecipe = ({ userInput, handleChange, search, setSearch }) => {
  const [cocktail, setCocktail] = useState({});
  const { id } = useParams();

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  useEffect(() => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => setCocktail(response.data.drinks[0]));
  }, [cocktail]);

  const ingredients = [
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

  const mesures = [
    cocktail.strMeasure1,
    cocktail.strMeasure2,
    cocktail.strMeasure3,
    cocktail.strMeasure4,
    cocktail.strMeasure5,
    cocktail.strMeasure6,
    cocktail.strMeasure7,
    cocktail.strMeasure8,
    cocktail.strMeasure9,
    cocktail.strMeasure10,
    cocktail.strMeasure11,
    cocktail.strMeasure12,
    cocktail.strMeasure13,
    cocktail.strMeasure14,
    cocktail.strMeasure15,
  ];
  const [btn, setBtn] = useState(false);
  const [similar, setSimilar] = useState(cocktail);
  const [random, setRandom] = useState(0);
  const handleBtn = () => {
    setBtn(!btn);
    setRandom(random + 1);
    setSimilar(cocktail);
  };

  useEffect(() => {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${cocktail.strIngredient1}`
      )
      .then((response) => setSimilar(response.data.drinks[random]));
  }, [cocktail]);

  return (
    <div className="cocktailRecipe__container">
      <img
        className="cocktailRecipe__bg"
        src="../src/assets/images/blue_transparent.png"
        alt=""
      />
      <MenuBurger />
      <Title />
      <form action="submit" className="cocktailRecipe__form ">
        <SearchBar
          className="cocktailRecipe__searchbar"
          handleChange={handleChange}
        />
        <ButtonListResult
          classeNameLi="cocktailRecipe__resultLi"
          classname="cocktailRecipe__resultList"
          search={search}
          userInput={userInput}
          setSearch={setSearch}
        />
      </form>

      <motion.div
        className="cocktailRecipe__motion"
        initial={{ y: "100%" }}
        animate={{ y: "0" }}
        transition={{
          duration: 0.8,
          delay: 0,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <animated.div
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          className="cocktailRecipe__card card "
          style={{ transform: props.xys.to(trans) }}
        >
          <img
            className="card__star"
            src="../src/assets/images/etoile.png"
            alt=""
          />
          <div className="cocktailRecipe__img-placeholder" />
          <img
            src={cocktail.strDrinkThumb}
            alt="of the cocktail"
            className="cocktailRecipe__img"
          />
          <h3 className="cocktailRecipe__title">{cocktail.strDrink}</h3>
          <h5 className="cocktailRecipe__subTitle">Ingredients: </h5>
          <div className="cocktailRecipe__ingredientsList">
            <ul>
              {ingredients
                .filter((el) => typeof el === "string")
                .map((elem) => (
                  <RecipeIngredientsList
                    className="cocktailRecipe__ingredients"
                    ingredient={elem}
                  />
                ))}
            </ul>
            <ul>
              {mesures
                .filter((el) => typeof el === "string")
                .map((elem) => (
                  <RecipeIngredientsList
                    className="cocktailRecipe__mesures"
                    ingredient={elem}
                  />
                ))}
            </ul>
          </div>
          <h5 className="cocktailRecipe__subTitle">Let's do it : </h5>
          <p className="cocktailRecipe__instructions">
            {cocktail.strInstructions}
          </p>
        </animated.div>
      </motion.div>
      {similar && similar.idDrink !== null ? (
        <NavLink to={`/CocktailRecipe/${similar.idDrink}`}>
          <button
            type="button"
            onClick={handleBtn}
            className="cocktailRecipe__similar-btn"
          >
            &#8599;
          </button>
        </NavLink>
      ) : (
        <NavLink to={`/CocktailRecipe/${id}`}>
          <button
            type="button"
            onClick={handleBtn}
            className="cocktailRecipe__similar-btn"
          >
            &#8599;
          </button>
        </NavLink>
      )}
    </div>
  );
};
CocktailRecipe.propTypes = {
  handleChange: PropTypes.func.isRequired,
  userInput: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  xys: PropTypes.number.isRequired,
};
export default CocktailRecipe;
