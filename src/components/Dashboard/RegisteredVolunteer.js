import React, { useEffect, useState } from 'react';
import useEvents from '../../hooks/useEvents';
import useTitle from '../../hooks/useTitle';

const RegisteredVolunteer = () => {
    //changing title accordign to page
    useTitle('Dashboard - Registered Volunteer - Volunteer Network')
    const [users, setUsers] = useState([])

    useEffect(()=>{
        const url = 'http://localhost:5000/registered-users'
        fetch(url)
        .then(res=>res.json())
        .then(result => {
           setUsers(result)
           console.log(result);
        })
    
    
    
    },[])

    const handleDeleteUser = id =>{

    }

    return (
        <div>
            <div className='bg-white md:ml-8 mt-8 mb-16 md:mr-10 py-8 md:px-6 rounded-[20px]'>
                <table className='p-6 w-full '>
                   
                        <tr className='bg-[#F5F6FA] h-16 text-gray'>
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Registration date</th>
                            <th>Event Title</th>
                            <th>Action</th>
                            
                        </tr>
                    
                       
                        {
                            users?.map(user =>

                            <tr className='h-16 border-b '>
                                <td>{user.volunteerName}</td>
                                <td>{user.emailId}</td>
                                <td>{user.registrationDate}</td>
                                <td>{user.title}</td>
                                <td>
                                    <button onClick={() => handleDeleteUser(user._id)}>
                                        <span className="material-symbols-outlined text-red-500 font-bold text-3xl">
                                            delete
                                        </span>
                                    </button>
                                </td>
                            </tr>)
                        }
                          
                 
                </table>
            </div>
        </div>
    );
};

export default RegisteredVolunteer;