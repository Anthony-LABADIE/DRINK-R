import React from "react";
import PropTypes from "prop-types";

const RecipeIngredientsList = ({ ingredient, className }) => {
  return <li className={className}>{ingredient}</li>;
};

export default RecipeIngredientsList;
RecipeIngredientsList.propTypes = {
  ingredient: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
