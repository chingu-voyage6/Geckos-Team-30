import React from 'react';
import Recipe from './Recipe';

import './Recipes.css';

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
        />
      </li>
    ));
    return <div className="recipes"><ul>{recipeList}</ul></div>;
  } else {
    return <div className="recipes"><p>{props.welcomeMessage}</p></div>;
  }
};

export default Recipes;