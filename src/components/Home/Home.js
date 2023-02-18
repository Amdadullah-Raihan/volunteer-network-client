import React from 'react';
import useEvents from '../../hooks/useEvents';
import EventsSection from './EventsSection';
import HeroSection from './HeroSection';

const Home = () => {
    useEvents()
    return (
        <div className='min-h-[70vh]'>
            <HeroSection/>
            <EventsSection/>
        </div>
    );
};

export default Home;