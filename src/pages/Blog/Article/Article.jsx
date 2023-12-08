import React, { useState } from 'react';
import bannerImg from '../../../assets/controlled_uncontrolled.png'

const Article = () => {
    
    return (
        <div className='w-3/4 mx-auto space-y-4 mt-10 '>
            <img className='w-full' src={bannerImg} alt="" />
            <div>
                <small className='text-base text-gray-400'>Sajid Abdullah | Dec 08, 2023 | 3 min read</small>
                <h2 className='text-2xl font-semibold my-2'>1. The differences between uncontrolled and controlled components.</h2>
                <p className='text-gray-500 text-lg text-justify py-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate voluptatum quas similique, omnis in sequi, fuga voluptates quia laboriosam odit aliquid repellat corporis iste nobis possimus, obcaecati minima. Eligendi quasi alias non provident iure? Porro ratione accusantium fuga numquam fugiat, neque molestias voluptates at rem quod ea commodi dolorum corporis!</p>
                <p className='text-gray-500 text-lg text-justify py-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate voluptatum quas similique, omnis in sequi, fuga voluptates quia laboriosam odit aliquid repellat corporis iste nobis possimus, obcaecati minima. Eligendi quasi alias non provident iure? Porro ratione accusantium fuga numquam fugiat, neque molestias voluptates at rem quod ea commodi dolorum corporis!</p>
                <p className='text-gray-500 text-lg text-justify py-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate voluptatum quas similique, omnis in sequi, fuga voluptates quia laboriosam odit aliquid repellat corporis iste nobis possimus, obcaecati minima. Eligendi quasi alias non provident iure? Porro ratione accusantium fuga numquam fugiat, neque molestias voluptates at rem quod ea commodi dolorum corporis!</p>
            </div>
            
        </div>
    );
};

export default Article;