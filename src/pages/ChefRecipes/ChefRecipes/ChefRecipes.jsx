import React from 'react';
import ChefBanner from '../ChefBanner/ChefBanner';
import Recipes from '../Recipes/Recipes';
import { useLoaderData } from 'react-router-dom';
import SectionHeader from '../../Shared/SectionHeader/SectionHeader';

const headingContent = {
    pashtoHeading: "رسيپي",
    englishHeading: "Recipes",
    description: "Explore a world of culinary delights with our diverse and delectable recipes. From traditional classics to innovative creations, our recipe section offers a delightful journey for every palate."
}

const ChefRecipes = () => {
    const chef = useLoaderData()
    const recipes = chef.chef_recipes;

    console.log(recipes)

    return (
        <div>
            <ChefBanner chef={chef} />
            <div className='my-10'>
                <SectionHeader headingContent={headingContent} />
                <div className="overflow-x-auto">
                    <table className="bg-slate-300 rounded-xl w-full">
                        <thead className='h-12'>
                            <tr className='bg-slate-700 text-white text-lg shadow-2xl'>
                                <th className='shadow-lg border-e-2 border-slate-500'>Recipe Name</th>
                                <th className='shadow-lg border-e-2 border-slate-500'>Cooking Method</th>
                                <th className='shadow-lg border-e-2 border-slate-500'>Ingredients</th>
                                <th className='shadow-lg border-e-2 border-slate-500'>Ratings</th>
                                <th className='shadow-lg'>Favorite</th>
                            </tr>
                        </thead>
                        <tbody className='text-start'>
                            {
                                recipes.map((recipe, index) => <Recipes key={index} recipe={recipe}></Recipes>)
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        </div>
    );
};

export default ChefRecipes;