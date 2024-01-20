import React, { useState } from 'react';
import chef1 from '../../../assets/chef-1.png'
import { Link } from 'react-router-dom';
import { FaArrowRight, FaBowlRice, FaBusinessTime, FaThumbsUp } from 'react-icons/fa6';

const ChefCard = ({ chef }) => {

    const { id, chef_name, chef_picture_url, years_of_experience, likes, chef_recipes } = chef;
    const number_of_recipes = chef_recipes;

    return (
        <div className="group max-w-sm h-60 rounded-3xl flex p-1 bg-slate-700 hover:bg-gradient-to-r hover:from-indigo-500 hover:from-10% hover:via-sky-500 hover:via-30% hover:to-indigo-900 hover:to-90%">
            <div className='bg-slate-900 rounded-l-3xl h-full w-3/4 relative'>
                <img className="transition ease-in-out delay-150 group-hover:-translate-y-4 group-hover:-translate-x-4 group-hover:scale-105 duration-300 rounded-3xl object-cover h-full w-full" src={chef_picture_url} alt="" />
            </div>
            <div className="w-full bg-slate-900 rounded-r-3xl pl-6 pt-2">
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">{chef_name}</h5>
                <p className="mb-3 text-xs italic text-yellow-500">ID: {id}</p>
                <hr />
                <p className="my-2 flex gap-2 items-center text-gray-200 dark:text-white">
                    <FaBusinessTime />
                    <span>Experience: {years_of_experience}</span>
                </p>
                <p className="mb-2 flex gap-2 items-center text-gray-200 dark:text-white">
                    <FaBowlRice />
                    <span>Recipes: {number_of_recipes.length}</span>
                </p>
                <p className="mb-4 flex gap-2 items-center text-gray-200 dark:text-white">
                    <FaThumbsUp />
                    <span>Likes: {likes}</span>
                </p>
                <Link to={`/chefRecipes/${id}`} className="inline-flex gap-3 items-center px-3 py-2 text-sm text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800" preventScrollReset={true}>
                    <span>View Recipes</span>
                    <FaArrowRight />
                </Link>
            </div>
            {/* <div className='absolute top-0 bg-slate-600 opacity-90 rounded-full h-3/4 w-full flex flex-col justify-center items-center border-8 border-slate-700'>
                
            </div> */}
        </div>
    );
};

export default ChefCard;