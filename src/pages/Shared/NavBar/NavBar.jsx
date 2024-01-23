import React, { Fragment, useContext } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUser } from "react-icons/fa6";
import { Tooltip } from 'react-tooltip'

const navigation = [
    { name: 'Home', to: '/', current: true },
    { name: 'About Us', to: '/about', current: false },
    { name: 'Blog', to: '/blog', current: false }
]


const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    console.log(user)

    const handleLogOut = () => {
        logOut()
    }

    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl sm:py-4 px-2 sm:px-6 lg:px-8 container">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-0">
                                    <img
                                        className="h-10 sm:h-16 w-auto"
                                        src="../../../../public/afgani-chef-logo-white.png"
                                        alt="Afgani Chef Logo"
                                    />
                                </div>
                                <div className="hidden sm:ml-6 sm:flex items-center justify-center flex-1">
                                    <div className="flex space-x-4 ">
                                        {navigation.map((item) => (
                                            <NavLink
                                                key={item.name}
                                                to={item.to}
                                                className={({ isActive }) =>
                                                    isActive ? 'bg-gray-900 text-white rounded-md px-3 py-2 text-md font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium'
                                                }
                                            >
                                                {item.name}
                                            </NavLink>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                                {/* Profile dropdown */}
                                {user ? <Menu as="div" className="relative ml-3">
                                    <div className='flex items-center gap-4'>
                                        <Menu.Button id='user-name' className="relative flex rounded-full bg-gray-800 text-sm hover:ring-2 hover:ring-white hover:ring-offset-4 hover:ring-offset-gray-800">
                                            <span className="absolute -inset-1.5" />
                                            {user.photoURL ? 
                                            <img src={user.photoURL} className="rounded-full w-10 sm:w-20" /> : <FaUser className="h-8 w-8 rounded-full text-white" />}

                                        </Menu.Button>
                                        <button onClick={handleLogOut} className="hidden sm:block w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Log Out</button>
                                    </div>
                                    <Tooltip anchorSelect="#user-name" place="left" clickable>
                                        <div className='text-md font-medium p-2'>
                                            <h4>{user.displayName}</h4>
                                            <small>{user.email}</small>
                                        </div>
                                    </Tooltip>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                <NavLink
                                                    to="/userProfile"
                                                    className={({ isActive }) => isActive ? 'text-md font-base pl-3 py-2 bg-gray-900 block text-white' : 'text-md font-base pl-3 py-2 bg-white block text-gray-700 hover:bg-gray-200'}
                                                >
                                                    Your Profile
                                                </NavLink>
                                            </Menu.Item>
                                            <button onClick={handleLogOut} className="sm:hidden w-full text-start text-md font-base pl-3 py-2 hover:bg-gray-200 text-gray-700">Log Out</button>
                                        </Menu.Items>
                                    </Transition>
                                </Menu> :
                                    <Link to='/login' className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Log In</Link>}
                            </div>
                        </div>
                    </div>
                    {/* responsive menu */}
                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.to}
                                    className={({ isActive }) =>
                                        isActive ? 'bg-gray-900 text-white block rounded-md px-3 py-2 text-sm font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-sm font-medium'
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
};

export default NavBar;