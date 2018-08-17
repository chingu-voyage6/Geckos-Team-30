import React from 'react';

import Recipe from './Recipe';

import './Recipes.css';

const getRecipeId = (url) => {
  const regExp = /(?<=recipe_)\S+/gmi;
  return regExp.exec(url)[0];
}

const Recipes = props => {
  if (props.recipes.hits && props.recipes.hits.length === 0) {
    return <div className="recipes"><p>{props.noRecipesFoundMessage}</p></div>;
  } else if (props.recipes.hits) {
    const recipeList = props.recipes.hits.map((hit, index) => (
      <li key={index}>
        <Recipe 
          img = {hit.recipe.image}
          title = {hit.recipe.label}
          url = {hit.recipe.url}
          calories = {hit.recipe.calories}
          ingredients = {hit.recipe.ingredients}
          numberOfIngredients = {props.numberOfIngredients}
          yield = {hit.recipe.yield}
          dietLabels = {hit.recipe.dietLabels}
          healthLabels = {hit.recipe.healthLabels}
          totalNutrients = {hit.recipe.totalNutrients}
          // Get the recipe ID from the uri
          id = {getRecipeId(hit.recipe.uri)}
        />
      </li>
    ));
    return <div className="recipes"><ul>{recipeList}</ul></div>;
  } else {
    return <div className="recipes"><p>{props.welcomeMessage}</p></div>;
  }
};

export default Recipes;