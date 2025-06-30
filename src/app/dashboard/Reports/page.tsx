import React from 'react';

const Reports = () => {
    return (
        <div className='w-full h-screen max-w-6xl mx-auto space-y-10 bg-gray-50'>
           <h1 className='text-4xl font-semibold'>Quarterly Reports 👑</h1>
           <div  style={{
          background: 'linear-gradient(-33.05deg, rgb(59, 161, 223) -19.632%, rgb(10, 21, 50) 102.453%)',
        }} className='md:px-10 px-5 py-20  text-center  text-white rounded-lg shadow-lg'>
           <div className='max-w-3xl mx-auto space-y-4'>
             <h1 className='text-8xl'>👑</h1>
            <h2 className='text-2xl md:text-4xl'>Premium Feature - Quarterly Reports</h2>
      <p className='text-lg md:text-xl'>Access comprehensive quarterly market reports with in-depth analysis, forecasts, and investment recommendations from our expert analysts.</p>
           </div>
           </div>
            
        </div>
    );
};

export default Reports;