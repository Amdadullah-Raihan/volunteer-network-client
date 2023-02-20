import axios from 'axios';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import useTitle from '../../hooks/useTitle';


const AddEvent = () => {
    const [value, onChange] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [imgUrl, setImgUrl] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    console.log(imgUrl);
    //changing title accordign to page
    useTitle('Dashboard - Add Event - Volunteer Network')
  
    const handleImageChange = (e) => {
        e.preventDefault();
        const img = e.target.files[0];
        const formData = new FormData();
        formData.append('image',img);
        

        const url = "https://api.imgbb.com/1/upload?&key=8484f85b7788ffca18f1fd5d203bc0fa";
        fetch(url,{
            method:"POST",
            body: formData
        })
        .then(res=>res.json())
        .then(imgData=>{
            console.log(imgData.data.url);
            setImgUrl(imgData.data.url)
        }).catch(err=>{
            console.log(err);
        }

        )
        

        // setImage();
        // console.log(e.target.files)
    }

    //call api on form submit

    const handleUpload = async (e) => {
        e.preventDefault(); //prevent reload on submit
        // if (imgUrl==='' && title==='' && !description==='') {
        //     return;
        // }

        await axios.post('http://localhost:5000/addEvent', {
            'imageUrl': imgUrl,
            'title': title,
            'descriptions': description,
            'date': value
        })
            // .then(res => res.json())
            .then(events => {
                //    console.log(events);

                if (events.data.insertedId) {
                    alert("Event Added Successfully!")
                    setTitle('')
                    setImgUrl('')
                    setDescription('');

                }
                
              

            })
    }

    // console.log(value);
    return (
        <section className='md:m-20 p-10 w-full bg-white md:max-w-[800px] rounded-[20px] '>
            <form onSubmit={handleUpload} className='grid grid-cols-1 gap-6'>
                <div className='text-start'>
                    <p>Event Title</p>
                    <input className='border w-full px-4 py-2' type="text" onChange={(e) => setTitle(e.target.value)} name="" id="" placeholder='Enter Title' required  value={title}/>
                </div>
                <div className='text-start'>
                    <p>Event Date</p>
                    <input className='border w-full px-4 py-2' type="text" name="" id="" onBlur={(e) => onChange(value)} onClick={() => { setOpen(!open) }} value={value} readOnly required />
                    {
                        open && <Calendar className='max-w-[500px] shadow-lg p-8 ' onChange={onChange} />
                    }
                </div>
                <div className='text-start'>
                    <p>Description</p>
                    <textarea className='border w-full px-4 py-4 min-h-[100px] h-auto ' type="text" name="" id="" placeholder='Enter Description' required onChange={(e) => setDescription(e.target.value)} value={description} />
                </div>
                <div className='text-start'>
                    <p>Banner</p>
                    <label htmlFor="file" className='' >
                        <input className=' border' type="file" accept='image/*' name="" id="img-file"
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