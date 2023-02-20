
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import useTitle from '../../hooks/useTitle';
import VolunteerRegistration from '../VolunteerRegistration/VolunteerRegistration';

const Event = () => {
    const { _id } = useParams();
    const [data, setData] = useState({});
    const {user} = useFirebase()


    //changing title accordign to page
    useTitle('Event - Volunteer Network')

    useEffect(() => {
        fetch(`http://localhost:5000/events/${_id}`)
            .then(res => res.json())
            .then(event => {
                // console.log(event);
                setData(event)
            })
    }, [])
  

    //form onSubmit
    const handleVolunteerRegistration = e =>{
        e.preventDefault();
        const url = 'http://localhost:5000/register-volunteer';
        axios.post()
    }

    return (
        <div className=' flex justify-center items-center min-h-[70vh]'>
            <div className='h-[400px] mt-10 grid grid-cols-2 shadow-lg border rounded-[20px]'>
                <div className='border-r-[2px] h-full bg-cover rounded-l[20px] rounded-bl-[20px]' style={{backgroundImage:`url(${data.imageUrl})`}}>
{/* 
                    <img className='h-[400px]' src={data.imageUrl} alt="Banner" /> */}
                </div>
                <div className='px-6 py-6 leading-10 '>

                    <div className=''>
                        <h5 className='text-2xl capitalize'>{data.title}</h5>
                        <h5>{data.date}</h5>
                        <p className='min-h-[110px] max-h-[100px] normal-case '>Descriptions- <br /> {data.descriptions}</p>
                    </div>
                    {/* <Link  to='/volunteer-registration' className='btn bg-[#3F90FC] mt-6 border-none'>Register as a Volunteer</Link> */}
                <label htmlFor="my-modal-5" className="btn bg-[#3f90fc] border-none w-full mt-12">Register</label>
                </div>
            </div>
            {/* The button to open modal */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box ">
                    <form onSubmit={handleVolunteerRegistration} className='text-start w-[570px] w-full px-12 py-6'>
                        <h5 className='text-xl font-bold mb-10 bg-[#fff]'>Register as a volunteer</h5>
                        <input className='border-b mb-8 w-full ' type="text" name="" id="" placeholder='Full Name' value={user.displayName} /> <br />
                        <input className='border-b mb-8 w-full' type="text" name="" id="" placeholder='Username Or Email' value={user.email} /> <br />
                        <input className='border-b mb-8 w-full' type="text" name="" id="" placeholder='Date' value={data.date} /> <br />
                        <input className='border-b mb-8 w-full' type="text" name="" id="" placeholder='Description' value={data.descriptions}/><br />
                        <input className='border-b mb-8 w-full' type="text" name="" id="" placeholder='Organize books at library' value={data.title} /><br />
                        <input className='bg-[#3F90FC] w-full text-[#fff] font-bold btn rounded-none border-none mb-6' type="submit" name="" id="" /><br />

                    </form>
                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn bg-red-600  border-none">Close</label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Event;