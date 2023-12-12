import React from 'react';

const SectionHeader = ({ headingContent }) => {
    const {pashtoHeading, englishHeading, description} = headingContent;
    
    return (
        <div className='my-20 text-center text-white'>
            <h2 className='mb-4 text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 from-30% to-red-500 to-60%'>{pashtoHeading}</h2>
            <h2 className='mb-4 text-2xl font-bold text-gray-200'>{englishHeading}</h2>
            <p className='text-lg font-medium text-slate-400'>{description}</p>
        </div>
    );
};

export default SectionHeader;