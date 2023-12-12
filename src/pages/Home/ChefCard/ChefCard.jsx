import React, { useState } from 'react';
import chef1 from '../../../assets/chef-1.png'
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';

const ChefCard = ({ chef }) => {

    const { id, chef_name, chef_picture_url, years_of_experience, likes, chef_recipes } = chef;
    const number_of_recipes = chef_recipes;

    const [show, setShow] = useState(false)
    console.log(number_of_recipes)

    return (
        <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} className="max-w-sm h-[500px] rounded-full relative">
            <img className="rounded-full h-3/4 w-full" src={chef_picture_url} alt="" />
            <div className="p-5 text-center">
                <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{chef_name}</h5>
                <Link to={`/chefRecipes/${id}`} className="inline-flex gap-3 items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
                    <span>View Recipes</span>
                    <FaArrowRight />
                </Link>
            </div>
            {show ? <div className='absolute top-0 bg-slate-600 opacity-90 rounded-full h-3/4 w-full flex flex-col justify-center items-center border-8 border-slate-700'>
                <p className="mb-3 font-medium text-xl text-gray-200 dark:text-white">Chef ID: {id}</p>
                <p className="mb-3 font-medium text-xl text-gray-200 dark:text-white">{years_of_experience}yrs experience</p>
                <p className="mb-3 font-medium text-xl text-gray-200 dark:text-white">{'chef_recipes'} recipes</p>
                <p className="mb-3 font-medium text-xl text-gray-200 dark:text-white">{likes} Likes</p>
            </div> : ''}
        </div>
    );
};

export default ChefCard;