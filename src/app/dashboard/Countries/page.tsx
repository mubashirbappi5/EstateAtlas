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



    </div>
  );
};

export default Countries;
