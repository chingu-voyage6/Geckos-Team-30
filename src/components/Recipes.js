import React from 'react';

const Recipes = props => {
  if (props.recipes.hits) {
    const recipeList = props.recipes.hits.map((hit, index) => (
      <li key={index}>
        {hit.recipe.label}
      </li>
    ));
    return <ul>{recipeList}</ul>;
  } else {
    return <p>{props.error}</p>;
  }

  // return 'Test';
};

export default Recipes;