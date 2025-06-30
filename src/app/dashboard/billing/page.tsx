"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, CreditCard } from "lucide-react";
import Cookies from 'js-cookie';

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

interface BillingHistoryItem {
  id: string;
  country: string;
  flag: string;
  plan: string;
  growth: string;
  amount: string;
  status: "Paid" | "Pending" | "Failed";
}

interface BillingDetails {
  planName: string;
  price: string;
  currency: string;
  nextBillingDate: string;
  status: "Active" | "Expired" | "Cancelled";
  paymentMethodLast4: string;
  paymentMethodExpiry: string;
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
  ]);

  // Update options state
  const [showUpdateOptions, setShowUpdateOptions] = useState(false);
  const [selectedPriceId, setSelectedPriceId] = useState("basic_monthly");
  const [updating, setUpdating] = useState(false);



  // update card

  const stripe = useStripe();
const elements = useElements();
const [cardComplete, setCardComplete] = useState(false);
const [updatingPayment, setUpdatingPayment] = useState(false);


  //billing details state

  const [billingDetails, setBillingDetails] = useState<BillingDetails | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBilling() {
      try {
       const token = Cookies.get('token');

        const res = await fetch(
          "http://204.197.173.249:8014/api/subscription",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!res.ok) {
          throw new Error(`Failed to fetch billing details: ${res.status}`);
        }

        const data = await res.json();
        
        
        setBillingDetails({
          planName: data.tier_name || "N/A Tier",
          price: data.tier_name === 'Premium (Yearly)' 
    ? "44" 
    : data.tier_name === 'Premium (Monthly)' 
      ? "49" 
      : data.tier_name === 'Basic (Yearly)'
        ? "24" 
        : data.tier_name === 'Basic (Monthly)'
        ?'29':'', // D,
          currency: "$", // Adjust this as needed
          nextBillingDate: data.subscription?.current_period_start
            ? new Date(
                data.subscription.current_period_start
              ).toLocaleDateString()
            : "N/A",
          status:
            data.subscription?.status === "active" ? "Active" : "Cancelled",
          paymentMethodLast4: "4242", // Not available in your response, use placeholder
          paymentMethodExpiry: "12/27", // Not available in your response, use placeholder
        });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchBilling();
  }, []);

 

// Removed duplicate handleUpdatePayment declaration

  
  //handle update subscription
  const handleupdate = () => {

    setShowUpdateOptions(true);
  };

  const handleConfirmUpdate = async () => {
    const token = Cookies.get('token');
    if (!token) return alert("Token missing!");

    try {
      setUpdating(true);
      const res = await fetch(
        "http://204.197.173.249:8014/api/subscription/update",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ price_id: selectedPriceId }),
        }
      );

      const data = await res.json();
      if (!res.ok) {
        alert("Failed to update subscription: " + data?.message);
      } else {
        alert("Subscription updated to " + selectedPriceId);
        setShowUpdateOptions(false);
      }
    } catch (err) {
      console.error("Error updating subscription:", err);
      alert("An error occurred.");
    } finally {
      setUpdating(false);
    }
  };

  // cancel
  const handleCancel = async () => {
   const token = Cookies.get('token');
    if (!token) return alert("Token missing!");

    const confirm = window.confirm(
      "Are you sure you want to cancel your subscription?"
    );
    if (!confirm) return;

    try {
      const response = await fetch(
        "http://204.197.173.249:8014/api/subscription/cancel",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        console.error("Cancel failed:", data);
        alert("Cancellation failed: " + (data.message || "Unknown error"));
      } else {
        alert("✅ Subscription cancelled successfully!");

        window.location.reload();
        setBillingDetails(null);
      }
    } catch (error) {
      console.error("Error cancelling subscription:", error);
      alert("An error occurred while cancelling subscription.");
    }
  };




// card update



const handleUpdatePayment = async () => {
  if (!stripe || !elements) {
    alert("Payment system is not ready. Please try again later.");
    return;
  }

  setUpdatingPayment(true);

  try {
    const cardElement = elements.getElement(CardElement);
    if (!cardElement) throw new Error("Card element not found");

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) throw error;

    const token = Cookies.get('token');
    console.log(paymentMethod)
    const response = await fetch(
      "http://204.197.173.249:8014/api/stripe/payment-method/update",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          payment_method: paymentMethod.id
        }),
      }
    );

    if (!response.ok) throw new Error("Failed to update payment method");

    alert("Payment method updated successfully!");
    window.location.reload();
  } catch (error) {
    console.error("Payment update error:", error);
    alert(error instanceof Error ? error.message : "Failed to update payment method");
  } finally {
    setUpdatingPayment(false);
  }
};






