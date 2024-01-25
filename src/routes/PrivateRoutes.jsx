import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { GridLoader } from 'react-spinners';

const PrivateRoutes = ({ children }) => {

    const location = useLocation();

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <div className='text-center mx-auto col-span-3'>
                <GridLoader color="#ffffff" loading={loading} />
            </div>
        )
    }
    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace={true} />;
};

export default PrivateRoutes;