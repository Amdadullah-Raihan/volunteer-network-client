import React from 'react';
import useEvents from '../../hooks/useEvents';
import useTitle from '../../hooks/useTitle';
import EventsSection from './EventsSection';
import HeroSection from './HeroSection';

const Home = () => {
    //changing title accordign to page
    useTitle('Home - Volunteer Network')
    
    useEvents()
    return (
        <div className='min-h-[70vh]'>
            <HeroSection/>
            <EventsSection/>
        </div>
    );
};

export default Home;