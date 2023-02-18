import React from 'react';
import useTitle from '../../hooks/useTitle';

const MyEvents = () => {
    //changing title accordign to page
    useTitle('My Events - Volunteer Network')


    return (
        <div className='min-h-[70vh]'>
            <h1>This is My Events page</h1>
        </div>
    );
};

export default MyEvents;