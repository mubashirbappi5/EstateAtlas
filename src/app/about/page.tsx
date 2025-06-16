import Image from "next/image";
import React from "react";
import story from "../../../public/OurStory.png";
const About = () => {
  return (
    <div className=" mx-auto">
      {/* about hero */}
      <div className="md:container mx-auto  mb-40 md:p-8 p-2 text-[#0A1532] text-center">
        <h1 className="md:text-6xl text-4xl mt-20  font-semibold">
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
   <div  style={{
    background: 'radial-gradient(42.72% 42.72% at 20% 50%, rgba(10, 21, 50, 0.7), rgba(255, 255, 255, 0) 90%)',
  }} className="absolute top-56 left-[-100px] w-[400px] h-[400px] rounded-full z-0">

   </div>
      {/* about our story */}

      <section className="border-y-2  border-dashed  py-5">
        <div>
          <h1 className=" md:text-5xl text-3xl font-semibold text-center text-[#0A1532]">
            Our Story
          </h1>
        </div>


        <section className="grid md:grid-cols-2  mt-20 mb-10 container px-20 mx-auto">
          <div>
          <Image src={story} width={516} height={452} alt="our story"></Image>

          </div>
          <div className="space-y-5">
            <h3 className="text-2xl text-[#000929] font-semibold">Pioneering Transparency in Global Real Estate</h3>
            <p className="text-[#80838A] text-2xl ">Founded in 2025 by a team of frustrated investors and data  scientists, EstateAtlas began as a mission to solve one problem: the  lack of reliable, centralized property data. What started as a 10-market prototype for European commercial real estate quickly evolved into a  global platform, fueled by demand from analysts tired of outdated  reports and opaque metrics. Today, we cover 100+ countries, empower  500K+ professionals, and process 15K+ hourly data updates—all while  staying true to our founding principle: democratizing access to insights that level the playing field for investors, big or small.</p>


          </div>



        </section>
      </section>
    </div>
  );
};

export default About;
