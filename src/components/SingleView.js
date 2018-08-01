import React from 'react';
import { Link } from 'react-router-dom';

import './SingleView.css';

const SingleView = props => {
  const recipe = props.location.state.recipe;
  return <div className="single-recipe">
            <h3>{recipe.title}</h3>
            <img src={recipe.img} alt={recipe.title}/>
            <h4>Ingredients</h4>
            <ul>
              {recipe.ingredients.map((ingredient, index) => {
                return <li key={index}>{ingredient.text}</li>;
              })}
            <h4>Calories per serving</h4>
            </ul>
            <p>{Math.round(recipe.calories / recipe.yield)} calories per serving</p>
            <h4>Health Labels</h4>
            <ul>
              {recipe.healthLabels.map((ingredient, index) => {
                return <li key={index}>{ingredient}</li>;
              })}
            </ul>
            <h4>Diet Labels</h4>
            <ul>
              {recipe.dietLabels.map((ingredient, index) => {
                return <li key={index}>{ingredient}</li>;
              })}
            </ul>
            <h4>Nutrients</h4>
            <ul>
              <li>Fat: {Math.round(recipe.totalNutrients.FAT.quantity / recipe.yield)} g per serving</li>              
              <li>Protein: {Math.round(recipe.totalNutrients.PROCNT.quantity / recipe.yield)} g per serving</li>
              <li>Carbs: {Math.round(recipe.totalNutrients.CHOCDF.quantity / recipe.yield)} g per serving</li>
            </ul>
            <p><a href={recipe.url}>Instructions at the original recipe URL</a></p>
            <button><Link to='/'>Go Home</Link></button>
          </div>
};

export default SingleView;