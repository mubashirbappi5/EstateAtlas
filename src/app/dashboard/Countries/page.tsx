import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Plus } from "lucide-react";
const Countries = () => {
  return (
    <div>

{/* save country section */}

     <div className="w-full mt-10 max-w-5xl mx-auto p-6 bg-gray-50 border rounded-lg">
     <div className="flex flex-col md:flex-row gap-6 items-center md:items-end">
  
  <div className="w-full md:flex-1 space-y-2">
    <Label className="text-sm font-medium text-gray-900 flex items-center gap-2">
      <div className="w-3 h-3 bg-gray-900 rounded-sm"></div>
      Select Country
    </Label>
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-6" />
      <Input
        placeholder="Search for a country..."
        className="pl-10 h-12 w-full bg-white border-gray-200 text-gray-500 placeholder:text-gray-400"
      />
    </div>
  </div>

  {/* Time Period Select */}
  <div className="w-full md:flex-1 space-y-2">
    <Label className="text-sm font-medium text-gray-900 flex items-center gap-2">
      <div className="w-3 h-3 bg-gray-900 rounded-sm"></div>
      Time Period
    </Label>
    <Select defaultValue="last-12-months">
      <SelectTrigger className="h-12 w-full pl-10 py-6 bg-white border-gray-200">
        <SelectValue placeholder="Select time period" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="last-12-months">Last 12 Months</SelectItem>
        <SelectItem value="last-6-months">Last 6 Months</SelectItem>
        <SelectItem value="last-3-months">Last 3 Months</SelectItem>
        <SelectItem value="last-month">Last Month</SelectItem>
      </SelectContent>
    </Select>
  </div>

  {/* Save Button */}
  <div className="w-full md:w-auto">
    <Button className="h-12 w-full md:w-auto px-6 bg-slate-800 hover:bg-slate-700 text-white font-medium">
      <Plus className="w-4 h-4 mr-2" />
      Save Country
    </Button>
  </div>
</div>

    </div>


    {/* 📈 Market Analysis - 🇦🇩 Andorra */}
    <div className="w-full mt-10 max-w-5xl mx-auto p-6 bg-white border rounded-lg shadow-md grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 justify-between items-center gap-6  ">
        <div className=" w-full border-t-3 border-blue-400 shadow-lg p-6 rounded-2xl">
            <h4 className="text-[#4F4F58EB] text-center">ANNUAL GROWTH</h4>
            <h1 className="text-4xl font-bold text-center text-[#3BA1DF] ">5.2 %</h1>

        </div>
        <div className=" w-full border-t-3 border-blue-400 shadow-lg p-6 rounded-2xl">
            <h4 className="text-[#4F4F58EB] text-center">Avg Property Price</h4>
            <h1 className="text-4xl font-bold text-center text-[#3BA1DF] ">€450K</h1>

        </div>
       <div className=" w-full border-t-3 border-blue-400 shadow-lg p-6 rounded-2xl">
            <h4 className="text-[#4F4F58EB] text-center">Rental Yield</h4>
            <h1 className="text-4xl font-bold text-center text-[#3BA1DF] ">3.8%</h1>

        </div>
       <div className=" w-full border-t-3 border-blue-400 shadow-lg p-6 rounded-2xl">
            <h4 className="text-[#4F4F58EB] text-center">Market Score</h4>
            <h1 className="text-4xl font-bold text-center text-[#3BA1DF] ">85</h1>

        </div>




    </div>




    {/*  Expert Market Summary */}

    <div className="w-full mt-10 max-w-5xl mx-auto p-6  border rounded-lg  bg-white shadow-lg border-t-4 border-t-blue-500">

      <h1 className="text-2xl font-semibold">👨‍💼  Expert Market Summary</h1>



      <div className="bg-[#F4FAFD] p-6 rounded-lg mt-4 border-l-4 border-l-blue-500 shadow-md">
        <p className="text-gray-600 mt-4">
          The expert market summary provides a comprehensive overview of the
          current market conditions, including key indicators, trends, and
          forecasts. It is designed to help investors and analysts make informed
          decisions based on the latest data and expert insights.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">🏛️  Political Stability</h2>
          <p className="text-gray-600 mt-2">
            Constitutional parliamentary democracy with stable governance
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">💰  Tax Benefits</h2>
          <p>Maximum personal income tax of 10%, no inheritance tax</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">🏠  Market Focus</h2>
          <p className="text-gray-600 mt-2">
           Luxury properties and ski resorts dominate the market
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">🌍  Investment Climate:</h2>
          <p className="text-gray-600 mt-2">
          Foreign ownership allowed with residency requirements
          </p>
        </div>

      </div>






    </div>


    {/* Interactive Price History Chart */}

    <div className="w-full mt-10 max-w-5xl mx-auto p-6  border rounded-lg  bg-white shadow-lg border-t-4 border-t-blue-500">
        <h1 className="text-2xl font-semibold">📈 Interactive Price History Chart</h1>
    
        <div className="mt-4">
            <p className="text-gray-600">
            The interactive price history chart allows users to explore historical
            price data for various assets, providing insights into market trends
            and performance over time.
            </p>
        </div>
    
        <div className="mt-6">
            {/* Placeholder for the chart component */}
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Chart will be displayed here</span>
            </div>
        </div>

    </div>



    {/* 📊 Country Statistics & Insights */}
    <div className="w-full mt-10 max-w-5xl mx-auto p-6  border rounded-lg  bg-white shadow-lg border-t-4 border-t-blue-500">
      <h1 className="text-2xl font-semibold">📊 Country Statistics & Insights</h1>

      <div className="mt-4">
        <p className="text-gray-600">
          This section provides detailed statistics and insights about the
          selected country, including economic indicators, demographic data, and
          market trends.
        </p>
      </div>
        <div className="  space-y-4 mt-4">
          <Label className="text-sm font-semibold text-gray-900 flex items-center gap-2">
            Select Analysis Type
        
          </Label>
          <Select defaultValue="last-12-months">
            <SelectTrigger className="h-20 pl-10 py-6 px-10 bg-white border-gray-200">
              <SelectValue placeholder="Select time period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last-12-months">Last 12 Months</SelectItem>
              <SelectItem value="last-6-months">Last 6 Months</SelectItem>
              <SelectItem value="last-3-months">Last 3 Months</SelectItem>
              <SelectItem value="last-month">Last Month</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="bg-[#F4FAFD] p-6 border border-blue-400 rounded-lg mt-4 ">
        <p className="text-gray-600 mt-4">
          The expert market summary provides a comprehensive overview of the
          current market conditions, including key indicators, trends, and
          forecasts. It is designed to help investors and analysts make informed
          decisions based on the latest data and expert insights.
        </p>
      </div>


   
      </div>



    </div>
  );
};

export default Countries;
