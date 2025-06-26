"use client";
import { FeatureComparison } from '@/components/Auth/Signup/FeatureComparison';
import { HeroSection } from '@/components/Auth/Signup/HeroSection';
import { PricingSection } from '@/components/Auth/Signup/PricingSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';


const Page = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
   <div>
    <Navbar/>
     <div className="min-h-screen bg-white font-poppins">
      <HeroSection isYearly={isYearly} onBillingChange={setIsYearly} />
      <PricingSection isYearly={isYearly} />
      <FeatureComparison />
     
    </div>
    <Footer/>
   </div>
  );
};

export default Page;
