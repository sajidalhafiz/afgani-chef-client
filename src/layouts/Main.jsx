import React from 'react';
import NavBar from '../pages/Shared/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div className='flex flex-col justify-between min-h-screen bg-slate-900'>
            <NavBar />
            <div className='container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 min-h-full'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;