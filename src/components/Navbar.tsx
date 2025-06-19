"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import logo from '../../public/logo.png'
import Link from 'next/link';
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow  py-7 px-4">
            <div className=" container mx-auto flex items-center justify-between">
                {/* Left: Logo */}
                <div className="flex items-center">
                    <Link href={'/'}>
                    <Image src={logo} width={195} height={32} alt='EstateAtlas Logo'></Image>
                    </Link>
                    
                </div>

                {/* Mobile menu button */}
                <div className="lg:hidden">
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
                <div className="hidden lg:flex space-x-12">
                    <Link href="/" className="block text-[#000929] hover:text-[#3BA1DF] font-semibold ">Home</Link>
                    <Link href="/about" className="block text-[#000929] hover:text-[#3BA1DF] font-semibold">About</Link>
                    <Link href="/pricing" className="block text-[#000929] hover:text-[#3BA1DF] font-semibold">Pricing</Link>
                    <Link href="/articles" className="block text-[#000929] hover:text-[#3BA1DF] font-semibold">Articles</Link>
                    <Link href="/affiliateContact" className="block text-[#000929]  hover:text-[#3BA1DF] font-semibold">Affiliate Contact</Link>
                </div>

                {/* Right: Buttons */}
                <div className="hidden lg:flex space-x-4">
                       <Link href={'/auth/login'} className="px-6 py-4 rounded-lg border-2 border-blue-[#0A1532] border-[#E0DEF7] text-blue-[#0A1532] font-semibold cursor-pointer">Login</Link>
                    <Link href={'/auth/register'} className="px-6 py-4 rounded-lg bg-[#0A1532] text-white cursor-pointer ">Sign Up</Link>
                 
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="lg:hidden mt-4 space-y-2 ">
                    <Link href="/" className="block text-[#000929] hover:text-[#3BA1DF] font-semibold ">Home</Link>
                    <Link href="/about" className="block text-[#000929] hover:text-[#3BA1DF] font-semibold">About</Link>
                    <Link href="/pricing" className="block text-[#000929] hover:text-[#3BA1DF] font-semibold">Pricing</Link>
                    <Link href="/articles" className="block text-[#000929] hover:text-[#3BA1DF] font-semibold">Articles</Link>
                    <Link href="/affiliateContact" className="block text-[#000929]  hover:text-[#3BA1DF] font-semibold">Affiliate Contact</Link>
                    <div className="flex space-x-2 mt-2">
                          <Link href={'/auth/login'} className="flex-1 px-6 py-4 rounded-lg border-2 border-blue-[#0A1532] border-[#E0DEF7] text-blue-[#0A1532] font-semibold cursor-pointer">Login</Link>
                    <Link href={'/auth/register'} className="flex-1  px-4 py-3 rounded-lg bg-[#0A1532] text-white cursor-pointer ">Sign Up</Link>
                 
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;