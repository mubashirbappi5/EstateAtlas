"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Globe, MapPin, TrendingUp, Target } from "lucide-react"

export default function GlobalData() {
  const [region, setRegion] = useState("north-america")
  const [metric, setMetric] = useState("property-prices")
  const [timePeriod, setTimePeriod] = useState("last-12-months")
  
  const marketData = [
    {
      country: "United States",
      flag: "🇺🇸",
      growthRate: "+8.8%",
      avgPrice: "$380,000",
      rentalYield: "4.2%",
      marketScore: 92,
      scoreColor: "bg-green-500",
    },
    {
      country: "Germany",
      flag: "🇩🇪",
      growthRate: "+4.5%",
      avgPrice: "€420,000",
      rentalYield: "3.8%",
      marketScore: 87,
      scoreColor: "bg-green-500",
    },
    {
      country: "Australia",
      flag: "🇦🇺",
      growthRate: "+7.2%",
      avgPrice: "A$650,000",
      rentalYield: "3.5%",
      marketScore: 85,
      scoreColor: "bg-green-500",
    },
    {
      country: "Canada",
      flag: "🇨🇦",
      growthRate: "+5.1%",
      avgPrice: "C$520,000",
      rentalYield: "3.9%",
      marketScore: 82,
      scoreColor: "bg-blue-500",
    },
  ]

  return (
    <div className="min-h-screen  md:p-6 bg-gray-50 ">
      <div className="md:max-w-5xl   mx-auto space-y-6">
        {/* Filter Section */}
        <Card>
          <CardContent className="p-6">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
    {/* Region */}
    <div className="w-full space-y-2">
      <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
        <MapPin className="w-4 h-4" />
        Region
      </label>
      <Select value={region} onValueChange={setRegion}>
        <SelectTrigger className="w-full py-5 pr-10">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="north-america">🇺🇸 North America</SelectItem>
          <SelectItem value="europe">🇪🇺 Europe</SelectItem>
          <SelectItem value="asia">🌏 Asia</SelectItem>
        </SelectContent>
      </Select>
    </div>

    {/* Metric */}
    <div className="w-full space-y-2">
      <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
        <TrendingUp className="w-4 h-4" />
        Metric
      </label>
      <Select value={metric} onValueChange={setMetric}>
        <SelectTrigger className="w-full py-5 pr-10">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="property-prices">💰 Property Prices</SelectItem>
          <SelectItem value="rental-yields">📈 Rental Yields</SelectItem>
          <SelectItem value="market-growth">📊 Market Growth</SelectItem>
        </SelectContent>
      </Select>
    </div>

    {/* Time Period */}
    <div className="w-full space-y-2">
      <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
        <Target className="w-4 h-4" />
        Time Period
      </label>
      <Select value={timePeriod} onValueChange={setTimePeriod}>
        <SelectTrigger className="w-full py-5 pr-10">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="last-12-months">Last 12 Months</SelectItem>
          <SelectItem value="last-6-months">Last 6 Months</SelectItem>
          <SelectItem value="last-3-months">Last 3 Months</SelectItem>
        </SelectContent>
      </Select>
    </div>
  </div>

  <div className="flex mt-4 gap-2">
    <Button className="bg-slate-900 hover:bg-slate-800 py-6  md:w-auto">Apply Filters</Button>
    <Button variant="outline" className="bg-sky-500 text-white py-6 border-sky-500 hover:bg-sky-600  md:w-auto">
      Reset
    </Button>
  </div>
</CardContent>

        </Card>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className=" border-0 border-t-4 border-sky-500 ">
            <CardContent className="p-6">
              <div className="space-y-2 text-center ">
                <p className="text-sm font-medium text-gray-600">GLOBAL MARKET SIZE</p>
                <p className="text-3xl font-bold text-sky-500">$2.4T</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 border-t-4 border-sky-500">
            <CardContent className="p-6">
              <div className="space-y-2 text-center">
                <p className="text-sm font-medium text-gray-600">AVERAGE GROWTH</p>
                <p className="text-3xl font-bold text-sky-500">+6.8%</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 border-t-4 border-sky-500">
            <CardContent className="p-6">
              <div className="space-y-2 text-center">
                <p className="text-sm font-medium text-gray-600">GLOBAL YIELD AVERAGE</p>
                <p className="text-3xl font-bold text-sky-500">4.2%</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 border-t-4 border-sky-500">
            <CardContent className="p-6">
              <div className="space-y-2 text-center">
                <p className="text-sm font-medium text-gray-600">MARKETS TRACKED</p>
                <p className="text-3xl font-bold text-sky-500">195</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Top Performing Markets */}
        <Card className="border-0 border-t-4 border-sky-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg font-semibold">🏆 Top Performing Markets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-semibold text-gray-600">COUNTRY</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-600">GROWTH RATE</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-600">AVG PRICE</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-600">RENTAL YIELD</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-600">MARKET SCORE</th>
                  </tr>
                </thead>
                <tbody>
                  {marketData.map((market, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{market.flag}</span>
                          <span className="font-medium">{market.country}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-green-600 font-medium">{market.growthRate}</span>
                      </td>
                      <td className="py-4 px-4 font-medium">{market.avgPrice}</td>
                      <td className="py-4 px-4">{market.rentalYield}</td>
                      <td className="py-4 px-4">
                        <Badge className={`${market.scoreColor} text-white hover:${market.scoreColor}/90`}>
                          {market.marketScore}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Chart Section */}
        <Card className="border-0 border-t-4 border-sky-500">
          <CardContent className="p-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Interactive Price History Chart</h3>
              <p className="text-gray-600">Real-time market trends and historical data visualization</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
