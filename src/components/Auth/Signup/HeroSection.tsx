import React from 'react';
import { BillingToggle } from './BillingToggle';

interface HeroSectionProps {
  isYearly: boolean;
  onBillingChange: (isYearly: boolean) => void;
}

export const HeroSection = ({ isYearly, onBillingChange }: HeroSectionProps) => {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="font-poppins font-bold text-5xl md:text-6xl text-slate-900 mb-6 leading-tight">
          Unlock Global Property Intelligence
        </h1>
        <p className="font-poppins text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Estate Atlas provides data-driven insights into global real estate markets, empowering investors and professionals with accurate, transparent, and actionable property data.
        </p>
        <BillingToggle isYearly={isYearly} onToggle={onBillingChange} />
      </div>
    </section>
  );
};
