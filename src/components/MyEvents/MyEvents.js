import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import useFirebase from '../../hooks/useFirebase'

const MyEvents = () => {
    //changing title accordign to page
    useTitle('My Events - Volunteer Network')
    const [myEvents, setMyEvents] = useState([])
    const {user, isLoading, setIsLoading} = useFirebase();
    
    
    
    
   
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



    return (
        <div className='min-h-[70vh] py-20 w-full mx-auto'>
            <table className='w-full max-w-[900px] mx-auto shadow-lg'>
                <tr className='bg-[#F5F6FA] h-14 '>
                    <th>Event Title</th>
                    <th>Event Date</th>
                    <th>Actions</th>
                </tr>
                {
                    myEvents?.map(myEvent=>
                        
                        <tr className='border-b h-14'>
                            <td>{myEvent.title}</td>
                            <td>{myEvent.registrationDate}</td>
                            <td>
                                <button className="material-symbols-outlined text-red-500 font-bold text-3xl">
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