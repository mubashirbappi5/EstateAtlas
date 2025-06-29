"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Lock, Eye, EyeOff } from "lucide-react"

export default function SecurityForm() {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  })

  const [errors, setErrors] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const validateForm = () => {
    const newErrors: string[] = []

    if (!formData.currentPassword) {
      newErrors.push("Current password is required")
    }

    if (!formData.newPassword) {
      newErrors.push("New password is required")
    } else if (formData.newPassword.length < 8) {
      newErrors.push("New password must be at least 8 characters long")
    }

    if (!formData.confirmPassword) {
      newErrors.push("Please confirm your new password")
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.push("New passwords do not match")
    }

    if (formData.currentPassword === formData.newPassword) {
      newErrors.push("New password must be different from current password")
    }

    setErrors(newErrors)
    return newErrors.length === 0
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors.length > 0) setErrors([])
    if (success) setSuccess(false)
  }

  const handleSaveChanges = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)

    try {
      const token = localStorage.getItem("token")
      if (!token) {
        setErrors(["User token not found. Please log in again."])
        return
      }

      const response = await fetch("http://204.197.173.249:8014/api/user/change-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        const message = data?.message || "Failed to update password. Please try again."
        setErrors([message])
      } else {
        setSuccess(true)
        setFormData({ currentPassword: "", newPassword: "", confirmPassword: "" })
      }
    } catch (error) {
      console.error("Error:", error)
      setErrors(["An unexpected error occurred. Please try again."])
    } finally {
      setIsLoading(false)
    }
  }

  const handleCancel = () => {
    setFormData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    })
    setErrors([])
    setSuccess(false)
  }

  const togglePasswordVisibility = (field: "current" | "new" | "confirm") => {
    setShowPasswords((prev) => ({
      ...prev,
      [field]: !prev[field],
    }))
  }

  return (
    <div className="bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-5xl px-10 bg-white shadow-lg border-0 border-t-4 border-blue-400">
        <CardHeader className="text-center">
          <CardTitle className="flex gap-2 text-lg font-medium text-gray-700">
            <Lock className="w-5 h-5" />
            Login & Security
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {errors.length > 0 && (
            <Alert variant="destructive">
              <AlertDescription>
                <ul className="list-disc list-inside space-y-1">
                  {errors.map((error, index) => (
                    <li key={index} className="text-sm">{error}</li>
                  ))}
                </ul>
              </AlertDescription>
            </Alert>
          )}

          {success && (
            <Alert className="border-green-200 bg-green-50">
              <AlertDescription className="text-green-800">
                Password updated successfully!
              </AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSaveChanges} className="space-y-4">
            {/* Current Password */}
            <div className="space-y-2">
              <Label htmlFor="currentPassword" className="text-sm font-medium text-gray-700">
                Current Password
              </Label>
              <div className="relative">
                <Input
                  id="currentPassword"
                  type={showPasswords.current ? "text" : "password"}
                  placeholder="Enter current password"
                  value={formData.currentPassword}
                  onChange={(e) => handleInputChange("currentPassword", e.target.value)}
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility("current")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPasswords.current ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* New Password */}
            <div className="space-y-2">
              <Label htmlFor="newPassword" className="text-sm font-medium text-gray-700">
                New Password
              </Label>
              <div className="relative">
                <Input
                  id="newPassword"
                  type={showPasswords.new ? "text" : "password"}
                  placeholder="Enter new password"
                  value={formData.newPassword}
                  onChange={(e) => handleInputChange("newPassword", e.target.value)}
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility("new")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPasswords.new ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                Confirm New Password
              </Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showPasswords.confirm ? "text" : "password"}
                  placeholder="Enter new password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility("confirm")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPasswords.confirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex max-w-md gap-3 pt-4">
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-2.5 h-auto font-medium"
              >
                {isLoading ? "Saving..." : "Save Changes"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleCancel}
                disabled={isLoading}
                className="bg-sky-500 hover:bg-sky-600 text-white border-sky-500 hover:border-sky-600 px-6 py-2.5 h-auto font-medium"
              >
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
