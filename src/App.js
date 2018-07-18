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
    minCalories: '',
    maxCalories: '',
    diet: '',
    health: '',
    exactIngredients: false,
    numberOfIngredients: 0,
    recipes: '',
    welcomeMessage: `Please enter the ingredients you've got in your fridge`,
    noRecipesFoundMessage: 'No recipes found',
  }

  // Build fetch URL based on user input
  // Number of recipes is set to 12
  // Ingredients is the only required value
  // The rest of the values are set to false and 0 by default
  buildURL (ingredients, minCalories = false, maxCalories = false, diet = false, health = false, exactIngredients = false, numberOfIngredients = 0) {
    let url = `https://api.edamam.com/search?q=${ingredients}&app_id=${appID}&app_key=${appKey}&from=0&to=12`;
    if (minCalories) {
      if (maxCalories) {
        // If user has entered minimum and maximum calorie values
        url = url.concat(`&calories=${minCalories}-${maxCalories}`);
      } else {
        // If user has only entered minimum calorie value
      url = url.concat(`&calories=${minCalories}+`);
      }
    } else if (maxCalories) {
      // If user has only entered maximum calorie value
      url = url.concat(`&calories=${maxCalories}`);
    }
    if (diet) {
      url = url.concat(`&diet=${diet}`);
    }
    if (health) {
      url = url.concat(`&health=${health}`);
    }
    if (exactIngredients) {
      url = url.concat(`&ingr=${numberOfIngredients}`);
    }
    return url;
  }

  enumerateIngredients (ingredients) {
    const regStr = /\w+/g;
    return ingredients.match(regStr).length;
  }

  getRecipe = async (e) => {
    e.preventDefault();
    if (e.target.elements.ingredients.value) {
      const ingredients = e.target.elements.ingredients.value;
      const numberOfIngredients = this.enumerateIngredients(ingredients);
      const minCalories = e.target.elements.minCalories.value;
      const maxCalories = e.target.elements.maxCalories.value;
      const diet = e.target.elements.diet.value;
      const health = e.target.elements.health.value;
      const exactIngredients = e.target.elements.exact.checked;

      const url = this.buildURL(ingredients, minCalories, maxCalories, diet, health, exactIngredients, numberOfIngredients);
      this.setState({ ingredients, minCalories, maxCalories, diet, health, exactIngredients, numberOfIngredients });
      console.log(url);
      const response = await fetch(url);
      const recipes = await response.json();
      console.log(recipes, 'from app.js');
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
          numberOfIngredients={this.state.numberOfIngredients}
          welcomeMessage={this.state.welcomeMessage}
          noRecipesFoundMessage={this.state.noRecipesFoundMessage}
        />
      </div>
    );
  }
}

export default App;
