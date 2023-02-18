import React from 'react';
import useEvents from '../../hooks/useEvents';
import useTitle from '../../hooks/useTitle';

const RegisteredVolunteer = () => {
    //changing title accordign to page
    useTitle('Dashboard - Registered Volunteer - Volunteer Network')

    return (
        <div>
            <div className='bg-white ml-8 mt-8 mb-16 mr-10 py-8 px-6 rounded-[20px]'>
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