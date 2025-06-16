import React from 'react';
import soon from '../../../public/OE60SH0.jpg'
import Image from 'next/image';
const Articles = () => {
    return (
       <div className='min-h-screen flex mt-5 justify-center '>
            <Image src={soon} alt='cooming soon'></Image>
            
            
        </div>
    );
};

export default Articles;