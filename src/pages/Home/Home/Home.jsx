import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import Banner from '../Banner/Banner';
import ChefSection from '../ChefSection/ChefSection';
import Stats from '../Stats/Stats';
import Reviews from '../Reviews/Reviews';



const Home = () => {
    const user = useContext(AuthContext)
    // console.log(user)
    return (
        <div>
            <Banner />
            <Stats />
            <ChefSection />
            <Reviews />
        </div>
    );
};

export default Home;