import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Flag, MapPin, Home, Star } from "lucide-react"

export default function RegionalData() {
  return (
    <div className=" bg-gray-50 min-h-screen">
      <div className="md:max-w-6xl w-full mx-auto space-y-6">
        {/* Header with filters */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
    
       <div className="grid grid-cols-1 md:grid-cols-4 gap-20 items-center">
  <div className="space-y-2">
    <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
      <Flag className="w-4 h-4 text-blue-600" />
      Country
    </div>
    <Select>
      <SelectTrigger className="w-full py-5 pr-10"> 
        <div className="flex items-center gap-2">
          <span className="text-2xl">🇺🇸</span>
          <SelectValue placeholder="Select Country" />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="us">🇺🇸 United States</SelectItem>
        <SelectItem value="ca">🇨🇦 Canada</SelectItem>
        <SelectItem value="uk">🇬🇧 United Kingdom</SelectItem>
      </SelectContent>
    </Select>
  </div>

  <div className="space-y-2">
    <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
      <MapPin className="w-4 h-4 text-blue-600" />
      Region/City
    </div>
    <Select>
      <SelectTrigger className="w-full py-5 pr-10"> 
        <SelectValue placeholder="Select City" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="nyc">New York City</SelectItem>
        <SelectItem value="la">Los Angeles</SelectItem>
        <SelectItem value="chicago">Chicago</SelectItem>
      </SelectContent>
    </Select>
  </div>

  <div className="space-y-2">
    <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
      <Home className="w-4 h-4 text-blue-600" />
      Property Type
    </div>
    <Select>
      <SelectTrigger className="w-full py-5 pr-10"> 
        <SelectValue placeholder="All Types" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Types</SelectItem>
        <SelectItem value="apartment">Apartment</SelectItem>
        <SelectItem value="house">House</SelectItem>
        <SelectItem value="condo">Condo</SelectItem>
      </SelectContent>
    </Select>
  </div>
</div>

          <div className="flex gap-3 mt-5">
            <Button className="bg-slate-800 hover:bg-slate-700 py-6">Load City Data</Button>
            <Button variant="outline" className="bg-sky-500 text-white py-6 border-sky-500 hover:bg-sky-600">
              Compare Cities
            </Button>
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-white border-0 border-t-4 border-sky-500 ">
            <CardContent className="p-6 text-center">
              <div className="text-sm font-medium text-gray-600 mb-2">MEDIAN PRICE</div>
              <div className="text-4xl font-bold text-sky-600">$720K</div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 border-t-4 border-sky-500 ">
            <CardContent className="p-6 text-center">
              <div className="text-sm font-medium text-gray-600 mb-2">YOY GROWTH</div>
              <div className="text-4xl font-bold text-green-500">+8.4%</div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 border-t-4 border-sky-500 ">
            <CardContent className="p-6 text-center">
              <div className="text-sm font-medium text-gray-600 mb-2">RENTAL YIELD</div>
              <div className="text-4xl font-bold text-sky-600">4.1%</div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 border-t-4 border-sky-500 ">
            <CardContent className="p-6 text-center">
              <div className="text-sm font-medium text-gray-600 mb-2">AVG DAYS ON MARKET</div>
              <div className="text-4xl font-bold text-sky-600">45 Days</div>
            </CardContent>
          </Card>
        </div>

        {/* Chart Section */}
        <Card className="bg-white border-0 border-t-4 border-sky-500 p-10 ">
          <CardContent className="p-12 text-center border-dashed border-2 border-sky-300  rounded-lg">
            <div className="flex justify-center mb-4 ">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Regional Market Trends & Price Distribution</h3>
            <p className="text-gray-600">Detailed neighborhood analysis and market segmentation</p>
          </CardContent>
        </Card>

        {/* Neighborhood Analysis */}
        <Card className="bg-white border-0 border-t-4 border-sky-500">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-800 border-l-4 border-blue-500 pl-4">
              Neighborhood Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b text-sm font-medium text-gray-600">
                    <th className="text-left py-3">NEIGHBORHOOD</th>
                    <th className="text-left py-3">MEDIAN PRICE</th>
                    <th className="text-left py-3">GROWTH RATE</th>
                    <th className="text-left py-3">PROPERTIES SOLD</th>
                    <th className="text-left py-3">MARKET ACTIVITY</th>
                    <th className="text-left py-3">MARKET ACTIVITY</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b">
                    <td className="py-4 font-medium">🏢 Manhattan</td>
                    <td className="py-4">$1,200,000</td>
                    <td className="py-4 text-green-600 font-medium">+12.3%</td>
                    <td className="py-4">1247</td>
                    <td className="py-4">
                      <Badge className="bg-red-100 text-red-700 hover:bg-red-100">High</Badge>
                    </td>
                    <td className="py-4">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </td>
                  </tr>

                  <tr className="border-b">
                    <td className="py-4 font-medium">🏘️ Brooklyn</td>
                    <td className="py-4">$850,000</td>
                    <td className="py-4 text-green-600 font-medium">+8.7%</td>
                    <td className="py-4">2158</td>
                    <td className="py-4">
                      <Badge className="bg-red-500 text-white hover:bg-red-500">Very High</Badge>
                    </td>
                    <td className="py-4">
                      <div className="flex">
                        {[1, 2, 3, 4].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <Star className="w-4 h-4 text-gray-300" />
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 font-medium">👑 Queens</td>
                    <td className="py-4">$620,000</td>
                    <td className="py-4 text-green-600 font-medium">+6.4%</td>
                    <td className="py-4">1893</td>
                    <td className="py-4">
                      <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">Moderate</Badge>
                    </td>
                    <td className="py-4">
                      <div className="flex">
                        {[1, 2, 3].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        {[4, 5].map((star) => (
                          <Star key={star} className="w-4 h-4 text-gray-300" />
                        ))}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
