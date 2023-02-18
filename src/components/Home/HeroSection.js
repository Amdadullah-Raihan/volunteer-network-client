import React from 'react';
import heroImg from '../../images/heroImg.jpg'

const HeroSection = () => {
    return (
        <section className="relative bg-cover min-h-[600px]  z-0" style={{ backgroundImage: `url(${heroImg})` }}>

            <div className='absolute top-0 left-0 bg-white w-full h-full z-10  opacity-75'></div>
            <div className='relative z-20 font-bold uppercase '>
                <div className="form-control">
                    <h1 className='text-4xl mt-20 '>i grow by helping people in need</h1>
                    <label className="input-group flex justify-center my-4">
                        <input type="text" placeholder="Search..." className="input input-bordered" />
                        <span className=' bg-[#3F90FC] text-white font-normal'>Search</span>
                    </label>
                </div>
            </div>
            {/* <img src={heroImg} alt="" className='z-0'/> */}
        </section>
    );
};

export default HeroSection;