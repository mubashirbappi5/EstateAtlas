import React from 'react';
import { Reviews } from '../Reviews';

const Testimonial = () => {
    return (
        <div className=' container mx-auto   '>
            <div>
                <h1 className=' md:text-5xl text-3xl font-semibold text-center text-white'>See What<span className='text-[#3BA1DF]'> Clients</span> Are Saying </h1>
            </div>
            <div className='mt-10'>
                <Reviews/>
            </div>
          
            
        </div>
    );
};

export default Testimonial;