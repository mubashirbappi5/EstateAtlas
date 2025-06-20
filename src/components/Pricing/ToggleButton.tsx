"use client";
import React, { useState } from 'react';

const ToggleButton: React.FC = () => {
  const [selected, setSelected] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <div className="flex items-center gap-4">
      <span className={selected === 'monthly' ? 'text-[#0A1532] font-bold' : 'text-gray-500'}>
        Monthly
      </span>
      <button
        className="w-14 h-8  border border-[#3BA1DF] rounded-full flex items-center px-1 transition"
        onClick={() => setSelected(selected === 'monthly' ? 'yearly' : 'monthly')}
        aria-label="Toggle Monthly/Yearly"
      >
        <span
          className={`h-6 w-6 bg-[#0A1532] rounded-full shadow transition-transform duration-300 ${
            selected === 'yearly' ? 'translate-x-6' : ''
          }`}
        />
      </button>
      <span className={selected === 'yearly' ? 'text-[#0A1532] font-bold' : 'text-gray-500'}>
        Yearly
      </span>

        <span className={` ${selected === 'yearly' && 'text-[#3BA1DF] border border-[#3BA1DF] rounded-full px-2 text-sm'} `}>
            {selected === 'yearly' && '15% off'}</span>
    </div>
  );
};

export default ToggleButton;