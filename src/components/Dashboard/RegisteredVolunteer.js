import React, { useEffect } from 'react';
import useEvents from '../../hooks/useEvents';
import useTitle from '../../hooks/useTitle';

const RegisteredVolunteer = () => {
    //changing title accordign to page
    useTitle('Dashboard - Registered Volunteer - Volunteer Network')

    useEffect(()=>{
        const url = 'http://localhost:5000/registered-users'
        fetch(url)
        .then(res=>res.json())
        .then(result => {
            console.log(result);
        })
    
    
    
    },[])

    return (
        <div>
            <div className='bg-white md:ml-8 mt-8 mb-16 md:mr-10 py-8 md:px-6 rounded-[20px]'>
                <table className='p-6 w-full '>
                    <thead className='bg-[#F5F6FA] h-[50px] text-gray'>
                        <tr>
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Registration date</th>
                            <th>Volunteer List</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                          
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RegisteredVolunteer;