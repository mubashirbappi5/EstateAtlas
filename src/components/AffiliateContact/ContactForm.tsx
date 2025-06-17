"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    captchaChecked: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const { name, value, type } = target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (target as HTMLInputElement).checked : value,
    }));
  };

  const handlePhoneChange = (value: string) => {
    setFormData((prev) => ({ ...prev, phone: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.captchaChecked) {
      alert("Please verify the CAPTCHA.");
      return;
    }
    console.log("Form Data:", formData);
    // Handle actual submit logic here
  };

  return (
    <div className="max-w-5xl mx-auto  p-14 bg-white rounded-xl border border-gray-200 shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div className="relative mt-4">
          <input
            type="text"
            name="name"
            id="firstName"
            value={formData.name}
            onChange={handleChange}
            required
            className="peer w-full px-4 pt-6 pb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A1532]"
          />
          <label
            htmlFor="firstName"
            className="absolute left-3 top-0 -translate-y-1/2 bg-white px-1 text-sm text-gray-500 transition-all peer-focus:text-[#0A1532]"
          >
            First name <span className="text-red-500">*</span>
          </label>
        </div>

        {/* Email */}
        <div className="relative mt-4">
          <input
            type="email"
            name="email"
            placeholder="yourmail@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="peer w-full px-4 pt-6 pb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A1532]"
          />
          <label
            htmlFor="email"
            className="absolute left-3 top-0 -translate-y-1/2 bg-white px-1 text-sm text-gray-500 transition-all peer-focus:text-[#0A1532]"
          >
            E-mail <span className="text-red-500">*</span>
          </label>
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            ✉️
          </div>
        </div>

        {/* Phone with react-phone-input-2 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <PhoneInput
            country={'us'}
            value={formData.phone}
            onChange={handlePhoneChange}
            inputClass="!w-full !py-3 !pl-14 !rounded-md !border !border-gray-300"
            containerClass="w-full"
            buttonClass="!bg-white"
            inputProps={{
              name: 'phone',
              required: true,
              autoFocus: false
            }}
          />
           
        </div>

        {/* Message */}
        <div className="relative mt-4">
          
          <textarea
            name="message"
            rows={5}
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
           className="peer w-full px-4 pt-6 pb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A1532]"
          ></textarea>
          <label
            htmlFor="email"
            className="absolute left-3 top-0 -translate-y-1/2 bg-white px-1 text-sm text-gray-500 transition-all peer-focus:text-[#0A1532]"
          >
           Message <span className="text-red-500">*</span>
          </label>
        </div>

        {/* CAPTCHA */}
        <div className="border border-gray-300 rounded-md p-2 flex items-center justify-between max-w-xs bg-white">
          <div className="flex items-center gap-2 pl-2">
            <input
              type="checkbox"
              name="captchaChecked"
              checked={formData.captchaChecked}
              onChange={handleChange}
              className="w-5 h-5"
            />
            <span className="text-sm text-gray-600">Click to Verify</span>
          </div>
          <div className="w-24 h-10 bg-[#0A1532] text-white flex items-center justify-center rounded-md text-xs">
            reCAPTCHA
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className=" md:w-20 w-full bg-[#0A1532] hover:bg-[#0d1d45] text-white font-semibold py-3 rounded-md transition"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
