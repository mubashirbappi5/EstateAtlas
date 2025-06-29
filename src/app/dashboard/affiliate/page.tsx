'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Clipboard } from 'lucide-react'


export default function AffiliatePage() {
  const [affiliateCode, setAffiliateCode] = useState<string | null>(null)
  const [stripeLink, setStripeLink] = useState<string | null>(null)
  const [loadingAffiliate, setLoadingAffiliate] = useState(false)
  const [loadingStripe, setLoadingStripe] = useState(false)

  const token = localStorage.getItem('token') // Replace with actual auth token source

  const handleGetAffiliateLink = async () => {
    setLoadingAffiliate(true)
    try {
      const res = await fetch('http://204.197.173.249:8014/api/affiliate/link', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const data = await res.json()
      console.log('Affiliate Link Response:', data)
      if (res.ok && data) {
        setAffiliateCode(data.data.affiliate_code)
      
        
          alert('Affiliate code fetched successfully!')
      } else {
        alert('Failed to fetch affiliate code')
      }
    } catch (err) {
      console.error(err)
      alert('Error fetching affiliate code')
    } finally {
      setLoadingAffiliate(false)
    }
  }

  const handleStripeConnect = async () => {
    setLoadingStripe(true)
    try {
      const res = await fetch('http://204.197.173.249:8014/api/stripe/connect/create', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const data = await res.json()
      if (res.ok && data.url) {
        setStripeLink(data.url)
        window.location.href = data.url
      } else {
        alert('Failed to connect Stripe')
      }
    } catch (err) {
      console.error(err)
      alert('Error connecting to Stripe')
    } finally {
      setLoadingStripe(false)
    }
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Affiliate Dashboard</h1>

    <Card className="mb-6 shadow-xl border-0 border-t-4 py-10 border-sky-500">
  <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
    <div className="space-y-4">
      <p className="text-lg font-semibold text-black">Get Your Affiliate Code</p>
      <Button onClick={handleGetAffiliateLink} disabled={loadingAffiliate}>
        {loadingAffiliate ? 'Loading...' : 'Generate Affiliate Code'}
      </Button>
    </div>

    {affiliateCode && (
      <div className="space-y-4">
        <p className="text-lg font-semibold text-black">Your Code:</p>
        <div className="flex items-center gap-2">
          <Badge className="text-md">{affiliateCode}</Badge>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              navigator.clipboard.writeText(affiliateCode)
              alert('Copied to clipboard!')
            }}
          >
             <Clipboard />
          </Button>
        </div>

        {/* Static referral count (optional) */}
        {/* <p className="text-sm text-green-600">
          Total referrals: <strong>5</strong>
        </p> */}
      </div>
    )}
  </CardContent>
</Card>


      <Card className="shadow-xl border-0 border-t-4 py-10 border-sky-500">
        <CardHeader>
          <CardTitle>Connect Stripe Account</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={handleStripeConnect} disabled={loadingStripe}>
            {loadingStripe ? 'Redirecting...' : 'Connect with Stripe'}
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
