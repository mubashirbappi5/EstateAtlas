import React from 'react';

interface BillingToggleProps {
  isYearly: boolean;
  onToggle: (isYearly: boolean) => void;
}

export const BillingToggle = ({ isYearly, onToggle }: BillingToggleProps) => {
  return (
    <div className="flex items-center justify-center gap-4 mb-8">
      <span className={`font-poppins font-medium ${!isYearly ? 'text-slate-900' : 'text-slate-500'}`}>
        Monthly
      </span>
      <button
        onClick={() => onToggle(!isYearly)}
        className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#3BA1DF] focus:ring-offset-2 border border-[#3BA1DF]
        }`}
      >
        <span
          className={`inline-block h-6 w-6 transform rounded-full bg-[#0A1532] transition-transform ${
            isYearly ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
      <span className={`font-poppins font-medium flex items-center gap-2 ${isYearly ? 'text-slate-900' : 'text-slate-500'}`}>
        Yearly
        <span className="border border-[#3BA1DF] text-[#3BA1DF] text-xs px-2 py-1 rounded-full font-semibold">
          Save 20%
        </span>
      </span>
    </div>
  );
};