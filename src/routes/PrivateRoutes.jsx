import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';
import { GridLoader } from 'react-spinners';

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if(loading){
        return (
        <div className='text-center mx-auto col-span-3'>
            <GridLoader color="#ffffff" loading={loading}/>
        </div>
        )
    }

    return (
        <>
            {user ?
                children : 
                <Navigate to="/login" replace={true} /> 
            }
        </>
    );
};

export default PrivateRoutes;