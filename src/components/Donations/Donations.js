import React from 'react';
import useTitle from '../../hooks/useTitle';

const Donations = () => {


    //changing title accordign to page
    useTitle('Donations - Volunteer Network')


    return (
        <div className='min-h-[70vh]'>
            <h1>This is donationa page</h1>
        </div>
    );
};

export default Donations;