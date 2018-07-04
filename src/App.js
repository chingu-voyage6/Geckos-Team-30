import React, { Component } from 'react';
import Form from './components/Form';
import Recipes from './components/Recipes';
import Navbar from './components/Navbar';
import './App.css';

const appID = process.env.REACT_APP_API_ID;
const appKey = process.env.REACT_APP_API_KEY;

class App extends Component {
  state = {
    ingredients: '',
    recipes: '',
    error: `Please enter the ingredients you've got in your fridge`
  }
  getRecipe = async (e) => {
    e.preventDefault();
    if (e.target.elements.ingredients.value) {
      const ingredients = e.target.elements.ingredients.value;
      this.setState({ ingredients });
      const url = `https://api.edamam.com/search?q=${ingredients}&app_id=${appID}&app_key=${appKey}`;
      const response = await fetch(url);
      const recipes = await response.json();
      this.setState({ recipes });
    } else {
      this.setState({ recipes : ''});
    };
  }
  render() {
    return (
      <div>
        <Navbar />
        <Form getRecipe={this.getRecipe} />
        <Recipes
          recipes={this.state.recipes}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
