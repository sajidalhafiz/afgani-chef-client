import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
            <div className="mx-auto max-w-screen-xl text-center">
                <img
                    className="h-auto sm:h-16 w-auto mx-auto"
                    src="afgani-chef-logo-white.png"
                    alt="Afgani Chef"
                />
                <p className="my-6 text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quibusdam vitae voluptate veniam eos ad corporis animi quam soluta! Eaque.
                </p>
                <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
                    <li>
                        <Link to="/" className="mr-4 hover:underline md:mr-6 ">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="mr-4 hover:underline md:mr-6">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/chefRecipes" className="mr-4 hover:underline md:mr-6 ">
                            Chef Recipes
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog" className="mr-4 hover:underline md:mr-6">
                            Blog
                        </Link>
                    </li>
                </ul>
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2021-2022 <Link to="/" className="hover:underline">Afgani Chef™</Link>. All Rights Reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;