"use client";

import Navbar from "@/components/Navbar";
import React from "react";

const LegalPage = () => {
  return (
    <div className="bg-white text-gray-800">
         <Navbar/>
        <div className=" p-6 max-w-4xl mx-auto space-y-12">
       
      <section>
        <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
        <p>Effective Date: June 30, 2025</p>
        <p className="mt-4">
          By accessing and using Estate Atlas’s services at estateatlas.com, you agree to comply with and be bound by these terms. If you do not agree, please do not use our site.
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>You agree to use the website for lawful purposes only.</li>
          <li>All content is owned by Estate Atlas and protected by copyright laws.</li>
          <li>We may update these terms at any time without notice.</li>
          <li>Estate Atlas is not liable for any damages resulting from use of the site.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
        <p>Effective Date: June 30, 2025</p>
        <p className="mt-4">
          Estate Atlas respects your privacy. This policy explains how we collect, use, and protect your data.
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>We collect data like name, email, and browsing behavior.</li>
          <li>Data is used to improve our services and communicate with you.</li>
          <li>We do not sell your personal information to third parties.</li>
          <li>Security measures are in place to protect your information.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Cookies Policy</h2>
        <p>Effective Date: June 30, 2025</p>
        <p className="mt-4">
          We use cookies to provide a better user experience and understand usage trends.
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>Cookies help us improve performance and personalize content.</li>
          <li>You can control cookies through your browser settings.</li>
          <li>Disabling cookies may affect site functionality.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Data Disclaimer</h2>
        <p>Effective Date: June 30, 2025</p>
        <p className="mt-4">
          Estate Atlas makes every effort to ensure data accuracy, but we cannot guarantee it. Use of data is at your own risk.
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>Information is provided as is with no warranties.</li>
          <li>We are not responsible for third-party content or errors.</li>
          <li>You agree to independently verify any information before relying on it.</li>
        </ul>
      </section>

      <footer className="text-sm text-gray-500 mt-10">
        For questions, contact us at <a href="mailto:support@estateatlas.com" className="underline">support@estateatlas.com</a>
      </footer>
    </div>
    </div>
  );
};

export default LegalPage;