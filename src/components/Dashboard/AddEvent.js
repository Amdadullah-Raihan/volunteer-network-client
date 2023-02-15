import axios from 'axios';
import React, { useState } from 'react';
import Calendar from 'react-calendar';


const AddEvent = () => {
    const [value, onChange] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    console.log(image);
    console.log(title);
    const handleImageChange = (e) => {
        e.preventDefault();
        setImage(e.target.files[0]);
        // console.log(e.target.files)
    }

    //call api on form submit

    const handleUpload = async (e) => {
        e.preventDefault(); //prevent reload on submit
        if (!image && title && !description) {
            return;
        }

        await axios.post('http://localhost:5000/addEvent', {
            'image': image,
            'title': title,
            'descriptions': description,
            'date': value
        })
            // .then(res => res.json())
            .then(events => {
                //    console.log(events);

                if (events.data.insertedId) {
                    alert("Event Added Successfully!")

                }
                setTitle('')
                setImage('')
                setDescription('')

            })
    }

    console.log(value);
    return (
        <section className='m-20 p-10 bg-white max-w-[800px] rounded-[20px] '>
            <form onSubmit={handleUpload} className='grid grid-cols-1 gap-6'>
                <div className='text-start'>
                    <p>Event Title</p>
                    <input className='border w-full px-4 py-2' type="text" onBlur={(e) => setTitle(e.target.value)} name="" id="" placeholder='Enter Title' required />
                </div>
                <div className='text-start'>
                    <p>Event Date</p>
                    <input className='border w-full px-4 py-2' type="text" name="" id="" onBlur={(e) => onChange(value)} onClick={() => { setOpen(!open) }} value={value} readOnly required />
                    {
                        open && <Calendar className='max-w-[500px] shadow-lg p-8 ' onChange={onChange} value={value} />
                    }
                </div>
                <div className='text-start'>
                    <p>Description</p>
                    <textarea className='border w-full px-4 py-4 min-h-[100px] h-auto overflow-wrap' type="text" name="" id="" placeholder='Enter Description' required onBlur={(e) => setDescription(e.target.value)} />
                </div>
                <div className='text-start'>
                    <p>Banner</p>
                    <label htmlFor="file" className='' >
                        <input className=' border' type="file" accept='image/*' name="" id=""
                            onChange={handleImageChange} required />
                    </label>
                </div>
                <div className='text-start'>
                    <input type="submit" value="Submit" className='btn w-[150px] bg-[#207FEE] border-none text-start' />
                </div>
            </form>

        </section>
    );
};

export default AddEvent;