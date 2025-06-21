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

     <div className="w-full mt-10 max-w-4xl mx-auto p-6 bg-gray-50 border rounded-lg">
      <div className="flex flex-col md:flex-row gap-6 items-end">
        
        {/* Country Search */}
        <div className="flex-1 space-y-2">
          <Label className="text-sm font-medium text-gray-900 flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-900 rounded-sm"></div>
            Select Country
          </Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search for a country..."
              className="pl-10 h-12 bg-white border-gray-200 text-gray-500 placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Time Period Select */}
        <div className="flex-1 space-y-2">
          <Label className="text-sm font-medium text-gray-900 flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-900 rounded-sm"></div>
            Time Period
          </Label>
          <Select defaultValue="last-12-months">
            <SelectTrigger className="h-20 pl-10 py-6 bg-white border-gray-200">
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
        <div className="flex-shrink-0">
          <Button className="h-12 px-6 bg-slate-800 hover:bg-slate-700 text-white font-medium">
            <Plus className="w-4 h-4 mr-2" />
            Save Country
          </Button>
        </div>
      </div>
    </div>


    {/* 📈 Market Analysis - 🇦🇩 Andorra */}
    <div className="w-full mt-10 max-w-4xl mx-auto p-6 bg-white border rounded-lg shadow-md flex justify-between items-center">
        <div className=" border-t-3 border-blue-200 shadow-lg p-6 rounded-2xl">
            <h4>ANNUAL GROWTH</h4>
            <h1>5.2 %</h1>

        </div>
        <div className=" border-t-3 border-blue-200 shadow-lg p-6 rounded-2xl">
            <h4>ANNUAL GROWTH</h4>
            <h1>5.2 %</h1>

        </div>
        <div className=" border-t-3 border-blue-200 shadow-lg p-6 rounded-2xl">
            <h4>ANNUAL GROWTH</h4>
            <h1>5.2 %</h1>

        </div>
        <div className=" border-t-3 border-blue-200 shadow-lg p-6 rounded-2xl">
            <h4>ANNUAL GROWTH</h4>
            <h1>5.2 %</h1>

        </div>




    </div>




    {/*  Expert Market Summary */}

    <div className="w-full mt-10 max-w-4xl mx-auto p-6  border rounded-lg  bg-white shadow-lg border-t-4 border-t-blue-500">

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
          <h2 className="text-lg font-semibold">Market Overview</h2>
          <p className="text-gray-600 mt-2">
            The market is currently experiencing a bullish trend with significant
            growth in key sectors.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Key Indicators</h2>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>GDP Growth: 3.5%</li>
            <li>Inflation Rate: 2.1%</li>
            <li>Unemployment Rate: 4.0%</li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Market Trends</h2>
          <p className="text-gray-600 mt-2">
            Emerging technologies and sustainable practices are driving market
            innovation and growth.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Forecast</h2>
          <p className="text-gray-600 mt-2">
            Analysts predict continued growth in the next quarter, with potential
            challenges in supply chain disruptions.
          </p>
        </div>

      </div>






    </div>


    {/* Interactive Price History Chart */}

    <div className="w-full mt-10 max-w-4xl mx-auto p-6  border rounded-lg  bg-white shadow-lg border-t-4 border-t-blue-500">
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
    <div className="w-full mt-10 max-w-4xl mx-auto p-6  border rounded-lg  bg-white shadow-lg border-t-4 border-t-blue-500">
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

        <div className="bg-[#F4FAFD] p-6 rounded-lg mt-4  shadow-md">
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
