"use client";
import { useState } from "react";import { ChevronDown, ChevronUp } from "lucide-react";
import { Sparkles } from 'lucide-react';

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Q1 What is Nimbus and how does it differ from other analytics platforms?",
    answer:
      "Nimbus is an AI-powered business analytics platform designed to provide real-time insights, predictive analytics, and seamless integrations with various tools. Unlike traditional analytics platforms, Nimbus harnesses the power of artificial intelligence to offer more accurate forecasts, customizable dashboards, and a user-friendly interface tailored for businesses of all sizes.",
  },
  {
    question: "Q2 Can I upgrade/downgrade later?",
    answer:
      "Neuros's AI-driven predictive analytics utilizes advanced machine learning algorithms to analyze historical data and identify patterns. By doing so, it can anticipate future trends, market shifts, and potential challenges, allowing businesses to make informed decisions proactively.",
  },
  {
    question: "Q3 Is historical data included in Basic?",
    answer:
      "Absolutely! At Neuros, we prioritize data security. All data processed and stored on our platform is encrypted using industry-standard protocols. Additionally, we have stringent access controls in place to ensure that only authorized personnel can access sensitive information.",
  },
  {
    question: "Q4 Can I request a feature not included in my plan?",
    answer:
      "Yes, Neuros is designed to seamlessly integrate with a wide range of business tools, CRMs, ERPs, and other platforms. Our goal is to provide a unified analytics experience, ensuring you have a holistic view of your operations.",
  },
  {
    question: "Q5 How quickly are data updates reflected in the platform?",
    answer:
      "Neuros offers transparent pricing with various plans to cater to different business needs. All our pricing details are listed on the Pricing page. There are no hidden fees, and you can choose a plan that best fits your requirements.",
  },
  {
    question:"Q6 Is there a limit on the number of users per account?",
    answer:
      "Absolutely! We understand that analytics can be overwhelming, especially if you're new to it. Neuros offers a range of tutorials, user guides, and dedicated customer support to assist you at every step. Our aim is to make your Neuros experience as smooth and beneficial as possible.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container mx-auto mt-10 px-4">
      <div className="  ">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Side */}
          <div className="flex flex-col gap-4 text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className=" px-4 py-2 rounded-full flex items-center border shadow gap-2">
              <Sparkles className="w-5 h-5 text-[#3BA1DF] " />
                <h4 className="text-gray-500 font-semibold text-lg"> FAQ</h4>
             
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1532] mb-4">
              Frequently Asked <br /> Questions
            </h2>
            <p className="text-gray-500">
              Find quick answers to some of the most common <br /> questions about ESTATEATLAS.
            </p>
          </div>

          {/* Right Side Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button
                  className="w-full flex justify-between items-center text-left text-[#0A1532] font-semibold text-lg hover:text-[#3BA1DF] transition"
                  onClick={() => toggleIndex(index)}
                >
                  <span className="flex items-start gap-2">
                    <span className="text-[#3BA1DF] text-xl">|</span>
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="text-[#3BA1DF]" />
                  ) : (
                    <ChevronDown />
                  )}
                </button>
                {openIndex === index && (
                  <p className="mt-2 text-sm text-gray-500 text-left">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
