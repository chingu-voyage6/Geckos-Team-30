import React from 'react';
import './Recipes.css';

const Recipes = props => {
  
  if (props.recipes.hits) {
    const recipeList = props.recipes.hits.map((hit, index) => (
      <li key={index}>
        {hit.recipe.label}
      </li>
    ));
    return <div className="recipes"><ul>{recipeList}</ul></div>;
  } else {
    return <div className="recipes"><p>{props.error}</p></div>;
  }
  
  // return 'Test';
};

export default Recipes;