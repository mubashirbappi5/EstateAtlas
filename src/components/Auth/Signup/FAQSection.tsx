import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Can I cancel my subscription at any time?",
      answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. Your access will continue until the end of your current billing period."
    },
    {
      question: "What are your data sources?",
      answer: "Estate Atlas aggregates data from multiple reliable sources including government databases, MLS systems, property portals, and verified real estate transactions. We ensure data accuracy through rigorous validation processes and regular updates."
    },
    {
      question: "Is there a trial period available?",
      answer: "We offer a 14-day free trial for new users to explore our platform and see the value of our global property intelligence. No credit card required to start your trial."
    },
    {
      question: "How often is the data updated?",
      answer: "Our data is updated continuously, with most markets receiving updates daily or weekly depending on local data availability. Quarterly market reports are published every three months with comprehensive analysis."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee for new subscriptions. If you're not satisfied with our service within the first 30 days, we'll provide a full refund."
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades will take effect at the start of your next billing cycle. You'll be charged or credited the prorated difference."
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className=" max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-4xl text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-poppins text-lg text-slate-600">
            Get answers to common questions about Estate Atlas
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-slate-50 rounded-lg px-6 border border-slate-200"
            >
              <AccordionTrigger className="font-poppins font-semibold text-[#0A1532] text-xl hover:text-[#3BA1DF] transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-poppins text-lg text-slate-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};