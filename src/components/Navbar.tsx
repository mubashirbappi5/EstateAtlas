"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/logo2.png";
import man from "../../public/man1.png";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { useUser } from "@/app/context/UserContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useUser();

  return (
    <nav className="bg-black/90 backdrop-blur-md border-b border-cyan-400/10 py-6 px-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link href="/">
          <Image src={logo} width={180} height={32} alt="EstateAtlas Logo" />
        </Link>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-cyan-400"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex space-x-12">
          {["Home", "About", "Pricing", "Articles", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-gray-300 font-semibold hover:text-cyan-400 transition"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Right side */}
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-2 px-2 py-1 h-auto hover:bg-white/5"
              >
                <div className="relative h-10 w-10 rounded-full overflow-hidden border border-cyan-400/30">
                  <Image
                    src={man}
                    alt="User Avatar"
                    width={50}
                    height={50}
                    className="object-cover"
                  />
                </div>
                <ChevronDown className="h-4 w-4 text-cyan-400" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              className="w-56 bg-black border border-cyan-400/20 text-white"
            >
              <DropdownMenuLabel className="text-cyan-400">
                {user?.first_name}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild className="cursor-pointer hover:bg-cyan-400/10">
                <Link href="/dashboard/Countries">Dashboard</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <div className="space-x-4 hidden md:flex">
            <Link
              href="/auth/login"
              className="px-6 py-3 rounded-lg border border-cyan-400/40 text-cyan-400 font-semibold hover:bg-cyan-400/10 transition"
            >
              Login
            </Link>
            <Link
              href="/auth/register"
              className="px-6 py-3 rounded-lg bg-cyan-400 text-black font-semibold shadow-[0_0_25px_rgba(0,255,255,0.8)] hover:shadow-[0_0_40px_rgba(0,255,255,1)] transition"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden mt-6 space-y-3 text-center">
          {["Home", "About", "Pricing", "Articles", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="block text-gray-300 hover:text-cyan-400 font-semibold"
            >
              {item}
            </Link>
          ))}

          {!user && (
            <div className="flex gap-3 mt-4">
              <Link
                href="/auth/login"
                className="flex-1 px-4 py-2 rounded-lg border border-cyan-400/40 text-cyan-400"
              >
                Login
              </Link>
              <Link
                href="/auth/register"
                className="flex-1 px-4 py-2 rounded-lg bg-cyan-400 text-black font-semibold"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
