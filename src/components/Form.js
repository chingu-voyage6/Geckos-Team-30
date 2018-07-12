import React from 'react';
import './Form.css';

const dietOptions = ['', 'balanced', 'high-fiber', 'high-protein', 'low-carb', 'low-fat', 'low-sodium'];
const healthOptions = ['', 'alcohol-free', 'dairy-free', 'gluten-free', 'paleo', 'pescatarian', 'vegan', 'vegetarian'];

// Function to capitalise the dietOptions and healthOptions array items
const capitalise = (str) => (str.charAt(0).toUpperCase() + str.substr(1).toLowerCase());

const Form = props => (
  <div className="form-container">
    <form onSubmit={props.getRecipe}>
      <input className="form-input-ingredients" type="text" name="ingredients" placeholder="Please enter your ingredients..." />
      <input className="form-input-min-calories" type="number" name="minCalories" placeholder="Please enter your ingredients..." />
      <input className="form-input-max-calories" type="number" name="maxCalories" placeholder="Please enter your ingredients..." />
      {/* Dropdown menu for diet options */}
      <select name="diet" id="">
        {dietOptions.map((diet, index) => {
          return <option value={diet} key={index}>{capitalise(diet)}</option>;
        })}
      </select>
      {/* Dropdown menu for health options */}
      <select name="health" id="">
        {healthOptions.map((health, index) => {
          return <option value={health} key={index}>{capitalise(health)}</option>;
        })}
      </select>
      <input type="checkbox" name="exact" value="exact" id="exact"/>
      <label htmlFor="exact">Exact Ingredients</label>
      <button>GO!</button>
    </form>
  </div>
);

export default Form;