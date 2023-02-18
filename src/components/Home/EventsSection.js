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
        <div className=' w-[100vw] h-auto xl:container mx-auto  z-10'>

            <div className="relative mt-[-30px] top-[-120px] z-20  grid   grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-4 md:px-20 px-10">

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

                                <div className='h-[75%] overflow-hidden bg-cover w-full bg-[#fff] rounded-lg' style={{backgroundImage:`url(${event.imageUrl})`}}>
                                    
                               </div>
                               <div className='h-[25%]'>
                                    <Link to={`/events/${event._id}`}>
                                        <button className={`w-full h-full items-center flex text-white uppercase font-semibold justify-center rounded-b-[10px]`} style={{ backgroundColor: `${randomColor}` }} >{event.title}</button>
                                    </Link>
                               </div>

                            </div>
                        )
                }
            </div>
        </div>
    );
};

export default EventsSection;