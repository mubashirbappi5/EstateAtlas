
"use client";
import ToggleButton from "@/components/Pricing/ToggleButton";
import React, { useState } from "react";
import {
  CircleCheck,
  CreditCard,
  Globe,
  Headset,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import actionbg from "../../../public/actionbg.png";
import FAQ from "@/components/Pricing/FAQ";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { useRouter } from "next/navigation";
const Pricing = () => {

   const router = useRouter();

   const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

 
 const getPrices = () => {
    const prices = {
      professional: {
        monthly: 29,
        yearly: 24,
      },
      enterprise: {
        monthly: 49,
        yearly: 44,
      },
    };

    return {
      professionalPrice: prices.professional[billingCycle],
      enterprisePrice: prices.enterprise[billingCycle],
      note: billingCycle === "yearly" ? "Special yearly price" : "Billed monthly",
    };
  };

  const { professionalPrice, enterprisePrice,  } = getPrices();
  const handlesubscription1 =  () => {
    router.push('/auth/register')
  }
  return (
    <div>
      <Navbar />
      {/* Pricing hero section */}
      <div className="md:container mx-auto md:mb-20 mb-7 md:p-8 p-2 text-[#0A1532] text-center">
        <h1 className="md:text-6xl text-4xl mt-20 text-center font-semibold leading-relaxed md:leading-[5rem]">
          Simple, Transparent Pricing To <br /> Unlock Global Real Estate
          Insights
        </h1>
        <p className="mt-6 text-xl md:text-xl text-center text-[#80838A] leading-loose">
          Access global real estate insights tailored to your needs. No hidden
          fees, cancel anytime.
        </p>

        <div className="flex justify-center mt-10">
              <ToggleButton selected={billingCycle} onChange={setBillingCycle} />
        </div>

        <div
          className="absolute top-40 -left-40 w-[500px] h-[500px] rounded-full z-0 pointer-events-none blur-xl opacity-40"
          style={{
            background:
              "radial-gradient(circle at center, rgba(10, 21, 50, 0.5) 0%, rgba(10, 21, 50, 0.2) 60%, rgba(255, 255, 255, 0) 100%)",
          }}
        ></div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-20 mb-10 mx-auto">
          <div className="flex items-end">
            {/* Basic Plan */}
            <div className="relative bg-white p-8 rounded-lg border border-[#0A1532] w-full mx-auto">
              <div className="absolute top-4 right-4 bg-[#3BA1DF] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide shadow-lg">
                Best Plan
              </div>

              <div className="flex flex-col items-start mb-6">
                <h2 className="text-2xl font-bold text-[#0A1532] mb-1">
                  Professional Tier
                </h2>
                <h4 className="text-gray-600">For Individual Analysts</h4>
              </div>

              <div className="mb-6">
                <p className="text-3xl font-bold text-[#0A1532] mb-2">
                 ${professionalPrice}/month
                </p>
                <p className={`text-gray-500 text-sm ${billingCycle === "monthly" ? "invisible" : ""}`}>
                  Billed as $288 annually
                </p>
              </div>

              <button onClick={handlesubscription1} className="bg-[#0A1532] text-white w-full py-3   rounded-lg text-center font-medium transition hover:bg-[#0d1d45]">
                Get Started
              </button>

              <ul className="text-left space-y-3 mt-6 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">
                    <CircleCheck />
                  </span>
                  Global Market Analysis
                </li>
                <li className="flex items-start">
                  <span className="mr-2">
                    <CircleCheck />
                  </span>
                  Rental Yield Data
                </li>
                <li className="flex items-start">
                  <span className="mr-2">
                    <CircleCheck />
                  </span>
                  Average Price per Square Meter
                </li>
                <li className="flex items-start">
                  <span className="mr-2">
                    <CircleCheck />
                  </span>
                  Property Tax Information
                </li>
                <li className="flex items-start">
                  <span className="mr-2">
                    <CircleCheck />
                  </span>
                  Downloadable Country-Level Datasets
                </li>
                <li className="flex items-start">
                  <span className="mr-2">
                    <CircleCheck />
                  </span>
                  Quarterly Market Updates
                </li>
              </ul>
            </div>
          </div>
          {/* Pro Plan */}
          <div>
            <div className="relative bg-[#0A1532] p-8 rounded-lg border border-[#0A1532] w-full mx-auto min-h-[550px]">
              <div className="flex flex-col items-start mb-6">
                <h2 className="text-2xl font-bold text-white mb-1">
                  Enterprise Tier
                </h2>
                <h4 className="text-white">
                  Most Popular – For Teams & Professionals
                </h4>
              </div>

              <div className="mb-6">
                <p className="text-3xl font-bold text-white mb-2">  ${enterprisePrice}/month</p>
                <p className={`text-white text-sm ${billingCycle === "monthly" ? "invisible" : ""}`}>
                 Billed as $528 annually
                </p>
              </div>

              <button onClick={handlesubscription1} className="bg-white text-[#0A1532] w-full py-3 rounded-lg text-center font-medium transition ">
                Get Started
              </button>

              <ul className="text-left space-y-3 mt-6 text-white">
                <li className="flex items-start">
                  <span className="mr-2">
                    <CircleCheck />
                  </span>
                  Everything in Professional, plus:
                </li>
                <li className="flex items-start">
                  <span className="mr-2">
                    <CircleCheck />
                  </span>
              Advanced API Access
                </li>
                <li className="flex items-start">
                  <span className="mr-2">
                    <CircleCheck />
                  </span>
             Full Historical Data Downloads
                </li>
                <li className="flex items-start">
                  <span className="mr-2">
                    <CircleCheck />
                  </span>
               Market Trend Heat Maps
                </li>
                <li className="flex items-start">
                  <span className="mr-2">
                    <CircleCheck />
                  </span>
              Priority Support
                </li>
                <li className="flex items-start">
                  <span className="mr-2">
                    <CircleCheck />
                  </span>
                  Team Access (Up to 5 seats)
                </li>
                
              </ul>
            </div>
          </div>
        </div>

        {/* action btn */}

        <section className=" my-30 ">
          <div
            className="relative  rounded-4xl text-white py-14 px-8 md:px-16 overflow-hidden"
            style={{
              background: "linear-gradient(90deg, #0A1532 0%, #121C3C 100%)",
            }}
          >
            <div className="absolute inset-0 z-0 opacity-40">
              <Image
                src={actionbg}
                alt="Action Background"
                fill
                className="object-cover object-[35%_center]"
                priority
              />
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col md:flex-row items-start justify-between gap-10">
              <div className="">
                <h2 className="text-5xl leading-relaxed md:leading-[4rem] md:text-5xl text-left font-bold mb-4">
                  Still Unsure? Try <br /> EstateAtlas Risk-Free
                </h2>
                <button className="mt-4 bg-white text-[#0A1532] font-semibold px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-200 transition">
                  Button Text{" "}
                  <span>
                    <Sparkles className="w-5 h-5 text-[#0A1532]" />
                  </span>
                </button>
              </div>

              {/* Features */}
              <div className="grid gap-4">
                <div
                  className="rounded-lg p-4 flex items-start gap-3 max-w-sm"
                  style={{
                    background:
                      "linear-gradient(139.97deg, rgba(255, 255, 255, 0.08) 5.916%, rgba(255, 255, 255, 0.18) 90.97%)",
                  }}
                >
                  <div className="bg-[#FFFFFF1A] rounded-xl p-3">
                    <CreditCard />
                  </div>

                  <div className="text-left">
                    <h4 className="font-bold text-white">
                      Data Driven Accuracy
                    </h4>
                    <p className="text-sm text-gray-300">
                      Audited data by trusted sources.
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    background:
                      "linear-gradient(139.97deg, rgba(255, 255, 255, 0.08) 5.916%, rgba(255, 255, 255, 0.18) 90.97%)",
                  }}
                  className="rounded-lg p-4 flex items-start gap-3  max-w-sm"
                >
                  <div className="bg-[#FFFFFF1A] rounded-xl p-3 ">
                    <Globe />
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold">Global Coverage</h4>
                    <p className="text-sm text-gray-300">
                      Access real-time insights across 100+ countries, from
                      established markets.
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    background:
                      "linear-gradient(139.97deg, rgba(255, 255, 255, 0.08) 5.916%, rgba(255, 255, 255, 0.18) 90.97%)",
                  }}
                  className="rounded-lg p-4 flex items-start  max-w-sm gap-3"
                >
                  <div className="bg-[#FFFFFF1A] rounded-xl p-3 ">
                    <Headset />
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold">Dedicated Support</h4>
                    <p className="text-sm text-gray-300">
                      Our team is here to assist you every step of the way
                      during your analysis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* faq section */}

        <section className="mt-20">
          <FAQ />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
