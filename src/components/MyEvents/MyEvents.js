import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import useFirebase from '../../hooks/useFirebase'
import axios from 'axios';

const MyEvents = () => {
    //changing title accordign to page
    useTitle('My Events - Volunteer Network')
    const [myEvents, setMyEvents] = useState([])
    const { user, isLoading, setIsLoading } = useFirebase();





    //fetchig myevents 
    useEffect(() => {
        if (isLoading) {
            return
        }
        fetch(`http://localhost:5000/my-events?email=${user?.email}`)
            .then(res => res.json())
            .then(result => {
                setMyEvents(result)
                setIsLoading(false)
            })
    }, [user])

    //delete an event by id
    const handleDeleteEvent = (id) => {
        console.log('clicked');
        const url = 'http://localhost:5000/delete-event'
        axios.post(url, {
            'id': id
        })
            .then(result => {
                if (result?.data.deletedCount) {
                    alert('Event Deleted')
                    const newEvents = myEvents.filter(myEvent=> myEvent._id !== id)
                    setMyEvents(newEvents)
                }
                else {
                    alert('Could not delete the event!! ')
                }
            })
    }



    return (
        <div className='min-h-[70vh] py-20 w-full mx-auto'>
            <table className='w-full max-w-[900px] mx-auto shadow-lg'>
                <tr className='bg-[#F5F6FA] h-14 '>
                    <th>Event Title</th>
                    <th>Event Date</th>
                    <th>Actions</th>
                </tr>
                {
                  myEvents.length===0 ? <tr className='h-48'> 
                        <td className='text-2xl text-warning uppercase mx-auto'>You did not registered for any event!!</td>
                  </tr> : 
                   myEvents?.map(myEvent =>

                        <tr className='border-b h-14'>
                            <td>{myEvent.title}</td>
                            <td>{myEvent.registrationDate}</td>
                            <td>
                                <button
                                    onClick={() => handleDeleteEvent(myEvent._id)}
                                    className="material-symbols-outlined text-red-500 font-bold text-3xl">
                                    delete
                                </button>
                            </td>
                        </tr>


                    )
                }

            </table>
        </div>
    );
};

export default MyEvents;