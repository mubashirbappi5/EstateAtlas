// // import RegisterForm from '@/components/Auth/RegisterForm';
// // import React from 'react';

// // const Register = () => {
// //     return (
// //         <div>
           
// //             <div className="flex items-center justify-center h-screen"> 
// //              <RegisterForm />
// //         </div>



// //         </div>
// //     );
// // };

// // export default Register;


// "use client";
// import React, { useState } from "react";
// import { Check,} from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

// const plans = [
//   {
//     name: "Professional",
//     popular: true,
//     monthly: "$29 / month",
//     yearly: "$24 / month (Billed as $288 annually)",
//     price_id: "price_1RdSWIDgYV6zJ17vncazxwVJ",
//     features: [
//       "Global Market Analysis",
//       "Rental Yield Data",
//       "Average Price per Square Meter",
//       "Property Tax Information",
//       "Downloadable Country-Level Datasets",
//       "Quarterly Market Updates",
//     ],
//     cta: "Choose Professional",
//   },
//   {
//     name: "Enterprise",
//     popular: false,
//     monthly: "$49 / month",
//     yearly: "$44 / month (Billed as $528 annually)",
//     price_id: "price_enterprise_id", // Replace with real Stripe ID
//     features: [
//       "Everything in Professional, plus:",
//       "Advanced API Access",
//       "Full Historical Data Downloads",
//       "Market Trend Heat Maps",
//       "Priority Support",
//       "Team Access (Up to 5 seats)",
//     ],
//     cta: "Choose Enterprise",
//   },
// ];

// export default function SignupPage() {
//   const [billingCycle, setBillingCycle] = useState("monthly");
// //   const [selectedPlan, setSelectedPlan] = useState(null);

//  const handleSignup = async (price_id: string) => {
//   const payload = {
//   first_name: "John",
//   last_name: "Doe",
//   email: "alshahedbappi.cse@gmail.com",
//   password: "12345678",
//   password_confirmation: "12345678",
//   price_id:"price_1Ra9xD9pY6zJ17v4zCAQGLZ",
//   payment_method: "pm_1dRNF4b9Y6zJ17vyEKQqV7"
// };


//   try {
//     const res = await fetch("http://204.197.173.249:8014/api/register-subscribe", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(payload),
//     });

//     const data = await res.json();

//     console.log("Response Data:", data); // Log for debugging

//     if (res.ok) {
//       alert("Signup successful!");
//     } else {
//       // If the backend returns Laravel-style validation errors:
//       const errorText = data.message || data.error || "Signup failed";
//       alert(errorText);
//     }
//   } catch (err) {
//     console.error("Signup error:", err);
//     alert("Error submitting form");
//   }
// };

//   return (
//     <div className="font-[--font-poppins] text-gray-800">
//       {/* Section 1: The Hook */}
//       <section className="text-center py-20 px-4 bg-white">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">Unlock Global Property Intelligence.</h1>
//         <p className="text-lg md:text-xl max-w-2xl mx-auto">
//           Estate Atlas provides data-driven insights into global real estate markets, empowering investors and professionals with accurate, transparent, and actionable property data.
//         </p>

//         {/* Billing Toggle */}
//         <div className="mt-8 flex justify-center gap-4 items-center">
//           <button
//             className={`px-4 py-2 rounded-full border ${billingCycle === "monthly" ? "bg-[#3ba1df] text-white" : "bg-white text-[#3ba1df] border-[#3ba1df]"}`}
//             onClick={() => setBillingCycle("monthly")}
//           >
//             Monthly
//           </button>
//           <button
//             className={`relative px-4 py-2 rounded-full border ${billingCycle === "yearly" ? "bg-[#3ba1df] text-white" : "bg-white text-[#3ba1df] border-[#3ba1df]"}`}
//             onClick={() => setBillingCycle("yearly")}
//           >
//             Yearly
//             <span className="absolute -top-2 -right-3 bg-green-500 text-xs text-white px-2 py-0.5 rounded-full">Save 20%</span>
//           </button>
//         </div>
//       </section>

