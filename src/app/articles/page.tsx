import Component from '@/components/Article/search-input';

import React from 'react';
import abanner from '../../../public/ArticleBanner.jpg';
import Image from 'next/image';
const Articles = () => {
    return (
       <div className='min-h-screen  '>
<div className='mx-auto container'>
   <h1 className="md:text-6xl text-4xl mt-20 text-center font-semibold leading-relaxed md:leading-[5rem]">
          Insights & Trends for Global Real <br /> Estate Professionals
        </h1>
        <p className="mt-6 text-xl md:text-xl text-center text-[#80838A] leading-loose">
          Access global real estate insights tailored to your needs. No hidden
          fees, cancel anytime.
        </p>


      <div className='flex justify-center mt-10 w-11/12 mx-auto'>
          <Component/>
      </div>


{/*  */}
 <div className="relative mt-10  w-11/12 mx-auto  px-4 md:px-10  py-10 md:py-20 rounded-2xl overflow-hidden">
        <Image
          src={ abanner }
          alt=""
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              {/* Category Badge */}
              <div className="mb-6">
                <span className="inline-block rounded-md bg-slate-800/80 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                  Rental Yields
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="mb-6 text-2xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Gross rental yields in Mauritius transparent Analytics and Market Trends
              </h1>

              {/* Date */}
              <p className="text-lg text-white/90 sm:text-xl">March 10, 2025</p>
            </div>
          </div>
        </div>
      </div>

    
      {/*  */}

</div>


            
        </div>
    );
};

export default Articles;