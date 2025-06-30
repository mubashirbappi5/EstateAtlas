"use client"

import { useState } from "react"
import { Calculator, Building2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface CalculationResults {
  monthlyMortgage: number
  monthlyCashFlow: number
  annualCashFlow: number
  totalCashInvested: number
  cashOnCashReturn: number
  capRate: number
  totalReturn: number
}

export default function Investcal() {
  const [propertyValue, setPropertyValue] = useState("600000")
  const [downPaymentPercent, setDownPaymentPercent] = useState("20")
  const [interestRate, setInterestRate] = useState("3.5")
  const [loanTerm, setLoanTerm] = useState("30")
  const [monthlyRentalIncome, setMonthlyRentalIncome] = useState("2500")
  const [monthlyExpenses, setMonthlyExpenses] = useState("2500")
  const [results, setResults] = useState<CalculationResults | null>(null)

  const calculateInvestmentReturns = () => {
    const propValue = Number.parseFloat(propertyValue)
    const downPayment = (Number.parseFloat(downPaymentPercent) / 100) * propValue
    const loanAmount = propValue - downPayment
    const monthlyRate = Number.parseFloat(interestRate) / 100 / 12
    const numPayments = Number.parseFloat(loanTerm) * 12
    const rentalIncome = Number.parseFloat(monthlyRentalIncome)
    const expenses = Number.parseFloat(monthlyExpenses)

    // Calculate monthly mortgage payment using standard mortgage formula
    const monthlyMortgage =
      (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
      (Math.pow(1 + monthlyRate, numPayments) - 1)

    // Calculate cash flow
    const monthlyCashFlow = rentalIncome - expenses - monthlyMortgage
    const annualCashFlow = monthlyCashFlow * 12

    // Calculate returns
    const totalCashInvested = downPayment
    const cashOnCashReturn = (annualCashFlow / totalCashInvested) * 100
    const capRate = ((rentalIncome * 12 - expenses * 12) / propValue) * 100
    const totalReturn = cashOnCashReturn

    setResults({
      monthlyMortgage,
      monthlyCashFlow,
      annualCashFlow,
      totalCashInvested,
      cashOnCashReturn,
      capRate,
      totalReturn,
    })
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatPercentage = (percent: number) => {
    return `${percent.toFixed(2)}%`
  }

  return (
    <div className="  ">
      <div className="max-w-6xl  mx-auto">
        <Card className="shadow-xl bg-white border-0 border-t-4 border-sky-400  backdrop-blur">
          <CardHeader className="border-b border-blue-100">
            <CardTitle className="flex items-center gap-2 text-xl font-semibold text-gray-800">
              <Calculator className="h-5 w-5 text-blue-600" />
              Real Estate Investment Calculator
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Panel - Input Form */}
              <div className="p-6 space-y-6">
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                    <span className="w-2 h-2 bg-gray-800 rounded-sm"></span>
                    Property Value
                  </Label>
                  <Select value={propertyValue} onValueChange={setPropertyValue}>
                    <SelectTrigger className="h-12 w-full  bg-gray-50 border-gray-200">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="400000">400,000</SelectItem>
                      <SelectItem value="500000">500,000</SelectItem>
                      <SelectItem value="600000">600,000</SelectItem>
                      <SelectItem value="700000">700,000</SelectItem>
                      <SelectItem value="800000">800,000</SelectItem>
                      <SelectItem value="900000">900,000</SelectItem>
                      <SelectItem value="1000000">1,000,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                    <span className="w-2 h-2 bg-gray-800 rounded-sm"></span>
                    Down Payment (%)
                  </Label>
                  <Select value={downPaymentPercent} onValueChange={setDownPaymentPercent}>
                    <SelectTrigger className="h-12 w-full bg-gray-50 border-gray-200">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="15">15</SelectItem>
                      <SelectItem value="20">20</SelectItem>
                      <SelectItem value="25">25</SelectItem>
                      <SelectItem value="30">30</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                    <span className="w-2 h-2 bg-gray-800 rounded-sm"></span>
                    Interest Rate (%)
                  </Label>
                  <Select value={interestRate} onValueChange={setInterestRate}>
                    <SelectTrigger className="h-12 w-full bg-gray-50 border-gray-200">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3.0">3.0</SelectItem>
                      <SelectItem value="3.5">3.5</SelectItem>
                      <SelectItem value="4.0">4.0</SelectItem>
                      <SelectItem value="4.5">4.5</SelectItem>
                      <SelectItem value="5.0">5.0</SelectItem>
                      <SelectItem value="5.5">5.5</SelectItem>
                      <SelectItem value="6.0">6.0</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                    <span className="w-2 h-2 bg-gray-800 rounded-sm"></span>
                    Loan Term (Years)
                  </Label>
                  <Select value={loanTerm} onValueChange={setLoanTerm}>
                    <SelectTrigger className="h-12 w-full bg-gray-50 border-gray-200">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15</SelectItem>
                      <SelectItem value="20">20</SelectItem>
                      <SelectItem value="25">25</SelectItem>
                      <SelectItem value="30">30</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                    <span className="w-2 h-2 bg-gray-800 rounded-sm"></span>
                    Monthly Rental Income
                  </Label>
                  <Select value={monthlyRentalIncome} onValueChange={setMonthlyRentalIncome}>
                    <SelectTrigger className="h-12 w-full bg-gray-50 border-gray-200">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2000">2,000</SelectItem>
                      <SelectItem value="2500">2,500</SelectItem>
                      <SelectItem value="3000">3,000</SelectItem>
                      <SelectItem value="3500">3,500</SelectItem>
                      <SelectItem value="4000">4,000</SelectItem>
                      <SelectItem value="4500">4,500</SelectItem>
                      <SelectItem value="5000">5,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                    <span className="w-2 h-2 bg-gray-800 rounded-sm"></span>
                    Monthly Expenses
                  </Label>
                  <Select value={monthlyExpenses} onValueChange={setMonthlyExpenses}>
                    <SelectTrigger className="h-12 w-full bg-gray-50 border-gray-200">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1500">1,500</SelectItem>
                      <SelectItem value="2000">2,000</SelectItem>
                      <SelectItem value="2500">2,500</SelectItem>
                      <SelectItem value="3000">3,000</SelectItem>
                      <SelectItem value="3500">3,500</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  onClick={calculateInvestmentReturns}
                  className="w-full h-12 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-lg"
                >
                  Calculate Investment Returns
                </Button>
              </div>

              {/* Right Panel - Results */}
              <div className="bg-gray-50 p-6 lg:border-l border-gray-200">
                <div className="text-center mb-6">
                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      <Building2 className="h-16 w-16 text-blue-600" />
                      <div className="absolute -top-1 -right-1 w-4 h-8 bg-blue-500 rounded-sm"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Investment Analysis</h3>
                  <p className="text-gray-600 text-sm">
                    Enter your property details to see comprehensive ROI calculations
                  </p>
                </div>

                {results && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="text-sm text-gray-600 mb-1">Monthly Mortgage</div>
                        <div className="text-lg font-semibold text-gray-800">
                          {formatCurrency(results.monthlyMortgage)}
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="text-sm text-gray-600 mb-1">Monthly Cash Flow</div>
                        <div
                          className={`text-lg font-semibold ${results.monthlyCashFlow >= 0 ? "text-green-600" : "text-red-600"}`}
                        >
                          {formatCurrency(results.monthlyCashFlow)}
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="text-sm text-gray-600 mb-1">Annual Cash Flow</div>
                      <div
                        className={`text-xl font-bold ${results.annualCashFlow >= 0 ? "text-green-600" : "text-red-600"}`}
                      >
                        {formatCurrency(results.annualCashFlow)}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="text-sm text-gray-600 mb-1">Cash-on-Cash Return</div>
                        <div
                          className={`text-lg font-semibold ${results.cashOnCashReturn >= 0 ? "text-green-600" : "text-red-600"}`}
                        >
                          {formatPercentage(results.cashOnCashReturn)}
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="text-sm text-gray-600 mb-1">Cap Rate</div>
                        <div className="text-lg font-semibold text-blue-600">{formatPercentage(results.capRate)}</div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <div className="text-sm text-blue-700 mb-1">Total Cash Invested</div>
                      <div className="text-xl font-bold text-blue-800">{formatCurrency(results.totalCashInvested)}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
