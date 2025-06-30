"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe, Flag } from "lucide-react";

export default function Comparison() {
  const [compareBase, setCompareBase] = useState("");
  const [selectedCountries, setSelectedCountries] = useState(["", "", ""]);

  const handleCountryChange = (index: number, value: string) => {
    const updated = [...selectedCountries];
    updated[index] = value;
    setSelectedCountries(updated);
  };

  return (
    <div className="w-full min-h-screen max-w-6xl mx-auto  space-y-10 bg-gray-50">
      {/* Header */}
      <h1 className="md:text-4xl text-2xl font-semibold">Market Comparison Tool 👑</h1>

      {/* Banner */}
      <div
        style={{
          background:
            "linear-gradient(-33.05deg, rgb(59, 161, 223) -19.632%, rgb(10, 21, 50) 102.453%)",
        }}
        className="px-10 py-20 text-center text-white rounded-lg shadow-lg"
      >
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="text-8xl">👑</h1>
          <h2 className="md:text-4xl text-2xl">Premium Feature - Advanced Comparison Tool</h2>
          <p className="md:text-xl text-lg">
            Compare multiple countries and cities side-by-side with detailed metrics,
            investment scores, and AI-powered recommendations.
          </p>
        </div>
        <button className="mt-5 px-6 py-3 bg-gradient-to-r from-[#3BA1DF] to-[#205779] text-white rounded-lg shadow-lg transition-colors duration-300">
          Upgrade to premium
        </button>
      </div>

      {/* Comparison Card */}
      <Card className="border-0 border-t-4 border-blue-400">
         <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg font-semibold">🏆 Top Performing Markets</CardTitle>
          </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Compare Base */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Compare Base
              </label>
              <Select value={compareBase} onValueChange={setCompareBase}>
                <SelectTrigger className="py-5 pr-10">
                  <SelectValue placeholder="Select region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="north-america">🇺🇸 North America</SelectItem>
                  <SelectItem value="europe">🇪🇺 Europe</SelectItem>
                  <SelectItem value="asia">🌏 Asia</SelectItem>
                  <SelectItem value="bangladesh">🇧🇩 Bangladesh</SelectItem>
                  <SelectItem value="india">🇮🇳 India</SelectItem>
                  <SelectItem value="uk">🇬🇧 United Kingdom</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Country Selectors */}
            {[1, 2, 3].map((n) => (
              <div key={n} className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Flag className="w-4 h-4" />
                  Country {n}
                </label>
                <Select
                  value={selectedCountries[n - 1]}
                  onValueChange={(val) => handleCountryChange(n - 1, val)}
                >
                  <SelectTrigger className="py-5 pr-10">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bangladesh">🇧🇩 Bangladesh</SelectItem>
                    <SelectItem value="india">🇮🇳 India</SelectItem>
                    <SelectItem value="usa">🇺🇸 USA</SelectItem>
                    <SelectItem value="germany">🇩🇪 Germany</SelectItem>
                    <SelectItem value="japan">🇯🇵 Japan</SelectItem>
                    <SelectItem value="australia">🇦🇺 Australia</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex mt-6 gap-4 flex-wrap">
            <Button className="bg-slate-900 hover:bg-slate-800 py-5 px-6">
              Compare Market
            </Button>
            <Button
              variant="outline"
              className="bg-sky-500 text-white py-5 px-6 border-sky-500 hover:bg-sky-600"
            >
              See More
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
