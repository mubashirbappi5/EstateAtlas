'use client';
import React, { useEffect, useState } from "react";
import InsightCard from "./InsightCard";
import Link from "next/link";

const MarketInsight = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch('http://204.197.173.249:8014/api/blogs');
        const data = await res.json();
        setBlogs(data?.data?.slice(0, 6) || []); // latest 6 blogs
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-[#050d2e] relative overflow-hidden mt-10">
      {/* Glowing Background */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-[radial-gradient(circle_at_15%_40%,_rgba(22,61,123,0.4)_0%,_transparent_60%)]" />
        <div className="w-full h-full bg-[radial-gradient(circle_at_75%_80%,_rgba(13,46,98,0.3)_0%,_transparent_60%)]" />
        <div className="w-full h-full bg-[radial-gradient(circle_at_60%_20%,_rgba(11,41,90,0.25)_0%,_transparent_60%)]" />
        <div className="w-full h-full bg-[radial-gradient(circle_at_30%_85%,_rgba(19,55,105,0.2)_0%,_transparent_60%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 py-10 container mx-auto">
        <h1 className="font-semibold text-5xl text-center text-white">
          Latest Market Insights
        </h1>

        <section className="w-11/12 mx-auto md:grid grid-cols-3 gap-15 my-14 md:space-y-0 space-y-5">
          {loading ? (
            <p className="text-white col-span-3 text-center">Loading...</p>
          ) : blogs.length > 0 ? (
            blogs.map((blog: any, index: number) => (
              <InsightCard key={index} variant="black" blog={blog} />
            ))
          ) : (
            <p className="text-white col-span-3 text-center">No articles found.</p>
          )}
        </section>

        <div className="flex justify-center items-center">
          <Link href={'/articles'} className="py-3 px-4 bg-white rounded-lg text-[#0A1532]">
            All Articles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MarketInsight;
