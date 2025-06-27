"use client"

import { useState } from "react"
import { AlertTriangle } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function Notification() {
  const [preferences, setPreferences] = useState({
    emailAlerts: false,
    weeklyReports: true,
    smsUpdates: false,
  })

  const handlePreferenceChange = (key: keyof typeof preferences) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <div className=" w-full max-w-5xl px-10 rounded-lg shadow-lg border-0 border-t-4 border-blue-400 mx-auto p-6 bg-white">
      <div className=" rounded-lg p-4 border border-blue-200">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="w-5 h-5 text-orange-500" />
          <h2 className="text-lg font-semibold text-gray-900">Notification Preferences</h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Checkbox
              id="email-alerts"
              checked={preferences.emailAlerts}
              onCheckedChange={() => handlePreferenceChange("emailAlerts")}
              className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
            />
            <Label htmlFor="email-alerts" className="text-sm text-gray-700 cursor-pointer">
              Email notifications for market alerts
            </Label>
          </div>

          <div className="flex items-center space-x-3">
            <Checkbox
              id="weekly-reports"
              checked={preferences.weeklyReports}
              onCheckedChange={() => handlePreferenceChange("weeklyReports")}
              className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
            />
            <Label htmlFor="weekly-reports" className="text-sm text-gray-700 cursor-pointer">
              Weekly market summary reports
            </Label>
          </div>

          <div className="flex items-center space-x-3">
            <Checkbox
              id="sms-updates"
              checked={preferences.smsUpdates}
              onCheckedChange={() => handlePreferenceChange("smsUpdates")}
              className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
            />
            <Label htmlFor="sms-updates" className="text-sm text-gray-700 cursor-pointer">
              SMS notifications for urgent updates
            </Label>
          </div>
        </div>
      </div>
    </div>
  )
}