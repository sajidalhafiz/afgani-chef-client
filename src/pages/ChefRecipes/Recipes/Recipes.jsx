import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import chef1 from '../../../assets/chef-1.png';
import chef2 from '../../../assets/chef-2.png';
import chef3 from '../../../assets/chef-3.png';

const Recipes = () => {
    return (
        <>
            <h1 className='text-3xl'>Recipes</h1>
            <div className='flex justify-between gap-10 my-10'>
                <div className="w-full h-[500px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img className="rounded-t-lg h-1/2 w-full" src={chef1} alt="" />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Chef Name</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Years of experience</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Number of recipes</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Likes</p>
                        <Link to="/chefRecipes" className="inline-flex gap-3 items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
                            <span>View Recipes</span>
                            <FaArrowRight />
                        </Link>
                    </div>
                </div>
                <div className="w-full h-[500px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img className="rounded-t-lg h-1/2 w-full" src={chef2} alt="" />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Chef Name</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Years of experience</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Number of recipes</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Likes</p>
                        <Link to="/chefRecipes" className="inline-flex gap-3 items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
                            <span>View Recipes</span>
                            <FaArrowRight />
                        </Link>
                    </div>
                </div>
                <div className="w-full h-[500px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img className="rounded-t-lg h-1/2 w-full" src={chef3} alt="" />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Chef Name</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Years of experience</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Number of recipes</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Likes</p>
                        <Link to="/chefRecipes" className="inline-flex gap-3 items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
                            <span>View Recipes</span>
                            <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Recipes;