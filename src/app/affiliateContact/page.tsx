import ContactForm from "@/components/AffiliateContact/ContactForm";
import React from "react";

const AffiliateContact = () => {
  return (
    <div className="min-h-screen ">
      <div className="md:container mx-auto  md:mb-20 mb-7 md:p-8 p-2 text-[#0A1532] text-center">
        <h1 className="md:text-6xl text-4xl mt-20 text-center  font-semibold">
          Reach Out <span className="text-[#3BA1DF]">–</span> To Our <br /> real estate experts
        </h1>
        <p className="mt-6 text-xl md:text-xl text-center text-[#80838A]">
          Have questions specific markets, data insights, or custom solutions?
          Our team is ready <br /> to assist you with any questions you may
          have.
        </p>
      </div>

{/* contact form */}
   <ContactForm/>

    </div>
  );
};

export default AffiliateContact;
