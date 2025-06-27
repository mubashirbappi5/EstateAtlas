"use client"

import { useState } from "react"
import { User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function ProfileSettings() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Smith",
    email: "john.smith@example.com",
    phoneNumber: "+1 (555) 123-4567",
  })

  const [originalData] = useState(formData)
  const [isSaving, setIsSaving] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSaveChanges = async () => {
    setIsSaving(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSaving(false)
    alert("Changes saved successfully!")
  }

  const handleCancel = () => {
    setFormData(originalData)
  }

  const hasChanges = JSON.stringify(formData) !== JSON.stringify(originalData)

  return (
    <div className="min-h-screen bg-gray-50 p-4 flex items-center justify-center">
      <Card className="w-full max-w-2xl bg-white shadow-lg">
        <CardHeader className="pb-4">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold text-gray-900">Account Settings</h1>
            <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"></div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-gray-700">
              <User className="h-5 w-5" />
              <span className="font-medium">Profile Information</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phoneNumber" className="text-sm font-medium text-gray-700">
                Phone Number
              </Label>
              <Input
                id="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              onClick={handleSaveChanges}
              disabled={!hasChanges || isSaving}
              className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-2.5 h-auto font-medium"
            >
              {isSaving ? "Saving..." : "Save Changes"}
            </Button>
            <Button
              onClick={handleCancel}
              variant="outline"
              disabled={!hasChanges}
              className="bg-sky-500 hover:bg-sky-600 text-white border-sky-500 hover:border-sky-600 px-6 py-2.5 h-auto font-medium"
            >
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}