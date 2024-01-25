import React, { useEffect, useState } from 'react';
import SectionHeader from '../../Shared/SectionHeader/SectionHeader';
import ChefCard from '../ChefCard/ChefCard';
import { GridLoader } from 'react-spinners';

const headingContent = {
    pashtoHeading: "آشپزان ما را ملاقات کنید",
    englishHeading: "Meet Our Chefs",
    description: "Explore the culinary brilliance that graces our platform by meeting our talented chefs. Each chef brings a unique blend of expertise, passion, and creativity to the table. From seasoned professionals to rising stars, our diverse lineup of culinary artists is ready to craft extraordinary dining experiences for you. Get to know the faces behind the flavors and discover the stories that inspire their exceptional dishes."
}

const ChefSection = () => {

    const [chefData, setChefData] = useState([]);

    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true)
        fetch('https://afgani-chef-server.vercel.app/chefData')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setChefData(data)
                setLoading(false)
            })
    }, [])

    return (
        <>
            <SectionHeader headingContent={headingContent} />
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
                {loading ? <GridLoader className='text-center mx-auto col-span-3' color="#ffffff" loading={loading} /> :
                    chefData.map(chef => <ChefCard key={chef.id} chef={chef} />)
                }
            </div>
        </>
    );
};

export default ChefSection;