import ToggleButton from '@/components/Pricing/ToggleButton';
import React from 'react';

const Pricing = () => {
  return (
    <div>

        {/* Pricing hero section */}
      <div className="md:container mx-auto md:mb-40 mb-7 md:p-8 p-2 text-[#0A1532] text-center">
        <h1 className="md:text-6xl text-4xl mt-20 text-center font-semibold leading-relaxed md:leading-[5rem]">
          Simple, Transparent Pricing To <br /> Unlock Global Real Estate Insights
        </h1>
        <p className="mt-6 text-xl md:text-xl text-center text-[#80838A] leading-loose">
          Access global real estate insights tailored to your needs. No hidden fees, cancel anytime.
        </p>

       <div className='flex justify-center mt-10'>
        <ToggleButton/>



       </div>
      </div>
    </div>
  );
};

export default Pricing;
