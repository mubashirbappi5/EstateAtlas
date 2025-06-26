import React from 'react';
import { Check, X } from 'lucide-react';

export const FeatureComparison = () => {
  const features = [
    {
      category: 'Data & Analytics',
      items: [
        { name: 'Global Market Analysis', professional: true, enterprise: true },
        { name: 'Rental Yield Data', professional: true, enterprise: true },
        { name: 'Average Price per Square Meter', professional: true, enterprise: true },
        { name: 'Property Tax Information', professional: true, enterprise: true },
        { name: 'Advanced API Access', professional: false, enterprise: true },
        { name: 'Full Historical Data Downloads', professional: false, enterprise: true },
        { name: 'Market Trend Heat Maps', professional: false, enterprise: true },
      ]
    },
    {
      category: 'Reporting',
      items: [
        { name: 'Downloadable Country-Level Datasets', professional: true, enterprise: true },
        { name: 'Quarterly Market Updates', professional: true, enterprise: true },
        { name: 'Custom Report Generation', professional: false, enterprise: true },
      ]
    },
    {
      category: 'Support & Access',
      items: [
        { name: 'Standard Support', professional: true, enterprise: true },
        { name: 'Priority Support', professional: false, enterprise: true },
        { name: 'Team Access (Up to 5 seats)', professional: false, enterprise: true },
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-4xl text-[#0A1532] mb-4">
            Comprehensive Feature Comparison
          </h2>
          <p className="font-poppins text-lg text-slate-600">
            Compare every feature across our Professional and Enterprise plans
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-3 bg-slate-100 p-6">
            <div className="font-poppins font-semibold text-slate-900">Features</div>
            <div className="font-poppins font-semibold text-slate-900 text-center">Professional</div>
            <div className="font-poppins font-semibold text-slate-900 text-center">Enterprise</div>
          </div>

          {features.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="bg-slate-50 px-6 py-3 border-t">
                <h3 className="font-poppins font-semibold text-slate-800">{category.category}</h3>
              </div>
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="grid grid-cols-3 p-6 border-t border-slate-100 hover:bg-slate-50 transition-colors">
                  <div className="font-poppins text-slate-700 text-lg">{item.name}</div>
                  <div className="flex justify-center">
                    {item.professional ? (
                      <Check className="w-5 h-5 text-[#3BA1DF]" />
                    ) : (
                      <X className="w-5 h-5 text-red-700" />
                    )}
                  </div>
                  <div className="flex justify-center">
                    {item.enterprise ? (
                      <Check className="w-5 h-5 text-[#3BA1DF]" />
                    ) : (
                      <X className="w-5 h-5 text-red-700" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};