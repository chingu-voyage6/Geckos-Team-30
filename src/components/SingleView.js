import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

import './SingleView.css';

const SingleView = props => {
  const recipe = props.location.state.recipe;
  return (
    <div>
      <Navbar />
  <div className="single-recipe">
    <h3 id="title">{recipe.title}</h3>
    <img src={recipe.img} alt={recipe.title} />
    <h4 id="ingredients">Ingredients</h4>
    <ul>
      {recipe.ingredients.map((ingredient, index) => {
        return <li key={index}>{ingredient.text}</li>;
      })}
    </ul>
    <div id="gridMenu">
      <div className="gridDivs">
        <h4 id="calories">Calories per serving</h4>
        <p>{Math.round(recipe.calories / recipe.yield)} calories per serving</p>
      </div>
      <div className="gridDivs">
        <h4 id="health">Health Labels</h4>
        <ul>
          {recipe.healthLabels.map((ingredient, index) => {
            return <li key={index}>{ingredient}</li>;
          })}
        </ul>
      </div>
      <div className="gridDivs">
        <h4 id="diet">Diet Labels</h4>
        <ul>
          {recipe.dietLabels.map((ingredient, index) => {
            return <li key={index}>{ingredient}</li>;
          })}
        </ul>
      </div>
      <div className="gridDivs">
        <h4 id="nutrients">Nutrients</h4>
        <ul>
          <li>Fat: {Math.round(recipe.totalNutrients.FAT.quantity / recipe.yield)} g per serving</li>
          <li>Protein: {Math.round(recipe.totalNutrients.PROCNT.quantity / recipe.yield)} g per serving</li>
          <li>Carbs: {Math.round(recipe.totalNutrients.CHOCDF.quantity / recipe.yield)} g per serving</li>
        </ul>
      </div>
    </div>
    <p><a href={recipe.url}>Instructions at the original recipe URL</a></p>
    <button id="homeButton"><Link id="homeLink" to='/'>Go Home</Link></button>
  </div>
  </div>
  )
};

export default SingleView;