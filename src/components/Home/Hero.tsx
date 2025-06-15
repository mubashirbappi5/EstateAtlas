import Image from 'next/image';
import React from 'react';
import deshbord from '../../../public/image1.png'
const Hero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0A1532]">
    
      <div
        className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full z-0"
        style={{
          background: 'linear-gradient(134.12deg, rgba(5, 137, 240, 0.7) 9.484%, rgba(5, 137, 240, 0.7) 75.042%)',
          filter: 'blur(246px)',
        }}
      />
      <div
        className="absolute top-0 right-[-100px] w-[400px] h-[400px] rounded-full z-0"
        style={{
          background: 'linear-gradient(117.97deg, rgba(5, 137, 240, 0.6) -18.477%, rgba(177, 78, 223, 0.6) 86.036%)',
          filter: 'blur(135px)',
        }}
      />
      <div
        className="absolute bottom-[-100px] left-[30%] w-[400px] h-[400px] rounded-full z-0"
        style={{
          background: 'linear-gradient(123.42deg, rgba(5, 137, 240, 0.4) -9.565%, rgba(5, 137, 240, 0.4) 83.407%)',
          filter: 'blur(185px)',
        }}
      />

    
      <div
        className="absolute border border-white/20 w-60 h-32 z-10"
        style={{
          top: '150px',
          left: '80px',
          transform: 'skewX(-15deg) skewY(-5deg)',
        }}
      ></div>

     
      <div
        className="absolute bottom-0 left-0 w-full h-80 bg-white z-10"
        style={{
          clipPath: 'polygon(0 100%, 100% 100%, 100% 10%, 0 50%)',
        }}
      ></div>

      {/*  Hero Content */}
      <div className="relative container mx-auto z-20 p-8 text-white text-center">
        <h1 className="text-6xl mt-20 font-semibold">
          Unlock global real estate opportunities with data-driven insights
        </h1>
        <p className="mt-6 text-2xl text-center">
          Access accurate, transparent property data for 100+ countries. Compare
          <br />
          markets, analyze trends, and invest confidently.
        </p>

        <button className="px-10 py-5 mt-12 bg-white text-[#0A1532] text-2xl font-semibold rounded-xl">
          Explore Global Data
        </button>
      </div>


     <div
  className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-100 drop-shadow-xl"
   
>
  <Image src={deshbord} alt="demo" width={700} height={500} />
</div>

    </div>
  );
};

export default Hero;
