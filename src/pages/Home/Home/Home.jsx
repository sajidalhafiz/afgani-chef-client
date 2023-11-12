import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import Banner from '../Banner/Banner';
import ChefSection from '../ChefSection/ChefSection';



const Home = () => {
    const user = useContext(AuthContext)
    console.log(user)
    return (
        <div>
            <Banner/>
            <ChefSection/>
        </div>
    );
};

export default Home;