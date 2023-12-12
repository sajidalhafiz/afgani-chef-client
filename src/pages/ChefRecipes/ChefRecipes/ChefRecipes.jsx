import React from 'react';
import ChefBanner from '../ChefBanner/ChefBanner';
import Recipes from '../Recipes/Recipes';
import { useLoaderData } from 'react-router-dom';

const ChefRecipes = () => {
    const chef = useLoaderData()
    const recipes = chef.chef_recipes;

    // console.log(recipes)

    return (
        <div>
            <ChefBanner chef={chef}/>
            <Recipes recipes={recipes}/>
        </div>
    );
};

export default ChefRecipes;