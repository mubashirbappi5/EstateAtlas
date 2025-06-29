"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Mail, HelpCircle, Heart, Plus, Minus } from "lucide-react"

export default function Component() {
  const [formData, setFormData] = useState({
    subject: "",
    priority: "",
    message: "",
  })

  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
    alert("Support request submitted successfully!")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index)
  }

  const faqs = [
    {
      question: "How often is the data updated?",
      answer:
        "Our data is updated in real-time and synchronized every 15 minutes to ensure you have the most current information available.",
    },
    {
      question: "How do I upgrade my subscription?",
      answer:
        "You can upgrade your subscription by going to your account settings and selecting the 'Billing' tab. From there, you can choose a new plan that fits your needs.",
    },
    {
      question: "Can I export data and reports?",
      answer:
        "Yes, you can export data in various formats including CSV, PDF, and Excel. Premium users also have access to automated report scheduling.",
    },
    {
      question: "Which countries and cities are covered?",
      answer:
        "We currently cover over 195 countries and 10,000+ cities worldwide. Our coverage is constantly expanding based on user demand and data availability.",
    },
  ]

  return (
    <div className="md:max-w-5xl mx-auto md:p-6 space-y-6 bg-gray-50 min-h-screen">
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold text-gray-900">Help & Support</h1>

        {/* Contact Support Section */}
        <Card className="border-t-4 border-t-blue-400">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg font-medium text-gray-700">
              <Mail className="w-5 h-5" />
              Contact Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="How can we help you today"
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-2">
                  Priority
                </label>
                <Select onValueChange={(value) => handleInputChange("priority", value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select priority">
                      {formData.priority && (
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                          {formData.priority}
                        </div>
                      )}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Low - General Question">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        Low - General Question
                      </div>
                    </SelectItem>
                    <SelectItem value="Medium - Account Issue">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        Medium - Account Issue
                      </div>
                    </SelectItem>
                    <SelectItem value="High - Technical Problem">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                        High - Technical Problem
                      </div>
                    </SelectItem>
                    <SelectItem value="Urgent - Service Down">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-600"></div>
                        Urgent - Service Down
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Please describe your issue or question in detail..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="w-full min-h-[120px] resize-none"
                />
              </div>

              <Button
                type="submit"
                className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3"
                disabled={!formData.subject || !formData.priority || !formData.message}
              >
                Get started
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card className="border-t-4 border-t-blue-400">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg font-medium text-gray-700">
              <HelpCircle className="w-5 h-5" />
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map((faq, index) => (
              <Collapsible key={index} open={expandedFAQ === index} onOpenChange={() => toggleFAQ(index)}>
                <CollapsibleTrigger className="flex items-center justify-between w-full p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                  <span className="text-sm font-medium text-gray-700">{faq.question}</span>
                  {expandedFAQ === index ? (
                    <Minus className="w-4 h-4 text-gray-500" />
                  ) : (
                    <Plus className="w-4 h-4 text-gray-500" />
                  )}
                </CollapsibleTrigger>
                <CollapsibleContent className="px-3 pb-3">
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </CardContent>
        </Card>

        {/* Need More Help Section */}
        <Card className="border-t-4 border-t-blue-400">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg font-medium text-gray-700">
              <Heart className="w-5 h-5" />
              Need More Help?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Our support team is available 24/7 to assist you with any questions or technical issues.
            </p>
            <div className="flex gap-3">
              <Button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2">Get started</Button>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2">Get started</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
