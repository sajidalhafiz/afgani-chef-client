import React from 'react';
import Article from '../Article/Article';
import SectionHeader from '../../Shared/SectionHeader/SectionHeader';

const headingContent = {
    pashtoHeading: "د پوښتنې او جوابونو بلاګ",
    englishHeading: "Question & Answer Blog",
    description: ""
}

const Blog = () => {
    return (
        <div className='my-8'>
            <SectionHeader headingContent={headingContent} />
            <Article/>
        </div>
    );
};

export default Blog;