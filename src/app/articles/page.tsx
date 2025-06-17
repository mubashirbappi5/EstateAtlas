import React from 'react';
import soon from '../../../public/OE60SH0.jpg'
import Image from 'next/image';
const Articles = () => {
    return (
       <div className='min-h-screen flex mt-5 justify-center '>
<div
  className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full z-0 pointer-events-none blur-xl opacity-70"
  style={{
    background: "radial-gradient(circle at center, rgba(10, 21, 50, 0.5) 0%, rgba(10, 21, 50, 0.2) 60%, rgba(255, 255, 255, 0) 100%)",
  }}
></div>


            <Image src={soon} alt='cooming soon'></Image>
            
            
        </div>
    );
};

export default Articles;