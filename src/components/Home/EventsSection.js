import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useEvents from '../../hooks/useEvents';

const EventsSection = () => {
    const [events] = useEvents()
   
    

    //genarating individual color for each div

    let randomColor;
    // let randomNumPrev;
    const genarateColor = () => {
        const colors = ['#FFBD3E', '#FF7044', '#3F90FC', '#421FCF']
        let randomNum = Math.floor(Math.random() * colors.length);
        //  if(randomNum === randomNumPrev){
        //     return;
        //  }
        // randomNumPrev = randomNum;
        randomColor = colors[randomNum];
        return randomColor;
    }

   


    return (
        <div className='relative w-[100vw] h-auto lg:container mx-auto mb-16'>
            <div className="absolute top-[-120px] z-10  grid grid-cols-4 w-full gap-4">

                {
                    !events ?
                        <div>
                            <p className='text-xl font-semibold '>Laoding Events...</p>

                        </div>
                        : events?.map(event =>

                            <div key={event._id} className='shadow-lg h-[250px] rounded-[10px] relative'>

                                <div className="hidden">
                                    {genarateColor()}
                                </div>
                                {/* <div className=' absolute top-[0] bottom-[0] left-[0] right-[0] '>
                                    <button className="btn">Register</button>
                                 </div> */}

                                <img src={event.image} alt={event.image.name} className='h-[75%] bg-white rounded-t-[10px]' />
                                <Link to={`/events/${event._id}`}>
                                    <button className={`w-full h-[25%] items-center flex text-white uppercase font-semibold justify-center rounded-b-[10px]`} style={{ backgroundColor: `${randomColor}` }} >{event.title}</button>
                                </Link>

                            </div>
                        )
                }
            </div>
        </div>
    );
};

export default EventsSection;