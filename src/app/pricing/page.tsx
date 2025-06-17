import ToggleButton from "@/components/Pricing/ToggleButton";
import React from "react";
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import actionbg from "../../../public/actionbg.png";
import FAQ from "@/components/Pricing/FAQ";
const Pricing = () => {
  return (
    <div>
      {/* Pricing hero section */}
      <div className="md:container mx-auto md:mb-40 mb-7 md:p-8 p-2 text-[#0A1532] text-center">
        <h1 className="md:text-6xl text-4xl mt-20 text-center font-semibold leading-relaxed md:leading-[5rem]">
          Simple, Transparent Pricing To <br /> Unlock Global Real Estate
          Insights
        </h1>
        <p className="mt-6 text-xl md:text-xl text-center text-[#80838A] leading-loose">
          Access global real estate insights tailored to your needs. No hidden
          fees, cancel anytime.
        </p>

        <div className="flex justify-center mt-10">
          <ToggleButton />
        </div>
        <section>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-20 mb-10 mx-auto">
            <div className="flex items-end">
              {/* Basic Plan */}
              <div className="relative bg-white p-8 rounded-lg border border-[#0A1532] w-full mx-auto">
                <div className="absolute top-4 right-4 bg-[#3BA1DF] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide shadow-lg">
                  Best Plan
                </div>

                <div className="flex flex-col items-start mb-6">
                  <h2 className="text-2xl font-bold text-[#0A1532] mb-1">
                    Basic Tier
                  </h2>
                  <h4 className="text-gray-600">For Individual Analysts</h4>
                </div>

                <div className="mb-6">
                  <p className="text-3xl font-bold text-[#0A1532] mb-2">
                    $99/month
                  </p>
                  <p className="text-gray-500 text-sm">
                    Save 15% annually ($296/year)
                  </p>
                </div>

                <button className="bg-[#0A1532] text-white w-full py-3 rounded-lg text-center font-medium transition hover:bg-[#0d1d45]">
                  Get Started
                </button>

                <ul className="text-left space-y-3 mt-6 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">
                      <CircleCheck />
                    </span>
                    Access to 100+ global markets
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">
                      <CircleCheck />
                    </span>
                    Basic analytics tools
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">
                      <CircleCheck />
                    </span>
                    Email support
                  </li>
                </ul>
              </div>
            </div>
            {/* Pro Plan */}
            <div>
              <div className="relative bg-[#0A1532] p-8 rounded-lg border border-[#0A1532] w-full mx-auto min-h-[520px]">
                <div className="flex flex-col items-start mb-6">
                  <h2 className="text-2xl font-bold text-white mb-1">
                    Premium Tier
                  </h2>
                  <h4 className="text-white">
                    Most Popular – For Teams & Professionals
                  </h4>
                </div>

                <div className="mb-6">
                  <p className="text-3xl font-bold text-white mb-2">
                    $99/month
                  </p>
                  <p className="text-white text-sm">
                    Save 15% annually ($999/year)
                  </p>
                </div>

                <button className="bg-white text-[#0A1532] w-full py-3 rounded-lg text-center font-medium transition ">
                  Get Started
                </button>

                <ul className="text-left space-y-3 mt-6 text-white">
                  <li className="flex items-start">
                    <span className="mr-2">
                      <CircleCheck />
                    </span>
                    Access to 100+ global markets
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">
                      <CircleCheck />
                    </span>
                    Advanced analytics & forecasting tools
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">
                      <CircleCheck />
                    </span>
                    Dedicated account manager
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">
                      <CircleCheck />
                    </span>
                    Priority email and chat support
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">
                      <CircleCheck />
                    </span>
                    API access
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* action btn */}

        <section className=" my-20 ">
          <div
            className="relative rounded-2xl text-white py-14 px-8 md:px-16 overflow-hidden"
            style={{
              background: "linear-gradient(90deg, #0A1532 0%, #121C3C 100%)",
            }}
          >
            <div className="absolute inset-0 z-0 opacity-10">
              <Image
                src={actionbg}
                alt="Action Background"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col md:flex-row items-start justify-between gap-8">
              <div className="">
                <h2 className="text-3xl md:text-4xl text-left font-bold mb-4">
                  Still Unsure? Try <br /> EstateAtlas Risk-Free
                </h2>
                <button className="mt-4 bg-white text-[#0A1532] font-semibold px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-200 transition">
                  Button Text
                </button>
              </div>

              {/* Features */}
              <div className="grid gap-4">
                <div className="bg-[#1B274B] rounded-lg p-4 flex items-start gap-3">
                  <div>
                    <h4 className="font-bold">Data Driven Accuracy</h4>
                    <p className="text-sm text-gray-300">
                      Audited data by trusted sources.
                    </p>
                  </div>
                </div>
                <div className="bg-[#1B274B] rounded-lg p-4 flex items-start gap-3">
                  <div>
                    <h4 className="font-bold">Global Coverage</h4>
                    <p className="text-sm text-gray-300">
                      Access real-time insights across 100+ countries, from
                      established markets.
                    </p>
                  </div>
                </div>
                <div className="bg-[#1B274B] rounded-lg p-4 flex items-start gap-3">
                  <div>
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

       <FAQ/>

      </div>
    </div>
  );
};

export default Pricing;
