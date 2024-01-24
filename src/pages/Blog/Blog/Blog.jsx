import React from 'react';
import Article from '../Article/Article';
import SectionHeader from '../../Shared/SectionHeader/SectionHeader';
import { Margin, Resolution, usePDF } from 'react-to-pdf';

const headingContent = {
    pashtoHeading: "د پوښتنې او جوابونو بلاګ",
    englishHeading: "Question & Answer Blog",
    description: ""
}

const Blog = () => {

    const { toPDF, targetRef } = usePDF({ filename: 'blog-page.pdf' });
    const options = {
        method: 'open',
        resolution: Resolution.HIGH,
        page: {
            margin: Margin.MEDIUM,
            format: 'letter',
            orientation: 'landscape',
        },
        canvas: {
            mimeType: 'image/png',
            qualityRatio: 1
        },
        overrides: {
            pdf: {
                compress: true
            },
            canvas: {
                useCORS: true
            }
        },
    };
    return (
        <>
            <div className='my-8 relative' ref={targetRef}>
                <button onClick={() => toPDF(options)} 
                    className='absolute top-0 right-0 inline-flex gap-3 items-center px-3 py-2 text-sm text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800'>Download PDF</button>
                <SectionHeader headingContent={headingContent} />
                <Article />
            </div>
        </>
    );
};

export default Blog;