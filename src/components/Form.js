import React from 'react';

const Form = props => (
  <form onSubmit={props.getRecipe}>
    <input type="text" name="ingredients" placeholder="Please enter your ingredients..." />
    <button>Get recipes</button>
  </form>
);

export default Form;