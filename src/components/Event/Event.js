
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import VolunteerRegistration from '../VolunteerRegistration/VolunteerRegistration';

const Event = () => {
    const { _id } = useParams();
    const [data, setData] = useState({});


    useEffect(() => {
        fetch(`http://localhost:5000/events/${_id}`)
            .then(res => res.json())
            .then(event => {
                console.log(event);
                setData(event)
            })
    }, [])


    return (
        <div className='w-[100vw] h-full flex justify-center items-center'>
            <div className='h-[300px] mt-10 grid grid-cols-2 shadow-lg'>
                <div className='border-r-[2px] h-[300px]'>

                    <img className='h-[400px]' src={data.image} alt="Banner" />
                </div>
                <div className='px-6 py-6 leading-10 '>

                    <div className=''>
                        <h5 className='text-2xl capitalize'>{data.title}</h5>
                        <h5>{data.date}</h5>
                        <p className='min-h-[110px] max-h-[100px]'>Descriptions: {data.descriptions}</p>
                    </div>
                    <Link  to='/volunteer-registration' className='btn bg-[#3F90FC] mt-6 border-none'>Register as a Volunteer</Link>
                </div>
            </div>

        </div>
    );
};

export default Event;