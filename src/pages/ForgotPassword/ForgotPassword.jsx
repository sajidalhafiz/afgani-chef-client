import React, { useContext, useRef } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {

    const navigate = useNavigate();

    const { passwordReset } = useContext(AuthContext);

    const emailRef = useRef();

    const handleOnSubmit = () => {
        const email = emailRef.current.value;
        passwordReset(email)
        .then(() => {
            alert(`Password reset email is sent to ${email}.\n Please check your email.`);
            navigate('/');
        })
        .error(error => alert(error.message))
    }

    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-full lg:py-0">
            <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
                <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Change Password
                </h2>
                <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" onSubmit={handleOnSubmit}>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type your email</label>
                        <input
                            type="email"
                            name="email"
                            ref={emailRef}
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="name@company.com"
                            required
                        />
                    </div>
                    <button
                        className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                    >
                        Proceed
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;