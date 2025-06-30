"use client"

import { useState, useEffect } from "react"
import { User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { useUser } from "@/app/context/UserContext"
import Cookies from 'js-cookie';

export default function ProfileSettings() {
  const {user} = useUser()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  })

  const [originalData, setOriginalData] = useState(formData)
  
  // Update form data when user data loads or changes
  useEffect(() => {
    if (user) {
      const userData = {
        firstName: user.first_name || "",
        lastName: user.last_name || "",
        email: user.email || "",
        phoneNumber: user.phone || "",
      }
      setFormData(userData)
      setOriginalData(userData)
      console.log('User data loaded/updated:', userData)
    }
  }, [user]) // Remove isUserDataLoaded from dependencies and logic
  
  const [isSaving, setIsSaving] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSaveChanges = async () => {
    setIsSaving(true)

    try {
      const token = Cookies.get('token');
      
      // Transform form data to match API expectations
      const apiData = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phoneNumber
      }

      console.log('Sending data:', apiData);
      
      const res = await fetch("http://204.197.173.249:8014/api/user/update", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(apiData),
      })

      console.log('Response status:', res.status);

      if (!res.ok) {
        const errorData = await res.json()
        console.error("Error response:", errorData)
        alert(`Failed to save changes: ${errorData.message || 'Please try again.'}`)
      } else {
        const successData = await res.json()
        console.log('Success response:', successData)
        alert("Changes saved successfully!")
        
        // Update both form data and original data to reflect the saved state
        const updatedData = {
          firstName: successData.data.first_name || "",
          lastName: successData.data.last_name || "",
          email: successData.data.email || "",
          phoneNumber: successData.data.phone || ""
        }
        setFormData(updatedData)
        setOriginalData(updatedData)
        
        console.log('Updated form state:', updatedData)
      }
    } catch (error) {
      console.error("Network or server error:", error)
      alert("Something went wrong while saving changes.")
    }

    setIsSaving(false)
  }

  const handleCancel = () => {
    setFormData(originalData)
  }

  const hasChanges = JSON.stringify(formData) !== JSON.stringify(originalData)

  // Show loading state while user data is being fetched
  if (!user) {
    return (
      <div className="bg-gray-50 md:p-4 flex items-center justify-center">
        <Card className="w-full md:max-w-5xl md:px-10 bg-white shadow-lg border-0 border-t-4 border-blue-400">
          <CardContent className="flex items-center justify-center py-8">
            <div className="text-gray-500">Loading user data...</div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 md:p-4 flex items-center justify-center">
      <Card className="w-full md:max-w-5xl md:px-10 bg-white shadow-lg border-0 border-t-4 border-blue-400">
        <CardHeader className="pb-4">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold text-gray-900">Account Settings</h1>
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
              className="bg-sky-500 hover:bg-sky-500 text-white border-sky-500 hover:border-sky-500 px-6 py-2.5 h-auto font-medium"
            >
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}