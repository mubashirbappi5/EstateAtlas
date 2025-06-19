import React from 'react';
import error from '../../public/3828537.jpg'
import Image from 'next/image';
const notFound = () => {
    return (
        <div>
           
            <div className="flex items-center justify-center h-screen ">
               <Image src={error} alt="Error Image" width={700} height={500} className="" />
            </div>
            
        </div>
    );
};

export default notFound;