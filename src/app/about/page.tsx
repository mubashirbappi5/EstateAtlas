import Image from "next/image";
import React from "react";
import story from "../../../public/OurStory.png";
import actionbg from "../../../public/actionbg.png";
const About = () => {
  return (
    <div className=" mx-auto">
      {/* about hero */}
      <div className="md:container mx-auto  md:mb-40 mb-7 md:p-8 p-2 text-[#0A1532] text-center">
        <h1 className="md:text-6xl text-4xl mt-20 text-center  font-semibold">
          Driven By data, <br /> Guided by Integrity
        </h1>
        <p className="mt-6 text-xl md:text-xl text-center text-[#80838A]">
          At EstateAtlas, we turn complex property data into actionable insights
          for <br /> investors, analysts, and professionals worldwide.
        </p>

        <button className="md:px-10 px-6 py-5 mt-12 bg-[#0A1532] text-white md:text-2xl text-xl font-semibold rounded-xl">
          Explore Global Data
        </button>
      </div>

      {/* drop shadow in hero  */}
       <div
  className="absolute lg:flex hidden top-40 -left-40 w-[500px] h-[500px] rounded-full z-0 pointer-events-none blur-xl opacity-40"
  style={{
    background: "radial-gradient(circle at center, rgba(10, 21, 50, 0.5) 0%, rgba(10, 21, 50, 0.2) 60%, rgba(255, 255, 255, 0) 100%)",
  }}
></div>
      <div
 style={{
    background: "radial-gradient(circle at center, rgba(10, 21, 50, 0.5) 0%, rgba(10, 21, 50, 0.2) 60%, rgba(255, 255, 255, 0) 100%)",
  }}
  className="absolute lg:flex hidden top-[1400px] left-[-150px]  w-[500px] h-[500px] rounded-full z-0 pointer-events-none blur-xl opacity-70"
></div>

      

      {/* about our story */}

      <section className="border-y-2  border-dashed  py-5">
        <div>
          <h1 className=" md:text-5xl text-4xl font-semibold text-center text-[#0A1532]">
            Our Story
          </h1>
        </div>

        <section className="grid lg:grid-cols-2 grid-cols-1 gap-4 lg:gap-0 mt-20 mb-10 md:container lg:px-20 px-5 mx-auto">
          <div className=" flex justify-center items-center">
            <Image src={story} width={516} height={452} alt="our story"></Image>
          </div>
          <div className="space-y-5 text-center lg:text-left">
            <h3 className="text-2xl text-[#000929] font-semibold">
              Pioneering Transparency in Global Real Estate
            </h3>
            <p className="text-[#80838A] text-2xl ">
              Founded in 2025 by a team of frustrated investors and data
              scientists, EstateAtlas began as a mission to solve one problem:
              the lack of reliable, centralized property data. What started as a
              10-market prototype for European commercial real estate quickly
              evolved into a global platform, fueled by demand from analysts
              tired of outdated reports and opaque metrics. Today, we cover 100+
              countries, empower 500K+ professionals, and process 15K+ hourly
              data updates—all while staying true to our founding principle:
              democratizing access to insights that level the playing field for
              investors, big or small.
            </p>
          </div>
        </section>
      </section>

      {/* Action bannner */}

      <section className="container mx-auto my-20 px-4">
        <div
          className="relative rounded-2xl text-white text-center py-20 px-6 overflow-hidden"
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

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-semibold leading-snug">
              Join 10,000+ Global Users Leveraging <br />
              Data-Driven Real Estate Insights
            </h2>

            <button className="mt-8 px-6 py-3 bg-white text-[#0A1532] font-semibold text-base md:text-lg rounded-xl shadow hover:bg-gray-100 transition duration-300">
              Get Started ✨
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
