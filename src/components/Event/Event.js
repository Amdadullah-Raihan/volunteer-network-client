
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VolunteerRegistration from '../VolunteerRegistration/VolunteerRegistration';

const Event = () => {
    const { _id } = useParams();
    const [data, setData] = useState({ });
  

    useEffect(()=>{
        fetch(`http://localhost:5000/events/${_id}`)
        .then(res=>res.json())
        .then(event=>{
            console.log(event);
            setData(event)
        })
    },[])


    return (
        <div className='w-[100vw] h-full flex justify-center items-center'>
            <div className='mt-10 border w-[570px] min-h-[600px]'>
                <img className='h-[500px] w-full border-none' src={data.image} alt="" />
                <h5>{data.title}</h5>
                <h5>{data.date}</h5>
            </div>
           
        </div>
    );
};

export default Event;