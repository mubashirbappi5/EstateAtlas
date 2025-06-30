import React from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, TrendingUp, Bell } from "lucide-react"

const SavedCountries = () => {
    const countries = [
  {
    name: "Germany",
    flag: "🇩🇪",
    growth: "+4.5% Growth",
    avgPrice: "€420k Avg Price",
  },
  {
    name: "Spain",
    flag: "🇪🇸",
    growth: "+3.2% Growth",
    avgPrice: "€280k Avg Price",
  },
  {
    name: "France",
    flag: "🇫🇷",
    growth: "+2.8% Growth",
    avgPrice: "€380k Avg Price",
  },
  {
    name: "Portugal",
    flag: "🇵🇹",
    growth: "+8.1% Growth",
    avgPrice: "€320k Avg Price",
  },
]

 const alerts = [
    {
      id: 1,
      title: "Germany Market Update",
      description:
        "Property prices increased by 2.1% this month, reaching new highs in Berlin and Munich metropolitan areas.",
      timestamp: "2 hours ago",
      color: "blue",
      indicatorColor: "bg-red-500",
    },
    {
      id: 2,
      title: "Spain Tax Regulation Changes",
      description:
        "New tax regulations for foreign property investors effective from June 2025. Review impact on your portfolio.",
      timestamp: "1 day ago",
      color: "orange",
      indicatorColor: "bg-yellow-400",
    },
    {
      id: 3,
      title: "Portugal Golden Visa Update",
      description:
        "Golden Visa program updates announced with new investment thresholds and opportunities in renewable energy sector.",
      timestamp: "3 days ago",
      color: "teal",
      indicatorColor: "bg-green-500",
    },
  ]


 const getBorderColor = (color: string) => {
    switch (color) {
      case "blue":
        return "border-l-blue-400"
      case "orange":
        return "border-l-orange-400"
      case "teal":
        return "border-l-teal-400"
      default:
        return "border-l-blue-400"
    }
  }

    return (
        <div>
           <Card className="w-full mt-10 max-w-6xl mx-auto  bg-white border-0 border-t-4 border-sky-500 rounded-lg shadow-md  ">
        <CardContent className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-red-500" />
              <h2 className="text-lg font-semibold text-gray-800">Your Investment Watchlist</h2>
            </div>
            <Button
              className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-6 rounded-lg text-sm font-medium"
              size="sm"
            >
              <Plus className="w-4 h-4 mr-1" />
              Add Country
            </Button>
          </div>

          {/* Country Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {countries.map((country, index) => (
              <Card key={index} className="bg-white border-0 border-t-4 border-sky-500">
                <CardContent className="p-2 text-center">
                  {/* Flag */}
                  <div className="text-3xl mb-3">{country.flag}</div>

                  {/* Country Name */}
                  <h3 className="font-medium text-gray-800 mb-2">{country.name}</h3>

                  {/* Growth */}
                  <div className="text-green-600 font-medium text-sm mb-1">{country.growth}</div>

                  {/* Average Price */}
                  <div className="text-gray-600 text-sm">{country.avgPrice}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>


{/* alert */}

       <div className="max-w-6xl mt-10 mx-auto  ">
      <div className=" bg-white rounded-2xl shadow-md border-t-4 border-t-blue-400 p-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8 pl-4">
          <div className="w-6 h-6 bg-orange-400 rounded flex items-center justify-center">
            <Bell className="w-4 h-4 text-white" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Market Alerts & Updates</h2>
        </div>

        {/* Alerts List */}
        <div className="space-y-6">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className={`bg-white rounded-lg p-6 border-l-4 ${getBorderColor(alert.color)} shadow-sm`}
            >
              <div className="flex items-start gap-4">
                {/* Colored Indicator */}
                <div className={`w-4 h-4 rounded-full ${alert.indicatorColor} mt-1 flex-shrink-0`} />

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{alert.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{alert.description}</p>
                  <p className="text-gray-400 text-sm">{alert.timestamp}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
            
        </div>
    );
};

export default SavedCountries;