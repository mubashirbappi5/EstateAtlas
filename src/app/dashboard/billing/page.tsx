"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, CreditCard } from "lucide-react"

interface BillingHistoryItem {
  id: string
  country: string
  flag: string
  plan: string
  growth: string
  amount: string
  status: "Paid" | "Pending" | "Failed"
}

interface BillingDetails {
  planName: string
  price: string
  currency: string
  nextBillingDate: string
  status: "Active" | "Expired" | "Cancelled"
  paymentMethodLast4: string
  paymentMethodExpiry: string
}



export default function Billing() {
  // Billing history state
  const [billingHistory] = useState<BillingHistoryItem[]>([
    {
      id: "1",
      country: "United States",
      flag: "🇺🇸",
      plan: "+6.8%",
      growth: "+6.8%",
      amount: "$380,000",
      status: "Paid",
    },
    {
      id: "2",
      country: "Germany",
      flag: "🇩🇪",
      plan: "+4.5%",
      growth: "+4.5%",
      amount: "€420,000",
      status: "Paid",
    },
    {
      id: "3",
      country: "Australia",
      flag: "🇦🇺",
      plan: "+7.2%",
      growth: "+7.2%",
      amount: "A$650,000",
      status: "Paid",
    },
    {
      id: "4",
      country: "Canada",
      flag: "🇨🇦",
      plan: "+6.1%",
      growth: "+6.1%",
      amount: "C$520,000",
      status: "Paid",
    },
  ])



//billing details state

   const [billingDetails, setBillingDetails] = useState<BillingDetails | null>(null)
  const [loading, setLoading] = useState(true)

   useEffect(() => {
    async function fetchBilling() {
      try {
         const token = localStorage.getItem("token")
         
        const res = await fetch("http://204.197.173.249:8014/api/subscription", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })

        if (!res.ok) {
          throw new Error(`Failed to fetch billing details: ${res.status}`)
        }

        const data = await res.json()

    
      setBillingDetails({
  planName:data.tier || "N/A Tier",
  price: "00", 
  currency: "$", // Adjust this as needed
  nextBillingDate: data.subscription?.current_period_start
    ? new Date(data.subscription.current_period_start).toLocaleDateString()
    : "N/A",
  status: data.subscription?.status === "active" ? "Active" : "Cancelled",
  paymentMethodLast4: "4242", // Not available in your response, use placeholder
  paymentMethodExpiry: "12/27", // Not available in your response, use placeholder
})
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchBilling()
  }, [])


  console.log("Billing Details:", billingDetails)






  const handleGetStarted = (type: "primary" | "secondary") => {
    console.log(`Get started clicked: ${type}`)
    // Add your logic here
  }

  const handleUpdatePayment = () => {
    console.log("Update payment method clicked")
    // Add your logic here
  }

  const handleDownloadInvoice = (id: string) => {
    console.log(`Download invoice for ${id}`)
    // Add your logic here
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Billing & Subscription Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-900">Billing & Subscription</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{billingDetails?.planName}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-gray-900">{billingDetails?.price}</span>
                  <span className="text-sm text-gray-600">Per month</span>
                </div>
              </div>
              <Badge className="bg-blue-500 hover:bg-blue-600 text-white">{billingDetails?.status}</Badge>
            </div>

            <p className="text-sm text-gray-600 mb-6">
              Next billing date: <span className="font-medium">{billingDetails?.nextBillingDate}</span>
            </p>

            <div className="flex gap-3">
              <Button onClick={() => handleGetStarted("primary")} className="bg-gray-800 hover:bg-gray-900 text-white">
                Get started
              </Button>
              <Button
                onClick={() => handleGetStarted("secondary")}
                variant="outline"
                className="bg-blue-500 hover:bg-blue-600 text-white border-blue-500"
              >
                Get started
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment Method Section */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <CreditCard className="h-5 w-5 text-gray-600" />
            <h3 className="font-semibold text-gray-900">Payment Method</h3>
          </div>

          <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded flex items-center justify-center">
                <div className="w-8 h-6 bg-yellow-500 rounded-sm"></div>
              </div>
              <div>
                <p className="font-medium text-gray-900">•••• •••• •••• 4242</p>
                <p className="text-sm text-gray-600">Expires 12/27</p>
              </div>
            </div>
            <Button onClick={handleUpdatePayment} className="bg-gray-800 hover:bg-gray-900 text-white">
              Update
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Billing History Section */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-5 h-5 bg-blue-500 rounded-sm flex items-center justify-center">
              <div className="w-3 h-0.5 bg-white"></div>
            </div>
            <h3 className="font-semibold text-gray-900">Billing History</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-2 font-medium text-gray-700 text-sm">DATE</th>
                  <th className="text-left py-3 px-2 font-medium text-gray-700 text-sm">PLAN</th>
                  <th className="text-left py-3 px-2 font-medium text-gray-700 text-sm">AMOUNT</th>
                  <th className="text-left py-3 px-2 font-medium text-gray-700 text-sm">STATUS</th>
                  <th className="text-left py-3 px-2 font-medium text-gray-700 text-sm">INVOICE</th>
                </tr>
              </thead>
              <tbody>
                {billingHistory.map((item) => (
                  <tr key={item.id} className="border-b border-gray-100">
                    <td className="py-4 px-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{item.flag}</span>
                        <span className="text-sm text-gray-900">{item.country}</span>
                      </div>
                    </td>
                    <td className="py-4 px-2">
                      <span className="text-sm font-medium text-green-600">{item.growth}</span>
                    </td>
                    <td className="py-4 px-2">
                      <span className="text-sm font-medium text-gray-900">{item.amount}</span>
                    </td>
                    <td className="py-4 px-2">
                      <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-100">
                        {item.status}
                      </Badge>
                    </td>
                    <td className="py-4 px-2">
                      <Button
                        onClick={() => handleDownloadInvoice(item.id)}
                        size="sm"
                        className="bg-gray-800 hover:bg-gray-900 text-white"
                      >
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