if (!loading){
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Billing & Subscription Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-900">
            Billing & Subscription
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {billingDetails?.planName}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-gray-900">
                    {billingDetails?.price}
                  </span>
                  <span className="text-sm text-gray-600">Per month</span>
                </div>
              </div>
              <Badge className="bg-blue-500 hover:bg-blue-600 text-white">
                {billingDetails?.status}
              </Badge>
            </div>

            <p className="text-sm text-gray-600 mb-6">
              Next billing date:{" "}
              <span className="font-medium">
                {billingDetails?.nextBillingDate}
              </span>
            </p>

            <div className="flex gap-3">
              <Button
                onClick={() => handleupdate()}
                className="bg-[#3ba1df] hover:bg-[#3ba1df] py-6 px-8 text-white cursor-pointer"
              >
                Update
              </Button>
              <Button
                onClick={handleCancel}
                variant="outline"
                className="bg-gray-800 hover:bg-gray-900 py-6 px-8 text-white cursor-pointer"
              >
                Cancel
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {showUpdateOptions && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Update Your Subscription
            </h2>

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select New Plan:
            </label>
            <select
              value={selectedPriceId}
              onChange={(e) => setSelectedPriceId(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
            >
              <option value="basic_monthly">Basic Monthly</option>
              <option value="premium_monthly">Premium Monthly</option>
            </select>

            <div className="flex justify-end gap-3">
              <Button
                onClick={handleConfirmUpdate}
                className="bg-blue-600 hover:bg-blue-700 text-white"
                disabled={updating}
              >
                {updating ? "Updating..." : "Confirm Update"}
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowUpdateOptions(false)}
                className="border-gray-300"
              >
                Cancel
              </Button>
            </div>

            {/* Close Button Top Right */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setShowUpdateOptions(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}

     
      <Card>
  <CardContent className="p-6">
    <div className="flex items-center gap-3 mb-4">
      <CreditCard className="h-5 w-5 text-gray-600" />
      <h3 className="font-semibold text-gray-900">Payment Method</h3>
    </div>

    <div className="space-y-4">
     
      <div className="p-4 bg-gray-100 rounded-lg">
        <label className="text-sm font-medium text-gray-700 mb-2 block">
          Update Card Information
        </label>
        <CardElement 
          onChange={(e) => setCardComplete(e.complete)}
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
          className="p-3 border rounded bg-white"
        />
      </div>

      <Button
        onClick={handleUpdatePayment}
        disabled={!cardComplete || updatingPayment}
        className="w-full bg-gray-800 hover:bg-gray-900 text-white"
      >
        {updatingPayment ? "Updating..." : "Update Payment Method"}
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
                  <th className="text-left py-3 px-2 font-medium text-gray-700 text-sm">
                    DATE
                  </th>
                  <th className="text-left py-3 px-2 font-medium text-gray-700 text-sm">
                    PLAN
                  </th>
                  <th className="text-left py-3 px-2 font-medium text-gray-700 text-sm">
                    AMOUNT
                  </th>
                  <th className="text-left py-3 px-2 font-medium text-gray-700 text-sm">
                    STATUS
                  </th>
                  <th className="text-left py-3 px-2 font-medium text-gray-700 text-sm">
                    INVOICE
                  </th>
                </tr>
              </thead>
              <tbody>
                {billingHistory.map((item) => (
                  <tr key={item.id} className="border-b border-gray-100">
                    <td className="py-4 px-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{item.flag}</span>
                        <span className="text-sm text-gray-900">
                          {item.country}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-2">
                      <span className="text-sm font-medium text-green-600">
                        {item.growth}
                      </span>
                    </td>
                    <td className="py-4 px-2">
                      <span className="text-sm font-medium text-gray-900">
                        {item.amount}
                      </span>
                    </td>
                    <td className="py-4 px-2">
                      <Badge
                        variant="secondary"
                        className="bg-green-100 text-green-800 hover:bg-green-100"
                      >
                        {item.status}
                      </Badge>
                    </td>
                    <td className="py-4 px-2">
                      <Button
                        
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
  );
}
}
