import React from 'react';
import { Link } from 'react-router-dom';

import './Recipe.css';

const checkForm = (ingredients, kind = '') => {
  if (ingredients=== 0) {
    return false;
  } else if (ingredients === 1) {
    return `1 ${kind} ingredient`;
  } else if (ingredients > 1) {
    return `${ingredients} ${kind} ingredients`;
  }  
}

const Recipe = props => {
  let missingIngredients = checkForm(props.ingredients.length - props.numberOfIngredients);

  return (
    <div className="recipe">
      {/* <a href={props.url}> */}
      <Link to={{ 
        pathname: `/recipe/${props.id}`,
        state: { recipe: props }
        }}>
        <img src={props.img} alt="" />
      </Link>
      {/* </a> */}
      <p className="title">{props.title.length < 20 ? `${props.title}`: `${props.title.substring(0,20)}...`}</p>
      <p>{Math.round(props.calories / props.yield)} calories per serving</p>
      <p>{props.ingredients.length} recipe ingredients</p>
      {props.numberOfIngredients > 0 && <p>{checkForm(props.numberOfIngredients, 'fridge')}</p>}
      {props.numberOfIngredients > 0 && missingIngredients && <p>{missingIngredients} missing</p>}
    </div>
  )
};

export default Recipe;