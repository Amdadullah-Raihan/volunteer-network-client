import React from 'react';

const AddEvent = () => {
    return (
        <section className='px-6 rounded-[20px] form-control w-full text-start max-w-[500px] mx-auto grid grid-cols-2 gap-x-6 gap-y-10'>
            <div className=''>

                <label className='label'>
                    <span className='label-text'>Event Title</span>
                </label>
                <input type="text" name="" className="input input-bordered  w-full max-w-xs" id="" />
            </div>
            <div>

                <label className="label">
                    <span className="label-text">Event Date</span>
                </label>
                <select className="select select-bordered">
                    <option disabled selected>23-10-2022</option>
                    <option>Star Wars</option>
                    <option>Harry Potter</option>
                    <option>Lord of the Rings</option>
                    <option>Planet of the Apes</option>
                    <option>Star Trek</option>
                </select>
            </div>
            <div>
                <label className="label">
                    <span className="label-text">Description</span>
                </label>
                <textarea className="textarea textarea-bordered w-full min-h-[100px] " placeholder="Event Description">

                </textarea>
            </div>
           
            <div>

                <label className="label">
                    <span className="label-text-alt">Banner</span>

                </label>
                <input type="file" className="file-input file-input-bordered file-input-info w-full max-w-xs" />
            </div>

        </section>
    );
};

export default AddEvent;