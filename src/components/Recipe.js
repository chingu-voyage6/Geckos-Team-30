import React from 'react';
import './Recipe.css';

const Recipe = props => (
  <div className="recipe">
    <a href={props.url}><img src={props.img} alt=""/></a>
    <p>{props.title}</p>
    <p>{Math.round(props.calories / props.yield)} calories per serving</p>
  </div>
);

export default Recipe;