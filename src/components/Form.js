import React from 'react';
import './Form.css';

const Form = props => (
  <div className="form-container">
    <form onSubmit={props.getRecipe}>
      <input className="form-input" type="text" name="ingredients" placeholder="Please enter your ingredients..." />
      <button>GO!</button>
    </form>
  </div>
);

export default Form;