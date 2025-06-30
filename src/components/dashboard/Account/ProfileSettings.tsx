"use client"

import { useState, useEffect } from "react"
import { User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { useUser } from "@/app/context/UserContext"
import Cookies from 'js-cookie';
import toast from "react-hot-toast"

interface UserData {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
}

export default function ProfileSettings() {
  const { user, setUser } = useUser()
  const [formData, setFormData] = useState<Omit<UserData, 'id'>>({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
  })
  const [originalData, setOriginalData] = useState(formData)
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    if (user) {
      const userData = {
        first_name: user.first_name || "",
        last_name: user.last_name || "",
        email: user.email || "",
        phone: user.phone || "",
      }
      setFormData(userData)
      setOriginalData(userData)
    }
  }, [user])

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSaveChanges = async () => {
    if (!user) return;
    
    setIsSaving(true)
    try {
      const token = Cookies.get('token');
      
      const res = await fetch(`http://204.197.173.249:8014/api/user/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const errorData = await res.json()
        throw new Error(errorData.message || 'Failed to save changes')
      }

      const successData = await res.json()
      const updatedData: UserData = {
        ...user,
        ...successData.data,
      }

      setUser(updatedData)
      setOriginalData({
        first_name: updatedData.first_name,
        last_name: updatedData.last_name,
        email: updatedData.email,
        phone: updatedData.phone,
      })
      
      Cookies.set('user', JSON.stringify(updatedData), { expires: 7, path: '/' });
    } catch (error) {
      console.error("Error:", error)
     toast.error(error instanceof Error ? error.message : "Something went wrong")
    } finally {
      setIsSaving(false)
    }
  }

  const handleCancel = () => {
    setFormData(originalData)
  }

  const hasChanges = JSON.stringify(formData) !== JSON.stringify(originalData)

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
                  value={formData.first_name}
                  onChange={(e) => handleInputChange("first_name", e.target.value)}
                  className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  value={formData.last_name}
                  onChange={(e) => handleInputChange("last_name", e.target.value)}
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
              <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
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