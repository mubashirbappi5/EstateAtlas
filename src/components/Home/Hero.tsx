import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative min-h-[95vh] w-full overflow-hidden bg-black">

      {/* Subtle cyber grid pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Neon glow blobs */}
      <div
        className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full z-0"
        style={{
          background: 'radial-gradient(circle, rgba(0,255,255,0.9), transparent 70%)',
          filter: 'blur(220px)',
        }}
      />
      <div
        className="absolute top-0 -right-32 w-[420px] h-[420px] rounded-full z-0"
        style={{
          background: 'radial-gradient(circle, rgba(168,85,247,0.8), transparent 70%)',
          filter: 'blur(200px)',
        }}
      />
      <div
        className="absolute -bottom-40 left-1/3 w-[420px] h-[420px] rounded-full z-0"
        style={{
          background: 'radial-gradient(circle, rgba(0,255,255,0.6), transparent 70%)',
          filter: 'blur(240px)',
        }}
      />

      {/* Decorative neon frame */}
      <div
        className="absolute border border-cyan-400/40 w-60 h-32 z-10 hidden md:block"
        style={{
          top: '140px',
          left: '90px',
          transform: 'skewX(-15deg) skewY(-5deg)',
          boxShadow: '0 0 30px rgba(0,255,255,0.35)',
        }}
      />

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 text-center text-white flex flex-col justify-center min-h-[95vh]">
        <h1 className="md:text-6xl text-4xl font-semibold leading-tight">
          Unlock global real estate opportunities <br className="hidden md:block" />
          with data-driven insights
        </h1>

        <p className="mt-6 text-xl md:text-2xl text-gray-300">
          Access accurate, transparent property data for 100+ countries.
          Compare markets, analyze trends, and invest confidently.
        </p>

        <div className="mt-14">
          <Link
            href="/dashboard/globaldata"
            className="
              inline-block px-8 md:px-12 py-4 md:py-5
              bg-cyan-400 text-black text-xl md:text-2xl font-semibold rounded-xl
              shadow-[0_0_35px_rgba(0,255,255,0.9)]
              hover:shadow-[0_0_55px_rgba(0,255,255,1)]
              transition-all duration-300
            "
          >
            Explore Global Data
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Hero;
