import React from 'react';
import { NavLink, Outlet, Route, Routes } from 'react-router-dom';
import AddEvent from './AddEvent';
import ManageEvents from './ManageEvents';
import RegisteredVolunteer from './RegisteredVolunteer';

const Dashboard = () => {

    let activeStyle = {
        color:'#2083EF', 
    };
    return (
        <section className='flex'>
            <div className='w-[30%]  px-10 py-4 h-[100vh]'>
                <div className="text-start mt-10">
                    <NavLink
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined

                        }
                        to='/dashboard/registered-volunteer'

                        className='flex'>
                        <span className="material-symbols-outlined text-md mr-2">
                            supervisor_account
                        </span>
                        <h5> Registered Volunteer List</h5>
                    </NavLink>
                    <br />
                    <NavLink to='/dashboard/add-event' style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    } className='flex'>
                        <span className="material-symbols-outlined text-md mr-2">
                            add
                        </span>
                        <h5>Add Event</h5>
                    </NavLink>
                    <NavLink to='/dashboard/manage-events' style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    } className='flex mt-6'>
                        <span className="material-symbols-outlined text-md mr-2">
                            manage_accounts
                        </span>
                        <h5>Manage Events</h5>
                    </NavLink>

                </div>
            </div>
            <div className=' bg-[#F5F6FA] w-full mt-4'>
                <Routes>
                    <Route path='/' element={<RegisteredVolunteer />} />
                    <Route path='/add-event' element={<AddEvent></AddEvent>} />
                    <Route path='/manage-events' element={<ManageEvents />} />
                    <Route path='/registered-volunteer' element={<RegisteredVolunteer />} />
                </Routes>
                <Outlet />

            </div>
        </section>
    );
};

export default Dashboard;