//       {/* Section 2: Pricing Tiers */}
//       <section className="py-16 px-4 bg-gray-50">
//         <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
//           {plans.map((plan) => (
//             <div key={plan.name} className="border rounded-2xl p-6 bg-white shadow-sm">
//               {plan.popular && (
//                 <div className="mb-2 text-sm text-white bg-blue-500 px-3 py-1 rounded-full inline-block">
//                   Most Popular
//                 </div>
//               )}
//               <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
//               <p className="text-lg font-bold">
//                 {billingCycle === "monthly" ? plan.monthly : plan.yearly}
//               </p>
//               <ul className="mt-4 space-y-2">
//                 {plan.features.map((feature, i) => (
//                   <li key={i} className="flex items-start gap-2">
//                     <Check className="text-green-600 w-5 h-5 mt-1" />
//                     <span>{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//               <Button
//                 onClick={() => handleSignup(plan.price_id)}
//                 className="mt-6 w-full bg-[#3ba1df] text-white text-lg"
//               >
//                 {plan.cta}
//               </Button>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Section 3: Feature Comparison Table */}
//       <section className="py-16 px-4 bg-white max-w-6xl mx-auto">
//         <h2 className="text-3xl font-semibold text-center mb-6">Compare Features</h2>
//         <div className="overflow-x-auto">
//           <table className="min-w-full text-left border-t border-gray-200">
//             <thead>
//               <tr className="border-b">
//                 <th className="p-4 font-medium">Feature</th>
//                 <th className="p-4 font-medium">Professional</th>
//                 <th className="p-4 font-medium">Enterprise</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="border-b">
//                 <td className="p-4">Global Market Analysis</td>
//                 <td className="p-4">✓</td>
//                 <td className="p-4">✓</td>
//               </tr>
//               <tr className="border-b">
//                 <td className="p-4">Advanced API Access</td>
//                 <td className="p-4">–</td>
//                 <td className="p-4">✓</td>
//               </tr>
//               <tr className="border-b">
//                 <td className="p-4">Full Historical Data Downloads</td>
//                 <td className="p-4">–</td>
//                 <td className="p-4">✓</td>
//               </tr>
//               <tr className="border-b">
//                 <td className="p-4">Quarterly Market Updates</td>
//                 <td className="p-4">✓</td>
//                 <td className="p-4">✓</td>
//               </tr>
//               <tr className="border-b">
//                 <td className="p-4">Priority Support</td>
//                 <td className="p-4">–</td>
//                 <td className="p-4">✓</td>
//               </tr>
//               <tr>
//                 <td className="p-4">Team Access (5 seats)</td>
//                 <td className="p-4">–</td>
//                 <td className="p-4">✓</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </section>

//       {/* Section 4: FAQ */}
//       <section className="py-16 px-4 bg-gray-50 max-w-4xl mx-auto">
//         <h2 className="text-3xl font-semibold text-center mb-6">Frequently Asked Questions</h2>
//         <Accordion type="multiple" className="space-y-2">
//           <AccordionItem value="q1">
//             <AccordionTrigger>Can I cancel my subscription at any time?</AccordionTrigger>
//             <AccordionContent>Yes, you can cancel anytime from your account settings without penalty.</AccordionContent>
//           </AccordionItem>
//           <AccordionItem value="q2">
//             <AccordionTrigger>What are your data sources?</AccordionTrigger>
//             <AccordionContent>We gather data from government agencies, real estate platforms, and proprietary datasets.</AccordionContent>
//           </AccordionItem>
//           <AccordionItem value="q3">
//             <AccordionTrigger>Is there a trial period available?</AccordionTrigger>
//             <AccordionContent>We offer a 7-day free trial with access to all Professional features.</AccordionContent>
//           </AccordionItem>
//           <AccordionItem value="q4">
//             <AccordionTrigger>How often is the data updated?</AccordionTrigger>
//             <AccordionContent>Data is updated quarterly with real-time alerts for critical market shifts.</AccordionContent>
//           </AccordionItem>
//         </Accordion>
//       </section>
//     </div>
//   );
// }
