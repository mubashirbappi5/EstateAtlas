"use client";
import React from 'react';
import { PricingCard } from './PricingCard';

interface PricingSectionProps {
  isYearly: boolean;
}

export const PricingSection = ({ isYearly }: PricingSectionProps) => {
  const professionalFeatures = [
    'Global Market Analysis',
    'Rental Yield Data',
    'Average Price per Square Meter',
    'Property Tax Information',
    'Downloadable Country-Level Datasets',
    'Quarterly Market Updates'
  ];

  const enterpriseFeatures = [
    'Everything in Professional, plus:',
    'Advanced API Access',
    'Full Historical Data Downloads',
    'Market Trend Heat Maps',
    'Priority Support',
    'Team Access (Up to 5 seats)'
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <PricingCard
            title="Professional"
            subtitle="Individual investors, analysts, and digital nomads"
            monthlyPrice={29}
            yearlyPrice={24}
            isYearly={isYearly}
            features={professionalFeatures}
            ctaText="Choose Professional"
            isPopular={true}
            plan={'basic'}
          />
          <PricingCard
            title="Enterprise"
            subtitle="Institutional buyers, private equity firms, and real estate agencies"
            monthlyPrice={49}
            yearlyPrice={44}
            isYearly={isYearly}
            features={enterpriseFeatures}
            ctaText="Choose Enterprise"
            isPopular={false}
            plan={'premium'}
          />
        </div>
      </div>
    </section>
  );
};
