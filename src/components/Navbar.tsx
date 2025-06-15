"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import logo from '../../public/logo.png'
import Link from 'next/link';
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow px-4 py-3">
            <div className=" container mx-auto flex items-center justify-between">
                {/* Left: Logo */}
                <div className="flex items-center">
                    <Image src={logo} width={195} height={32} alt='EstateAtlas Logo'></Image>
                    
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-gray-700 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Middle: Nav Links */}
                <div className="hidden md:flex space-x-6">
                    <Link href="/" className="block text-[#000929] hover:text-blue-600 font-medium ">Home</Link>
                    <Link href="about" className="block text-[#000929] hover:text-blue-600 font-medium">About</Link>
                    <Link href="pricing" className="block text-[#000929] hover:text-blue-600 font-medium">Pricing</Link>
                    <Link href="articles" className="block text-[#000929] hover:text-blue-600 font-medium">Articles</Link>
                    <Link href="affiliateContact" className="block text-[#000929]  hover:text-blue-600 font-medium">Affiliate Contact</Link>
                </div>

                {/* Right: Buttons */}
                <div className="hidden md:flex space-x-4">
                    <button className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600">Login</button>
                    <button className="px-4 py-2 rounded border border-blue-500 text-blue-500 hover:bg-blue-50">Sign Up</button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden mt-2 space-y-2">
                    <Link href="/" className="block text-gray-700 hover:text-blue-600 font-medium">Home</Link>
                    <Link href="/about" className="block text-gray-700 hover:text-blue-600 font-medium">Listings</Link>
                    <Link href="#" className="block text-gray-700 hover:text-blue-600 font-medium">About</Link>
                    <Link href="#" className="block text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
                    <div className="flex space-x-2 mt-2">
                        <button className="flex-1 px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600">Login</button>
                        <button className="flex-1 px-4 py-2 rounded border border-blue-500 text-blue-500 hover:bg-blue-50">Sign Up</button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;