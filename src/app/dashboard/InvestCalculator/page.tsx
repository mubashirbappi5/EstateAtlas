import Investcal from '@/components/dashboard/InvestCalculator/real-estate-calculator';
import { Card, CardContent } from '@/components/ui/card';
import React from 'react';

const InvestCalculator = () => {
    return (
        <div >
     
 <Investcal/>
            
    <div className='max-w-6xl mx-auto p-4  bg-white shadow-md border-0 border-t-4 border-blue-400 rounded-lg mt-10'>
        <h1 className='text-2xl font-semibold my-4'>📈  Investment Scenarios</h1>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-[#10B9811F] border-0 border-t-4 border-[#10B981] ">
            <CardContent className="p-6 text-center">
              <div className=" text-xl font-semibold text-[#10B981] mb-2">Conservative</div>
              <div className="text-sm font-bold text-gray-600">€385K Avg Price</div>
            </CardContent>
          </Card>
          <Card className="bg-[#3BA1DF1F] border-0 border-t-4 border-[#3BA1DF] ">
            <CardContent className="p-6 text-center">
              <div className=" text-xl font-semibold text-[#3BA1DF] mb-2">Moderate</div>
              <div className="text-sm font-bold text-gray-600">€385K Avg Price</div>
            </CardContent>
          </Card>
          <Card className="bg-[#FFF8EC] border-0 border-t-4 border-[#F59E0B] ">
            <CardContent className="p-6 text-center">
              <div className=" text-xl font-semibold text-[#F59E0B] mb-2">Aggressive</div>
              <div className="text-sm font-bold text-gray-600">€385K Avg Price</div>
            </CardContent>
          </Card>

         

          
        </div>

    </div>
       
        </div>
    );
};

export default InvestCalculator;