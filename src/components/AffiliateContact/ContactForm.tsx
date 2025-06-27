"use client";

import React, { useState, useRef } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import ReCAPTCHA from "react-google-recaptcha";

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";


const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const { name, value } = target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhoneChange = (value: string) => {
    setFormData((prev) => ({ ...prev, phone: value }));
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
    if(value) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaValue) {
      setError("Please verify the CAPTCHA.");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // Prepare data including captcha token
      const payload = {
        ...formData,
        'g-recaptcha-response': captchaValue, // most backends expect this key name
      };

      const res = await fetch("http://real-state-business-management-system-api.test/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Failed to send message.");
      } else {
        setSuccess("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        recaptchaRef.current?.reset();
        setCaptchaValue(null);
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-14 bg-white rounded-xl border border-gray-200 shadow-sm">
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

        {/* Phone */}
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
          />
          <label
            htmlFor="message"
            className="absolute left-3 top-0 -translate-y-1/2 bg-white px-1 text-sm text-gray-500 transition-all peer-focus:text-[#0A1532]"
          >
            Message <span className="text-red-500">*</span>
          </label>
        </div>

        {/* reCAPTCHA */}
        <div className="mt-4">
          <ReCAPTCHA
            sitekey={SITE_KEY}
            onChange={handleCaptchaChange}
            
            ref={recaptchaRef}
          />
          {error && (
            <p className="mt-2 text-red-500 text-sm">{error}</p>
          )}
          {success && (
            <p className="mt-2 text-green-500 text-sm">{success}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="md:w-20 w-full bg-[#0A1532] hover:bg-[#0d1d45] text-white font-semibold py-3 rounded-md transition disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
