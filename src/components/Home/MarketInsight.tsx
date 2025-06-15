import React from 'react';
import InsightCard from './InsightCard';

const MarketInsight = () => {
     const cards = Array.from({ length: 6 });
  return (
    <div className="min-h-screen bg-[#050d2e] relative overflow-hidden my-10">
      {/* Glowing Radial Backgrounds */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-[radial-gradient(circle_at_15%_40%,_rgba(22,61,123,0.4)_0%,_transparent_60%)]" />
        <div className="w-full h-full bg-[radial-gradient(circle_at_75%_80%,_rgba(13,46,98,0.3)_0%,_transparent_60%)]" />
        <div className="w-full h-full bg-[radial-gradient(circle_at_60%_20%,_rgba(11,41,90,0.25)_0%,_transparent_60%)]" />
        <div className="w-full h-full bg-[radial-gradient(circle_at_30%_85%,_rgba(19,55,105,0.2)_0%,_transparent_60%)]" />
      </div>

      {/* Content Area */}
      <div className="relative z-10 py-10 container mx-auto">
      

        <h1 className='font-semibold text-5xl text-center text-white'>Latest Market Insights</h1>

  {/* cards */}
        <section className='grid grid-cols-3 gap-15 my-14'>
           {cards.map((_, index) => (
        <InsightCard key={index} />
      ))}





        </section>

<div className='flex justify-center items-center'>
    
           <button className='py-3 px-4 bg-white rounded-lg text-[#0A1532]'>All Articles</button>
</div>
      </div>
    </div>
  );
};

export default MarketInsight;
