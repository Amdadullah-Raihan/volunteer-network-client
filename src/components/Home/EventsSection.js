import React, { useEffect, useState } from 'react';
import useEvents from '../../hooks/useEvents';

const EventsSection = () => {
    const [events, isLoading] = useEvents()
    

    return (
        <div className='relative w-[100vw] h-auto p-8 lg:container mx-auto'>
           <div className="absolute top-[-50%] z-10  grid grid-cols-4 w-full  gap-4 ">
            
             {   
             !events?
             <div>
                Loading Events...
             </div>
             : events?.map(event=>
                    
                    <div key={event._id} className='shadow-lg h-[250px]'>
                        <img src={event.image} alt={event.image.name} className='h-[80%] bg-red-50' />
                        <h5 className='w-full bg-red-100 h-[25%] items-center flex justify-center'>{event.title}</h5>

                    </div>
                    )
             }
           </div>
        </div>
    );
};

export default EventsSection;