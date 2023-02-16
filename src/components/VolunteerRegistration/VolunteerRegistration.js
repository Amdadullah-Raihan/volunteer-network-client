import React from 'react';

const VolunteerRegistration = () => {
    return (
        <div className='flex items-center justify-center w-full h-[60vh]'>
            <form className='text-start w-[570px]  border px-12 py-6 shadow'>
                <h5 className='text-xl font-bold mb-10 bg-[#fff]'>Register as a volunteer</h5>
                <input className='border-b mb-8 w-full ' type="text" name="" id="" placeholder='Full Name' /> <br />
                <input className='border-b mb-8 w-full' type="text" name="" id="" placeholder='Username Or Email' /> <br />
                <input className='border-b mb-8 w-full' type="text" name="" id="" placeholder='Date' /> <br />
                <input className='border-b mb-8 w-full' type="text" name="" id="" placeholder='Description' /><br />
                <input className='border-b mb-8 w-full' type="text" name="" id="" placeholder='Organize books at library' /><br />
                <input className='bg-[#3F90FC] w-full text-[#fff] font-bold btn rounded-none border-none mb-6' type="submit" name="" id=""  /><br />

            </form>
        </div>
    );
};

export default VolunteerRegistration;