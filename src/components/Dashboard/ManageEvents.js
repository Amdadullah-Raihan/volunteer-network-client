import axios from 'axios';
import React from 'react';
import useEvents from '../../hooks/useEvents';
import useTitle from '../../hooks/useTitle';

const ManageEvents = () => {
    const [events,setEvents, isLoading] = useEvents();
    //changing title accordign to page
    useTitle('Dashboard - Manage Events - Volunteer Network')


    const handleDeleteEvent = id =>{
        // console.log(id);
        const url = 'http://localhost:5000/events';
        axios.post(url, {'id' : id})
        .then(result=>{
           
            if (result?.data.deletedCount){
                alert("items deleted")
               const newEvents = events.filter(event => event._id !== id)
               setEvents(newEvents);
            }
            else{
                alert('Could not delete the event!! ')
            }
        })
    }

    return (
        <div>
            <div className='bg-white md:ml-8 md:mt-8 md:mb-16 md:mr-10 py-8 md:px-6 px-2 rounded-[20px]'>
                <table className='w-full  '>
                    <thead className='bg-[#F5F6FA] h-[50px] text-gray grid grid-cols-3 items-center'>
                        <th>Event Title</th>
                        <th>Registration date</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {
                            events?.map(event =>
                                <tr className='grid grid-cols-3 leading-10 mt-4 border-b items-center py-2'>
                                    <td className=''>{event.title}</td>
                                    <td>{event.date}</td>
                                    <td className='flex items-center justify-evenly'>
                                        {/* <button className='btn btn-update'>Update</button> */}
                                        <button onClick={()=>handleDeleteEvent(event._id)}>
                                            <span className="material-symbols-outlined text-red-500 font-bold text-3xl">
                                                delete
                                            </span>
                                        </button>
                                    </td>
                                </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageEvents;