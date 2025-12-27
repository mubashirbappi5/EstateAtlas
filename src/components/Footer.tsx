"use client";
import React from "react";
import { ChevronUp, Facebook, Instagram, Twitter } from "lucide-react";
import logo from "../../public/logo2.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="pt-14 pb-10 border-t border-cyan-400/10 bg-black text-white relative overflow-hidden">

      {/* Subtle neon glow */}
      <div
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(0,255,255,0.5), transparent 70%)",
          filter: "blur(200px)",
        }}
      />

      <div className="relative max-w-7xl px-4 mx-auto grid grid-cols-1 items-start md:grid-cols-2 gap-10 z-10">
        
        {/* Left: Logo and Tagline */}
        <div>
          <Image
            src={logo}
            alt="EstateAtlas Logo"
            width={190}
            height={52}
            className="mb-4"
          />
          <p className="text-gray-300 text-[18px] font-medium mt-2">
            Empower your investment <br /> decisions using our tools.
          </p>
        </div>

        {/* Right: Links + Scroll */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-16">
          
          {/* Company */}
          <div>
            <h4 className="text-2xl font-semibold mb-4 text-cyan-400">
              Company
            </h4>
            <ul className="space-y-4">
              {["About Us", "Pricing", "Articles", "Contact us"].map((item) => (
                <li key={item}>
                  <a
                    href="/"
                    className="text-gray-400 hover:text-cyan-400 text-lg transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-2xl font-semibold mb-4 text-cyan-400">
              Legal
            </h4>
            <ul className="space-y-4">
              {[
                "Terms of Service",
                "Privacy Policy",
                "Cookies Policy",
                "Data Disclaimer",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="/legal"
                    className="text-gray-400 hover:text-cyan-400 text-lg transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Scroll to top */}
          <div className="relative flex items-start md:items-end justify-start md:justify-end">
            <Button
              size="icon"
              className="
                absolute top-4 right-4
                bg-cyan-400 text-black p-8 rounded-xl
                shadow-[0_0_35px_rgba(0,255,255,0.9)]
                hover:shadow-[0_0_55px_rgba(0,255,255,1)]
                transition
              "
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
            >
              <ChevronUp className="h-10 w-10" />
            </Button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-10 mx-auto border-cyan-400/30 container" />

      {/* Bottom Bar */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
        <div className="text-sm text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} ESTATEATLAS. All Rights Reserved
        </div>

        <div className="flex space-x-5">
          {[Facebook, Twitter, Instagram].map((Icon, idx) => (
            <a
              key={idx}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
