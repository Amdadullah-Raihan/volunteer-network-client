import React, { useState } from 'react';
import Calendar from 'react-calendar';


const AddEvent = () => {
    const [value, onChange] = useState(new Date());
    const [open, setOpen] = useState(false)

    console.log(value);
    return (
        <section className='px-6 rounded-[20px] w-full text-start max-w-[500px] mx-auto grid grid-cols-2 gap-x-6 gap-y-8'>
            <div className=''>

                <label className='label'>
                    <span className='label-text'>Event Title</span>
                </label>
                <input type="text" name="" className="input input-bordered rounded-[0]  w-full max-w-xs" id="" />
            </div>
            {/* <div>

                <label className="label">
                    <span className="label-text">Event Date</span>
                </label>
                <select className="select select-bordered w-full rounded-[0]">
                    <option  selected> {value.getDay()}-{value.getMonth()}-{value.getFullYear()} </option>
                    <option className='h-auto'>
                        <div className='h-auto'>
                            <Calendar onChange={onChange} value={value}></Calendar>
                        </div>
                    </option>
                   
                </select>
            </div> */}
            <div className='relative'>
                <label className='lebel'>
                    <span className='lebel-text'>Event Date</span>
                </label>
                <input className='input input-bordered rounded-none' type="text" onClick={()=>setOpen(!open)} value={value.getDate()} />
                {
                    open && <Calendar className='absolute z-10 bg-white p-10 min-w-[200px] shadow-lg  ' onChange={onChange} value={value} />
                }

            </div>
            <div>
                <label className="label">
                    <span className="label-text">Description</span>
                </label>
                <textarea className="textarea textarea-bordered w-full min-h-[80px] rounded-[0]" placeholder="Event Description">

                </textarea>
            </div>
           
            <div>

                <label for='file' className="label">
                    <span className="label-text-alt">Banner</span>
                    
                </label>
                <input type="file" className= "hidded file-input file-input-bordered  w-full max-w-xs rounded-[0]" />
            </div>

        </section>
    );
};

export default AddEvent;