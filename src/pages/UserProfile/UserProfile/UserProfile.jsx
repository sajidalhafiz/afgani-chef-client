import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaPenToSquare } from "react-icons/fa6";

const UserProfile = () => {

    const { user } = useContext(AuthContext);
    // console.log(user)

    return (
        <div>
            <div className="mx-auto w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col items-center py-10">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={user.photoURL} alt="" />
                    <div className='flex gap-2 items-start'>
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.displayName}</h5>
                        <FaPenToSquare className='text-gray-500 h-4 hover:text-white cursor-pointer'/>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{user.email}</span>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;