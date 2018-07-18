import React from 'react';
import './Recipe.css';

const Recipe = props => {
  let missingIngredients = props.ingredients.length - props.numberOfIngredients;
  
  if (missingIngredients === 0) {
    missingIngredients = false;
  } else if (missingIngredients === 1) {
    missingIngredients = '1 ingredient missing';
  } else if (missingIngredients > 1) {
    missingIngredients = `${missingIngredients} ingredients missing`;
  }

  return (
    <div className="recipe">
      <a href={props.url}><img src={props.img} alt="" /></a>
      <p>{props.title}</p>
      <p>{Math.round(props.calories / props.yield)} calories per serving</p>
      <p>{props.ingredients.length} recipe ingredients</p>
      <p>{props.numberOfIngredients} fridge ingredients</p>
      {missingIngredients && <p>{missingIngredients}</p>}
    </div>
  )
};

export default Recipe;