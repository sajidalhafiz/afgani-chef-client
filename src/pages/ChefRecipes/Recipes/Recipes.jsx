import { Rating } from '@smastrom/react-rating';
import React, { useState } from 'react';
import { LocalToastTarget, useLocalToast } from 'react-local-toast';

const Recipes = ({ recipe }) => {
    const { recipe_name, cooking_method, rating, ingredients } = recipe;
    console.log(...ingredients)

    const [favorite, setFavorite] = useState(false);
    
    const {showToast, removeToast} = useLocalToast();

    const handleFavorite = () => {
        setFavorite(!favorite)
        showToast('btn', 'The recipe is now in your favorite.!', {type:'success', placement:'right'})
    }

    return (
        <tr className='text-slate-700 hover:bg-slate-200'>
            <td className='py-6 pl-8 border-t border-e font-semibold text-lg'>{recipe_name}</td>
            <td className='py-6 text-center border-t border-e'>{cooking_method}</td>
            <td className='py-6 pl-8 border-t border-e'>{...ingredients}</td>
            <td className='py-6 border-t font-medium flex gap-1 items-center justify-center'>
                <Rating
                    style={{ maxWidth: 120 }}
                    value={rating}
                    readOnly
                />
                {rating}
            </td>
            <td className='py-6 text-center border-t'>
                <LocalToastTarget name='btn'>
                    <button onClick={handleFavorite}
                        className={favorite ? 'inline-flex gap-3 items-center px-3 py-2 text-sm text-center text-white bg-slate-700 rounded-lg dark:bg-slate-600' : 'inline-flex gap-3 items-center px-3 py-2 text-sm text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800'} disabled={favorite}>Favorite</button>
                </LocalToastTarget>
            </td>
        </tr>
    );
};

export default Recipes;