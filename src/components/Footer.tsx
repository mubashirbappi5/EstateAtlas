"use client";
import React from "react";
import {  ChevronUp, Facebook, Instagram, Twitter } from 'lucide-react';
import logo from "../../public/logo.png"
import Image from "next/image";
import { Button } from "@/components/ui/button"
const Footer = () => {
  // const handleScrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  return (
    <footer className="bg-gray-50 pt-10  pb-10 mt-8">
      <div className="max-w-7xl px-4 mx-auto flex flex-wrap justify-between gap-8">
        {/* Logo and Company Info */}
        <div className="min-w-[200px]">
          <Image src={logo} alt="EstateAtlas Logo" width={199} height={52} className="mb-4" />
          <p className="text-[#4D5461] text-[19px] font-semibold mt-2">Empower your investment <br /> decisions using our tools.</p>
        </div>

        {/* Quick Links */}
        <div className="min-w-[150px]">
          <h4 className="text-2xl font-semibold mb-4">Company</h4>
          <ul className="space-y-4">
            <li>
              <a href="/about" className="text-gray-600 hover:text-blue-600 text-lg transition">About Us</a>
            </li>
            <li>
              <a href="/properties" className="text-gray-600 hover:text-blue-600 text-lg transition">Pricing</a>
            </li>
            <li>
              <a href="/contact" className="text-gray-600 hover:text-blue-600 text-lg transition">Articles</a>
            </li>
            <li>
              <a href="/contact" className="text-gray-600 hover:text-blue-600 text-lg transition">Contact us</a>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div className="min-w-[150px]">
          <h4 className="text-2xl font-semibold mb-4">Legal</h4>
          <ul className="space-y-4">
            <li>
              <a href="/privacy" className="text-gray-600 hover:text-blue-600 text-lg transition">Terms of service</a>
            </li>
            <li>
              <a href="/terms" className="text-gray-600 hover:text-blue-600 text-lg transition">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms" className="text-gray-600 hover:text-blue-600 text-lg transition">Cookies Policy</a>
            </li>
            <li>
              <a href="/terms" className="text-gray-600 hover:text-blue-600 text-lg transition">Data Disclaimer</a>
            </li>
          </ul>
        </div>

        {/* Scroll to Top Button */}
         <div className="min-w-[150px] relative flex items-start md:items-end justify-start md:justify-end">
           <Button
        size="icon"
        className="absolute top-4 right-4 bg-gray-900 hover:bg-gray-800 p-8 text-white rounded-lg"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ChevronUp className="h-10 w-10" />
      </Button>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 mx-auto border-[#3BA1DF] container" />

      {/*  Social Icons + Copyright */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className=" text-lg text-center text-[#0A1532] md:text-left"> Copyrighted
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
