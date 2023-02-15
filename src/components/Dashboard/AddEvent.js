import React, { useState } from 'react';
import Calendar from 'react-calendar';


const AddEvent = () => {
    const [value, onChange] = useState(new Date());
    const [open, setOpen] = useState(false)

    console.log(value);
    return (
        <section className='m-20 p-10 bg-white'>
            <div className='grid grid-cols-2 gap-6 '>
                <div className='text-start'>
                    <p>Event Title</p>
                    <input className='border w-full px-4 py-2' type="text" name="" id="" placeholder='Enter Title' />
                </div>
                <div className='text-start'>
                    <p>Event Date</p>
                    <input className='border w-full px-4 py-2' type="text" name="" id="" placeholder={new Date()}/>
                </div>
                <div className='text-start'>
                    <p>Description</p>
                    <input className='border w-full px-4  h-24' type="text" name="" id="" placeholder='Enter Description' />
                </div>
                <div className='text-start'>
                    <p>Banner</p>
                    <label htmlFor="file" className='' >
                        <input className=' border ' type="file" name="" id=""
                         />
                    </label>
                </div>
            </div>

        </section>
    );
};

export default AddEvent;