import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {


    //changing title accordign to page
    useTitle('Blogs - Volunteer Network')

    return (
        <div className='min-h-[70vh]'>
            <h1>This is Blogs page     </h1>
        </div>
    );
};

export default Blogs;