import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { Link, useNavigation } from 'react-router-dom';
import chef1 from '../../../assets/chef-1.png';
import chef2 from '../../../assets/chef-2.png';
import chef3 from '../../../assets/chef-3.png';
import chef4 from '../../../assets/chef-4.png';
import chef5 from '../../../assets/chef-5.jpg';
import chef6 from '../../../assets/chef-6.jpg';
import SectionHeader from '../../Shared/SectionHeader/SectionHeader';
import ChefCard from '../ChefCard/ChefCard';

const headingContent = {
    pashtoHeading: "آشپزان ما را ملاقات کنید",
    englishHeading: "Meet Our Chefs",
    description: "Explore the culinary brilliance that graces our platform by meeting our talented chefs. Each chef brings a unique blend of expertise, passion, and creativity to the table. From seasoned professionals to rising stars, our diverse lineup of culinary artists is ready to craft extraordinary dining experiences for you. Get to know the faces behind the flavors and discover the stories that inspire their exceptional dishes."
}

const ChefSection = () => {

    const [chefData, setChefData] = useState([]);

    const navigation = useNavigation();

    useEffect(() => {
        fetch('http://localhost:5000/chefData')
            .then(res => res.json())
            .then(data => setChefData(data))
    }, [])

    return (
        <>
            <SectionHeader headingContent={headingContent} />
            <div className='grid grid-cols-3 gap-6'>
                {navigation.state === 'loading' ? <div className='text-white text-7xl font-bold'>Loading...</div> :
                    chefData.map(chef => <ChefCard key={chef.id} chef={chef}/>)
                }
            </div>
        </>
    );
};

export default ChefSection;