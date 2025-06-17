"use client";
import React from "react";
import { ArrowUp, Facebook, Instagram, Twitter } from 'lucide-react';
import logo from "../../public/logo.png"
import Image from "next/image";
const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-50 pt-10 pb-6 mt-8">
      <div className="container mx-auto px-4 flex flex-wrap justify-between gap-8">
        {/* Logo and Company Info */}
        <div className="min-w-[200px]">
          <Image src={logo} alt="EstateAtlas Logo" width={150} height={50} className="mb-4" />
          <p className="text-[#4D5461] font-semibold mt-2">Empower your investment <br /> decisions using our tools.</p>
        </div>

        {/* Quick Links */}
        <div className="min-w-[150px]">
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li>
              <a href="/about" className="text-gray-600 hover:text-blue-600 transition">About Us</a>
            </li>
            <li>
              <a href="/properties" className="text-gray-600 hover:text-blue-600 transition">Properties</a>
            </li>
            <li>
              <a href="/contact" className="text-gray-600 hover:text-blue-600 transition">Contact</a>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div className="min-w-[150px]">
          <h4 className="text-lg font-semibold mb-2">Legal</h4>
          <ul className="space-y-1">
            <li>
              <a href="/privacy" className="text-gray-600 hover:text-blue-600 transition">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms" className="text-gray-600 hover:text-blue-600 transition">Terms of Service</a>
            </li>
          </ul>
        </div>

        {/* Scroll to Top Button */}
        <div className="min-w-[150px] flex items-start md:items-end justify-start md:justify-end">
          <button
            onClick={handleScrollToTop}
            className="px-2 py-2 bg-[#0A1532] text-white rounded-full font-semibold shadow  cursor-pointer transition"
          >
              <ArrowUp />
          </button>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 mx-auto border-[#3BA1DF] container" />

      {/*  Social Icons + Copyright */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className=" text-sm text-center text-[#0A1532] md:text-left"> Copyrighted
          &copy; {new Date().getFullYear()} ESTATEATLAS. All Rights Reserved
        </div>
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <Facebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
               <Twitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <Instagram/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
