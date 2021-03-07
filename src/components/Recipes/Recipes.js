import React, { Component } from 'react';
import classes from './Recipes.module.css';
import Recipe from './Recipe/Recipe';

class Recipes extends Component {

    render() {
        return (
            <div className={classes.Recipes}>
                {this.props.recipes.map(recipeData => {
                    return <Recipe
                        key={Math.random()}
                        image={recipeData.recipe.image}
                        label={recipeData.recipe.label}
                        ingredients={recipeData.recipe.ingredientLines}
                        time={recipeData.recipe.totalTime}
                    />
                })}
            </div>
        );
    }
}

export default Recipes;
