import React, { useState } from 'react';
import chef1 from '../../../assets/chef-1.png'
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';

const ChefCard = () => {

    const [show, setShow] = useState(false)

    return (
        <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} className="max-w-sm h-[500px] rounded-full relative">
            <img className="rounded-full h-3/4 w-full" src={chef1} alt="" />
            <div className="p-5 text-center">
                <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Chef Name</h5>
                <Link to="/chefRecipes" className="inline-flex gap-3 items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
                    <span>View Recipes</span>
                    <FaArrowRight />
                </Link>
            </div>
            {show ? <div className='absolute top-0 bg-slate-600 opacity-90 rounded-full h-3/4 w-full flex flex-col justify-center items-center border-8 border-slate-700'>
                <p className="mb-3 font-medium text-xl text-gray-200 dark:text-white">3yrs+ experience</p>
                <p className="mb-3 font-medium text-xl text-gray-200 dark:text-white">50 recipes</p>
                <p className="mb-3 font-medium text-xl text-gray-200 dark:text-white">5.4k Likes</p>
            </div> : ''}
        </div>
    );
};

export default ChefCard;