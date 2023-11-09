import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const Home = () => {
    const user = useContext(AuthContext)
    console.log(user)
    return (
        <div>
            Home
        </div>
    );
};

export default Home;