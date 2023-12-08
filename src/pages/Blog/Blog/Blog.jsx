import React from 'react';
import Article from '../Article/Article';

const Blog = () => {
    return (
        <div>
            <h1 className='text-5xl font-bold text-center'>Q&A Blog</h1>
            <Article/>
            <Article/>
        </div>
    );
};

export default Blog;