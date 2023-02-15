import React from 'react';

const Dashboard = () => {
    return (
        <section className='flex '>
            <div className='w-[30%]  px-10 py-4 h-[100vh]'>
                <div className="text-start mt-10">
                    <h5>Registered Volunteer List</h5>
                    <br />
                    <h5>Add Event</h5>
                </div>
            </div>
            <div className=' bg-[#F5F6FA] w-full mt-4'>
                <div className='bg-white ml-8 mt-8 mb-16 mr-10 py-8 px-6 rounded-[20px]'>
                    <table className='p-6 w-full '>
                        <tr className='bg-[#F5F6FA] h-[50px] text-gray'>
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Register date</th>
                            <th>Volunteer List</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
                </div>
            </div>

        </section>
    );
};

export default Dashboard;