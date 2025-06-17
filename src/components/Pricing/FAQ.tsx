"use client";
import { useState } from "react";import { ChevronDown, ChevronUp } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What happens if I exceed my API call limit in the Basic plan",
    answer:
      "If you exceed the 100 API calls/month in Basic, you’ll need to upgrade to Premium for unlimited access. We’ll notify you via email before you hit the limit.",
  },
  {
    question: "Can I upgrade/downgrade later?",
    answer:
      "Yes, you can change your plan anytime from your dashboard. Changes are applied at the end of the current billing cycle.",
  },
  {
    question: "Is historical data included in Basic?",
    answer:
      "The Basic plan includes access to current data only. Historical data is available in Premium and Enterprise tiers.",
  },
  {
    question: "Can I request a feature not included in my plan?",
    answer:
      "Yes! We welcome feedback. Please contact our support or fill the feature request form.",
  },
  {
    question: "How quickly are data updates reflected in the platform?",
    answer:
      "Our data sources update every few minutes. You’ll see changes reflected in near real-time.",
  },
  {
    question: "Is there a limit on the number of users per account?",
    answer:
      "Basic accounts are limited to one user. Premium and Enterprise plans allow multiple users.",
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
              <div className="bg-[#E8F1FB] text-[#3BA1DF] font-semibold px-4 py-1 rounded-full text-sm">
                ⭐ FAQ
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
                  <p className="mt-2 text-sm text-gray-500">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
