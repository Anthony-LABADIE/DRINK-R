import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Title from "../titleblock/title/Title";
import ingredients from "./IngredientsArray";
import "./FormIngredients.css";

const FormIngredients = ({
  propsIngredient,
  propsSetIngredient,
  propsSetFetche,
  propsFetche,
}) => {
  const Cocktailingredients = async () => {
    await axios
      .get(
        `https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${propsIngredient}`
      )
      .then((response) => propsSetFetche(response.data.drinks));
  };
  useEffect(() => {
    Cocktailingredients();
  }, [propsIngredient]);
  const deleteValeur = () => {
    propsSetIngredient([]);
  };
  const [isActiveAlcool, setIsActiveAlcool] = useState(ingredients.ALCOOL);
  const [isActiveSoft, setIsActiveSoft] = useState(ingredients.SOFT);
  const [isActiveExtra, setIsActiveExtra] = useState(ingredients.EXTRA);

  const handleClickAlcool = (ingredientsName) => {
    const activeAlcool = isActiveAlcool.map((el) => {
      if (el.name === ingredientsName) {
        return {
          ...el,
          isActive: !el.isActive,
        };
      }
      return { ...el };
    });
    setIsActiveAlcool(activeAlcool);
  };
  const handleClickSoft = (ingredientsNameSoft) => {
    const activeSoft = isActiveSoft.map((el) => {
      if (el.name === ingredientsNameSoft) {
        return {
          ...el,
          isActive: !el.isActive,
        };
      }
      return { ...el };
    });
    setIsActiveSoft(activeSoft);
  };

  const handleClickExtra = (ingredientsNameExtra) => {
    const activeExtra = isActiveExtra.map((el) => {
      if (el.name === ingredientsNameExtra) {
        return {
          ...el,
          isActive: !el.isActive,
        };
      }
      return { ...el };
    });
    setIsActiveExtra(activeExtra);
  };

  const filtrebtn = (valeurbtn) => {
    const filterElement = propsIngredient.filter(
      (el) => el !== valeurbtn.target.value
    );
    if (!propsIngredient.includes(valeurbtn.target.value)) {
      propsSetIngredient([...propsIngredient, valeurbtn.target.value]);
    } else {
      propsSetIngredient(filterElement);
    }
  };
  return (
    <div className="homePage">
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
      <Title />
      <h2 className="subtitle">Choose your ingredients</h2>
      <div className="form__container">
        <h4 className="form__title">1-ALCOOL</h4>
        <div className="form__container__ingredients">
          {isActiveAlcool.map((elements) => (
            <button
              className={
                elements.isActive ? "form__btn__click" : "form__btn btn"
              }
              type="button"
              value={elements.name}
              onClick={(event) => {
                handleClickAlcool(elements.name);
                filtrebtn(event);
              }}
            >
              {elements.name}
            </button>
          ))}
        </div>
        <h4 className="form__title">2-SOFT</h4>
        <div className="form__container__ingredients">
          {isActiveSoft.map((elements) => (
            <button
              className={
                elements.isActive ? "form__btn__click" : "form__btn btn"
              }
              type="button"
              value={elements.name}
              onClick={(event) => {
                handleClickSoft(elements.name);
                filtrebtn(event);
              }}
            >
              {elements.name}
            </button>
          ))}
        </div>
        <h4 className="form__title">3-EXTRA</h4>
        <div className="form__container__ingredients">
          {isActiveExtra.map((elements) => (
            <button
              className={
                elements.isActive ? "form__btn__click" : "form__btn btn"
              }
              type="button"
              value={elements.name}
              onClick={(event) => {
                handleClickExtra(elements.name);
                filtrebtn(event);
              }}
            >
              {elements.name}
            </button>
          ))}
        </div>
        {propsFetche === "None Found" ? (
          <NavLink to="/AllCocktails">
            <button
              className="form__btn__go btn"
              type="button"
              onClick={() => {
                deleteValeur();
                filtrebtn();
              }}
            >
              LET'S GO
            </button>
          </NavLink>
        ) : (
          <NavLink to={`/AllCocktailsIngredients/${propsIngredient}`}>
            <button
              className="form__btn__go btn"
              type="button"
              onClick={() => {
                deleteValeur();
                filtrebtn();
              }}
            >
              LET'S GO
            </button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

FormIngredients.propTypes = {
  propsSetIngredient: PropTypes.func.isRequired,
  propsSetFetche: PropTypes.func.isRequired,
  propsIngredient: PropTypes.func.isRequired,
  propsFetche: PropTypes.arrayOf.isRequired,
};
export default FormIngredients;
