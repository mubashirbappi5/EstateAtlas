import React from 'react';
import card1 from '../../../public/InsightCard1.jpg'
import Image from 'next/image';

type Variant = 'white' | 'black';

type InsightCardProps = {
  variant?: Variant; 
};

const bgColors: Record<Variant, string> = {
  white: 'white',
  black: 'black',
};
const textColors: Record<Variant, string> = {
  white: 'text-black',  
  black: 'text-white',
};
const InsightCard : React.FC<InsightCardProps> = ({ variant = 'black',}) => {



    return (
        <div>
         <div
         style={{ backgroundColor: bgColors[variant] }}
          className="bg-black rounded-xl overflow-hidden shadow-lg  p-3 border border-[#3BA1DF]">

      <Image className='rounded-lg' src={card1} alt='card1 insight'></Image>
      <div className="p-4">
        <h2
        
         className={`${textColors[variant]} text-xl font-semibold mb-2`}>Gross rental yields in Spain: Madrid, Barcelona and 9 other cities</h2>
        <p className="text-gray-400 text-sm">20-2-2029</p>
      </div>
    </div>

            
        </div>
    );
};

export default InsightCard;