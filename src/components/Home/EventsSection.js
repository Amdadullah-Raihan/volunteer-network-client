import React from 'react';
import useEvents from '../../hooks/useEvents';

const EventsSection = () => {
    const [events, setEvents] = useEvents()


    return (
        <div className='relative h-[50vh]'>
           <div className="absolute top-[-50%] z-10 left-[10%]">
             This is event section 
             {
                events.map(event=>
                    
                    <div key={event._id}>


                    </div>
                    )
             }
           </div>
        </div>
    );
};

export default EventsSection;