import React, { useEffect, useState } from 'react';
import useEvents from '../../hooks/useEvents';

const EventsSection = () => {
    const [events, isLoading] = useEvents()


    //genarating individual color for each div

    let randomColor;
    const genarateColor = () =>{
        const colors = ['#FFBD3E', '#FF7044', '#3F90FC', '#421FCF']
        let randomNum = Math.floor(Math.random() * colors.length);
        randomColor = colors[randomNum];
        return randomColor;
    }



    return (
        <div className='relative w-[100vw] lg:container mx-auto mb-6'>
            <div className="absolute top-[-120px] z-10  grid grid-cols-4 w-full gap-4">

                {
                    !events ?
                        <div>
                            <p className='text-xl '>Laoding Events...</p>
                        </div>
                        : events?.map(event =>

                            <div key={event._id} className='shadow-lg h-[250px] rounded-[10px]'>
                                
                                 <div className="hidden">
                                       { genarateColor()}
                                 </div>
                               
                                <img src={event.image} alt={event.image.name} className='h-[75%] bg-white rounded-[10px]' />
                                <h5 className={`w-full h-[25%] items-center flex text-white uppercase font-semibold justify-center rounded-b-[10px]`} style={{backgroundColor:`${randomColor}`}} >{event.title}</h5>

                            </div>
                        )
                }
            </div>
        </div>
    );
};

export default EventsSection;