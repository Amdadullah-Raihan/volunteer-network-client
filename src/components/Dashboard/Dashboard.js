import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import AddEvent from './AddEvent';
import RegisteredVolunteer from './RegisteredVolunteer';

const Dashboard = () => {
    return (
        <section className='flex '>
            <div className='w-[30%]  px-10 py-4 h-[100vh]'>
                <div className="text-start mt-10">
                    <Link to='/dashboard/registered-volunteer'> <h5>Registered Volunteer List</h5></Link>
                    <br />
                    <Link to='/dashboard/add-event'><h5>Add Event</h5></Link>
                    <Outlet />
                </div>
            </div>
            <div className=' bg-[#F5F6FA] w-full mt-4'>
                <Routes>
                    <Route path='/add-event' element={<AddEvent></AddEvent>} />
                    <Route path='/registered-volunteer' element={<RegisteredVolunteer />} />
                </Routes>

            </div>
        </section>
    );
};

export default Dashboard;